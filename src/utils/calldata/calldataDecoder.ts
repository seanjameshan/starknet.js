import {
  AbiEntry,
  AbiEnums,
  AbiStructs,
  BigNumberish,
  ByteArray,
  CairoEnum,
  ParsedStruct,
  StructAbi,
} from '../../types';
import { CairoUint256 } from '../cairoDataTypes/uint256';
import {
  isTypeFelt,
  getArrayType,
  isTypeArray,
  isTypeBytes31,
  isTypeEnum,
  isTypeOption,
  isTypeResult,
  isTypeStruct,
  isTypeTuple,
} from './cairo';
import {
  CairoCustomEnum,
  CairoOption,
  CairoOptionVariant,
  CairoResult,
  CairoResultVariant,
} from './enum';
import extractTupleMemberTypes from './tuple';
import { decodeShortString } from '../shortString';
import assert from '../assert';

/**
 * Decode a base type from calldata.
 * @param type The type string.
 * @param calldata The calldata value.
 * @returns The decoded value.
 * @throws An error if the type is not recognized.
 */
function decodeBaseTypes(type: string, calldata: string | string[]): BigNumberish | CairoUint256 {
  switch (true) {
    case CairoUint256.isAbiType(type):
      assert(
        Array.isArray(calldata) && calldata.length === 2,
        'Expected calldata for CairoUint256 as an array of two strings.'
      );
      return CairoUint256.fromCalldata([calldata[0], calldata[1]]);

    case isTypeBytes31(type):
      return decodeShortString(calldata as string);

    case isTypeFelt(type):
      assert(typeof calldata === 'string', 'Expected string calldata for base type decoding.');
      return BigInt(calldata);

    default:
      throw new Error(`Unrecognized base type ${type} for calldata decoding.`);
  }
}

/**
 * Decode a tuple from calldata.
 * @param calldata The calldata array.
 * @param typeStr The type string representing the tuple structure.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns An array of decoded tuple elements.
 */
function decodeTuple(
  calldata: string[],
  typeStr: string,
  structs: AbiStructs,
  enums: AbiEnums
): any[] {
  // Parse typeStr to understand the tuple structure, e.g., "('felt', 'struct', 'enum')"
  const types: string[] = extractTupleMemberTypes(typeStr).map((type: string | object) =>
    String(type)
  );

  // Assuming we now have an array of types, ['felt', 'YourStructName', 'YourEnumName'], etc.
  const decodedElements: any = [];
  let calldataIndex = 0;

  types.forEach((type) => {
    switch (true) {
      case isTypeStruct(type, structs): {
        const structRes = decodeStruct(
          calldata.slice(calldataIndex, calldataIndex + structs[type].size),
          type,
          structs,
          enums
        );
        decodedElements.push(structRes);
        calldataIndex += structs[type].size; // Assuming size is defined for structs.
        break;
      }
      case isTypeEnum(type, enums): {
        // Determine the expected calldata consumption for the current enum. (e.g., 1 or 2 elements for CairoOption, 2 elements for CairoResult, etc.)
        const expectedCalldataLength = getExpectedCalldataLengthForEnum(
          calldata[calldataIndex],
          type,
          enums
        );
        const enumSlice = calldata.slice(calldataIndex, calldataIndex + expectedCalldataLength);
        const enumRes = decodeEnum(enumSlice, type, enums);
        decodedElements.push(enumRes);
        calldataIndex += expectedCalldataLength; // Move past the consumed calldata.
        break;
      }
      case isTypeArray(type): {
        const arrayType = getArrayType(type);
        const arrayRes = decodeCalldataValue([calldata[calldataIndex]], arrayType, structs, enums);
        decodedElements.push(arrayRes);
        calldataIndex += 1;
        break;
      }
      default: {
        const result = decodeBaseTypes(type, calldata[calldataIndex]);
        decodedElements.push(result);
        calldataIndex += 1;
      }
    }
  });

  return decodedElements;
}

/**
 * Decode a byte array from calldata.
 * @param calldata The calldata array.
 * @returns The decoded byte array.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function decodeByteArray(calldata: string[]): ByteArray {
  // Extract the length of the data array from the first element.
  const dataLength = parseInt(calldata[0], 10);

  // Extract the data array elements based on the extracted length.
  const data = calldata.slice(1, 1 + dataLength).map((str) => parseInt(str, 10));

  // The pending_word is the second-to-last element in the original array.
  const pending_word = parseInt(calldata[1 + dataLength], 10);

  // The pending_word_len is the last element in the original array.
  const pending_word_len = parseInt(calldata[2 + dataLength], 10);

  // Construct and return the ByteArray object.
  return {
    data,
    pending_word,
    pending_word_len,
  };
}

/**
 * Decode calldata for a given type.
 * @param calldata The calldata array.
 * @param type The type string.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns The decoded value.
 * @throws An error if the type is not recognized.
 */
function decodeCalldataValue(
  calldata: string | string[],
  type: string,
  structs: AbiStructs,
  enums: AbiEnums
): any {
  // Felt type decoding
  if (isTypeFelt(type)) {
    return decodeBaseTypes(type, Array.isArray(calldata) ? calldata[0] : calldata);
  }

  // Bytes31 decoding
  if (isTypeBytes31(type)) {
    return decodeShortString(calldata as string);
  }

  // CairoUint256
  if (CairoUint256.isAbiType(type)) {
    return decodeBaseTypes(type, Array.isArray(calldata) ? calldata[0] : calldata);
  }

  // Struct decoding
  if (isTypeStruct(type, structs)) {
    return decodeStruct(Array.isArray(calldata) ? calldata : [calldata], type, structs, enums);
  }

  // Enum decoding
  if (isTypeEnum(type, enums)) {
    return decodeEnum(Array.isArray(calldata) ? calldata : [calldata], type, enums);
  }

  // Array decoding
  if (isTypeArray(type)) {
    return decodeArray(Array.isArray(calldata) ? calldata : [calldata], type, structs, enums);
  }

  // Tuple decoding
  if (isTypeTuple(type)) {
    return decodeTuple(Array.isArray(calldata) ? calldata : [calldata], type, structs, enums);
  }

  // CairoOption decoding
  if (isTypeOption(type)) {
    const match = type.match(/Option<(.*)>/);
    assert(match !== null, `Type "${type}" is not a valid Option type.`);

    const innerType = match![1];
    return decodeCairoOption(
      Array.isArray(calldata) ? calldata : [calldata],
      innerType,
      structs,
      enums
    );
  }

  // CairoResult decoding
  if (isTypeResult(type)) {
    const matches = type.match(/Result<(.+),\s*(.+)>/);
    assert(matches !== null && matches.length > 2, `Type "${type}" is not a valid Option type.`);

    const okType = matches[1];
    const errType = matches[2];

    return decodeCairoResult(
      Array.isArray(calldata) ? calldata : [calldata],
      okType,
      errType,
      structs,
      enums
    );
  }

  // Fallback for unrecognized types
  throw new Error(`Unrecognized type ${type} for calldata decoding.`);
}

/**
 * Decode an array from calldata.
 * @param calldata The calldata array.
 * @param arrayType The type of the array.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns The decoded array.
 */
function decodeArray(
  calldata: string[],
  arrayType: string,
  structs: AbiStructs,
  enums: AbiEnums
): any[] {
  const elementType = getArrayType(arrayType);
  const elements = [];

  for (let i = 0; i < calldata.length; i += 1) {
    elements.push(decodeCalldataValue([calldata[i]], elementType, structs, enums));
  }

  return elements;
}

/**
 * Decode a struct from calldata.
 * @param calldataSegment The calldata segment for the struct.
 * @param structName The name of the struct.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns The decoded struct.
 * @throws An error if the struct is not found.
 */
function decodeStruct(
  calldataSegment: string[],
  structName: string,
  structs: AbiStructs,
  enums: AbiEnums
): ParsedStruct {
  const structAbi: StructAbi = structs[structName];
  assert(structAbi !== null, `Struct with name ${structName} not found.`);

  let index = 0;
  const result: ParsedStruct = {};

  structAbi.members.forEach((field) => {
    const fieldType = field.type;
    const fieldCalldata = calldataSegment.slice(index, index + 1);
    result[field.name] = decodeCalldataValue(fieldCalldata[0], fieldType, structs, enums);
    index += 1;
  });

  return result;
}

/**
 * Decode an enum from calldata.
 * @param calldataValues The calldata values.
 * @param enumName The name of the enum.
 * @param enums The ABI enums.
 * @returns The decoded enum.
 * @throws An error if the enum is not found or the variant index is out of range.
 */
function decodeEnum(calldataValues: string[], enumName: string, enums: AbiEnums): CairoEnum {
  const enumDefinition = enums[enumName];
  assert(enumDefinition !== null, `Enum with name ${enumName} not found.`);

  const variantIndex = parseInt(calldataValues[0], 10);
  assert(
    variantIndex >= 0 && variantIndex < enumDefinition.variants.length,
    `Variant index ${variantIndex} out of range for enum ${enumName}.`
  );

  const variant = enumDefinition.variants[variantIndex];

  // Determine the enum type and decode accordingly
  switch (enumName) {
    case 'CairoOption':
      switch (variant.name) {
        case 'None': {
          return new CairoOption(CairoOptionVariant.None);
        }
        default: {
          // "Some"
          // const someValue = calldataValues[1]; // Placeholder logic.
          const someValue = decodeCalldataValue(calldataValues.slice(1), variant.type, {}, enums);
          return new CairoOption(CairoOptionVariant.Some, someValue);
        }
      }
    case 'CairoResult': {
      // const resultValue = calldataValues[1]; // Placeholder logic.
      const resultValue = decodeCalldataValue(calldataValues.slice(1), variant.type, {}, enums);

      switch (variant.name) {
        case 'Ok':
          return new CairoResult(CairoResultVariant.Ok, resultValue);
        default: // "Err"
          return new CairoResult(CairoResultVariant.Err, resultValue);
      }
    }
    default: {
      // Handling CairoCustomEnum or simple enum types without associated data.
      return new CairoCustomEnum({ activeVariant: variant.name, variant: variant.name });
    }
  }
}

/**
 * Decode a CairoOption from calldata.
 * @param calldata The calldata array.
 * @param innerType The type of the inner value.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns The decoded CairoOption.
 */
function decodeCairoOption(
  calldata: string[],
  innerType: string,
  structs: AbiStructs,
  enums: AbiEnums
): any {
  const optionIndicator = parseInt(calldata[0], 10);

  switch (optionIndicator) {
    case 0: {
      // None
      return CairoOptionVariant.None;
    }
    default: {
      // Assuming the value is directly after the indicator
      const valueCalldata = calldata.slice(1);
      return decodeCalldataValue(valueCalldata, innerType, structs, enums);
    }
  }
}

/**
 * Decode a CairoResult from calldata.
 * @param calldata
 * @param okType
 * @param errType
 * @param structs
 * @param enums
 * @returns
 */
function decodeCairoResult(
  calldata: string[],
  okType: string,
  errType: string,
  structs: AbiStructs,
  enums: AbiEnums
): any {
  const resultIndicator = parseInt(calldata[0], 10);

  switch (resultIndicator) {
    case 0: {
      // Code 0 indicates "Ok"
      const okValueCalldata = calldata.slice(1);
      return { ok: decodeCalldataValue(okValueCalldata, okType, structs, enums) };
    }
    default: {
      // Non-zero code indicates "Err"
      const errValueCalldata = calldata.slice(1);
      return { err: decodeCalldataValue(errValueCalldata, errType, structs, enums) };
    }
  }
}

/**
 * Get the expected calldata length for a given enum variant.
 * @param variantIndexCalldata The calldata for the variant index.
 * @param enumName The name of the enum.
 * @param enums The ABI enums.
 * @returns The expected calldata length.
 */
function getExpectedCalldataLengthForEnum(
  variantIndexCalldata: string,
  enumName: string,
  enums: AbiEnums
): number {
  const enumDefinition = enums[enumName];
  assert(enumDefinition, `Enum with name ${enumName} not found.`);

  const variantIndex = parseInt(variantIndexCalldata, 10);
  const variant = enumDefinition.variants[variantIndex];

  switch (enumName) {
    case 'CairoOption':
      return variant.name === 'None' ? 1 : 2; // "None" requires only the index, "Some" requires additional data.
    case 'CairoResult':
      return 2; // Both "Ok" and "Err" require additional data.
    default:
      return 1; // Assuming other enums don't have associated data by default.
  }
}

/**
 * Decode a calldata field.
 * @param calldata The calldata array.
 * @param input The ABI entry for the field.
 * @param structs The ABI structs.
 * @param enums The ABI enums.
 * @returns The decoded field value.
 */
export function decodeCalldataField(
  calldata: string[],
  input: AbiEntry,
  structs: AbiStructs,
  enums: AbiEnums
): any {
  const { type } = input;

  switch (true) {
    // Handling Array types
    case isTypeArray(type): {
      const elementType = getArrayType(type);
      return calldata.map((elementCalldata) =>
        decodeCalldataValue([elementCalldata], elementType, structs, enums)
      );
    }

    // Handling StarkNet addresses
    case type === 'core::starknet::eth_address::EthAddress': {
      // Directly returning the value, assuming it's already in the desired format
      return calldata[0];
    }

    // Handling Struct or Tuple types
    case isTypeStruct(type, structs): {
      return decodeStruct(calldata, type, structs, enums);
    }

    case isTypeTuple(type): {
      return decodeTuple(calldata, type, structs, enums);
    }

    // Handling CairoUint256 types
    case CairoUint256.isAbiType(type): {
      return CairoUint256.fromCalldata([calldata[0], calldata[1]]);
    }

    // Handling Enums
    case isTypeEnum(type, enums): {
      return decodeEnum(calldata, type, enums);
    }

    default: {
      return decodeBaseTypes(calldata[0], type);
    }
  }
}

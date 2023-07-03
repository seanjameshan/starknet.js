/* eslint-disable no-plusplus */
import {
  Abi,
  AbiStructs,
  Args,
  ArgsOrCalldata,
  Calldata,
  FunctionAbi,
  HexCalldata,
  RawArgs,
  RawArgsArray,
  Result,
  ValidateType,
} from '../../types';
import assert from '../assert';
import { isBigInt, toHex } from '../num';
import { getSelectorFromName } from '../selector';
import { isLongText, splitLongString } from '../shortString';
import { felt, isLen } from './cairo';
import formatter from './formatter';
import { createAbiParser } from './parser';
import { AbiParserInterface } from './parser/interface';
import orderPropsByAbi from './propertyOrder';
import { parseCalldataField } from './requestParser';
import responseParser from './responseParser';
import validateFields from './validate';

export * as cairo from './cairo';

export class CallData {
  abi: Abi;

  parser: AbiParserInterface;

  protected readonly structs: AbiStructs;

  constructor(abi: Abi) {
    this.structs = CallData.getAbiStruct(abi);
    this.parser = createAbiParser(abi);
    this.abi = this.parser.getLegacyFormat();
  }

  /**
   * Validate arguments passed to the method as corresponding to the ones in the abi
   * @param type ValidateType - type of the method
   * @param method string - name of the method
   * @param args ArgsOrCalldata - arguments that are passed to the method
   */
  public validate(type: ValidateType, method: string, args: ArgsOrCalldata = []) {
    // ensure provided method of type exists
    if (type !== ValidateType.DEPLOY) {
      const invocableFunctionNames = this.abi
        .filter((abi) => {
          if (abi.type !== 'function') return false;
          const isView = abi.stateMutability === 'view' || abi.state_mutability === 'view';
          return type === ValidateType.INVOKE ? !isView : isView;
        })
        .map((abi) => abi.name);
      assert(
        invocableFunctionNames.includes(method),
        `${type === ValidateType.INVOKE ? 'invocable' : 'viewable'} method not found in abi`
      );
    }

    // get requested method from abi
    const abiMethod = this.abi.find((abi) =>
      type === ValidateType.DEPLOY
        ? abi.name === method && abi.type === 'constructor'
        : abi.name === method && abi.type === 'function'
    ) as FunctionAbi;

    // validate arguments length
    const inputsLength = this.parser.methodInputsLength(abiMethod);
    if (args.length !== inputsLength) {
      throw Error(
        `Invalid number of arguments, expected ${inputsLength} arguments, but got ${args.length}`
      );
    }

    // validate parameters
    validateFields(abiMethod, args, this.structs);
  }

  /**
   * Compile contract callData with abi
   * Parse the calldata by using input fields from the abi for that method
   * @param method string - method name
   * @param args RawArgs - arguments passed to the method. Can be an array of arguments (in the order of abi definition), or an object constructed in conformity with abi (in this case, the parameter can be in a wrong order).
   * @return Calldata - parsed arguments in format that contract is expecting
   * @example
   * ```typescript
   * const calldata = myCallData.compile("constructor",["0x34a",[1,3n]]);
   * ```
   * ```typescript
   * const calldata2 = myCallData.compile("constructor",{list:[1,3n],balance:"0x34"}); // wrong order is valid
   * ```
   */
  public compile(method: string, argsCalldata: RawArgs): Calldata {
    const abiMethod = this.abi.find((abi) => abi.name === method) as FunctionAbi;

    let args: RawArgsArray;
    if (Array.isArray(argsCalldata)) {
      args = argsCalldata;
    } else {
      // order the object
      const orderedObject = orderPropsByAbi(argsCalldata, abiMethod.inputs, this.structs);
      args = Object.values(orderedObject);
      //   // validate array elements to abi
      validateFields(abiMethod, args, this.structs);
    }

    const argsIterator = args[Symbol.iterator]();
    return abiMethod.inputs.reduce(
      (acc, input) =>
        isLen(input.name) ? acc : acc.concat(parseCalldataField(argsIterator, input, this.structs)),
      [] as Calldata
    );
  }

  /**
   * Compile contract callData without abi
   * @param rawArgs RawArgs representing cairo method arguments or string array of compiled data
   * @returns Calldata
   */
  static compile(rawArgs: RawArgs): Calldata {
    const createTree = (obj: object) => {
      const getEntries = (o: object, prefix = ''): any => {
        const oe = Array.isArray(o) ? [o.length.toString(), ...o] : o;
        return Object.entries(oe).flatMap(([k, v]) => {
          let value = v;
          if (isLongText(value)) value = splitLongString(value);
          if (k === 'entrypoint') value = getSelectorFromName(value);
          const kk = Array.isArray(oe) && k === '0' ? '$$len' : k;
          if (isBigInt(value)) return [[`${prefix}${kk}`, felt(value)]];
          return Object(value) === value
            ? getEntries(value, `${prefix}${kk}.`)
            : [[`${prefix}${kk}`, felt(value)]];
        });
      };
      return Object.fromEntries(getEntries(obj));
    };

    let callTreeArray;
    if (!Array.isArray(rawArgs)) {
      // flatten structs, tuples, add array length. Process leafs as Felt
      const callTree = createTree(rawArgs);
      // convert to array
      callTreeArray = Object.values(callTree);
    } else {
      // already compiled data but modified or raw args provided as array, recompile it
      // recreate tree
      const callObj = { ...rawArgs };
      const callTree = createTree(callObj);
      callTreeArray = Object.values(callTree);
    }

    // add compiled property to array object
    Object.defineProperty(callTreeArray, '__compiled__', {
      enumerable: false,
      writable: false,
      value: true,
    });
    return callTreeArray;
  }

  /**
   * Parse elements of the response array and structuring them into response object
   * @param method string - method name
   * @param response string[] - response from the method
   * @return Result - parsed response corresponding to the abi
   */
  public parse(method: string, response: string[]): Result {
    const { outputs } = this.abi.find((abi) => abi.name === method) as FunctionAbi;
    const responseIterator = response.flat()[Symbol.iterator]();

    const parsed = outputs.flat().reduce((acc, output, idx) => {
      const propName = output.name ?? idx;
      acc[propName] = responseParser(responseIterator, output, this.structs, acc);
      if (acc[propName] && acc[`${propName}_len`]) {
        delete acc[`${propName}_len`];
      }
      return acc;
    }, {} as Args);

    // Cairo1 avoid object.0 structure
    return Object.keys(parsed).length === 1 && 0 in parsed ? (parsed[0] as Result) : parsed;
  }

  /**
   * Format cairo method response data to native js values based on provided format schema
   * @param method string - cairo method name
   * @param response string[] - cairo method response
   * @param format object - formatter object schema
   * @returns Result - parsed and formatted response object
   */
  public format(method: string, response: string[], format: object): Result {
    const parsed = this.parse(method, response);
    return formatter(parsed, format);
  }

  /**
   * Helper to extract structs from abi
   * @param abi Abi
   * @returns AbiStructs - structs from abi
   */
  static getAbiStruct(abi: Abi): AbiStructs {
    return abi
      .filter((abiEntry) => abiEntry.type === 'struct')
      .reduce(
        (acc, abiEntry) => ({
          ...acc,
          [abiEntry.name]: abiEntry,
        }),
        {}
      );
  }

  /**
   * Helper: Compile HexCalldata | RawCalldata | RawArgs
   * @param rawCalldata HexCalldata | RawCalldata | RawArgs
   * @returns Calldata
   */
  static toCalldata(rawCalldata: RawArgs = []): Calldata {
    return CallData.compile(rawCalldata);
  }

  /**
   * Helper: Convert raw to HexCalldata
   * @param raw HexCalldata | RawCalldata | RawArgs
   * @returns HexCalldata
   */
  static toHex(raw: RawArgs = []): HexCalldata {
    const calldata = CallData.compile(raw);
    return calldata.map((it) => toHex(it));
  }
}

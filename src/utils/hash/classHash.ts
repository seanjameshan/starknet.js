/**
 * Class Hash
 */

import { poseidonHashMany } from '@scure/starknet';

import { ADDR_BOUND, API_VERSION } from '../../constants';
import {
  BigNumberish,
  Builtins,
  CompiledContract,
  CompiledSierra,
  CompiledSierraCasm,
  ContractEntryPointFields,
  LegacyCompiledContract,
  RawArgs,
  SierraContractEntryPointFields,
} from '../../types';
import { CairoFelt252 } from '../cairoDataTypes/felt252';
import { CallData } from '../calldata';
import { starkCurve } from '../ec';
import { addHexPrefix, utf8ToArray } from '../encode';
import { parse, stringify } from '../json';
import { toHex } from '../num';
import { encodeShortString, isString } from '../shortString';

export function computePedersenHash(a: BigNumberish, b: BigNumberish): string {
  return starkCurve.pedersen(BigInt(a), BigInt(b));
}

export function computePoseidonHash(a: BigNumberish, b: BigNumberish): string {
  return toHex(starkCurve.poseidonHash(BigInt(a), BigInt(b)));
}

/**
 * Compute Pedersen hash from data
 *
 * @param {BigNumberish[]} data Array of data to compute Pedersen hash on
 * @returns {string} hex-string of Pedersen hash
 *
 * @example
 * ```typescript
 * const result = hash.computeHashOnElements(['0xabc', '0x123', '0xabc123'])
 * // result = 0x148141e8f7db29d005a0187669a56f0790d7e8c2c5b2d780e4d8b9e436a5521
 * ```
 */
export function computeHashOnElements(data: BigNumberish[]): string {
  return [...data, data.length]
    .reduce((x: BigNumberish, y: BigNumberish) => starkCurve.pedersen(BigInt(x), BigInt(y)), 0)
    .toString();
}

export const computePedersenHashOnElements = computeHashOnElements;

export function computePoseidonHashOnElements(data: BigNumberish[]) {
  return toHex(poseidonHashMany(data.map((x) => BigInt(x))));
}

/**
 * Calculate contract address from class hash
 *
 * @param {BigNumberish} salt Salt to be used for hashing
 * @param {BigNumberish} classHash Class hash of contract to generate address for
 * @param {RawArgs} constructorCalldata Call data for contract constructor
 * @param {BigNumberish} deployerAddress Address of contract deployer
 * @returns {string} hex-string
 * @example
 * ```typescript
 * const result = hash.calculateContractAddressFromHash(1234, 0x1cf4fe5d37868d25524cdacb89518d88bf217a9240a1e6fde71cc22c429e0e3, [1234, true, false], 0x052fb1a9ab0db3c4f81d70fea6a2f6e55f57c709a46089b25eeec0e959db3695);
 * // result = 0x5fb03d3a88d8e474976932f927ff6a9e332e06ed36642ea3e8c7e38bf010f76
 * ```
 */
export function calculateContractAddressFromHash(
  salt: BigNumberish,
  classHash: BigNumberish,
  constructorCalldata: RawArgs,
  deployerAddress: BigNumberish
): string {
  const compiledCalldata = CallData.compile(constructorCalldata);
  const constructorCalldataHash = computeHashOnElements(compiledCalldata);

  const CONTRACT_ADDRESS_PREFIX = new CairoFelt252(
    '0x535441524b4e45545f434f4e54524143545f41444452455353'
  ).value; // Equivalent to 'STARKNET_CONTRACT_ADDRESS'

  const hash = computeHashOnElements([
    CONTRACT_ADDRESS_PREFIX,
    deployerAddress,
    salt,
    classHash,
    constructorCalldataHash,
  ]);
  return toHex(BigInt(hash) % ADDR_BOUND);
}

function nullSkipReplacer(key: string, value: any) {
  if (key === 'attributes' || key === 'accessible_scopes') {
    return Array.isArray(value) && value.length === 0 ? undefined : value;
  }

  if (key === 'debug_info') {
    return null;
  }

  return value === null ? undefined : value;
}

/**
 * Format json-string without spaces to conform starknet json-string
 * @param {string} json json-string without spaces
 * @returns {string} json-string with additional spaces after `:` and `,`
 * @example
 * ```typescript
 * const result = hash.formatSpaces("{'onchain':true,'isStarknet':true}");
 * // result = "{'onchain': true, 'isStarknet': true}"
 * ```
 */
export function formatSpaces(json: string): string {
  let insideQuotes = false;
  const newString = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const char of json) {
    if (char === '"' && (newString.length > 0 && newString.slice(-1)[0] === '\\') === false) {
      insideQuotes = !insideQuotes;
    }
    if (insideQuotes) {
      newString.push(char);
    } else {
      // eslint-disable-next-line no-nested-ternary
      newString.push(char === ':' ? ': ' : char === ',' ? ', ' : char);
    }
  }
  return newString.join('');
}

/**
 * Compute hinted class hash for legacy compiled contract (Cairo 0)
 * @param {LegacyCompiledContract} compiledContract
 * @returns {string} hex-string
 * @example
 * ```typescript
 * const compiledCairo0 = json.parse(fs.readFileSync("./cairo0contract.json").toString("ascii"));
 * const result=hash.computeHintedClassHash(compiledCairo0);
 * // result = "0x293eabb06955c0a1e55557014675aa4e7a1fd69896147382b29b2b6b166a2ac"
 * ``` */
export function computeHintedClassHash(compiledContract: LegacyCompiledContract): string {
  const { abi, program } = compiledContract;
  const contractClass = { abi, program };
  const serializedJson = formatSpaces(stringify(contractClass, nullSkipReplacer));
  return addHexPrefix(starkCurve.keccak(utf8ToArray(serializedJson)).toString(16));
}

/**
 * Computes the class hash for legacy compiled contract (Cairo 0)
 * @param {LegacyCompiledContract | string} contract legacy compiled contract content
 * @returns {string} hex-string of class hash
 * @example
 * ```typescript
 * const compiledCairo0 = json.parse(fs.readFileSync("./cairo0contract.json").toString("ascii"));
 * const result=hash.computeLegacyContractClassHash(compiledCairo0);
 * // result = "0x4a5cae61fa8312b0a3d0c44658b403d3e4197be80027fd5020ffcdf0c803331"
 * ```
 */
export function computeLegacyContractClassHash(contract: LegacyCompiledContract | string) {
  const compiledContract = isString(contract)
    ? (parse(contract) as LegacyCompiledContract)
    : contract;

  const apiVersion = toHex(API_VERSION);

  const externalEntryPointsHash = computeHashOnElements(
    compiledContract.entry_points_by_type.EXTERNAL.flatMap((e) => [e.selector, e.offset])
  );

  const l1HandlerEntryPointsHash = computeHashOnElements(
    compiledContract.entry_points_by_type.L1_HANDLER.flatMap((e) => [e.selector, e.offset])
  );

  const constructorEntryPointHash = computeHashOnElements(
    compiledContract.entry_points_by_type.CONSTRUCTOR.flatMap((e) => [e.selector, e.offset])
  );

  const builtinsHash = computeHashOnElements(
    compiledContract.program.builtins.map((s) => encodeShortString(s))
  );

  const hintedClassHash = computeHintedClassHash(compiledContract);

  const dataHash = computeHashOnElements(compiledContract.program.data);

  return computeHashOnElements([
    apiVersion,
    externalEntryPointsHash,
    l1HandlerEntryPointsHash,
    constructorEntryPointHash,
    builtinsHash,
    hintedClassHash,
    dataHash,
  ]);
}

// Cairo 1 Contract Hashes

function hashBuiltins(builtins: Builtins) {
  return poseidonHashMany(
    builtins.flatMap((it: any) => {
      return BigInt(encodeShortString(it));
    })
  );
}

function hashEntryPoint(data: ContractEntryPointFields[]) {
  const base = data.flatMap((it: any) => {
    return [BigInt(it.selector), BigInt(it.offset), hashBuiltins(it.builtins)];
  });
  return poseidonHashMany(base);
}

/**
 * Compute hash of the bytecode for Sierra v1.5.0 onwards (Cairo 2.6.0)
 * Each segment is Poseidon hashed.
 * The global hash is : 1 + PoseidonHash(len0, h0, len1, h1, ...)
 * @param {CompiledSierraCasm} casm compiled Sierra CASM file content.
 * @returns {bigint} the bytecode hash as bigint.
 * @example
 * ```typescript
 * const compiledCasm = json.parse(fs.readFileSync("./contractC260.casm.json").toString("ascii"));
 * const result = hash.hashByteCodeSegments(compiledCasm);
 * // result = 80499149343908132326491548897246987792410240503053732367044713070598981699n
 * ```
 */
export function hashByteCodeSegments(casm: CompiledSierraCasm): bigint {
  const byteCode: bigint[] = casm.bytecode.map((n) => BigInt(n));
  const bytecodeSegmentLengths: number[] = casm.bytecode_segment_lengths ?? [];
  let segmentStart = 0;
  const hashLeaves = bytecodeSegmentLengths.flatMap((len) => {
    const segment = byteCode.slice(segmentStart, (segmentStart += len));
    return [BigInt(len), poseidonHashMany(segment)];
  });
  return 1n + poseidonHashMany(hashLeaves);
}

/**
 * Compute compiled class hash for contract (Cairo 1)
 * @param {CompiledSierraCasm} casm Cairo 1 compiled contract content
 * @returns {string} hex-string of class hash
 * @example
 * ```typescript
 * const compiledCasm = json.parse(fs.readFileSync("./cairo260.casm.json").toString("ascii"));
 * const result = hash.computeCompiledClassHash(compiledCasm);
 * // result = "0x4087905743b4fa2b3affc1fc71333f1390c8c5d1e8ea47d6ba70786de3fc01a"
```
 */
export function computeCompiledClassHash(casm: CompiledSierraCasm): string {
  const COMPILED_CLASS_VERSION = 'COMPILED_CLASS_V1';

  // Hash compiled class version
  const compiledClassVersion = BigInt(encodeShortString(COMPILED_CLASS_VERSION));

  // Hash external entry points.
  const externalEntryPointsHash = hashEntryPoint(casm.entry_points_by_type.EXTERNAL);

  // Hash L1 handler entry points.
  const l1Handlers = hashEntryPoint(casm.entry_points_by_type.L1_HANDLER);

  // Hash constructor entry points.
  const constructor = hashEntryPoint(casm.entry_points_by_type.CONSTRUCTOR);

  // Hash bytecode.
  const bytecode = casm.bytecode_segment_lengths
    ? hashByteCodeSegments(casm)
    : poseidonHashMany(casm.bytecode.map((it: string) => BigInt(it)));

  return toHex(
    poseidonHashMany([
      compiledClassVersion,
      externalEntryPointsHash,
      l1Handlers,
      constructor,
      bytecode,
    ])
  );
}

function hashEntryPointSierra(data: SierraContractEntryPointFields[]) {
  const base = data.flatMap((it: any) => {
    return [BigInt(it.selector), BigInt(it.function_idx)];
  });
  return poseidonHashMany(base);
}

function hashAbi(sierra: CompiledSierra) {
  const indentString = formatSpaces(stringify(sierra.abi, null));
  return BigInt(addHexPrefix(starkCurve.keccak(utf8ToArray(indentString)).toString(16)));
}

/**
 * Compute sierra contract class hash (Cairo 1)
 * @param {CompiledSierra} sierra Cairo 1 Sierra contract content
 * @returns {string} hex-string of class hash
 * @example
 * ```typescript
 * const compiledSierra = json.parse(fs.readFileSync("./cairo260.sierra.json").toString("ascii"));
 * const result = hash.computeSierraContractClassHash(compiledSierra);
 * // result = "0x67b6b4f02baded46f02feeed58c4f78e26c55364e59874d8abfd3532d85f1ba"
```
 */
export function computeSierraContractClassHash(sierra: CompiledSierra): string {
  const CONTRACT_CLASS_VERSION = 'CONTRACT_CLASS_V0.1.0';

  // Hash class version
  const compiledClassVersion = BigInt(encodeShortString(CONTRACT_CLASS_VERSION));

  // Hash external entry points.
  const externalEntryPointsHash = hashEntryPointSierra(sierra.entry_points_by_type.EXTERNAL);

  // Hash L1 handler entry points.
  const l1Handlers = hashEntryPointSierra(sierra.entry_points_by_type.L1_HANDLER);

  // Hash constructor entry points.
  const constructor = hashEntryPointSierra(sierra.entry_points_by_type.CONSTRUCTOR);

  // Hash abi_hash.
  const abiHash = hashAbi(sierra);

  // Hash Sierra program.
  const sierraProgram = poseidonHashMany(sierra.sierra_program.map((it: string) => BigInt(it)));

  return toHex(
    poseidonHashMany([
      compiledClassVersion,
      externalEntryPointsHash,
      l1Handlers,
      constructor,
      abiHash,
      sierraProgram,
    ])
  );
}

/**
 * Compute ClassHash (sierra or legacy) based on provided contract
 * @param {CompiledContract | string} contract Cairo 1 contract content
 * @returns {string} hex-string of class hash
 * @example
 * ```typescript
 * const compiledSierra = json.parse(fs.readFileSync("./cairo260.sierra.json").toString("ascii"));
 * const result = hash.computeContractClassHash(compiledSierra);
 * // result = "0x67b6b4f02baded46f02feeed58c4f78e26c55364e59874d8abfd3532d85f1ba"
```
 */
export function computeContractClassHash(contract: CompiledContract | string): string {
  const compiledContract = isString(contract) ? parse(contract) : contract;

  if ('sierra_program' in compiledContract) {
    return computeSierraContractClassHash(compiledContract as CompiledSierra);
  }

  return computeLegacyContractClassHash(compiledContract as LegacyCompiledContract);
}

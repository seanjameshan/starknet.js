import { Abi } from './abi';

/** LEGACY CONTRACT */
/**
 * format produced after compressing 'program' property
 */
export type LegacyContractClass = {
  program: CompressedProgram;
  entry_points_by_type: EntryPointsByType;
  abi: Abi;
};

/**
 * format produced after compile .cairo to .json
 */
export type LegacyCompiledContract = Omit<LegacyContractClass, 'program'> & {
  program: Program;
};

export enum KeyType {
  ATTRIBUTES = 'attributes',
  ACCESSIBLE_SCOPES = 'accessible_scopes',
  DEBUG_INFO = 'debug_info',
}

/** SUBTYPES */
export type Builtins = string[];
export type CompressedProgram = string;

export type EntryPointsByType = {
  CONSTRUCTOR: ContractEntryPointFields[];
  EXTERNAL: ContractEntryPointFields[];
  L1_HANDLER: ContractEntryPointFields[];
};

export type ContractEntryPointFields = {
  selector: string;
  offset: string;
  builtins?: Builtins;
};

export interface Program extends Record<string, any> {
  builtins: string[];
  data: string[];
  // TODO: Add missing properties
}

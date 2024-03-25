/**
 * Provider interface responses
 * DEV NOTE: For stability ensure this types do not change with minor versions
 * aka. when rpc spec change update parser so this types can stay the same
 */

import { CompiledSierra, LegacyContractClass } from '../lib';
import {
  BLOCK_HASH,
  BLOCK_NUMBER,
  DECLARE_TXN_RECEIPT,
  DEPLOY_ACCOUNT_TXN_RECEIPT,
  DeclaredTransaction,
  FELT,
  INVOKE_TXN_RECEIPT,
  InvokedTransaction,
  L1_HANDLER_TXN_RECEIPT,
  PENDING_DECLARE_TXN_RECEIPT,
  PENDING_DEPLOY_ACCOUNT_TXN_RECEIPT,
  PENDING_INVOKE_TXN_RECEIPT,
  PENDING_L1_HANDLER_TXN_RECEIPT,
  PENDING_STATE_UPDATE,
  PRICE_UNIT,
  PendingReceipt,
  RESOURCE_PRICE,
  Receipt,
  ResourceBounds,
  SIMULATION_FLAG,
  STATE_UPDATE,
  SimulateTransaction,
  TXN_HASH,
  TransactionWithHash,
} from './spec';

export { BlockWithTxHashes, ContractClassPayload, FeeEstimate, TransactionReceipt } from './spec';

export type GetBlockResponse = PendingBlock | Block;

export type PendingBlock = {
  status: 'PENDING';
  parent_hash: BLOCK_HASH;
  timestamp: number;
  sequencer_address: FELT;
  l1_gas_price: RESOURCE_PRICE;
  starknet_version: string;
  transactions: TXN_HASH[];
};

export type Block = {
  status: 'ACCEPTED_ON_L2' | 'ACCEPTED_ON_L1' | 'REJECTED';
  block_hash: BLOCK_HASH;
  parent_hash: BLOCK_HASH;
  block_number: BLOCK_NUMBER;
  new_root: FELT;
  timestamp: number;
  sequencer_address: FELT;
  l1_gas_price: RESOURCE_PRICE;
  starknet_version: string;
  transactions: TXN_HASH[];
};

export type GetTransactionResponse = TransactionWithHash;

export type GetTransactionReceiptResponse = Receipt | PendingReceipt;
// Spread individual types for usage convenience
export type InvokeTransactionReceiptResponse = INVOKE_TXN_RECEIPT | PENDING_INVOKE_TXN_RECEIPT;
export type DeclareTransactionReceiptResponse = DECLARE_TXN_RECEIPT | PENDING_DECLARE_TXN_RECEIPT;
export type DeployTransactionReceiptResponse = InvokeTransactionReceiptResponse;
export type DeployAccountTransactionReceiptResponse =
  | DEPLOY_ACCOUNT_TXN_RECEIPT
  | PENDING_DEPLOY_ACCOUNT_TXN_RECEIPT;
export type L1HandlerTransactionReceiptResponse =
  | L1_HANDLER_TXN_RECEIPT
  | PENDING_L1_HANDLER_TXN_RECEIPT;

export interface EstimateFeeResponse {
  gas_consumed: bigint;
  overall_fee: bigint;
  gas_price: bigint;
  unit: PRICE_UNIT;
  suggestedMaxFee: bigint;
  resourceBounds: ResourceBounds;
}

export type EstimateFeeResponseBulk = Array<EstimateFeeResponse>;

export type InvokeFunctionResponse = InvokedTransaction;

export type DeclareContractResponse = DeclaredTransaction;

export type CallContractResponse = string[];

export type Storage = FELT;

export type Nonce = string;

export type SimulationFlags = Array<SIMULATION_FLAG>;

export type SimulatedTransaction = SimulateTransaction & {
  suggestedMaxFee: bigint;
  resourceBounds: ResourceBounds;
};

export type SimulateTransactionResponse = SimulatedTransaction[];

export type StateUpdateResponse = StateUpdate | PendingStateUpdate;
export type StateUpdate = STATE_UPDATE;
export type PendingStateUpdate = PENDING_STATE_UPDATE;

/**
 * Standardized type
 * Cairo0 program compressed and Cairo1 sierra_program decompressed
 * abi Abi
 * CompiledSierra without '.sierra_program_debug_info'
 */
export type ContractClassResponse =
  | LegacyContractClass
  | Omit<CompiledSierra, 'sierra_program_debug_info'>;

/* RE-Export from RPC */

export type BlockHashAndNumber = {
  block_hash: string;
  block_number: number;
};

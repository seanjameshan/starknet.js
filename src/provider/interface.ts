import { RPC06, RPC07 } from '../channel';
import { StarknetChainId } from '../constants';
import type {
  AccountInvocations,
  BigNumberish,
  Block,
  BlockIdentifier,
  Call,
  CallContractResponse,
  ContractClassResponse,
  ContractVersion,
  DeclareContractResponse,
  DeclareContractTransaction,
  DeployAccountContractPayload,
  DeployAccountContractTransaction,
  DeployContractResponse,
  EstimateFeeResponse,
  EstimateFeeResponseBulk,
  GetBlockResponse,
  GetTransactionResponse,
  Invocation,
  InvocationsDetailsWithNonce,
  InvokeFunctionResponse,
  Nonce,
  PendingBlock,
  SimulateTransactionResponse,
  StateUpdateResponse,
  Storage,
  getContractVersionOptions,
  getEstimateFeeBulkOptions,
  getSimulateTransactionOptions,
  waitForTransactionOptions,
} from '../types';
import type { GetTransactionReceiptResponse } from '../utils/transactionReceipt';

export abstract class ProviderInterface {
  public abstract channel: RPC07.RpcChannel | RPC06.RpcChannel;

  /**
   * Gets the Starknet chain Id
   *
   * @returns the chain Id
   */
  public abstract getChainId(): Promise<StarknetChainId>;

  /**
   * Calls a function on the Starknet contract.
   *
   * @param call transaction to be called
   * @param blockIdentifier block identifier
   * @returns the result of the function on the smart contract.
   */
  public abstract callContract(
    call: Call,
    blockIdentifier?: BlockIdentifier
  ): Promise<CallContractResponse>;

  /**
   * Gets the block information
   *
   * @param blockIdentifier block identifier
   * @returns the block object
   */
  public abstract getBlock(blockIdentifier?: 'pending'): Promise<PendingBlock>;
  public abstract getBlock(blockIdentifier: 'latest'): Promise<Block>;
  public abstract getBlock(blockIdentifier: BlockIdentifier): Promise<GetBlockResponse>;

  /**
   * Gets the contract class of the deployed contract.
   *
   * @param contractAddress - contract address
   * @param blockIdentifier - block identifier
   * @returns Contract class of compiled contract
   */
  public abstract getClassAt(
    contractAddress: string,
    blockIdentifier?: BlockIdentifier
  ): Promise<ContractClassResponse>;

  /**
   * Gets the price of l1 gas in the block
   *
   * @param blockIdentifier block identifier
   * @returns gas price of the block
   */
  public abstract getL1GasPrice(blockIdentifier: BlockIdentifier): Promise<string>;

  /**
   * Get L1 message hash from L2 transaction hash
   * @param {BigNumberish} l2TxHash L2 transaction hash
   * @returns {string} Hex string of L1 message hash
   * @example
   * In Sepolia Testnet :
   * ```typescript
   * const result = provider.getL1MessageHash('0x28dfc05eb4f261b37ddad451ff22f1d08d4e3c24dc646af0ec69fa20e096819');
   * // result = '0x55b3f8b6e607fffd9b4d843dfe8f9b5c05822cd94fcad8797deb01d77805532a'
   * ```
   */
  public abstract getL1MessageHash(l2TxHash: BigNumberish): Promise<string>;

  /**
   * Returns the contract class hash in the given block for the contract deployed at the given address
   *
   * @param contractAddress - contract address
   * @param blockIdentifier - block identifier
   * @returns Class hash
   */
  public abstract getClassHashAt(
    contractAddress: string,
    blockIdentifier?: BlockIdentifier
  ): Promise<string>;

  /**
   * Returns the contract class deployed under the given class hash.
   *
   * @param classHash - class hash
   * @returns Contract class of compiled contract
   */
  public abstract getClassByHash(classHash: string): Promise<ContractClassResponse>;

  /**
   * Returns the nonce associated with the given address in the given block
   *
   * @param contractAddress - contract address
   * @returns the hex nonce
   */
  public abstract getNonceForAddress(
    contractAddress: string,
    blockIdentifier?: BlockIdentifier
  ): Promise<Nonce>;

  /**
   * Get the value of the storage (contract's variable) at the given address and key
   *
   * @param contractAddress
   * @param key - from starknetKeccak()
   * @param blockIdentifier - block identifier
   * @returns the value of the storage variable
   */
  public abstract getStorageAt(
    contractAddress: string,
    key: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ): Promise<Storage>;

  /**
   * Gets the transaction information from a tx id.
   *
   * @param transactionHash
   * @returns the transaction object `{ transaction_id, status, transaction, block_number?, block_number?, transaction_index?, transaction_failure_reason? }`
   */
  public abstract getTransaction(transactionHash: BigNumberish): Promise<GetTransactionResponse>;

  /**
   * Gets the transaction receipt from a tx hash.
   *
   * @param transactionHash
   * @returns the transaction receipt object
   */
  public abstract getTransactionReceipt(
    transactionHash: BigNumberish
  ): Promise<GetTransactionReceiptResponse>;

  /**
   * Deploys a given compiled Account contract (json) to starknet
   *
   * @param payload payload to be deployed containing:
   * - compiled contract code
   * - constructor calldata
   * - address salt
   * @returns a confirmation of sending a transaction on the starknet contract
   */
  public abstract deployAccountContract(
    payload: DeployAccountContractPayload,
    details: InvocationsDetailsWithNonce
  ): Promise<DeployContractResponse>;

  /**
   * Invokes a function on starknet
   * @deprecated This method won't be supported as soon as fees are mandatory. Should not be used outside of Account class
   *
   * @param invocation the invocation object containing:
   * - contractAddress - the address of the contract
   * - entrypoint - the entrypoint of the contract
   * - calldata - (defaults to []) the calldata
   * - signature - (defaults to []) the signature
   * @param details - optional details containing:
   * - nonce - optional nonce
   * - version - optional version
   * - maxFee - optional maxFee
   * @returns response from addTransaction
   */
  public abstract invokeFunction(
    invocation: Invocation,
    details: InvocationsDetailsWithNonce
  ): Promise<InvokeFunctionResponse>;

  /**
   * Declares a given compiled contract (json) to starknet
   * @param transaction transaction payload to be deployed containing:
   * - compiled contract code
   * - sender address
   * - signature
   * @param details Invocation Details containing:
   * - nonce
   * - optional version
   * - optional maxFee
   * @returns a confirmation of sending a transaction on the starknet contract
   */
  public abstract declareContract(
    transaction: DeclareContractTransaction,
    details: InvocationsDetailsWithNonce
  ): Promise<DeclareContractResponse>;

  /**
   * Estimates the fee for a given INVOKE transaction
   * @deprecated Please use getInvokeEstimateFee or getDeclareEstimateFee instead. Should not be used outside of Account class
   *
   * @param invocation the invocation object containing:
   * - contractAddress - the address of the contract
   * - entrypoint - the entrypoint of the contract
   * - calldata - (defaults to []) the calldata
   * - signature - (defaults to []) the signature
   * @param details - optional details containing:
   * - nonce - optional nonce
   * - version - optional version
   * @param blockIdentifier - (optional) block identifier
   * @param skipValidate - (optional) skip cairo __validate__ method
   * @returns the estimated fee
   */
  public abstract getEstimateFee(
    invocation: Invocation,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ): Promise<EstimateFeeResponse>;

  /**
   * Estimates the fee for a given INVOKE transaction
   *
   * @param invocation the invocation object containing:
   * - contractAddress - the address of the contract
   * - entrypoint - the entrypoint of the contract
   * - calldata - (defaults to []) the calldata
   * - signature - (defaults to []) the signature
   * @param details - optional details containing:
   * - nonce - optional nonce
   * - version - optional version
   * @param blockIdentifier - (optional) block identifier
   * @param skipValidate - (optional) skip cairo __validate__ method
   * @returns the estimated fee
   */
  public abstract getInvokeEstimateFee(
    invocation: Invocation,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ): Promise<EstimateFeeResponse>;

  /**
   * Estimates the fee for a given DECLARE transaction
   *
   * @param transaction transaction payload to be declared containing:
   * - compiled contract code
   * - sender address
   * - signature - (defaults to []) the signature
   * @param details - optional details containing:
   * - nonce
   * - version - optional version
   * - optional maxFee
   * @param blockIdentifier - (optional) block identifier
   * @param skipValidate - (optional) skip cairo __validate__ method
   * @returns the estimated fee
   */
  public abstract getDeclareEstimateFee(
    transaction: DeclareContractTransaction,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ): Promise<EstimateFeeResponse>;

  /**
   * Estimates the fee for a given DEPLOY_ACCOUNT transaction
   *
   * @param transaction transaction payload to be deployed containing:
   * - classHash
   * - constructorCalldata
   * - addressSalt
   * - signature - (defaults to []) the signature
   * @param details - optional details containing:
   * - nonce
   * - version - optional version
   * - optional maxFee
   * @param blockIdentifier - (optional) block identifier
   * @param skipValidate - (optional) skip cairo __validate__ method
   * @returns the estimated fee
   */
  public abstract getDeployAccountEstimateFee(
    transaction: DeployAccountContractTransaction,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ): Promise<EstimateFeeResponse>;

  /**
   * Estimates the fee for a list of INVOKE transaction
   *
   * @param invocations AccountInvocations - Complete invocations array with account details
   * @param options getEstimateFeeBulkOptions
   * - (optional) blockIdentifier - BlockIdentifier
   * @returns the estimated fee
   */
  public abstract getEstimateFeeBulk(
    invocations: AccountInvocations,
    options?: getEstimateFeeBulkOptions
  ): Promise<EstimateFeeResponseBulk>;

  /**
   * Wait for the transaction to be accepted
   * @param txHash - transaction hash
   * @param options waitForTransactionOptions
   * - (optional) retryInterval: number | undefined;
   * - (optional) successStates: TransactionStatus[] | undefined;
   * @return GetTransactionReceiptResponse
   */
  public abstract waitForTransaction(
    txHash: BigNumberish,
    options?: waitForTransactionOptions
  ): Promise<GetTransactionReceiptResponse>;

  /**
   * Simulates the transaction and returns the transaction trace and estimated fee.
   *
   * @param invocations AccountInvocations - Complete invocations array with account details
   * @param options - getSimulateTransactionOptions
   *  - (optional) blockIdentifier - block identifier
   *  - (optional) skipValidate - skip cairo __validate__ method
   *  - (optional) skipExecute - skip cairo __execute__ method
   * @returns an array of transaction trace and estimated fee
   */
  public abstract getSimulateTransaction(
    invocations: AccountInvocations,
    options?: getSimulateTransactionOptions
  ): Promise<SimulateTransactionResponse>;

  /**
   * Gets the state changes in a specific block (result of executing the requested block)
   *
   * @param blockIdentifier - block identifier
   * @returns StateUpdateResponse
   */
  public abstract getStateUpdate(blockIdentifier?: BlockIdentifier): Promise<StateUpdateResponse>;

  /**
   * Gets the contract version from the provided address
   * @param contractAddress string
   * @param classHash undefined
   * @param options - getContractVersionOptions
   *   - (optional) compiler - (default true) extract compiler version using type tactic from abi
   *   - (optional) blockIdentifier - block identifier
   */
  public abstract getContractVersion(
    contractAddress: string,
    classHash?: undefined,
    options?: getContractVersionOptions
  ): Promise<ContractVersion>;

  /**
   * Gets the contract version from the provided address
   * @param contractAddress undefined
   * @param classHash
   * @param options - getContractVersionOptions
   *   - (optional) compiler - (default true) extract compiler version using type tactic from abi
   *   - (optional) blockIdentifier - block identifier
   */
  public abstract getContractVersion(
    contractAddress: undefined,
    classHash: string,
    options?: getContractVersionOptions
  ): Promise<ContractVersion>;
}

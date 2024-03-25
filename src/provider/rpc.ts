import { RPC06, RPC07, RpcChannel } from '../channel';
import {
  AccountInvocations,
  BigNumberish,
  Block,
  BlockHashAndNumber,
  BlockIdentifier,
  Call,
  ContractVersion,
  DeclareContractTransaction,
  DeployAccountContractTransaction,
  EBlockTag,
  GetBlockResponse,
  Invocation,
  InvocationsDetailsWithNonce,
  PendingBlock,
  PendingStateUpdate,
  RPC,
  RpcProviderOptions,
  StateUpdate,
  StateUpdateResponse,
  TransactionType,
  getContractVersionOptions,
  getEstimateFeeBulkOptions,
  getSimulateTransactionOptions,
  waitForTransactionOptions,
} from '../types';
import { getAbiContractVersion } from '../utils/calldata/cairo';
import { isSierra } from '../utils/contract';
import { RPCResponseParser } from '../utils/responseParser/rpc';
import { LibraryError } from './errors';
import { ProviderInterface } from './interface';

export class RpcProvider implements ProviderInterface {
  private responseParser = new RPCResponseParser();

  public channel: RPC07.RpcChannel | RPC06.RpcChannel;

  constructor(
    optionsOrProvider?: RpcProviderOptions | ProviderInterface | RpcProvider,
    instance?: boolean
  ) {
    if (optionsOrProvider && instance) {
      // stop ts complains
      this.channel = null as any;
      // use provided instance
      Object.setPrototypeOf(this, Object.getPrototypeOf(optionsOrProvider));
      Object.assign(this, optionsOrProvider);
    } else if (
      optionsOrProvider &&
      'channel' in optionsOrProvider &&
      optionsOrProvider.channel !== undefined
    ) {
      this.channel = optionsOrProvider.channel;
      this.responseParser = (optionsOrProvider as any).responseParser;
    } else {
      this.channel = new RpcChannel({ ...optionsOrProvider, waitMode: false });
      // TODO: check this hotfix (optionsOrProvider as any)? why required ?
      this.responseParser = new RPCResponseParser((optionsOrProvider as any)?.feeMarginPercentage);
    }
  }

  public fetch(method: string, params?: object, id: string | number = 0) {
    return this.channel.fetch(method, params, id);
  }

  public async getChainId() {
    return this.channel.getChainId();
  }

  public async getSpecVersion() {
    return this.channel.getSpecVersion();
  }

  public async getNonceForAddress(
    contractAddress: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ) {
    return this.channel.getNonceForAddress(contractAddress, blockIdentifier);
  }

  public async getBlock(): Promise<PendingBlock>;
  public async getBlock(blockIdentifier: 'pending'): Promise<PendingBlock>;
  public async getBlock(blockIdentifier: 'latest'): Promise<Block>;
  public async getBlock(blockIdentifier?: BlockIdentifier): Promise<GetBlockResponse>;
  public async getBlock(blockIdentifier?: BlockIdentifier) {
    return this.channel
      .getBlockWithTxHashes(blockIdentifier)
      .then(this.responseParser.parseGetBlockResponse);
  }

  /**
   * Get the most recent accepted block hash and number
   */
  public async getBlockLatestAccepted(): Promise<BlockHashAndNumber> {
    return this.channel.getBlockLatestAccepted();
  }

  /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */
  public async getBlockNumber() {
    return this.channel.getBlockNumber();
  }

  public async getBlockWithTxHashes(blockIdentifier?: BlockIdentifier) {
    return this.channel.getBlockWithTxHashes(blockIdentifier);
  }

  public async getBlockWithTxs(blockIdentifier?: BlockIdentifier) {
    return this.channel.getBlockWithTxs(blockIdentifier);
  }

  public async getBlockWithReceipts(blockIdentifier?: BlockIdentifier) {
    if (this.channel instanceof RPC06.RpcChannel)
      throw new LibraryError('Unsupported method for RPC version');

    return this.channel.getBlockWithReceipts(blockIdentifier);
  }

  public getStateUpdate = this.getBlockStateUpdate;

  public async getBlockStateUpdate(): Promise<PendingStateUpdate>;
  public async getBlockStateUpdate(blockIdentifier: 'pending'): Promise<PendingStateUpdate>;
  public async getBlockStateUpdate(blockIdentifier: 'latest'): Promise<StateUpdate>;
  public async getBlockStateUpdate(blockIdentifier?: BlockIdentifier): Promise<StateUpdateResponse>;
  public async getBlockStateUpdate(blockIdentifier?: BlockIdentifier) {
    return this.channel.getBlockStateUpdate(blockIdentifier);
  }

  public async getBlockTransactionsTraces(blockIdentifier?: BlockIdentifier) {
    return this.channel.getBlockTransactionsTraces(blockIdentifier);
  }

  public async getBlockTransactionCount(blockIdentifier?: BlockIdentifier) {
    return this.channel.getBlockTransactionCount(blockIdentifier);
  }

  /**
   * Return transactions from pending block
   * @deprecated Instead use getBlock(BlockTag.pending); (will be removed in next minor version)
   * Utility method, same result can be achieved using getBlockWithTxHashes(BlockTag.pending);
   */
  public async getPendingTransactions() {
    const { transactions } = await this.getBlockWithTxHashes(EBlockTag.PENDING).then(
      this.responseParser.parseGetBlockResponse
    );
    return Promise.all(transactions.map((it: any) => this.getTransactionByHash(it)));
  }

  public async getTransaction(txHash: BigNumberish) {
    return this.channel.getTransactionByHash(txHash);
  }

  public async getTransactionByHash(txHash: BigNumberish) {
    return this.channel.getTransactionByHash(txHash);
  }

  public async getTransactionByBlockIdAndIndex(blockIdentifier: BlockIdentifier, index: number) {
    return this.channel.getTransactionByBlockIdAndIndex(blockIdentifier, index);
  }

  public async getTransactionReceipt(txHash: BigNumberish) {
    return this.channel
      .getTransactionReceipt(txHash)
      .then(this.responseParser.parseTransactionReceipt);
  }

  public async getTransactionTrace(txHash: BigNumberish) {
    return this.channel.getTransactionTrace(txHash);
  }

  /**
   * Get the status of a transaction
   */
  public async getTransactionStatus(transactionHash: BigNumberish) {
    return this.channel.getTransactionStatus(transactionHash);
  }

  /**
   * @param invocations AccountInvocations
   * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */
  public async getSimulateTransaction(
    invocations: AccountInvocations,
    options?: getSimulateTransactionOptions
  ) {
    // can't be named simulateTransaction because of argument conflict with account
    return this.channel
      .simulateTransaction(invocations, options)
      .then((r) => this.responseParser.parseSimulateTransactionResponse(r));
  }

  public async waitForTransaction(txHash: BigNumberish, options?: waitForTransactionOptions) {
    return this.channel.waitForTransaction(txHash, options);
  }

  public async getStorageAt(
    contractAddress: BigNumberish,
    key: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ) {
    return this.channel.getStorageAt(contractAddress, key, blockIdentifier);
  }

  public async getClassHashAt(contractAddress: BigNumberish, blockIdentifier?: BlockIdentifier) {
    return this.channel.getClassHashAt(contractAddress, blockIdentifier);
  }

  public async getClassByHash(classHash: BigNumberish) {
    return this.getClass(classHash);
  }

  public async getClass(classHash: BigNumberish, blockIdentifier?: BlockIdentifier) {
    return this.channel
      .getClass(classHash, blockIdentifier)
      .then(this.responseParser.parseContractClassResponse);
  }

  public async getClassAt(contractAddress: BigNumberish, blockIdentifier?: BlockIdentifier) {
    return this.channel
      .getClassAt(contractAddress, blockIdentifier)
      .then(this.responseParser.parseContractClassResponse);
  }

  public async getContractVersion(
    contractAddress: BigNumberish,
    classHash?: undefined,
    options?: getContractVersionOptions
  ): Promise<ContractVersion>;
  public async getContractVersion(
    contractAddress: undefined,
    classHash: BigNumberish,
    options?: getContractVersionOptions
  ): Promise<ContractVersion>;

  public async getContractVersion(
    contractAddress?: BigNumberish,
    classHash?: BigNumberish,
    {
      blockIdentifier = this.channel.blockIdentifier,
      compiler = true,
    }: getContractVersionOptions = {}
  ): Promise<ContractVersion> {
    let contractClass;
    if (contractAddress) {
      contractClass = await this.getClassAt(contractAddress, blockIdentifier);
    } else if (classHash) {
      contractClass = await this.getClass(classHash, blockIdentifier);
    } else {
      throw Error('getContractVersion require contractAddress or classHash');
    }

    if (isSierra(contractClass)) {
      if (compiler) {
        const abiTest = getAbiContractVersion(contractClass.abi);
        return { cairo: '1', compiler: abiTest.compiler };
      }
      return { cairo: '1', compiler: undefined };
    }
    return { cairo: '0', compiler: '0' };
  }

  /**
   * @deprecated use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)
   */
  public async getEstimateFee(
    invocation: Invocation,
    invocationDetails: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ) {
    return this.getInvokeEstimateFee(invocation, invocationDetails, blockIdentifier, skipValidate);
  }

  public async getInvokeEstimateFee(
    invocation: Invocation,
    invocationDetails: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ) {
    return this.channel
      .getEstimateFee(
        [
          {
            type: TransactionType.INVOKE,
            ...invocation,
            ...invocationDetails,
          },
        ],
        { blockIdentifier, skipValidate }
      )
      .then((r) => this.responseParser.parseFeeEstimateResponse(r));
  }

  public async getDeclareEstimateFee(
    invocation: DeclareContractTransaction,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ) {
    return this.channel
      .getEstimateFee(
        [
          {
            type: TransactionType.DECLARE,
            ...invocation,
            ...details,
          },
        ],
        { blockIdentifier, skipValidate }
      )
      .then((r) => this.responseParser.parseFeeEstimateResponse(r));
  }

  public async getDeployAccountEstimateFee(
    invocation: DeployAccountContractTransaction,
    details: InvocationsDetailsWithNonce,
    blockIdentifier?: BlockIdentifier,
    skipValidate?: boolean
  ) {
    return this.channel
      .getEstimateFee(
        [
          {
            type: TransactionType.DEPLOY_ACCOUNT,
            ...invocation,
            ...details,
          },
        ],
        { blockIdentifier, skipValidate }
      )
      .then((r) => this.responseParser.parseFeeEstimateResponse(r));
  }

  public async getEstimateFeeBulk(
    invocations: AccountInvocations,
    options: getEstimateFeeBulkOptions
  ) {
    return this.channel
      .getEstimateFee(invocations, options)
      .then((r) => this.responseParser.parseFeeEstimateBulkResponse(r));
  }

  public async invokeFunction(
    functionInvocation: Invocation,
    details: InvocationsDetailsWithNonce
  ) {
    return this.channel.invoke(functionInvocation, details) as Promise<RPC.InvokedTransaction>;
  }

  public async declareContract(
    transaction: DeclareContractTransaction,
    details: InvocationsDetailsWithNonce
  ) {
    return this.channel.declare(transaction, details) as Promise<RPC.DeclaredTransaction>;
  }

  public async deployAccountContract(
    transaction: DeployAccountContractTransaction,
    details: InvocationsDetailsWithNonce
  ) {
    return this.channel.deployAccount(
      transaction,
      details
    ) as Promise<RPC.DeployedAccountTransaction>;
  }

  public async callContract(call: Call, blockIdentifier?: BlockIdentifier) {
    return this.channel.callContract(call, blockIdentifier);
  }

  /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */
  public async estimateMessageFee(message: RPC.L1Message, blockIdentifier?: BlockIdentifier) {
    return this.channel.estimateMessageFee(message, blockIdentifier);
  }

  /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */
  public async getSyncingStats() {
    return this.channel.getSyncingStats();
  }

  /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */
  public async getEvents(eventFilter: RPC.EventFilter) {
    return this.channel.getEvents(eventFilter);
  }
}

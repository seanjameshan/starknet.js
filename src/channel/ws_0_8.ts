import type { SPEC } from '@starknet-io/types-js';
// import type { BLOCK_HEADER } from '@starknet-io/types-js';
import { WebSocket } from 'isows';

import { BigNumberish, BlockIdentifier } from '../types';
import { JRPC } from '../types/api';
import { WebSocketEvent } from '../types/api/jsonrpc';
import { stringify } from '../utils/json';
import { bigNumberishArrayToHexadecimalStringArray, toHex } from '../utils/num';
import { Block } from '../utils/provider';
import { WebSocketChannelInterface, WebSocketOptions } from './ws/interface';

export type SUBSCRIPTION_ID = number;

export type SUBSCRIPTION_RESULT = { subscription_id: SUBSCRIPTION_ID };

export type SubscriptionNewHeadsResponse = {
  subscription_id: SUBSCRIPTION_ID;
  result: SPEC.BLOCK_HEADER;
};

export type SubscriptionEventsResponse = {
  subscription_id: SUBSCRIPTION_ID;
  result: SPEC.EMITTED_EVENT;
};

export type SubscriptionTransactionsStatusResponse = {
  subscription_id: SUBSCRIPTION_ID;
  result: SPEC.NEW_TXN_STATUS;
};

export type SubscriptionPendingTransactionsResponse = {
  subscription_id: SUBSCRIPTION_ID;
  result: SPEC.TXN_HASH | SPEC.TXN;
};

export const WSSubscriptions = {
  NEW_HEADS: 'newHeads',
  EVENTS: 'events',
  TRANSACTION_STATUS: 'transactionStatus',
  PENDING_TRANSACTION: 'pendingTransactions',
} as const;

// import { WebSocket } from 'ws';

/**
 * WebSocket channel provide communication with Starknet node over long-lived socket connection
 */
export class WebSocketChannel implements WebSocketChannelInterface {
  /**
   * WEbsocket RPC Node URL
   * @example 'wss://starknet-node.io/rpc/v0_8'
   */
  public nodeUrl: string;

  // public headers: object;

  // readonly retries: number;

  // public requestId: number;

  // readonly blockIdentifier: BlockIdentifier;

  // private chainId?: StarknetChainId;

  // private specVersion?: string;

  // private transactionRetryIntervalFallback?: number;

  // readonly waitMode: Boolean; // behave like web2 rpc and return when tx is processed

  // private batchClient?: BatchClient;

  /**
   * ws library object
   */
  public websocket: WebSocket;

  /**
   * Assign implementation method to get 'starknet block heads'
   */
  public onsNewHeads: (this: WebSocketChannel, data: SubscriptionNewHeadsResponse) => any =
    () => {};

  /**
   * Assign implementation method to get 'starknet events'
   */
  public onEvents: (this: WebSocketChannel, data: SubscriptionEventsResponse) => any = () => {};

  /**
   * Assign method to get 'starknet transactions status'
   */
  public onTransactionStatus: (
    this: WebSocketChannel,
    data: SubscriptionTransactionsStatusResponse
  ) => any = () => {};

  /**
   * Assign implementation method to get 'starknet pending transactions (mempool)'
   */
  public onPendingTransaction: (
    this: WebSocketChannel,
    data: SubscriptionPendingTransactionsResponse
  ) => any = () => {};

  /**
   * Assign implementation to this method to listen open Event
   */
  public onOpen: (this: WebSocketChannel, ev: Event) => any = () => {};

  /**
   * Assign implementation to this method to listen close CloseEvent
   */
  public onClose: (this: WebSocketChannel, ev: CloseEvent) => any = () => {};

  /**
   * Assign implementation to this method to listen message MessageEvent
   */
  public onMessage: (this: WebSocketChannel, ev: MessageEvent<any>) => any = () => {};

  /**
   * Assign implementation to this method to listen error Event
   */
  public onError: (this: WebSocketChannel, ev: Event) => any = () => {};

  /**
   * Assign implementation to this method to listen unsubscription
   */
  public onUnsubscribe: (this: WebSocketChannel, _subscriptionId: number) => any = () => {};

  private onUnsubscribeLocal: (this: WebSocketChannel, _subscriptionId: number) => any = () => {};

  /**
   * JSON RPC latest sent message id
   * expecting receiving message to contain same id
   */
  private sendId: number = 0;

  /**
   * subscriptions id
   */
  readonly subscriptions: Map<string, number> = new Map();

  /**
   * subscriptions id
   */
  public newHeadsSubscriptionId?: number;

  /**
   * subscriptions id
   */
  public transactionStatusSubscriptionId?: number;

  /**
   * subscriptions id
   */
  public pendingTransactionSubscriptionId?: number;

  /**
   * subscriptions id
   */
  public eventsSubscriptionId?: number;

  /**
   * Construct class and event listeners
   * @param options WebSocketOptions
   */
  constructor(options: WebSocketOptions = {}) {
    // provided existing websocket
    const nodeUrl = options.nodeUrl || 'http://localhost:3000 '; // TODO: implement getDefaultNodeUrl default node when defined by providers?
    this.nodeUrl = options.websocket ? options.websocket.url : nodeUrl;
    this.websocket = options.websocket ? options.websocket : new WebSocket(nodeUrl);

    this.websocket.addEventListener('open', this.onOpen.bind(this));
    this.websocket.addEventListener('close', this.onCloseProxy.bind(this));
    this.websocket.addEventListener('message', this.onMessageProxy.bind(this));
    this.websocket.addEventListener('error', this.onError.bind(this));
  }

  private idResolver(id?: number) {
    // unmanaged user set id
    if (id) return id;
    // managed id, intentional return old and than increment
    // eslint-disable-next-line no-plusplus
    return this.sendId++;
  }

  /**
   * Send data over open ws connection
   * * this would only send data on the line without awaiting 'response message'
   * @example
   * ```typescript
   * const sentId = await this.send('starknet_method', params);
   * ```
   */
  public send(method: string, params?: object, id?: number) {
    if (!this.isConnected()) {
      throw Error('WebSocketChannel.send() fail due to socket disconnected');
    }
    const usedId = this.idResolver(id);
    const rpcRequestBody: JRPC.RequestBody = {
      id: usedId,
      jsonrpc: '2.0',
      method,
      ...(params && { params }),
    };
    // Stringify should remove undefined params
    this.websocket.send(stringify(rpcRequestBody));
    return usedId;
  }

  /**
   * Send request and receive response over ws line
   * This method abstract ws messages into request/response model
   * @param method rpc method name
   * @param params rpc method parameters
   * @example
   * ```typescript
   * const response = await this.sendReceive('starknet_method', params);
   * ```
   */
  public sendReceive(
    method: string,
    params?: {}
  ): Promise<MessageEvent['data']['result'] | Error | Event> {
    const sendId = this.send(method, params);

    return new Promise((resolve, reject) => {
      if (!this.websocket) return;
      this.websocket.onmessage = ({ data }) => {
        const message: JRPC.ResponseBody = JSON.parse(data);
        if (message.id === sendId) {
          if ('result' in message) {
            resolve(message.result);
          } else {
            reject(Error(`error on ${method}, ${message.error}`));
          }
        }
        // console.log(`data from ${method} response`, data);
      };
      this.websocket.onerror = reject;
    });
  }

  /**
   * Helper to check connection is open
   */
  public isConnected() {
    return this.websocket.readyState === WebSocket.OPEN;
  }

  /**
   * await while websocket is connected
   * * could be used to block the flow until websocket is open
   * @example
   * ```typescript
   * const readyState = await webSocketChannel.waitForConnection();
   * ```
   */
  public async waitForConnection(): Promise<typeof this.websocket.readyState> {
    // Wait websocket to connect
    if (this.websocket.readyState !== WebSocket.OPEN) {
      return new Promise((resolve, reject) => {
        if (!this.websocket) return;
        this.websocket.onopen = () => resolve(this.websocket.readyState);
        this.websocket.onerror = reject;
      });
    }

    return this.websocket.readyState;
  }

  /**
   * Disconnect the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
   */
  public disconnect(code?: number, reason?: string) {
    this.websocket.close(code, reason);
  }

  /**
   * await while websocket is disconnected
   * @example
   * ```typescript
   * const readyState = await webSocketChannel.waitForDisconnection();
   * ```
   */
  public async waitForDisconnection(): Promise<typeof this.websocket.readyState | Event> {
    // Wait websocket to disconnect
    if (this.websocket.readyState !== WebSocket.CLOSED) {
      return new Promise((resolve, reject) => {
        if (!this.websocket) return;
        this.websocket.onclose = () => resolve(this.websocket.readyState);
        this.websocket.onerror = reject;
      });
    }

    return this.websocket.readyState;
  }

  /**
   * Unsubscribe from starknet subscription
   * @param subscriptionId
   * @param ref internal usage, only for managed subscriptions
   */
  private async unsubscribe(subscriptionId: number, ref?: string) {
    const status = (await this.sendReceive('starknet_unsubscribe', {
      subscription_id: subscriptionId,
    })) as boolean;
    if (status) {
      if (ref) {
        this.subscriptions.delete(ref);
      }
      this.onUnsubscribeLocal(subscriptionId);
      this.onUnsubscribe(subscriptionId);
    }
    return status;
  }

  /**
   * await while subscription is unsubscribed
   * @param forSubscriptionId if defined trigger on subscriptionId else trigger on any
   * @returns subscriptionId | onerror(Event)
   * @example
   * ```typescript
   * const subscriptionId = await webSocketChannel.waitForUnsubscription();
   * ```
   */
  public async waitForUnsubscription(forSubscriptionId?: number) {
    // unsubscribe
    return new Promise((resolve, reject) => {
      if (!this.websocket) return;
      this.onUnsubscribeLocal = (subscriptionId) => {
        if (forSubscriptionId === undefined) {
          resolve(subscriptionId);
        } else if (subscriptionId === forSubscriptionId) {
          resolve(subscriptionId);
        }
      };
      this.websocket.onerror = reject;
    });
  }

  /**
   * Reconnect re-create this.websocket instance
   */
  public reconnect() {
    this.websocket = new WebSocket(this.nodeUrl);

    this.websocket.addEventListener('open', this.onOpen.bind(this));
    this.websocket.addEventListener('close', this.onCloseProxy.bind(this));
    this.websocket.addEventListener('message', this.onMessageProxy.bind(this));
    this.websocket.addEventListener('error', this.onError.bind(this));
  }

  private reconnectAndUpdate() {
    this.reconnect(); // TODO: attempt n reconnection times
    // TODO: replay data from last block received (including it) up to latest
  }

  private onCloseProxy(ev: CloseEvent) {
    this.websocket.removeEventListener('open', this.onOpen);
    this.websocket.removeEventListener('close', this.onCloseProxy);
    this.websocket.removeEventListener('message', this.onMessageProxy);
    this.websocket.removeEventListener('error', this.onError);

    this.onClose(ev);
  }

  private onMessageProxy(event: MessageEvent<any>) {
    const message: WebSocketEvent = JSON.parse(event.data);
    // console.log('onMessage:', data);
    switch (message.method) {
      case 'starknet_subscriptionReorg':
        throw Error('Reorg'); // todo: implement what to do
        break;
      case 'starknet_subscriptionNewHeads':
        this.onsNewHeads(message.params as SubscriptionNewHeadsResponse);
        break;
      case 'starknet_subscriptionEvents':
        this.onEvents(message.params as SubscriptionEventsResponse);
        break;
      case 'starknet_subscriptionTransactionsStatus':
        this.onTransactionStatus(message.params as SubscriptionTransactionsStatusResponse);
        break;
      case 'starknet_subscriptionPendingTransactions':
        this.onPendingTransaction(message.params as SubscriptionPendingTransactionsResponse);
        break;
      default:
        break;
    }
    this.onMessage(event);
  }

  // TODO: Add/Test ping service

  /**
   * subscribe to new block heads
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribeNewHeadsUnmanaged(blockIdentifier?: BlockIdentifier) {
    const block_id = blockIdentifier ? new Block(blockIdentifier).identifier : undefined;

    return this.sendReceive('starknet_subscribeNewHeads', {
      ...{ block: block_id },
    }) as Promise<SUBSCRIPTION_RESULT>;
  }

  public async subscribeNewHeads(blockIdentifier?: BlockIdentifier) {
    if (this.subscriptions.get(WSSubscriptions.NEW_HEADS)) return false;
    const subId = (await this.subscribeNewHeadsUnmanaged(blockIdentifier)).subscription_id;
    this.subscriptions.set(WSSubscriptions.NEW_HEADS, subId);
    return subId;
  }

  /**
   * Unsubscribe managed newHeads subscription
   * @returns boolean
   */
  public async unsubscribeNewHeads() {
    const subId = this.subscriptions.get(WSSubscriptions.NEW_HEADS);
    if (!subId) throw Error('There is no subscription on this event');
    return this.unsubscribe(subId, WSSubscriptions.NEW_HEADS);
  }

  /**
   * subscribe to new block heads
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribeEventsUnmanaged(
    fromAddress?: BigNumberish,
    keys?: string[][],
    blockIdentifier?: BlockIdentifier
  ) {
    const block_id = blockIdentifier ? new Block(blockIdentifier).identifier : undefined;
    return this.sendReceive('starknet_subscribeEvents', {
      ...{ from_address: fromAddress && toHex(fromAddress) },
      ...{ keys },
      ...{ block: block_id },
    }) as Promise<SUBSCRIPTION_RESULT>;
  }

  /**
   * subscribe to new block heads
   */
  public async subscribeEvents(
    fromAddress?: BigNumberish,
    keys?: string[][],
    blockIdentifier?: BlockIdentifier
  ) {
    if (this.eventsSubscriptionId) return false;
    // eslint-disable-next-line prefer-rest-params
    this.eventsSubscriptionId = (
      await this.subscribeEventsUnmanaged(fromAddress, keys, blockIdentifier)
    ).subscription_id;

    return this.eventsSubscriptionId;
  }

  /**
   * Unsubscribe managed 'starknet events' subscription
   * @returns boolean
   */
  public unsubscribeEvents() {
    if (!this.eventsSubscriptionId) throw Error('There is no subscription ID for this event');
    return this.unsubscribe(this.eventsSubscriptionId, 'eventsSubscriptionId');
  }

  /**
   * subscribe to transaction status
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribeTransactionStatusUnmanaged(
    transactionHash: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ) {
    const transaction_hash = toHex(transactionHash);
    const block_id = blockIdentifier ? new Block(blockIdentifier).identifier : undefined;
    return this.sendReceive('starknet_subscribeTransactionStatus', {
      transaction_hash,
      ...{ block: block_id },
    }) as Promise<SUBSCRIPTION_RESULT>;
  }

  /**
   * subscribe to transaction status
   */
  public async subscribeTransactionStatus(
    transactionHash: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ) {
    if (this.transactionStatusSubscriptionId) return false;
    // eslint-disable-next-line no-param-reassign
    this.transactionStatusSubscriptionId = (
      await this.subscribeTransactionStatusUnmanaged(transactionHash, blockIdentifier)
    ).subscription_id;
    return this.transactionStatusSubscriptionId;
  }

  /**
   * unsubscribe managed transaction status subscription
   */
  public async unsubscribeTransactionStatus() {
    if (!this.transactionStatusSubscriptionId)
      throw Error('There is no subscription ID for this event');
    return this.unsubscribe(
      this.transactionStatusSubscriptionId,
      'transactionStatusSubscriptionId'
    );
  }

  /**
   * subscribe to pending transactions (mempool)
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribePendingTransactionUnmanaged(
    transactionDetails?: boolean,
    senderAddress?: BigNumberish[]
  ) {
    return this.sendReceive('starknet_subscribePendingTransactions', {
      ...{ transaction_details: transactionDetails },
      ...{
        sender_address: senderAddress && bigNumberishArrayToHexadecimalStringArray(senderAddress),
      },
    }) as Promise<SUBSCRIPTION_RESULT>;
  }

  /**
   * subscribe to pending transactions (mempool)
   */
  public async subscribePendingTransaction(
    transactionDetails?: boolean,
    senderAddress?: BigNumberish[]
  ) {
    if (this.pendingTransactionSubscriptionId) return false;
    // eslint-disable-next-line no-param-reassign
    this.pendingTransactionSubscriptionId = (
      await this.subscribePendingTransactionUnmanaged(transactionDetails, senderAddress)
    ).subscription_id;
    return this.pendingTransactionSubscriptionId;
  }

  /**
   * unsubscribe managed pending transaction subscription
   */
  public async unsubscribePendingTransaction() {
    if (!this.pendingTransactionSubscriptionId)
      throw Error('There is no subscription ID for this event');
    return this.unsubscribe(
      this.pendingTransactionSubscriptionId,
      'pendingTransactionSubscriptionId'
    );
  }
}

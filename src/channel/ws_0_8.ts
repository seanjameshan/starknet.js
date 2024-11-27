import { WebSocket } from 'isows';
import type {
  Methods,
  SUBSCRIPTION_ID,
  SubscriptionEventsResponse,
  SubscriptionNewHeadsResponse,
  SubscriptionPendingTransactionsResponse,
  SubscriptionReorgResponse,
  SubscriptionTransactionsStatusResponse,
  WebSocketEvents,
} from 'starknet-types-08';

import { BigNumberish, BlockIdentifier } from '../types';
import { JRPC } from '../types/api';
import { WebSocketEvent } from '../types/api/jsonrpc';
import { stringify } from '../utils/json';
import { bigNumberishArrayToHexadecimalStringArray, toHex } from '../utils/num';
import { Block } from '../utils/provider';

export const WSSubscriptions = {
  NEW_HEADS: 'newHeads',
  EVENTS: 'events',
  TRANSACTION_STATUS: 'transactionStatus',
  PENDING_TRANSACTION: 'pendingTransactions',
} as const;

export type WebSocketOptions = {
  /**
   * websocket node url address
   * @example 'ws://www.host.com/path'
   * @default public websocket enabled starknet node
   */
  nodeUrl?: string;
  /**
   * You can provide websocket object defined by protocol standard else library will use default 'isows'/'ws' package
   * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket#protocols .
   * https://www.rfc-editor.org/rfc/rfc6455.html#section-1 .
   * @default WebSocket
   */
  websocket?: WebSocket;
};

/**
 * WebSocket channel provides communication with Starknet node over long-lived socket connection
 */
export class WebSocketChannel {
  /**
   * WebSocket RPC Node URL
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
   * Assign implementation method to get 'on reorg event data'
   * @example
   * ```typescript
   * webSocketChannel.onReorg = async function (data) {
   *  // ... do something when reorg happens
   * }
   * ```
   */
  public onReorg: (this: WebSocketChannel, data: SubscriptionReorgResponse) => any = () => {};

  /**
   * Assign implementation method to get 'starknet block heads'
   * @example
   * ```typescript
   * webSocketChannel.onNewHeads = async function (data) {
   *  // ... do something with head data
   * }
   * ```
   */
  public onNewHeads: (this: WebSocketChannel, data: SubscriptionNewHeadsResponse) => any = () => {};

  /**
   * Assign implementation method to get 'starknet events'
   * @example
   * ```typescript
   * webSocketChannel.onEvents = async function (data) {
   *  // ... do something with event data
   * }
   * ```
   */
  public onEvents: (this: WebSocketChannel, data: SubscriptionEventsResponse) => any = () => {};

  /**
   * Assign method to get 'starknet transactions status'
   * @example
   * ```typescript
   * webSocketChannel.onTransactionStatus = async function (data) {
   *  // ... do something with tx status data
   * }
   * ```
   */
  public onTransactionStatus: (
    this: WebSocketChannel,
    data: SubscriptionTransactionsStatusResponse
  ) => any = () => {};

  /**
   * Assign implementation method to get 'starknet pending transactions (mempool)'
   * @example
   * ```typescript
   * webSocketChannel.onPendingTransaction = async function (data) {
   *  // ... do something with pending tx data
   * }
   * ```
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
   * subscriptions ids
   * mapped by keys WSSubscriptions
   */
  readonly subscriptions: Map<string, number> = new Map();

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
  public sendReceive<T extends keyof Methods>(
    method: T,
    params?: Methods[T]['params']
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
        this.websocket.onerror = (error) => {
          return reject(error);
        };
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
  public async unsubscribe(subscriptionId: number, ref?: string) {
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

  // TODO: Add/Test ping service. It seems this work out of the box from pathfinder. If net disc. it will auto replay.
  private reconnectAndUpdate() {
    this.reconnect();
    // TODO: attempt n reconnection times
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
    const eventName = message.method as keyof WebSocketEvents;

    switch (eventName) {
      case 'starknet_subscriptionReorg':
        this.onReorg(message.params as SubscriptionReorgResponse);
        break;
      case 'starknet_subscriptionNewHeads':
        this.onNewHeads(message.params as SubscriptionNewHeadsResponse);
        break;
      case 'starknet_subscriptionEvents':
        this.onEvents(message.params as SubscriptionEventsResponse);
        break;
      case 'starknet_subscriptionTransactionStatus':
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

  /**
   * subscribe to new block heads
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribeNewHeadsUnmanaged(blockIdentifier?: BlockIdentifier) {
    const block_id = blockIdentifier ? new Block(blockIdentifier).identifier : undefined;

    return this.sendReceive('starknet_subscribeNewHeads', {
      ...{ block_id },
    }) as Promise<SUBSCRIPTION_ID>;
  }

  /**
   * subscribe to new block heads
   */
  public async subscribeNewHeads(blockIdentifier?: BlockIdentifier) {
    if (this.subscriptions.get(WSSubscriptions.NEW_HEADS)) return false;
    const subId = await this.subscribeNewHeadsUnmanaged(blockIdentifier);
    this.subscriptions.set(WSSubscriptions.NEW_HEADS, subId);
    return subId;
  }

  /**
   * Unsubscribe newHeads subscription
   */
  public async unsubscribeNewHeads() {
    const subId = this.subscriptions.get(WSSubscriptions.NEW_HEADS);
    if (!subId) throw Error('There is no subscription on this event');
    return this.unsubscribe(subId, WSSubscriptions.NEW_HEADS);
  }

  /**
   * subscribe to 'starknet events'
   * * you can subscribe to this event multiple times and you need to manage subscriptions manually
   */
  public subscribeEventsUnmanaged(
    fromAddress?: BigNumberish,
    keys?: string[][],
    blockIdentifier?: BlockIdentifier
  ) {
    const block_id = blockIdentifier ? new Block(blockIdentifier).identifier : undefined;
    return this.sendReceive('starknet_subscribeEvents', {
      ...{ from_address: fromAddress !== undefined ? toHex(fromAddress) : undefined },
      ...{ keys },
      ...{ block_id },
    }) as Promise<SUBSCRIPTION_ID>;
  }

  /**
   * subscribe to 'starknet events'
   */
  public async subscribeEvents(
    fromAddress?: BigNumberish,
    keys?: string[][],
    blockIdentifier?: BlockIdentifier
  ) {
    if (this.subscriptions.get(WSSubscriptions.EVENTS)) return false;
    // eslint-disable-next-line prefer-rest-params
    const subId = await this.subscribeEventsUnmanaged(fromAddress, keys, blockIdentifier);
    this.subscriptions.set(WSSubscriptions.EVENTS, subId);
    return subId;
  }

  /**
   * Unsubscribe 'starknet events' subscription
   */
  public unsubscribeEvents() {
    const subId = this.subscriptions.get(WSSubscriptions.EVENTS);
    if (!subId) throw Error('There is no subscription ID for this event');
    return this.unsubscribe(subId, WSSubscriptions.EVENTS);
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
      ...{ block_id },
    }) as Promise<SUBSCRIPTION_ID>;
  }

  /**
   * subscribe to transaction status
   */
  public async subscribeTransactionStatus(
    transactionHash: BigNumberish,
    blockIdentifier?: BlockIdentifier
  ) {
    if (this.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS)) return false;
    const subId = await this.subscribeTransactionStatusUnmanaged(transactionHash, blockIdentifier);
    this.subscriptions.set(WSSubscriptions.TRANSACTION_STATUS, subId);
    return subId;
  }

  /**
   * unsubscribe 'transaction status' subscription
   */
  public async unsubscribeTransactionStatus() {
    const subId = this.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS);
    if (!subId) throw Error('There is no subscription ID for this event');
    return this.unsubscribe(subId, WSSubscriptions.TRANSACTION_STATUS);
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
    }) as Promise<SUBSCRIPTION_ID>;
  }

  /**
   * subscribe to pending transactions (mempool)
   */
  public async subscribePendingTransaction(
    transactionDetails?: boolean,
    senderAddress?: BigNumberish[]
  ) {
    if (this.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS)) return false;
    // eslint-disable-next-line no-param-reassign
    const subId = await this.subscribePendingTransactionUnmanaged(
      transactionDetails,
      senderAddress
    );
    this.subscriptions.set(WSSubscriptions.PENDING_TRANSACTION, subId);
    return subId;
  }

  /**
   * unsubscribe 'pending transaction' subscription
   */
  public async unsubscribePendingTransaction() {
    const subId = this.subscriptions.get(WSSubscriptions.PENDING_TRANSACTION);
    if (!subId) throw Error('There is no subscription ID for this event');
    return this.unsubscribe(subId, WSSubscriptions.PENDING_TRANSACTION);
  }
}

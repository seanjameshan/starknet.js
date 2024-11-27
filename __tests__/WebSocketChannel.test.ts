import { WebSocket } from 'isows';

import { Provider, WSSubscriptions, WebSocketChannel } from '../src';
import { StarknetChainId } from '../src/constants';
import { getTestAccount, getTestProvider } from './config/fixtures';

const nodeUrl = 'wss://sepolia-pathfinder-rpc.spaceshard.io/rpc/v0_8';

describe('websocket specific endpoints - pathfinder test', () => {
  // account provider
  const provider = new Provider(getTestProvider());
  const account = getTestAccount(provider);

  // websocket
  let webSocketChannel: WebSocketChannel;

  beforeAll(async () => {
    webSocketChannel = new WebSocketChannel({ nodeUrl });
    expect(webSocketChannel.isConnected()).toBe(false);
    try {
      await webSocketChannel.waitForConnection();
    } catch (error: any) {
      console.log(error.message);
    }
    expect(webSocketChannel.isConnected()).toBe(true);
  });

  afterAll(async () => {
    expect(webSocketChannel.isConnected()).toBe(true);
    webSocketChannel.disconnect();
    await expect(webSocketChannel.waitForDisconnection()).resolves.toBe(WebSocket.CLOSED);
  });

  test('Test WS Error and edge cases', async () => {
    webSocketChannel.disconnect();

    // should fail as disconnected
    await expect(webSocketChannel.subscribeNewHeads()).rejects.toThrow();

    // should reconnect
    webSocketChannel.reconnect();
    await webSocketChannel.waitForConnection();

    // should succeed after reconnection
    await expect(webSocketChannel.subscribeNewHeads()).resolves.toEqual(expect.any(Number));

    // should fail because already subscribed
    await expect(webSocketChannel.subscribeNewHeads()).resolves.toBe(false);
  });

  test('onUnsubscribe with unsubscribeNewHeads', async () => {
    const mockOnUnsubscribe = jest.fn().mockImplementation((subId: number) => {
      expect(subId).toEqual(expect.any(Number));
    });
    webSocketChannel.onUnsubscribe = mockOnUnsubscribe;

    await webSocketChannel.subscribeNewHeads();
    await expect(webSocketChannel.unsubscribeNewHeads()).resolves.toBe(true);
    await expect(webSocketChannel.unsubscribeNewHeads()).rejects.toThrow();

    expect(mockOnUnsubscribe).toHaveBeenCalled();
    expect(webSocketChannel.subscriptions.has(WSSubscriptions.NEW_HEADS)).toBeFalsy();
  });

  test('Test subscribeNewHeads', async () => {
    await webSocketChannel.subscribeNewHeads();

    let i = 0;
    webSocketChannel.onNewHeads = async function (data) {
      expect(this).toBeInstanceOf(WebSocketChannel);
      i += 1;
      // TODO : Add data format validation
      expect(data.result).toBeDefined();
      if (i === 2) {
        const status = await webSocketChannel.unsubscribeNewHeads();
        expect(status).toBe(true);
      }
    };
    const expectedId = webSocketChannel.subscriptions.get(WSSubscriptions.NEW_HEADS);
    const subscriptionId = await webSocketChannel.waitForUnsubscription(expectedId);
    expect(subscriptionId).toBe(expectedId);
    expect(webSocketChannel.subscriptions.get(WSSubscriptions.NEW_HEADS)).toBe(undefined);
  });

  test('Test subscribeEvents', async () => {
    await webSocketChannel.subscribeEvents();

    let i = 0;
    webSocketChannel.onEvents = async (data) => {
      i += 1;
      // TODO : Add data format validation
      expect(data.result).toBeDefined();
      if (i === 5) {
        const status = await webSocketChannel.unsubscribeEvents();
        expect(status).toBe(true);
      }
    };
    const expectedId = webSocketChannel.subscriptions.get(WSSubscriptions.EVENTS);
    const subscriptionId = await webSocketChannel.waitForUnsubscription(expectedId);
    expect(subscriptionId).toBe(expectedId);
    expect(webSocketChannel.subscriptions.get(WSSubscriptions.EVENTS)).toBe(undefined);
  });

  test('Test subscribePendingTransaction', async () => {
    await webSocketChannel.subscribePendingTransaction(true);

    let i = 0;
    webSocketChannel.onPendingTransaction = async (data) => {
      i += 1;
      // TODO : Add data format validation
      expect(data.result).toBeDefined();
      if (i === 5) {
        const status = await webSocketChannel.unsubscribePendingTransaction();
        expect(status).toBe(true);
      }
    };
    const expectedId = webSocketChannel.subscriptions.get(WSSubscriptions.PENDING_TRANSACTION);
    const subscriptionId = await webSocketChannel.waitForUnsubscription(expectedId);
    expect(subscriptionId).toBe(expectedId);
    expect(webSocketChannel.subscriptions.get(WSSubscriptions.PENDING_TRANSACTION)).toBe(undefined);
  });

  test('Test subscribeTransactionStatus', async () => {
    const { transaction_hash } = await account.execute({
      contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
      entrypoint: 'transfer',
      calldata: [account.address, '10', '0'],
    });

    let i = 0;
    webSocketChannel.onTransactionStatus = async (data) => {
      i += 1;
      // TODO : Add data format validation
      expect(data.result).toBeDefined();
      if (i >= 1) {
        const status = await webSocketChannel.unsubscribeTransactionStatus();
        expect(status).toBe(true);
      }
    };

    const subid = await webSocketChannel.subscribeTransactionStatus(transaction_hash);
    expect(subid).toEqual(expect.any(Number));
    const expectedId = webSocketChannel.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS);
    const subscriptionId = await webSocketChannel.waitForUnsubscription(expectedId);
    expect(subscriptionId).toEqual(expectedId);
    expect(webSocketChannel.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS)).toBe(undefined);
  });

  test('Test subscribeTransactionStatus and block_id', async () => {
    const latestBlock = await account.getBlockLatestAccepted();
    const blockId = latestBlock.block_number - 5;

    const { transaction_hash } = await account.execute({
      contractAddress: '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
      entrypoint: 'transfer',
      calldata: [account.address, '10', '0'],
    });

    let i = 0;
    webSocketChannel.onTransactionStatus = async (data) => {
      i += 1;
      // TODO : Add data format validation
      expect(data.result).toBeDefined();
      if (i >= 1) {
        const status = await webSocketChannel.unsubscribeTransactionStatus();
        expect(status).toBe(true);
      }
    };

    const subid = await webSocketChannel.subscribeTransactionStatus(transaction_hash, blockId);
    expect(subid).toEqual(expect.any(Number));
    const expectedId = webSocketChannel.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS);
    const subscriptionId = await webSocketChannel.waitForUnsubscription(expectedId);
    expect(subscriptionId).toEqual(expectedId);
    expect(webSocketChannel.subscriptions.get(WSSubscriptions.TRANSACTION_STATUS)).toBe(undefined);
  });
});

describe('websocket regular endpoints - pathfinder test', () => {
  let webSocketChannel: WebSocketChannel;

  beforeAll(async () => {
    webSocketChannel = new WebSocketChannel({ nodeUrl });
    expect(webSocketChannel.isConnected()).toBe(false);
    const status = await webSocketChannel.waitForConnection();
    expect(status).toBe(WebSocket.OPEN);
  });

  afterAll(async () => {
    expect(webSocketChannel.isConnected()).toBe(true);
    webSocketChannel.disconnect();
  });

  test('regular rpc endpoint', async () => {
    const response = await webSocketChannel.sendReceive('starknet_chainId');
    expect(response).toBe(StarknetChainId.SN_SEPOLIA);
  });
});

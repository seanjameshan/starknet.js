---
sidebar_position: 3
---

# Channel (WebSocket, Rpc)

Channel is the lowest purest object you can use to interact with the network.
Channel represent implementation of the Starknet specification in it's strictly defined form.

## WebSocket Channel

WebSocket channel provide convenient way to establish websocket connection to the [Starknet RPC Node](https://www.starknet.io/fullnodes-rpc-services/).

Ensure that you are using node supporting the required Rpc spec >= v0.8.0. Details regarding Starknet Nodes and supported RPC versions could be found on each node github/page.

Websocket Channel implements specification methods defined by [@starknet-io/types-js](https://github.com/starknet-io/types-js/blob/b7d38ca30a1def28e89370068efff81b3a3062b7/src/api/methods.ts#L421)

### Import

```typescript
import { WebSocketChannel } from 'starknet';
```

### Create instance

```typescript
// crete new ws channel
const webSocketChannel = new WebSocketChannel({
  nodeUrl: 'wss://sepolia-pathfinder-rpc.server.io/rpc/v0_8',
});

// ensure ws channel is open
await webSocketChannel.waitForConnection();

// ... use webSocketChannel
```

### Usage

```typescript
// subscribe to event
await webSocketChannel.subscribeNewHeads();

// define listener method
webSocketChannel.onNewHeads = async function (data) {
  //... on event new head data
};
```

Available subscriptions are:

- subscribeNewHeads
- subscribeEvents
- subscribeTransactionStatus
- subscribePendingTransaction

Complete API can be found on [websocket API section](/docs/next/API/classes/WebSocketChannel)

### Unmanaged subscriptions

Websocket channel manage subscription id, but it is limited to one subscription per event type. If you need multiple subscriptions of the same type use \*Unmanaged methods and handle subscriptions manually.

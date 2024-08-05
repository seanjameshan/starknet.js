---
id: 'Provider'
title: 'Class: Provider'
sidebar_label: 'Provider'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `RpcProvider`\<`this`\> & `StarknetId`\<`this`\>

  ↳ **`Provider`**

  ↳↳ [`Account`](Account.md)

## Constructors

### constructor

• **new Provider**(`optionsOrProvider?`): [`Provider`](Provider.md)

#### Parameters

| Name                 | Type                                                                                                                              |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `optionsOrProvider?` | [`RpcProviderOptions`](../namespaces/types.md#rpcprovideroptions) \| [`ProviderInterface`](ProviderInterface.md) \| `RpcProvider` |

#### Returns

[`Provider`](Provider.md)

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).constructor

#### Defined in

[src/provider/rpc.ts:50](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L50)

• **new Provider**(): [`Provider`](Provider.md)

#### Returns

[`Provider`](Provider.md)

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).constructor

## Properties

### responseParser

• **responseParser**: [`RPCResponseParser`](RPCResponseParser.md)

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).responseParser

#### Defined in

[src/provider/rpc.ts:46](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L46)

---

### channel

• **channel**: [`RpcChannel`](RPC06.RpcChannel.md) \| [`RpcChannel`](RPC07.RpcChannel.md)

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).channel

#### Defined in

[src/provider/rpc.ts:48](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L48)

---

### getStateUpdate

• **getStateUpdate**: () => `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>(`blockIdentifier`: `"pending"`) => `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>(`blockIdentifier`: `"latest"`) => `Promise`\<\{ `block_hash`: `string` ; `old_root`: `string` ; `new_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>(`blockIdentifier?`: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)) => `Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

#### Type declaration

▸ (): `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

##### Returns

`Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

▸ (`blockIdentifier`): `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

##### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `blockIdentifier` | `"pending"` |

##### Returns

`Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

▸ (`blockIdentifier`): `Promise`\<\{ `block_hash`: `string` ; `old_root`: `string` ; `new_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

##### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `blockIdentifier` | `"latest"` |

##### Returns

`Promise`\<\{ `block_hash`: `string` ; `old_root`: `string` ; `new_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

▸ (`blockIdentifier?`): `Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

##### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

##### Returns

`Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStateUpdate

#### Defined in

[src/provider/rpc.ts:192](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L192)

## Methods

### getStarkName

▸ **getStarkName**(`provider`, `address`, `StarknetIdContract?`): `Promise`\<`string`\>

#### Parameters

| Name                  | Type                                                  |
| :-------------------- | :---------------------------------------------------- |
| `provider`            | [`ProviderInterface`](ProviderInterface.md)           |
| `address`             | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?` | `string`                                              |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStarkName

#### Defined in

[src/provider/extensions/starknetId.ts:61](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L61)

---

### getAddressFromStarkName

▸ **getAddressFromStarkName**(`provider`, `name`, `StarknetIdContract?`): `Promise`\<`string`\>

#### Parameters

| Name                  | Type                                        |
| :-------------------- | :------------------------------------------ |
| `provider`            | [`ProviderInterface`](ProviderInterface.md) |
| `name`                | `string`                                    |
| `StarknetIdContract?` | `string`                                    |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getAddressFromStarkName

#### Defined in

[src/provider/extensions/starknetId.ts:95](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L95)

---

### getStarkProfile

▸ **getStarkProfile**(`provider`, `address`, `StarknetIdContract?`, `StarknetIdIdentityContract?`, `StarknetIdVerifierContract?`, `StarknetIdPfpContract?`, `StarknetIdPopContract?`, `StarknetIdMulticallContract?`): `Promise`\<[`StarkProfile`](../namespaces/types.md#starkprofile)\>

#### Parameters

| Name                           | Type                                                  |
| :----------------------------- | :---------------------------------------------------- |
| `provider`                     | [`ProviderInterface`](ProviderInterface.md)           |
| `address`                      | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?`          | `string`                                              |
| `StarknetIdIdentityContract?`  | `string`                                              |
| `StarknetIdVerifierContract?`  | `string`                                              |
| `StarknetIdPfpContract?`       | `string`                                              |
| `StarknetIdPopContract?`       | `string`                                              |
| `StarknetIdMulticallContract?` | `string`                                              |

#### Returns

`Promise`\<[`StarkProfile`](../namespaces/types.md#starkprofile)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStarkProfile

#### Defined in

[src/provider/extensions/starknetId.ts:121](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L121)

---

### fetch

▸ **fetch**(`method`, `params?`, `id?`): `Promise`\<`Response`\>

#### Parameters

| Name      | Type                 | Default value |
| :-------- | :------------------- | :------------ |
| `method`  | `string`             | `undefined`   |
| `params?` | `object`             | `undefined`   |
| `id`      | `string` \| `number` | `0`           |

#### Returns

`Promise`\<`Response`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).fetch

#### Defined in

[src/provider/rpc.ts:63](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L63)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getChainId

#### Defined in

[src/provider/rpc.ts:67](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L67)

---

### getSpecVersion

▸ **getSpecVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getSpecVersion

#### Defined in

[src/provider/rpc.ts:71](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L71)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getNonceForAddress

#### Defined in

[src/provider/rpc.ts:75](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L75)

---

### getBlock

▸ **getBlock**(): `Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Returns

`Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlock

#### Defined in

[src/provider/rpc.ts:82](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L82)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `blockIdentifier` | `"pending"` |

#### Returns

`Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlock

#### Defined in

[src/provider/rpc.ts:83](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L83)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `blockIdentifier` | `"latest"` |

#### Returns

`Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlock

#### Defined in

[src/provider/rpc.ts:84](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L84)

▸ **getBlock**(`blockIdentifier?`): `Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlock

#### Defined in

[src/provider/rpc.ts:85](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L85)

---

### getBlockLatestAccepted

▸ **getBlockLatestAccepted**(): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

Get the most recent accepted block hash and number

#### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockLatestAccepted

#### Defined in

[src/provider/rpc.ts:95](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L95)

---

### getBlockNumber

▸ **getBlockNumber**(): `Promise`\<`number`\>

Get the most recent accepted block number
redundant use getBlockLatestAccepted();

#### Returns

`Promise`\<`number`\>

Number of the latest block

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockNumber

#### Defined in

[src/provider/rpc.ts:104](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L104)

---

### getBlockWithTxHashes

▸ **getBlockWithTxHashes**(`blockIdentifier?`): `Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxhashes)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxhashes)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockWithTxHashes

#### Defined in

[src/provider/rpc.ts:108](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L108)

---

### getBlockWithTxs

▸ **getBlockWithTxs**(`blockIdentifier?`): `Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxs)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxs)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockWithTxs

#### Defined in

[src/provider/rpc.ts:112](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L112)

---

### waitForBlock

▸ **waitForBlock**(`blockIdentifier?`, `retryInterval?`): `Promise`\<`void`\>

Pause the execution of the script until a specified block is created.

#### Parameters

| Name              | Type                                                        | Default value | Description                                                                                                                |
| :---------------- | :---------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | `'pending'`   | bloc number (BigNumberisk) or 'pending' or 'latest'. Use of 'latest" or of a block already created will generate no pause. |
| `retryInterval?`  | `number`                                                    | `5000`        | number of milliseconds between 2 requests to the node                                                                      |

#### Returns

`Promise`\<`void`\>

**`Example`**

```typescript
await myProvider.waitForBlock();
// wait the creation of the pending block
```

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).waitForBlock

#### Defined in

[src/provider/rpc.ts:127](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L127)

---

### getL1GasPrice

▸ **getL1GasPrice**(`blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getL1GasPrice

#### Defined in

[src/provider/rpc.ts:157](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L157)

---

### getL1MessageHash

▸ **getL1MessageHash**(`l2TxHash`): `Promise`\<`string`\>

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `l2TxHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getL1MessageHash

#### Defined in

[src/provider/rpc.ts:163](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L163)

---

### getBlockWithReceipts

▸ **getBlockWithReceipts**(`blockIdentifier?`): `Promise`\<[`BlockWithTxReceipts`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxreceipts)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxReceipts`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxreceipts)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockWithReceipts

#### Defined in

[src/provider/rpc.ts:185](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L185)

---

### getBlockStateUpdate

▸ **getBlockStateUpdate**(): `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Returns

`Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockStateUpdate

#### Defined in

[src/provider/rpc.ts:194](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L194)

▸ **getBlockStateUpdate**(`blockIdentifier`): `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `blockIdentifier` | `"pending"` |

#### Returns

`Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockStateUpdate

#### Defined in

[src/provider/rpc.ts:195](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L195)

▸ **getBlockStateUpdate**(`blockIdentifier`): `Promise`\<\{ `block_hash`: `string` ; `old_root`: `string` ; `new_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `blockIdentifier` | `"latest"` |

#### Returns

`Promise`\<\{ `block_hash`: `string` ; `old_root`: `string` ; `new_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockStateUpdate

#### Defined in

[src/provider/rpc.ts:196](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L196)

▸ **getBlockStateUpdate**(`blockIdentifier?`): `Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockStateUpdate

#### Defined in

[src/provider/rpc.ts:197](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L197)

---

### getBlockTransactionsTraces

▸ **getBlockTransactionsTraces**(`blockIdentifier?`): `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC06.md#blocktransactionstraces)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC06.md#blocktransactionstraces)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockTransactionsTraces

#### Defined in

[src/provider/rpc.ts:202](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L202)

---

### getBlockTransactionCount

▸ **getBlockTransactionCount**(`blockIdentifier?`): `Promise`\<`number`\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`number`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getBlockTransactionCount

#### Defined in

[src/provider/rpc.ts:206](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L206)

---

### getPendingTransactions

▸ **getPendingTransactions**(): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)[]\>

Return transactions from pending block

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)[]\>

**`Deprecated`**

Instead use getBlock(BlockTag.PENDING); (will be removed in next minor version)
Utility method, same result can be achieved using getBlockWithTxHashes(BlockTag.pending);

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getPendingTransactions

#### Defined in

[src/provider/rpc.ts:215](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L215)

---

### getTransaction

▸ **getTransaction**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransaction

#### Defined in

[src/provider/rpc.ts:222](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L222)

---

### getTransactionByHash

▸ **getTransactionByHash**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransactionByHash

#### Defined in

[src/provider/rpc.ts:226](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L226)

---

### getTransactionByBlockIdAndIndex

▸ **getTransactionByBlockIdAndIndex**(`blockIdentifier`, `index`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |
| `index`           | `number`                                                    |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransactionByBlockIdAndIndex

#### Defined in

[src/provider/rpc.ts:230](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L230)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransactionReceipt

#### Defined in

[src/provider/rpc.ts:234](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L234)

---

### getTransactionTrace

▸ **getTransactionTrace**(`txHash`): `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#transaction_trace)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#transaction_trace)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransactionTrace

#### Defined in

[src/provider/rpc.ts:241](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L241)

---

### getTransactionStatus

▸ **getTransactionStatus**(`transactionHash`): `Promise`\<[`TransactionStatus`](../namespaces/types.RPC.RPCSPEC06.md#transactionstatus)\>

Get the status of a transaction

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionStatus`](../namespaces/types.RPC.RPCSPEC06.md#transactionstatus)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getTransactionStatus

#### Defined in

[src/provider/rpc.ts:248](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L248)

---

### getSimulateTransaction

▸ **getSimulateTransaction**(`invocations`, `options?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Parameters

| Name          | Type                                                                                    | Description                                                                                                                                                     |
| :------------ | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations` | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       | AccountInvocations                                                                                                                                              |
| `options?`    | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) | blockIdentifier and flags to skip validation and fee charge<br/> - blockIdentifier<br/> - skipValidate (default false)<br/> - skipFeeCharge (default true)<br/> |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getSimulateTransaction

#### Defined in

[src/provider/rpc.ts:259](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L259)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options?`): `Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

#### Parameters

| Name       | Type                                                                            |
| :--------- | :------------------------------------------------------------------------------ |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) |

#### Returns

`Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).waitForTransaction

#### Defined in

[src/provider/rpc.ts:269](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L269)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `key`              | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStorageAt

#### Defined in

[src/provider/rpc.ts:281](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L281)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getClassHashAt

#### Defined in

[src/provider/rpc.ts:289](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L289)

---

### getClassByHash

▸ **getClassByHash**(`classHash`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Parameters

| Name        | Type                                                  |
| :---------- | :---------------------------------------------------- |
| `classHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getClassByHash

#### Defined in

[src/provider/rpc.ts:293](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L293)

---

### getClass

▸ **getClass**(`classHash`, `blockIdentifier?`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `classHash`        | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getClass

#### Defined in

[src/provider/rpc.ts:297](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L297)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getClassAt

#### Defined in

[src/provider/rpc.ts:303](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L303)

---

### getContractVersion

▸ **getContractVersion**(`contractAddress`, `classHash?`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Parameters

| Name              | Type                                                                            |
| :---------------- | :------------------------------------------------------------------------------ |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |
| `classHash?`      | `undefined`                                                                     |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getContractVersion

#### Defined in

[src/provider/rpc.ts:309](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L309)

▸ **getContractVersion**(`contractAddress`, `classHash`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Parameters

| Name              | Type                                                                            |
| :---------------- | :------------------------------------------------------------------------------ |
| `contractAddress` | `undefined`                                                                     |
| `classHash`       | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getContractVersion

#### Defined in

[src/provider/rpc.ts:314](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L314)

---

### getEstimateFee

▸ **getEstimateFee**(`invocation`, `invocationDetails`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Parameters

| Name                | Type                                                                                |
| :------------------ | :---------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |
| `blockIdentifier?`  | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         |
| `skipValidate?`     | `boolean`                                                                           |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

**`Deprecated`**

use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getEstimateFee

#### Defined in

[src/provider/rpc.ts:350](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L350)

---

### getInvokeEstimateFee

▸ **getInvokeEstimateFee**(`invocation`, `invocationDetails`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Parameters

| Name                | Type                                                                                |
| :------------------ | :---------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |
| `blockIdentifier?`  | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         |
| `skipValidate?`     | `boolean`                                                                           |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getInvokeEstimateFee

#### Defined in

[src/provider/rpc.ts:359](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L359)

---

### getDeclareEstimateFee

▸ **getDeclareEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Parameters

| Name               | Type                                                                                |
| :----------------- | :---------------------------------------------------------------------------------- |
| `invocation`       | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         |
| `skipValidate?`    | `boolean`                                                                           |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getDeclareEstimateFee

#### Defined in

[src/provider/rpc.ts:379](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L379)

---

### getDeployAccountEstimateFee

▸ **getDeployAccountEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Parameters

| Name               | Type                                                                                          |
| :----------------- | :-------------------------------------------------------------------------------------------- |
| `invocation`       | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                                   |
| `skipValidate?`    | `boolean`                                                                                     |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getDeployAccountEstimateFee

#### Defined in

[src/provider/rpc.ts:399](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L399)

---

### getEstimateFeeBulk

▸ **getEstimateFeeBulk**(`invocations`, `options`): `Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

#### Parameters

| Name          | Type                                                                            |
| :------------ | :------------------------------------------------------------------------------ |
| `invocations` | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               |
| `options`     | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) |

#### Returns

`Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getEstimateFeeBulk

#### Defined in

[src/provider/rpc.ts:419](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L419)

---

### invokeFunction

▸ **invokeFunction**(`functionInvocation`, `details`): `Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

#### Parameters

| Name                 | Type                                                                                |
| :------------------- | :---------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `details`            | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).invokeFunction

#### Defined in

[src/provider/rpc.ts:428](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L428)

---

### declareContract

▸ **declareContract**(`transaction`, `details`): `Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

#### Parameters

| Name          | Type                                                                                |
| :------------ | :---------------------------------------------------------------------------------- |
| `transaction` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).declareContract

#### Defined in

[src/provider/rpc.ts:435](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L435)

---

### deployAccountContract

▸ **deployAccountContract**(`transaction`, `details`): `Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

#### Parameters

| Name          | Type                                                                                          |
| :------------ | :-------------------------------------------------------------------------------------------- |
| `transaction` | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           |

#### Returns

`Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).deployAccountContract

#### Defined in

[src/provider/rpc.ts:442](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L442)

---

### callContract

▸ **callContract**(`call`, `blockIdentifier?`): `Promise`\<`string`[]\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `call`             | [`Call`](../namespaces/types.md#call)                       |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).callContract

#### Defined in

[src/provider/rpc.ts:452](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L452)

---

### estimateMessageFee

▸ **estimateMessageFee**(`message`, `blockIdentifier?`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)\>

NEW: Estimate the fee for a message from L1

#### Parameters

| Name               | Type                                                                       | Description     |
| :----------------- | :------------------------------------------------------------------------- | :-------------- |
| `message`          | [`MSG_FROM_L1`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#msg_from_l1) | Message From L1 |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                | -               |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).estimateMessageFee

#### Defined in

[src/provider/rpc.ts:460](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L460)

---

### getSyncingStats

▸ **getSyncingStats**(): `Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC06.md#syncing)\>

Returns an object about the sync status, or false if the node is not synching

#### Returns

`Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC06.md#syncing)\>

Object with the stats data

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getSyncingStats

#### Defined in

[src/provider/rpc.ts:468](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L468)

---

### getEvents

▸ **getEvents**(`eventFilter`): `Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#events_chunk)\>

Returns all events matching the given filter

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `eventFilter` | [`EventFilter`](../namespaces/types.RPC.RPCSPEC07.API.md#eventfilter) |

#### Returns

`Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#events_chunk)\>

events and the pagination of the events

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getEvents

#### Defined in

[src/provider/rpc.ts:476](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L476)

---

### getStarkName

▸ **getStarkName**(`address`, `StarknetIdContract?`): `Promise`\<`string`\>

#### Parameters

| Name                  | Type                                                  |
| :-------------------- | :---------------------------------------------------- |
| `address`             | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?` | `string`                                              |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStarkName

#### Defined in

[src/provider/extensions/starknetId.ts:21](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L21)

---

### getAddressFromStarkName

▸ **getAddressFromStarkName**(`name`, `StarknetIdContract?`): `Promise`\<`string`\>

#### Parameters

| Name                  | Type     |
| :-------------------- | :------- |
| `name`                | `string` |
| `StarknetIdContract?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getAddressFromStarkName

#### Defined in

[src/provider/extensions/starknetId.ts:30](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L30)

---

### getStarkProfile

▸ **getStarkProfile**(`address`, `StarknetIdContract?`, `StarknetIdIdentityContract?`, `StarknetIdVerifierContract?`, `StarknetIdPfpContract?`, `StarknetIdPopContract?`, `StarknetIdMulticallContract?`): `Promise`\<[`StarkProfile`](../namespaces/types.md#starkprofile)\>

#### Parameters

| Name                           | Type                                                  |
| :----------------------------- | :---------------------------------------------------- |
| `address`                      | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?`          | `string`                                              |
| `StarknetIdIdentityContract?`  | `string`                                              |
| `StarknetIdVerifierContract?`  | `string`                                              |
| `StarknetIdPfpContract?`       | `string`                                              |
| `StarknetIdPopContract?`       | `string`                                              |
| `StarknetIdMulticallContract?` | `string`                                              |

#### Returns

`Promise`\<[`StarkProfile`](../namespaces/types.md#starkprofile)\>

#### Inherited from

Mixin(BaseRpcProvider, StarknetId).getStarkProfile

#### Defined in

[src/provider/extensions/starknetId.ts:39](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L39)

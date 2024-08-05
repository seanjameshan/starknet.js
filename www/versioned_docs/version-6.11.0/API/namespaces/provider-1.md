---
id: 'provider-1'
title: 'Namespace: provider'
sidebar_label: 'provider'
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [Block](../classes/provider-1.Block.md)

## Variables

### validBlockTags

• `Const` **validBlockTags**: `BlockTag`[]

#### Defined in

[src/utils/provider.ts:131](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L131)

## Functions

### wait

▸ **wait**(`delay`): `Promise`\<`unknown`\>

Helper - Async Sleep for 'delay' time

#### Parameters

| Name    | Type     | Description                     |
| :------ | :------- | :------------------------------ |
| `delay` | `number` | Number of milliseconds to delay |

#### Returns

`Promise`\<`unknown`\>

**`Example`**

```typescript
await provider.wait(1000); // 1000 milliseconds == 1 second
```

#### Defined in

[src/utils/provider.ts:36](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L36)

---

### createSierraContractClass

▸ **createSierraContractClass**(`contract`): [`SierraContractClass`](types.md#sierracontractclass)

Create Sierra compressed Contract Class from a given Compiled Sierra

CompiledSierra -> SierraContractClass

#### Parameters

| Name       | Type                                        | Description                         |
| :--------- | :------------------------------------------ | :---------------------------------- |
| `contract` | [`CompiledSierra`](types.md#compiledsierra) | sierra code from the Cairo compiler |

#### Returns

[`SierraContractClass`](types.md#sierracontractclass)

compressed Sierra

**`Example`**

```typescript
const result = provider.createSierraContractClass({
   "sierra_program": [
       "0x1",
       "0x4",
       "0x0",
       "0x2",
       "0x4",
       "0x1",
       "0x3b4",
       "0x4c",
       "0x65",
       "0x52616e6765436865636b",...})
// result = {sierra_program: 'H4sIAAAAAAAAA6x9WZbsrI7uVGqd53qgb8ZynwzYY7jDv5JAAmxHZuQ+96yq/L0jIzEINZ8axP/5j/q/+j//+z/wH9f/o/p/zPbh+Iot49+u9v8G3//rTdDhDDF4Z0MKPthQ+m+S2v6n1S//638VvdXW2PQ6RvxuDG+jiybCXKJ7Hef6ZRi9E+Q89WmKLilfqbrsL6PUCf8...}
```

#### Defined in

[src/utils/provider.ts:66](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L66)

---

### parseContract

▸ **parseContract**(`contract`): [`ContractClass`](types.md#contractclass)

Create a compressed contract from a given compiled Cairo 0 & 1 contract or a string.

#### Parameters

| Name       | Type                                                        | Description                                     |
| :--------- | :---------------------------------------------------------- | :---------------------------------------------- |
| `contract` | `string` \| [`CompiledContract`](types.md#compiledcontract) | Compiled Cairo 0 or Cairo 1 contract, or string |

#### Returns

[`ContractClass`](types.md#contractclass)

Cairo 0 or Cairo 1 compressed contract

**`Example`**

```typescript
const result = provider.parseContract({
   "sierra_program": [
       "0x1",
       "0x4",
       "0x0",
       "0x2",
       "0x4",
       "0x1",
       "0x3b4",
       "0x4c",
       "0x65",
       "0x52616e6765436865636b",...})
// result = {sierra_program: 'H4sIAAAAAAAAA6x9WZbsrI7uVGqd53qgb8ZynwzYY7jDv5JAAmxHZuQ+96yq/L0jIzEINZ8axP/5j/q/+j//+z/wH9f/o/p/zPbh+Iot49+u9v8G3//rTdDhDDF4Z0MKPthQ+m+S2v6n1S//638VvdXW2PQ6RvxuDG+jiybCXKJ7Hef6ZRi9E+Q89WmKLilfqbrsL6PUCf8...}
```

#### Defined in

[src/utils/provider.ts:96](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L96)

---

### isV3Tx

▸ **isV3Tx**(`details`): details is V3TransactionDetails

Check if the given transaction details is a V3 transaction.

#### Parameters

| Name      | Type                                                                  | Description                            |
| :-------- | :-------------------------------------------------------------------- | :------------------------------------- |
| `details` | [`InvocationsDetailsWithNonce`](types.md#invocationsdetailswithnonce) | The transaction details to be checked. |

#### Returns

details is V3TransactionDetails

Returns true if the transaction is a V3 transaction, otherwise false.

**`Example`**

```typescript
const invocation: InvocationsDetailsWithNonce = {
  nonce: 1,
  version: 3,
  maxFee: 10 ** 15,
  feeDataAvailabilityMode: RPC.EDataAvailabilityMode.L1,
  tip: 10 ** 13,
  paymasterData: [],
  resourceBounds: {
    l1_gas: { max_amount: num.toHex(10 ** 14), max_price_per_unit: num.toHex(50) },
    l2_gas: { max_amount: num.toHex(0), max_price_per_unit: num.toHex(0) },
  },
};
const result = provider.isV3Tx(invocation);
// result = true
```

#### Defined in

[src/utils/provider.ts:282](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L282)

---

### isVersion

▸ **isVersion**(`version`, `response`): `boolean`

Determines if the given response matches the specified version.

#### Parameters

| Name       | Type                          | Description                                  |
| :--------- | :---------------------------- | :------------------------------------------- |
| `version`  | `"0.5"` \| `"0.6"` \| `"0.7"` | The version to compare against the response. |
| `response` | `string`                      | The response to check against the version.   |

#### Returns

`boolean`

True if the response matches the version, false otherwise.

**`Example`**

```typescript
const result = provider.isVersion('0.7', '0_7');
// result = false
```

#### Defined in

[src/utils/provider.ts:299](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L299)

---

### isPendingBlock

▸ **isPendingBlock**(`response`): response is PendingBlock

Guard Pending Block

#### Parameters

| Name       | Type                                            | Description                     |
| :--------- | :---------------------------------------------- | :------------------------------ |
| `response` | [`GetBlockResponse`](types.md#getblockresponse) | answer of myProvider.getBlock() |

#### Returns

response is PendingBlock

true if block is the pending block

**`Example`**

```typescript
const block = await myProvider.getBlock('pending');
const result = provider.isPendingBlock(block);
// result = true
```

#### Defined in

[src/utils/provider.ts:317](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L317)

---

### isPendingTransaction

▸ **isPendingTransaction**(`response`): `boolean`

Guard Pending Transaction

#### Parameters

| Name       | Type                                                                           | Description         |
| :--------- | :----------------------------------------------------------------------------- | :------------------ |
| `response` | [`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse) | transaction Receipt |

#### Returns

`boolean`

true if the transaction is part of the pending block

**`Example`**

```typescript
const block = await myProvider.getBlockWithTxs('pending');
const txR = await myProvider.getTransactionReceipt(block.transactions[0].transaction_hash);
const result = provider.isPendingTransaction(txR);
// result = true
```

#### Defined in

[src/utils/provider.ts:333](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L333)

---

### isPendingStateUpdate

▸ **isPendingStateUpdate**(`response`): response is Object

Guard Pending State Update

#### Parameters

| Name       | Type                                                  | Description      |
| :--------- | :---------------------------------------------------- | :--------------- |
| `response` | [`StateUpdateResponse`](types.md#stateupdateresponse) | State of a block |

#### Returns

response is Object

true if the block is pending

**`Example`**

```typescript
const state: StateUpdateResponse = await myProvider.getStateUpdate('pending');
const result = provider.isPendingStateUpdate(state);
// result = true
```

#### Defined in

[src/utils/provider.ts:348](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L348)

---

### getDefaultNodeUrl

▸ **getDefaultNodeUrl**(`networkName?`, `mute?`): `string`

Return randomly select available public node

#### Parameters

| Name           | Type                                               | Default value | Description              |
| :------------- | :------------------------------------------------- | :------------ | :----------------------- |
| `networkName?` | [`NetworkName`](../enums/constants.NetworkName.md) | `undefined`   | NetworkName              |
| `mute`         | `boolean`                                          | `false`       | mute public node warning |

#### Returns

`string`

default node url

**`Example`**

```typescript
const result = provider.getDefaultNodeUrl(constants.NetworkName.SN_MAIN, false);
// console : "Using default public node url, please provide nodeUrl in provider options!"
// result = "https://starknet-mainnet.public.blastapi.io/rpc/v0_7"
```

#### Defined in

[src/utils/provider.ts:121](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/provider.ts#L121)

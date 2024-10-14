---
id: 'RPC07.RpcChannel'
title: 'Class: RpcChannel'
sidebar_label: 'RpcChannel'
custom_edit_url: null
---

[RPC07](../namespaces/RPC07.md).RpcChannel

## Constructors

### constructor

• **new RpcChannel**(`optionsOrProvider?`): [`RpcChannel`](RPC07.RpcChannel.md)

#### Parameters

| Name                 | Type                                                              |
| :------------------- | :---------------------------------------------------------------- |
| `optionsOrProvider?` | [`RpcProviderOptions`](../namespaces/types.md#rpcprovideroptions) |

#### Returns

[`RpcChannel`](RPC07.RpcChannel.md)

#### Defined in

[src/channel/rpc_0_7.ts:57](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L57)

## Properties

### nodeUrl

• **nodeUrl**: `string`

#### Defined in

[src/channel/rpc_0_7.ts:39](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L39)

---

### headers

• **headers**: `object`

#### Defined in

[src/channel/rpc_0_7.ts:41](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L41)

---

### retries

• `Readonly` **retries**: `number`

#### Defined in

[src/channel/rpc_0_7.ts:43](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L43)

---

### requestId

• **requestId**: `number`

#### Defined in

[src/channel/rpc_0_7.ts:45](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L45)

---

### blockIdentifier

• `Readonly` **blockIdentifier**: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)

#### Defined in

[src/channel/rpc_0_7.ts:47](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L47)

---

### chainId

• `Private` `Optional` **chainId**: [`StarknetChainId`](../enums/constants.StarknetChainId.md)

#### Defined in

[src/channel/rpc_0_7.ts:49](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L49)

---

### specVersion

• `Private` `Optional` **specVersion**: `string`

#### Defined in

[src/channel/rpc_0_7.ts:51](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L51)

---

### transactionRetryIntervalFallback

• `Private` `Optional` **transactionRetryIntervalFallback**: `number`

#### Defined in

[src/channel/rpc_0_7.ts:53](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L53)

---

### waitMode

• `Readonly` **waitMode**: `Boolean`

#### Defined in

[src/channel/rpc_0_7.ts:55](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L55)

## Accessors

### transactionRetryIntervalDefault

• `get` **transactionRetryIntervalDefault**(): `number`

#### Returns

`number`

#### Defined in

[src/channel/rpc_0_7.ts:85](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L85)

## Methods

### setChainId

▸ **setChainId**(`chainId`): `void`

#### Parameters

| Name      | Type                                                       |
| :-------- | :--------------------------------------------------------- |
| `chainId` | [`StarknetChainId`](../enums/constants.StarknetChainId.md) |

#### Returns

`void`

#### Defined in

[src/channel/rpc_0_7.ts:89](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L89)

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

#### Defined in

[src/channel/rpc_0_7.ts:93](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L93)

---

### errorHandler

▸ **errorHandler**(`method`, `params`, `rpcError?`, `otherError?`): `void`

#### Parameters

| Name          | Type                                             |
| :------------ | :----------------------------------------------- |
| `method`      | `string`                                         |
| `params`      | `any`                                            |
| `rpcError?`   | [`Error`](../namespaces/types.RPC.JRPC.md#error) |
| `otherError?` | `any`                                            |

#### Returns

`void`

#### Defined in

[src/channel/rpc_0_7.ts:107](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L107)

---

### fetchEndpoint

▸ **fetchEndpoint**\<`T`\>(`method`, `params?`): `Promise`\<[`Methods`](../namespaces/types.RPC.RPCSPEC07.API.md#methods)[`T`][``"result"``]\>

#### Type parameters

| Name | Type                                                                        |
| :--- | :-------------------------------------------------------------------------- |
| `T`  | extends keyof `ReadMethods` \| keyof `WriteMethods` \| keyof `TraceMethods` |

#### Parameters

| Name      | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| `method`  | `T`                                                                              |
| `params?` | [`Methods`](../namespaces/types.RPC.RPCSPEC07.API.md#methods)[`T`][``"params"``] |

#### Returns

`Promise`\<[`Methods`](../namespaces/types.RPC.RPCSPEC07.API.md#methods)[`T`][``"result"``]\>

#### Defined in

[src/channel/rpc_0_7.ts:123](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L123)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Defined in

[src/channel/rpc_0_7.ts:138](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L138)

---

### getSpecVersion

▸ **getSpecVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/channel/rpc_0_7.ts:143](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L143)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/channel/rpc_0_7.ts:148](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L148)

---

### getBlockLatestAccepted

▸ **getBlockLatestAccepted**(): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC07.API.md#blockhashandnumber)\>

Get the most recent accepted block hash and number

#### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC07.API.md#blockhashandnumber)\>

#### Defined in

[src/channel/rpc_0_7.ts:163](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L163)

---

### getBlockNumber

▸ **getBlockNumber**(): `Promise`\<`number`\>

Get the most recent accepted block number
redundant use getBlockLatestAccepted();

#### Returns

`Promise`\<`number`\>

Number of the latest block

#### Defined in

[src/channel/rpc_0_7.ts:172](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L172)

---

### getBlockWithTxHashes

▸ **getBlockWithTxHashes**(`blockIdentifier?`): `Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxhashes)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxhashes)\>

#### Defined in

[src/channel/rpc_0_7.ts:176](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L176)

---

### getBlockWithTxs

▸ **getBlockWithTxs**(`blockIdentifier?`): `Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxs)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxs)\>

#### Defined in

[src/channel/rpc_0_7.ts:181](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L181)

---

### getBlockWithReceipts

▸ **getBlockWithReceipts**(`blockIdentifier?`): `Promise`\<[`BlockWithTxReceipts`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxreceipts)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxReceipts`](../namespaces/types.RPC.RPCSPEC07.API.md#blockwithtxreceipts)\>

#### Defined in

[src/channel/rpc_0_7.ts:186](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L186)

---

### getBlockStateUpdate

▸ **getBlockStateUpdate**(`blockIdentifier?`): `Promise`\<[`StateUpdate`](../namespaces/types.RPC.RPCSPEC07.API.md#stateupdate)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`StateUpdate`](../namespaces/types.RPC.RPCSPEC07.API.md#stateupdate)\>

#### Defined in

[src/channel/rpc_0_7.ts:191](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L191)

---

### getBlockTransactionsTraces

▸ **getBlockTransactionsTraces**(`blockIdentifier?`): `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC07.API.md#blocktransactionstraces)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC07.API.md#blocktransactionstraces)\>

#### Defined in

[src/channel/rpc_0_7.ts:196](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L196)

---

### getBlockTransactionCount

▸ **getBlockTransactionCount**(`blockIdentifier?`): `Promise`\<`number`\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/channel/rpc_0_7.ts:201](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L201)

---

### getTransactionByHash

▸ **getTransactionByHash**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionwithhash)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionwithhash)\>

#### Defined in

[src/channel/rpc_0_7.ts:206](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L206)

---

### getTransactionByBlockIdAndIndex

▸ **getTransactionByBlockIdAndIndex**(`blockIdentifier`, `index`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionwithhash)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |
| `index`           | `number`                                                    |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionwithhash)\>

#### Defined in

[src/channel/rpc_0_7.ts:213](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L213)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`\<[`TXN_RECEIPT_WITH_BLOCK_INFO`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt_with_block_info)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TXN_RECEIPT_WITH_BLOCK_INFO`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt_with_block_info)\>

#### Defined in

[src/channel/rpc_0_7.ts:218](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L218)

---

### getTransactionTrace

▸ **getTransactionTrace**(`txHash`): `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#transaction_trace)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#transaction_trace)\>

#### Defined in

[src/channel/rpc_0_7.ts:223](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L223)

---

### getTransactionStatus

▸ **getTransactionStatus**(`transactionHash`): `Promise`\<[`TransactionStatus`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionstatus)\>

Get the status of a transaction

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionStatus`](../namespaces/types.RPC.RPCSPEC07.API.md#transactionstatus)\>

#### Defined in

[src/channel/rpc_0_7.ts:231](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L231)

---

### simulateTransaction

▸ **simulateTransaction**(`invocations`, `simulateTransactionOptions?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.RPC.RPCSPEC07.API.md#simulatetransactionresponse)\>

#### Parameters

| Name                         | Type                                                                                    | Description                                                                                                                                                     |
| :--------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations`                | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       | AccountInvocations                                                                                                                                              |
| `simulateTransactionOptions` | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) | blockIdentifier and flags to skip validation and fee charge<br/> - blockIdentifier<br/> - skipValidate (default false)<br/> - skipFeeCharge (default true)<br/> |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.RPC.RPCSPEC07.API.md#simulatetransactionresponse)\>

#### Defined in

[src/channel/rpc_0_7.ts:243](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L243)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options?`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt)\>

#### Parameters

| Name       | Type                                                                            |
| :--------- | :------------------------------------------------------------------------------ |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt)\>

#### Defined in

[src/channel/rpc_0_7.ts:264](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L264)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `key`             | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/channel/rpc_0_7.ts:346](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L346)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/channel/rpc_0_7.ts:361](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L361)

---

### getClass

▸ **getClass**(`classHash`, `blockIdentifier?`): `Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC07.API.md#contractclass)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `classHash`       | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC07.API.md#contractclass)\>

#### Defined in

[src/channel/rpc_0_7.ts:373](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L373)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC07.API.md#contractclass)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC07.API.md#contractclass)\>

#### Defined in

[src/channel/rpc_0_7.ts:385](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L385)

---

### getEstimateFee

▸ **getEstimateFee**(`invocations`, `«destructured»`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#fee_estimate)[]\>

#### Parameters

| Name             | Type                                                                            |
| :--------------- | :------------------------------------------------------------------------------ |
| `invocations`    | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               |
| `«destructured»` | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#fee_estimate)[]\>

#### Defined in

[src/channel/rpc_0_7.ts:397](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L397)

---

### invoke

▸ **invoke**(`functionInvocation`, `details`): `Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

#### Parameters

| Name                 | Type                                                                                |
| :------------------- | :---------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `details`            | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

#### Defined in

[src/channel/rpc_0_7.ts:416](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L416)

---

### declare

▸ **declare**(`«destructured»`, `details`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt) \| [`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

#### Parameters

| Name             | Type                                                                                |
| :--------------- | :---------------------------------------------------------------------------------- |
| `«destructured»` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt) \| [`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

#### Defined in

[src/channel/rpc_0_7.ts:454](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L454)

---

### deployAccount

▸ **deployAccount**(`«destructured»`, `details`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt) \| [`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

#### Parameters

| Name             | Type                                                                                          |
| :--------------- | :-------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#txn_receipt) \| [`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

#### Defined in

[src/channel/rpc_0_7.ts:526](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L526)

---

### callContract

▸ **callContract**(`call`, `blockIdentifier?`): `Promise`\<`string`[]\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `call`            | [`Call`](../namespaces/types.md#call)                       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/channel/rpc_0_7.ts:568](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L568)

---

### estimateMessageFee

▸ **estimateMessageFee**(`message`, `blockIdentifier?`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#fee_estimate)\>

NEW: Estimate the fee for a message from L1

#### Parameters

| Name              | Type                                                                       | Description     |
| :---------------- | :------------------------------------------------------------------------- | :-------------- |
| `message`         | [`MSG_FROM_L1`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#msg_from_l1) | Message From L1 |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                | -               |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#fee_estimate)\>

#### Defined in

[src/channel/rpc_0_7.ts:584](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L584)

---

### getSyncingStats

▸ **getSyncingStats**(): `Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC07.API.md#syncing)\>

Returns an object about the sync status, or false if the node is not synching

#### Returns

`Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC07.API.md#syncing)\>

Object with the stats data

#### Defined in

[src/channel/rpc_0_7.ts:607](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L607)

---

### getEvents

▸ **getEvents**(`eventFilter`): `Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#events_chunk)\>

Returns all events matching the given filter

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `eventFilter` | [`EventFilter`](../namespaces/types.RPC.RPCSPEC07.API.md#eventfilter) |

#### Returns

`Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#events_chunk)\>

events and the pagination of the events

#### Defined in

[src/channel/rpc_0_7.ts:615](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L615)

---

### buildTransaction

▸ **buildTransaction**(`invocation`, `versionType?`): [`BROADCASTED_TXN`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#broadcasted_txn)

#### Parameters

| Name           | Type                                                                    |
| :------------- | :---------------------------------------------------------------------- |
| `invocation`   | [`AccountInvocationItem`](../namespaces/types.md#accountinvocationitem) |
| `versionType?` | `"fee"` \| `"transaction"`                                              |

#### Returns

[`BROADCASTED_TXN`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#broadcasted_txn)

#### Defined in

[src/channel/rpc_0_7.ts:619](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_7.ts#L619)

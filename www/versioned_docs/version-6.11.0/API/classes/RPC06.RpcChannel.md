---
id: 'RPC06.RpcChannel'
title: 'Class: RpcChannel'
sidebar_label: 'RpcChannel'
custom_edit_url: null
---

[RPC06](../namespaces/RPC06.md).RpcChannel

## Constructors

### constructor

• **new RpcChannel**(`optionsOrProvider?`): [`RpcChannel`](RPC06.RpcChannel.md)

#### Parameters

| Name                 | Type                                                              |
| :------------------- | :---------------------------------------------------------------- |
| `optionsOrProvider?` | [`RpcProviderOptions`](../namespaces/types.md#rpcprovideroptions) |

#### Returns

[`RpcChannel`](RPC06.RpcChannel.md)

#### Defined in

[src/channel/rpc_0_6.ts:55](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L55)

## Properties

### nodeUrl

• **nodeUrl**: `string`

#### Defined in

[src/channel/rpc_0_6.ts:39](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L39)

---

### headers

• **headers**: `object`

#### Defined in

[src/channel/rpc_0_6.ts:41](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L41)

---

### retries

• `Readonly` **retries**: `number`

#### Defined in

[src/channel/rpc_0_6.ts:43](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L43)

---

### requestId

• **requestId**: `number`

#### Defined in

[src/channel/rpc_0_6.ts:45](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L45)

---

### blockIdentifier

• `Readonly` **blockIdentifier**: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)

#### Defined in

[src/channel/rpc_0_6.ts:47](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L47)

---

### chainId

• `Private` `Optional` **chainId**: [`StarknetChainId`](../enums/constants.StarknetChainId.md)

#### Defined in

[src/channel/rpc_0_6.ts:49](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L49)

---

### specVersion

• `Private` `Optional` **specVersion**: `string`

#### Defined in

[src/channel/rpc_0_6.ts:51](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L51)

---

### waitMode

• `Readonly` **waitMode**: `Boolean`

#### Defined in

[src/channel/rpc_0_6.ts:53](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L53)

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

[src/channel/rpc_0_6.ts:74](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L74)

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

[src/channel/rpc_0_6.ts:78](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L78)

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

[src/channel/rpc_0_6.ts:92](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L92)

---

### fetchEndpoint

▸ **fetchEndpoint**\<`T`\>(`method`, `params?`): `Promise`\<[`Methods`](../namespaces/types.RPC.RPCSPEC06.md#methods)[`T`][``"result"``]\>

#### Type parameters

| Name | Type                                                                        |
| :--- | :-------------------------------------------------------------------------- |
| `T`  | extends keyof `ReadMethods` \| keyof `WriteMethods` \| keyof `TraceMethods` |

#### Parameters

| Name      | Type                                                                         |
| :-------- | :--------------------------------------------------------------------------- |
| `method`  | `T`                                                                          |
| `params?` | [`Methods`](../namespaces/types.RPC.RPCSPEC06.md#methods)[`T`][``"params"``] |

#### Returns

`Promise`\<[`Methods`](../namespaces/types.RPC.RPCSPEC06.md#methods)[`T`][``"result"``]\>

#### Defined in

[src/channel/rpc_0_6.ts:108](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L108)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

#### Defined in

[src/channel/rpc_0_6.ts:123](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L123)

---

### getSpecVersion

▸ **getSpecVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/channel/rpc_0_6.ts:128](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L128)

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

[src/channel/rpc_0_6.ts:133](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L133)

---

### getBlockLatestAccepted

▸ **getBlockLatestAccepted**(): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

Get the most recent accepted block hash and number

#### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

#### Defined in

[src/channel/rpc_0_6.ts:148](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L148)

---

### getBlockNumber

▸ **getBlockNumber**(): `Promise`\<`number`\>

Get the most recent accepted block number
redundant use getBlockLatestAccepted();

#### Returns

`Promise`\<`number`\>

Number of the latest block

#### Defined in

[src/channel/rpc_0_6.ts:157](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L157)

---

### getBlockWithTxHashes

▸ **getBlockWithTxHashes**(`blockIdentifier?`): `Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxhashes)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxhashes)\>

#### Defined in

[src/channel/rpc_0_6.ts:161](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L161)

---

### getBlockWithTxs

▸ **getBlockWithTxs**(`blockIdentifier?`): `Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxs)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.RPCSPEC06.md#blockwithtxs)\>

#### Defined in

[src/channel/rpc_0_6.ts:166](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L166)

---

### getBlockStateUpdate

▸ **getBlockStateUpdate**(`blockIdentifier?`): `Promise`\<[`StateUpdate`](../namespaces/types.RPC.RPCSPEC06.md#stateupdate)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`StateUpdate`](../namespaces/types.RPC.RPCSPEC06.md#stateupdate)\>

#### Defined in

[src/channel/rpc_0_6.ts:171](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L171)

---

### getBlockTransactionsTraces

▸ **getBlockTransactionsTraces**(`blockIdentifier?`): `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC06.md#blocktransactionstraces)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.RPCSPEC06.md#blocktransactionstraces)\>

#### Defined in

[src/channel/rpc_0_6.ts:176](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L176)

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

[src/channel/rpc_0_6.ts:181](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L181)

---

### getTransactionByHash

▸ **getTransactionByHash**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

#### Defined in

[src/channel/rpc_0_6.ts:186](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L186)

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

#### Defined in

[src/channel/rpc_0_6.ts:193](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L193)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.RPCSPEC06.md#transactionreceipt)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.RPCSPEC06.md#transactionreceipt)\>

#### Defined in

[src/channel/rpc_0_6.ts:198](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L198)

---

### getTransactionTrace

▸ **getTransactionTrace**(`txHash`): `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#transaction_trace)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#transaction_trace)\>

#### Defined in

[src/channel/rpc_0_6.ts:203](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L203)

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

#### Defined in

[src/channel/rpc_0_6.ts:211](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L211)

---

### simulateTransaction

▸ **simulateTransaction**(`invocations`, `simulateTransactionOptions?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.RPC.RPCSPEC06.md#simulatetransactionresponse)\>

#### Parameters

| Name                         | Type                                                                                    | Description                                                                                                                                                     |
| :--------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations`                | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       | AccountInvocations                                                                                                                                              |
| `simulateTransactionOptions` | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) | blockIdentifier and flags to skip validation and fee charge<br/> - blockIdentifier<br/> - skipValidate (default false)<br/> - skipFeeCharge (default true)<br/> |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.RPC.RPCSPEC06.md#simulatetransactionresponse)\>

#### Defined in

[src/channel/rpc_0_6.ts:223](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L223)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options?`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt)\>

#### Parameters

| Name       | Type                                                                            |
| :--------- | :------------------------------------------------------------------------------ |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt)\>

#### Defined in

[src/channel/rpc_0_6.ts:244](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L244)

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

[src/channel/rpc_0_6.ts:326](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L326)

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

[src/channel/rpc_0_6.ts:341](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L341)

---

### getClass

▸ **getClass**(`classHash`, `blockIdentifier?`): `Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC06.md#contractclass)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `classHash`       | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC06.md#contractclass)\>

#### Defined in

[src/channel/rpc_0_6.ts:353](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L353)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC06.md#contractclass)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`ContractClass`](../namespaces/types.RPC.RPCSPEC06.md#contractclass)\>

#### Defined in

[src/channel/rpc_0_6.ts:365](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L365)

---

### getEstimateFee

▸ **getEstimateFee**(`invocations`, `«destructured»`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)[]\>

#### Parameters

| Name             | Type                                                                            |
| :--------------- | :------------------------------------------------------------------------------ |
| `invocations`    | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               |
| `«destructured»` | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)[]\>

#### Defined in

[src/channel/rpc_0_6.ts:377](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L377)

---

### invoke

▸ **invoke**(`functionInvocation`, `details`): `Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC06.md#invokedtransaction)\>

#### Parameters

| Name                 | Type                                                                                |
| :------------------- | :---------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `details`            | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC06.md#invokedtransaction)\>

#### Defined in

[src/channel/rpc_0_6.ts:396](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L396)

---

### declare

▸ **declare**(`«destructured»`, `details`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt) \| [`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC06.md#declaredtransaction)\>

#### Parameters

| Name             | Type                                                                                |
| :--------------- | :---------------------------------------------------------------------------------- |
| `«destructured»` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt) \| [`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC06.md#declaredtransaction)\>

#### Defined in

[src/channel/rpc_0_6.ts:434](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L434)

---

### deployAccount

▸ **deployAccount**(`«destructured»`, `details`): `Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt) \| [`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC06.md#deployedaccounttransaction)\>

#### Parameters

| Name             | Type                                                                                          |
| :--------------- | :-------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           |

#### Returns

`Promise`\<[`TXN_RECEIPT`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#txn_receipt) \| [`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC06.md#deployedaccounttransaction)\>

#### Defined in

[src/channel/rpc_0_6.ts:506](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L506)

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

[src/channel/rpc_0_6.ts:548](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L548)

---

### estimateMessageFee

▸ **estimateMessageFee**(`message`, `blockIdentifier?`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)\>

NEW: Estimate the fee for a message from L1

#### Parameters

| Name              | Type                                                                   | Description     |
| :---------------- | :--------------------------------------------------------------------- | :-------------- |
| `message`         | [`MSG_FROM_L1`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#msg_from_l1) | Message From L1 |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)            | -               |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#fee_estimate)\>

#### Defined in

[src/channel/rpc_0_6.ts:564](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L564)

---

### getSyncingStats

▸ **getSyncingStats**(): `Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC06.md#syncing)\>

Returns an object about the sync status, or false if the node is not synching

#### Returns

`Promise`\<[`Syncing`](../namespaces/types.RPC.RPCSPEC06.md#syncing)\>

Object with the stats data

#### Defined in

[src/channel/rpc_0_6.ts:587](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L587)

---

### getEvents

▸ **getEvents**(`eventFilter`): `Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#events_chunk)\>

Returns all events matching the given filter

#### Parameters

| Name          | Type                                                              |
| :------------ | :---------------------------------------------------------------- |
| `eventFilter` | [`EventFilter`](../namespaces/types.RPC.RPCSPEC06.md#eventfilter) |

#### Returns

`Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#events_chunk)\>

events and the pagination of the events

#### Defined in

[src/channel/rpc_0_6.ts:595](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L595)

---

### buildTransaction

▸ **buildTransaction**(`invocation`, `versionType?`): [`BROADCASTED_TXN`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#broadcasted_txn)

#### Parameters

| Name           | Type                                                                    |
| :------------- | :---------------------------------------------------------------------- |
| `invocation`   | [`AccountInvocationItem`](../namespaces/types.md#accountinvocationitem) |
| `versionType?` | `"fee"` \| `"transaction"`                                              |

#### Returns

[`BROADCASTED_TXN`](../namespaces/types.RPC.RPCSPEC06.SPEC.md#broadcasted_txn)

#### Defined in

[src/channel/rpc_0_6.ts:599](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/channel/rpc_0_6.ts#L599)

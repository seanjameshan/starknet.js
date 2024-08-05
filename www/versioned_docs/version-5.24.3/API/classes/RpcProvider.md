---
id: 'RpcProvider'
title: 'Class: RpcProvider'
sidebar_label: 'RpcProvider'
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ProviderInterface`](ProviderInterface.md)

## Constructors

### constructor

• **new RpcProvider**(`optionsOrProvider?`)

#### Parameters

| Name                 | Type                                                              |
| :------------------- | :---------------------------------------------------------------- |
| `optionsOrProvider?` | [`RpcProviderOptions`](../namespaces/types.md#rpcprovideroptions) |

#### Defined in

[src/provider/rpc.ts:73](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L73)

## Properties

### nodeUrl

• **nodeUrl**: `string`

#### Defined in

[src/provider/rpc.ts:61](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L61)

---

### headers

• **headers**: `object`

#### Defined in

[src/provider/rpc.ts:63](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L63)

---

### responseParser

• `Private` **responseParser**: `RPCResponseParser`

#### Defined in

[src/provider/rpc.ts:65](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L65)

---

### retries

• `Private` **retries**: `number`

#### Defined in

[src/provider/rpc.ts:67](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L67)

---

### blockIdentifier

• `Private` **blockIdentifier**: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)

#### Defined in

[src/provider/rpc.ts:69](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L69)

---

### chainId

• `Private` `Optional` **chainId**: [`StarknetChainId`](../enums/constants.StarknetChainId.md)

#### Defined in

[src/provider/rpc.ts:71](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L71)

---

### getBlockHashAndNumber

• **getBlockHashAndNumber**: () => `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.md#blockhashandnumber)\>

#### Type declaration

▸ (): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.md#blockhashandnumber)\>

**`Deprecated`**

renamed to getBlockLatestAccepted(); (will be removed in next minor version)

##### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.md#blockhashandnumber)\>

#### Defined in

[src/provider/rpc.ts:171](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L171)

---

### getStateUpdate

• **getStateUpdate**: (`blockIdentifier`: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)) => `Promise`\<[`PENDING_STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#pending_state_update) \| [`STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#state_update)\>

#### Type declaration

▸ (`blockIdentifier?`): `Promise`\<[`PENDING_STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#pending_state_update) \| [`STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#state_update)\>

**`Deprecated`**

renamed to getBlockStateUpdate();

##### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

##### Returns

`Promise`\<[`PENDING_STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#pending_state_update) \| [`STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#state_update)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getStateUpdate](ProviderInterface.md#getstateupdate)

#### Defined in

[src/provider/rpc.ts:207](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L207)

---

### traceBlockTransactions

• **traceBlockTransactions**: (`blockIdentifier`: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)) => `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.md#blocktransactionstraces)\>

#### Type declaration

▸ (`blockIdentifier?`): `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.md#blocktransactionstraces)\>

Returns the execution traces of all transactions included in the given block

**`Deprecated`**

renamed to getBlockTransactionsTraces()

##### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

##### Returns

`Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.md#blocktransactionstraces)\>

#### Defined in

[src/provider/rpc.ts:218](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L218)

---

### getTransactionCount

• **getTransactionCount**: (`blockIdentifier`: [`BlockIdentifier`](../namespaces/types.md#blockidentifier)) => `Promise`\<`number`\>

#### Type declaration

▸ (`blockIdentifier?`): `Promise`\<`number`\>

Get the number of transactions in a block given a block id

**`Deprecated`**

renamed to getBlockTransactionCount()

##### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

##### Returns

`Promise`\<`number`\>

Number of transactions

#### Defined in

[src/provider/rpc.ts:230](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L230)

---

### traceTransaction

• **traceTransaction**: (`txHash`: [`BigNumberish`](../namespaces/types.md#bignumberish)) => `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.SPEC.md#transaction_trace)\>

#### Type declaration

▸ (`txHash`): `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.SPEC.md#transaction_trace)\>

**`Deprecated`**

renamed to getTransactionTrace();
For a given executed transaction, return the trace of its execution, including internal calls

##### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

##### Returns

`Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.SPEC.md#transaction_trace)\>

#### Defined in

[src/provider/rpc.ts:274](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L274)

---

### getSimulateTransaction

• **getSimulateTransaction**: (`invocations`: [`AccountInvocations`](../namespaces/types.md#accountinvocations), `__namedParameters`: [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions)) => `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Type declaration

▸ (`invocations`, `«destructured»`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

**`Deprecated`**

renamed to simulateTransaction();

##### Parameters

| Name             | Type                                                                                    |
| :--------------- | :-------------------------------------------------------------------------------------- |
| `invocations`    | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       |
| `«destructured»` | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) |

##### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getSimulateTransaction](ProviderInterface.md#getsimulatetransaction)

#### Defined in

[src/provider/rpc.ts:287](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L287)

## Methods

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

[src/provider/rpc.ts:91](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L91)

---

### errorHandler

▸ `Protected` **errorHandler**(`method`, `params`, `rpcError?`, `otherError?`): `void`

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

[src/provider/rpc.ts:105](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L105)

---

### fetchEndpoint

▸ `Protected` **fetchEndpoint**\<`T`\>(`method`, `params?`): `Promise`\<[`Methods`](../namespaces/types.RPC.md#methods)[`T`][``"result"``]\>

#### Type parameters

| Name | Type                                                                        |
| :--- | :-------------------------------------------------------------------------- |
| `T`  | extends keyof `ReadMethods` \| keyof `WriteMethods` \| keyof `TraceMethods` |

#### Parameters

| Name      | Type                                                               |
| :-------- | :----------------------------------------------------------------- |
| `method`  | `T`                                                                |
| `params?` | [`Methods`](../namespaces/types.RPC.md#methods)[`T`][``"params"``] |

#### Returns

`Promise`\<[`Methods`](../namespaces/types.RPC.md#methods)[`T`][``"result"``]\>

#### Defined in

[src/provider/rpc.ts:120](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L120)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

Gets the Starknet chain Id

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

the chain Id

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getChainId](ProviderInterface.md#getchainid)

#### Defined in

[src/provider/rpc.ts:135](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L135)

---

### getSpecVersion

▸ **getSpecVersion**(): `Promise`\<`string`\>

NEW: Returns the version of the Starknet JSON-RPC specification being used

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/provider/rpc.ts:143](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L143)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the nonce associated with the given address in the given block

#### Parameters

| Name              | Type                                                        | Description      |
| :---------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                |

#### Returns

`Promise`\<`string`\>

the hex nonce

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getNonceForAddress](ProviderInterface.md#getnonceforaddress)

#### Defined in

[src/provider/rpc.ts:147](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L147)

---

### getBlock

▸ **getBlock**(`blockIdentifier?`): `Promise`\<[`GetBlockResponse`](../interfaces/types.GetBlockResponse.md)\>

**`Deprecated`**

use getBlockWithTxHashes or getBlockWithTxs (will be removed on sequencer deprecation)

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`GetBlockResponse`](../interfaces/types.GetBlockResponse.md)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getBlock](ProviderInterface.md#getblock)

#### Defined in

[src/provider/rpc.ts:162](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L162)

---

### getBlockLatestAccepted

▸ **getBlockLatestAccepted**(): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.md#blockhashandnumber)\>

Get the most recent accepted block hash and number

#### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.md#blockhashandnumber)\>

#### Defined in

[src/provider/rpc.ts:176](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L176)

---

### getBlockNumber

▸ **getBlockNumber**(): `Promise`\<`number`\>

**`Deprecated`**

redundant use getBlockLatestAccepted();
Get the most recent accepted block number

#### Returns

`Promise`\<`number`\>

Number of the latest block

#### Defined in

[src/provider/rpc.ts:185](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L185)

---

### getBlockWithTxHashes

▸ **getBlockWithTxHashes**(`blockIdentifier?`): `Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.md#blockwithtxhashes)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxHashes`](../namespaces/types.RPC.md#blockwithtxhashes)\>

#### Defined in

[src/provider/rpc.ts:189](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L189)

---

### getBlockWithTxs

▸ **getBlockWithTxs**(`blockIdentifier?`): `Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.md#blockwithtxs)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockWithTxs`](../namespaces/types.RPC.md#blockwithtxs)\>

#### Defined in

[src/provider/rpc.ts:194](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L194)

---

### getBlockStateUpdate

▸ **getBlockStateUpdate**(`blockIdentifier?`): `Promise`\<[`PENDING_STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#pending_state_update) \| [`STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#state_update)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`PENDING_STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#pending_state_update) \| [`STATE_UPDATE`](../namespaces/types.RPC.SPEC.md#state_update)\>

#### Defined in

[src/provider/rpc.ts:199](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L199)

---

### getBlockTransactionsTraces

▸ **getBlockTransactionsTraces**(`blockIdentifier?`): `Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.md#blocktransactionstraces)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`BlockTransactionsTraces`](../namespaces/types.RPC.md#blocktransactionstraces)\>

#### Defined in

[src/provider/rpc.ts:209](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L209)

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

[src/provider/rpc.ts:220](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L220)

---

### getPendingTransactions

▸ **getPendingTransactions**(): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)[]\>

Return transactions from pending block

**`Deprecated`**

Instead use getBlock(BlockTag.pending); (will be removed in next minor version)

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)[]\>

#### Defined in

[src/provider/rpc.ts:236](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L236)

---

### getTransaction

▸ **getTransaction**(`txHash`): `Promise`\<[`InvokeTransactionResponse`](../interfaces/types.InvokeTransactionResponse.md) \| [`DeclareTransactionResponse`](../interfaces/types.DeclareTransactionResponse.md) \| [`RejectedTransactionResponse`](../namespaces/types.md#rejectedtransactionresponse)\>

**`Deprecated`**

use getTransactionByHash or getTransactionByBlockIdAndIndex (will be removed on sequencer deprecation)

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`InvokeTransactionResponse`](../interfaces/types.InvokeTransactionResponse.md) \| [`DeclareTransactionResponse`](../interfaces/types.DeclareTransactionResponse.md) \| [`RejectedTransactionResponse`](../namespaces/types.md#rejectedtransactionresponse)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getTransaction](ProviderInterface.md#gettransaction)

#### Defined in

[src/provider/rpc.ts:244](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L244)

---

### getTransactionByHash

▸ **getTransactionByHash**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)\>

#### Defined in

[src/provider/rpc.ts:248](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L248)

---

### getTransactionByBlockIdAndIndex

▸ **getTransactionByBlockIdAndIndex**(`blockIdentifier`, `index`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |
| `index`           | `number`                                                    |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.md#transactionwithhash)\>

#### Defined in

[src/provider/rpc.ts:255](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L255)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.md#transactionreceipt)\>

Gets the transaction receipt from a tx hash.

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.md#transactionreceipt)\>

the transaction receipt object

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getTransactionReceipt](ProviderInterface.md#gettransactionreceipt)

#### Defined in

[src/provider/rpc.ts:260](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L260)

---

### getTransactionTrace

▸ **getTransactionTrace**(`txHash`): `Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.SPEC.md#transaction_trace)\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TRANSACTION_TRACE`](../namespaces/types.RPC.SPEC.md#transaction_trace)\>

#### Defined in

[src/provider/rpc.ts:265](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L265)

---

### getTransactionStatus

▸ **getTransactionStatus**(`transactionHash`): `Promise`\<[`TransactionStatus`](../namespaces/types.RPC.md#transactionstatus)\>

NEW: Get the status of a transaction

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionStatus`](../namespaces/types.RPC.md#transactionstatus)\>

#### Defined in

[src/provider/rpc.ts:279](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L279)

---

### simulateTransaction

▸ **simulateTransaction**(`invocations`, `simulateTransactionOptions`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Parameters

| Name                         | Type                                                                                    | Description                                                                                                                                                     |
| :--------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations`                | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       | AccountInvocations                                                                                                                                              |
| `simulateTransactionOptions` | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) | blockIdentifier and flags to skip validation and fee charge<br/> - blockIdentifier<br/> - skipValidate (default false)<br/> - skipFeeCharge (default true)<br/> |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

#### Defined in

[src/provider/rpc.ts:296](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L296)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options?`): `Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.md#transactionreceipt)\>

Wait for the transaction to be accepted

#### Parameters

| Name       | Type                                                                            | Description                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           | transaction hash                                                                                                                         |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) | waitForTransactionOptions - (optional) retryInterval: number \| undefined; - (optional) successStates: TransactionStatus[] \| undefined; |

#### Returns

`Promise`\<[`TransactionReceipt`](../namespaces/types.RPC.md#transactionreceipt)\>

GetTransactionReceiptResponse

#### Implementation of

[ProviderInterface](ProviderInterface.md).[waitForTransaction](ProviderInterface.md#waitfortransaction)

#### Defined in

[src/provider/rpc.ts:316](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L316)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`\<`string`\>

Get the value of the storage (contract's variable) at the given address and key

#### Parameters

| Name              | Type                                                        | Description                                                  |
| :---------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       |                                                              |
| `key`             | [`BigNumberish`](../namespaces/types.md#bignumberish)       | from getStorageVarAddress('\<STORAGE_VARIABLE_NAME\>') (WIP) |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier                                             |

#### Returns

`Promise`\<`string`\>

the value of the storage variable

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getStorageAt](ProviderInterface.md#getstorageat)

#### Defined in

[src/provider/rpc.ts:393](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L393)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the contract class hash in the given block for the contract deployed at the given address

#### Parameters

| Name              | Type                                                        | Description      |
| :---------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<`string`\>

Class hash

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassHashAt](ProviderInterface.md#getclasshashat)

#### Defined in

[src/provider/rpc.ts:408](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L408)

---

### getClassByHash

▸ **getClassByHash**(`classHash`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Returns the contract class deployed under the given class hash.

#### Parameters

| Name        | Type                                                  | Description |
| :---------- | :---------------------------------------------------- | :---------- |
| `classHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) | class hash  |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Contract class of compiled contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassByHash](ProviderInterface.md#getclassbyhash)

#### Defined in

[src/provider/rpc.ts:420](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L420)

---

### getClass

▸ **getClass**(`classHash`, `blockIdentifier?`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `classHash`       | [`BigNumberish`](../namespaces/types.md#bignumberish)       |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

#### Defined in

[src/provider/rpc.ts:424](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L424)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Gets the contract class of the deployed contract.

#### Parameters

| Name              | Type                                                        | Description      |
| :---------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Contract class of compiled contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassAt](ProviderInterface.md#getclassat)

#### Defined in

[src/provider/rpc.ts:436](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L436)

---

### getCode

▸ **getCode**(`_contractAddress`, `_blockIdentifier?`): `Promise`\<[`GetCodeResponse`](../interfaces/types.GetCodeResponse.md)\>

**`Deprecated`**

The method should not be used

#### Parameters

| Name                | Type                                                        |
| :------------------ | :---------------------------------------------------------- |
| `_contractAddress`  | `string`                                                    |
| `_blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`GetCodeResponse`](../interfaces/types.GetCodeResponse.md)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getCode](ProviderInterface.md#getcode)

#### Defined in

[src/provider/rpc.ts:448](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L448)

---

### getContractVersion

▸ **getContractVersion**(`contractAddress`, `classHash?`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Gets the contract version from the provided address

#### Parameters

| Name              | Type                                                                            | Description                                                                                                                                                          |
| :---------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](../namespaces/types.md#bignumberish)                           | string                                                                                                                                                               |
| `classHash?`      | `undefined`                                                                     | undefined                                                                                                                                                            |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) | getContractVersionOptions - (optional) compiler - (default true) extract compiler version using type tactic from abi - (optional) blockIdentifier - block identifier |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getContractVersion](ProviderInterface.md#getcontractversion)

#### Defined in

[src/provider/rpc.ts:455](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L455)

▸ **getContractVersion**(`contractAddress`, `classHash`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Gets the contract version from the provided address

#### Parameters

| Name              | Type                                                                            | Description                                                                                                                                                          |
| :---------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractAddress` | `undefined`                                                                     | undefined                                                                                                                                                            |
| `classHash`       | [`BigNumberish`](../namespaces/types.md#bignumberish)                           |                                                                                                                                                                      |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) | getContractVersionOptions - (optional) compiler - (default true) extract compiler version using type tactic from abi - (optional) blockIdentifier - block identifier |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getContractVersion](ProviderInterface.md#getcontractversion)

#### Defined in

[src/provider/rpc.ts:460](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L460)

---

### getEstimateFee

▸ **getEstimateFee**(`invocation`, `invocationDetails`, `blockIdentifier?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

**`Deprecated`**

use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)

#### Parameters

| Name                | Type                                                                                |
| :------------------ | :---------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) |
| `blockIdentifier`   | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getEstimateFee](ProviderInterface.md#getestimatefee)

#### Defined in

[src/provider/rpc.ts:493](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L493)

---

### getInvokeEstimateFee

▸ **getInvokeEstimateFee**(`invocation`, `invocationDetails`, `blockIdentifier?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name                | Type                                                                                | Description                                                                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier`   | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getInvokeEstimateFee](ProviderInterface.md#getinvokeestimatefee)

#### Defined in

[src/provider/rpc.ts:501](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L501)

---

### getDeclareEstimateFee

▸ **getDeclareEstimateFee**(`invocation`, `details`, `blockIdentifier?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DECLARE transaction

#### Parameters

| Name              | Type                                                                                | Description                                                                                                                           |
| :---------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `invocation`      | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be declared containing: - compiled contract code - sender address - signature - (defaults to []) the signature |
| `details`         | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - version - optional version - optional maxFee                                                   |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                           |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getDeclareEstimateFee](ProviderInterface.md#getdeclareestimatefee)

#### Defined in

[src/provider/rpc.ts:521](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L521)

---

### getDeployAccountEstimateFee

▸ **getDeployAccountEstimateFee**(`invocation`, `details`, `blockIdentifier?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DEPLOY_ACCOUNT transaction

#### Parameters

| Name              | Type                                                                                          | Description                                                                                                                                 |
| :---------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `invocation`      | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | transaction payload to be deployed containing: - classHash - constructorCalldata - addressSalt - signature - (defaults to []) the signature |
| `details`         | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | optional details containing: - nonce - version - optional version - optional maxFee                                                         |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                                   | (optional) block identifier                                                                                                                 |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getDeployAccountEstimateFee](ProviderInterface.md#getdeployaccountestimatefee)

#### Defined in

[src/provider/rpc.ts:541](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L541)

---

### getEstimateFeeBulk

▸ **getEstimateFeeBulk**(`invocations`, `«destructured»`): `Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

Estimates the fee for a list of INVOKE transaction

#### Parameters

| Name             | Type                                                                            | Description                                                                                                                  |
| :--------------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `invocations`    | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               | AccountInvocations - Complete invocations array with account details                                                         |
| `«destructured»` | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) | getEstimateFeeBulkOptions - (optional) blockIdentifier - BlockIdentifier - (optional) skipValidate - boolean (default false) |

#### Returns

`Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getEstimateFeeBulk](ProviderInterface.md#getestimatefeebulk)

#### Defined in

[src/provider/rpc.ts:561](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L561)

---

### invokeFunction

▸ **invokeFunction**(`functionInvocation`, `details`): `Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.md#invokedtransaction)\>

Invokes a function on starknet

**`Deprecated`**

This method won't be supported as soon as fees are mandatory. Should not be used outside of Account class

#### Parameters

| Name                 | Type                                                                                | Description                                                                                                                                                                                                             |
| :------------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`            | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version - maxFee - optional maxFee                                                                                                           |

#### Returns

`Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.md#invokedtransaction)\>

response from addTransaction

#### Implementation of

[ProviderInterface](ProviderInterface.md).[invokeFunction](ProviderInterface.md#invokefunction)

#### Defined in

[src/provider/rpc.ts:576](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L576)

---

### declareContract

▸ **declareContract**(`«destructured»`, `details`): `Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.md#declaredtransaction)\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name             | Type                                                                                | Description                                                                                          |
| :--------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be deployed containing: - compiled contract code - sender address - signature |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | Invocation Details containing: - nonce - optional version - optional maxFee                          |

#### Returns

`Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.md#declaredtransaction)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[declareContract](ProviderInterface.md#declarecontract)

#### Defined in

[src/provider/rpc.ts:593](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L593)

---

### deployAccountContract

▸ **deployAccountContract**(`«destructured»`, `details`): `Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.md#deployedaccounttransaction)\>

Deploys a given compiled Account contract (json) to starknet

#### Parameters

| Name             | Type                                                                                          | Description                                                                                       |
| :--------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| `«destructured»` | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | payload to be deployed containing: - compiled contract code - constructor calldata - address salt |
| `details`        | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | -                                                                                                 |

#### Returns

`Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.md#deployedaccounttransaction)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[deployAccountContract](ProviderInterface.md#deployaccountcontract)

#### Defined in

[src/provider/rpc.ts:633](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L633)

---

### callContract

▸ **callContract**(`call`, `blockIdentifier?`): `Promise`\<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

Calls a function on the Starknet contract.

#### Parameters

| Name              | Type                                                        | Description              |
| :---------------- | :---------------------------------------------------------- | :----------------------- |
| `call`            | [`Call`](../namespaces/types.md#call)                       | transaction to be called |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier         |

#### Returns

`Promise`\<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

the result of the function on the smart contract.

#### Implementation of

[ProviderInterface](ProviderInterface.md).[callContract](ProviderInterface.md#callcontract)

#### Defined in

[src/provider/rpc.ts:651](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L651)

---

### estimateMessageFee

▸ **estimateMessageFee**(`message`, `blockIdentifier?`): `Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.SPEC.md#fee_estimate)\>

NEW: Estimate the fee for a message from L1

#### Parameters

| Name              | Type                                                         | Description     |
| :---------------- | :----------------------------------------------------------- | :-------------- |
| `message`         | [`MSG_FROM_L1`](../namespaces/types.RPC.SPEC.md#msg_from_l1) | Message From L1 |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)  | -               |

#### Returns

`Promise`\<[`FEE_ESTIMATE`](../namespaces/types.RPC.SPEC.md#fee_estimate)\>

#### Defined in

[src/provider/rpc.ts:669](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L669)

---

### getSyncingStats

▸ **getSyncingStats**(): `Promise`\<[`Syncing`](../namespaces/types.RPC.md#syncing)\>

Returns an object about the sync status, or false if the node is not synching

#### Returns

`Promise`\<[`Syncing`](../namespaces/types.RPC.md#syncing)\>

Object with the stats data

#### Defined in

[src/provider/rpc.ts:692](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L692)

---

### getEvents

▸ **getEvents**(`eventFilter`): `Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.SPEC.md#events_chunk)\>

Returns all events matching the given filter

#### Parameters

| Name          | Type                                                    |
| :------------ | :------------------------------------------------------ |
| `eventFilter` | [`EventFilter`](../namespaces/types.RPC.md#eventfilter) |

#### Returns

`Promise`\<[`EVENTS_CHUNK`](../namespaces/types.RPC.SPEC.md#events_chunk)\>

events and the pagination of the events

#### Defined in

[src/provider/rpc.ts:700](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L700)

---

### getStarkName

▸ **getStarkName**(`address`, `StarknetIdContract?`): `Promise`\<`string`\>

StarknetId Endpoint (get name from address)

#### Parameters

| Name                  | Type                                                  |
| :-------------------- | :---------------------------------------------------- |
| `address`             | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?` | `string`                                              |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/provider/rpc.ts:707](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L707)

---

### getAddressFromStarkName

▸ **getAddressFromStarkName**(`name`, `StarknetIdContract?`): `Promise`\<`string`\>

StarknetId Endpoint (get address from name)

#### Parameters

| Name                  | Type     |
| :-------------------- | :------- |
| `name`                | `string` |
| `StarknetIdContract?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/provider/rpc.ts:714](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L714)

---

### buildTransaction

▸ **buildTransaction**(`invocation`, `versionType?`): [`BROADCASTED_TXN`](../namespaces/types.RPC.SPEC.md#broadcasted_txn)

#### Parameters

| Name           | Type                                                                    |
| :------------- | :---------------------------------------------------------------------- |
| `invocation`   | [`AccountInvocationItem`](../namespaces/types.md#accountinvocationitem) |
| `versionType?` | `"fee"` \| `"transaction"`                                              |

#### Returns

[`BROADCASTED_TXN`](../namespaces/types.RPC.SPEC.md#broadcasted_txn)

#### Defined in

[src/provider/rpc.ts:718](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/provider/rpc.ts#L718)

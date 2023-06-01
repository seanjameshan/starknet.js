---
id: 'ProviderInterface'
title: 'Class: ProviderInterface'
sidebar_label: 'ProviderInterface'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ProviderInterface`**

  ↳ [`AccountInterface`](AccountInterface.md)

## Implemented by

- [`Provider`](Provider.md)
- [`RpcProvider`](RpcProvider.md)
- [`SequencerProvider`](SequencerProvider.md)

## Constructors

### constructor

• **new ProviderInterface**()

## Methods

### getChainId

▸ `Abstract` **getChainId**(): `Promise`<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

Gets the Starknet chain Id

#### Returns

`Promise`<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

the chain Id

#### Defined in

[src/provider/interface.ts:37](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L37)

---

### callContract

▸ `Abstract` **callContract**(`call`, `blockIdentifier?`): `Promise`<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

Calls a function on the Starknet contract.

#### Parameters

| Name               | Type                                                        | Description              |
| :----------------- | :---------------------------------------------------------- | :----------------------- |
| `call`             | [`Call`](../namespaces/types.md#call)                       | transaction to be called |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier         |

#### Returns

`Promise`<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

the result of the function on the smart contract.

#### Defined in

[src/provider/interface.ts:46](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L46)

---

### getBlock

▸ `Abstract` **getBlock**(`blockIdentifier`): `Promise`<[`GetBlockResponse`](../interfaces/types.GetBlockResponse.md)\>

Gets the block information

#### Parameters

| Name              | Type                                                        | Description      |
| :---------------- | :---------------------------------------------------------- | :--------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`<[`GetBlockResponse`](../interfaces/types.GetBlockResponse.md)\>

the block object

#### Defined in

[src/provider/interface.ts:57](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L57)

---

### getCode

▸ `Abstract` **getCode**(`contractAddress`, `blockIdentifier?`): `Promise`<[`GetCodeResponse`](../interfaces/types.GetCodeResponse.md)\>

**`Deprecated`**

The method should not be used

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `contractAddress`  | `string`                                                    |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`<[`GetCodeResponse`](../interfaces/types.GetCodeResponse.md)\>

#### Defined in

[src/provider/interface.ts:62](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L62)

---

### getClassAt

▸ `Abstract` **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`<[`ContractClass`](../namespaces/types.md#contractclass) \| `CONTRACT_CLASS`\>

Gets the contract class of the deployed contract.

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`<[`ContractClass`](../namespaces/types.md#contractclass) \| `CONTRACT_CLASS`\>

Contract class of compiled contract

#### Defined in

[src/provider/interface.ts:74](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L74)

---

### getClassHashAt

▸ `Abstract` **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`<`string`\>

Returns the class hash deployed under the given address.

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`<`string`\>

Class hash

#### Defined in

[src/provider/interface.ts:86](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L86)

---

### getClassByHash

▸ `Abstract` **getClassByHash**(`classHash`): `Promise`<[`ContractClass`](../namespaces/types.md#contractclass) \| `CONTRACT_CLASS`\>

Returns the contract class deployed under the given class hash.

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `classHash` | `string` | class hash  |

#### Returns

`Promise`<[`ContractClass`](../namespaces/types.md#contractclass) \| `CONTRACT_CLASS`\>

Contract class of compiled contract

#### Defined in

[src/provider/interface.ts:97](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L97)

---

### getNonceForAddress

▸ `Abstract` **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`<`string`\>

Gets the nonce of a contract with respect to a specific block

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                |

#### Returns

`Promise`<`string`\>

the hex nonce

#### Defined in

[src/provider/interface.ts:105](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L105)

---

### getStorageAt

▸ `Abstract` **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`<`string`\>

Gets the contract's storage variable at a specific key.

#### Parameters

| Name               | Type                                                        | Description                                                |
| :----------------- | :---------------------------------------------------------- | :--------------------------------------------------------- |
| `contractAddress`  | `string`                                                    |                                                            |
| `key`              | [`BigNumberish`](../namespaces/types.md#bignumberish)       | from getStorageVarAddress('<STORAGE_VARIABLE_NAME>') (WIP) |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier                                           |

#### Returns

`Promise`<`string`\>

the value of the storage variable

#### Defined in

[src/provider/interface.ts:118](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L118)

---

### getTransaction

▸ `Abstract` **getTransaction**(`transactionHash`): `Promise`<[`GetTransactionResponse`](../namespaces/types.md#gettransactionresponse)\>

Gets the transaction information from a tx id.

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`<[`GetTransactionResponse`](../namespaces/types.md#gettransactionresponse)\>

the transaction object { transaction_id, status, transaction, block_number?, block_number?, transaction_index?, transaction_failure_reason? }

#### Defined in

[src/provider/interface.ts:130](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L130)

---

### getTransactionReceipt

▸ `Abstract` **getTransactionReceipt**(`transactionHash`): `Promise`<[`GetTransactionReceiptResponse`](../namespaces/types.md#gettransactionreceiptresponse)\>

Gets the transaction receipt from a tx hash.

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`<[`GetTransactionReceiptResponse`](../namespaces/types.md#gettransactionreceiptresponse)\>

the transaction receipt object

#### Defined in

[src/provider/interface.ts:138](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L138)

---

### deployAccountContract

▸ `Abstract` **deployAccountContract**(`payload`, `details`): `Promise`<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

Deploys a given compiled Account contract (json) to starknet

#### Parameters

| Name      | Type                                                                                  | Description                                                                                       |
| :-------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| `payload` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | payload to be deployed containing: - compiled contract code - constructor calldata - address salt |
| `details` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)   | -                                                                                                 |

#### Returns

`Promise`<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Defined in

[src/provider/interface.ts:151](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L151)

---

### invokeFunction

▸ `Abstract` **invokeFunction**(`invocation`, `details`): `Promise`<[`InvokeFunctionResponse`](../interfaces/types.InvokeFunctionResponse.md)\>

Invokes a function on starknet

**`Deprecated`**

This method wont be supported as soon as fees are mandatory. Should not be used outside of Account class

#### Parameters

| Name         | Type                                                                                | Description                                                                                                                                                                                                             |
| :----------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation` | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`    | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version - maxFee - optional maxFee                                                                                                           |

#### Returns

`Promise`<[`InvokeFunctionResponse`](../interfaces/types.InvokeFunctionResponse.md)\>

response from addTransaction

#### Defined in

[src/provider/interface.ts:171](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L171)

---

### declareContract

▸ `Abstract` **declareContract**(`transaction`, `details`): `Promise`<[`DeclareContractResponse`](../interfaces/types.DeclareContractResponse.md)\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name          | Type                                                                                | Description                                                                                          |
| :------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be deployed containing: - compiled contract code - sender address - signature |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | Invocation Details containing: - nonce - optional version - optional maxFee                          |

#### Returns

`Promise`<[`DeclareContractResponse`](../interfaces/types.DeclareContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Defined in

[src/provider/interface.ts:188](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L188)

---

### getEstimateFee

▸ `Abstract` **getEstimateFee**(`invocation`, `details`, `blockIdentifier`, `skipValidate?`): `Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

**`Deprecated`**

Please use getInvokeEstimateFee or getDeclareEstimateFee instead. Should not be used outside of Account class

#### Parameters

| Name              | Type                                                                                | Description                                                                                                                                                                                                             |
| :---------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`      | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`         | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`   | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Defined in

[src/provider/interface.ts:209](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L209)

---

### getInvokeEstimateFee

▸ `Abstract` **getInvokeEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                                                                                                             |
| :----------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`       | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Defined in

[src/provider/interface.ts:231](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L231)

---

### getDeclareEstimateFee

▸ `Abstract` **getDeclareEstimateFee**(`transaction`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DECLARE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be declared containing: - compiled contract code - sender address - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - version - optional version - optional maxFee                                                   |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                           |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                             |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Defined in

[src/provider/interface.ts:253](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L253)

---

### getDeployAccountEstimateFee

▸ `Abstract` **getDeployAccountEstimateFee**(`transaction`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DEPLOY_ACCOUNT transaction

#### Parameters

| Name               | Type                                                                                          | Description                                                                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | transaction payload to be deployed containing: - classHash - constructorCalldata - addressSalt - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | optional details containing: - nonce - version - optional version - optional maxFee                                                         |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                                   | (optional) block identifier                                                                                                                 |
| `skipValidate?`    | `boolean`                                                                                     | (optional) skip cairo **validate** method                                                                                                   |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Defined in

[src/provider/interface.ts:276](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L276)

---

### getEstimateFeeBulk

▸ `Abstract` **getEstimateFeeBulk**(`invocations`, `blockIdentifier?`): `Promise`<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

Estimates the fee for a list of INVOKE transaction

#### Parameters

| Name               | Type                                                        | Description                                                                                                                                                                                                                                                    |
| :----------------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations`      | [`InvocationBulk`](../namespaces/types.md#invocationbulk)   | the array of invocation and invocation details object containing: - contractAddress - the address of the account - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature - nonce - optional nonce - version - optional version |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier                                                                                                                                                                                                                                               |

#### Returns

`Promise`<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

the estimated fee

#### Defined in

[src/provider/interface.ts:295](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L295)

---

### waitForTransaction

▸ `Abstract` **waitForTransaction**(`txHash`, `options?`): `Promise`<[`GetTransactionReceiptResponse`](../namespaces/types.md#gettransactionreceiptresponse)\>

Wait for the transaction to be accepted

#### Parameters

| Name       | Type                                                                            | Description                                                                                                  |
| :--------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           | transaction hash                                                                                             |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) | (optional) retryInterval: number \| undefined; - (optional) successStates: TransactionStatus[] \| undefined; |

#### Returns

`Promise`<[`GetTransactionReceiptResponse`](../namespaces/types.md#gettransactionreceiptresponse)\>

GetTransactionReceiptResponse

#### Defined in

[src/provider/interface.ts:308](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L308)

---

### getSimulateTransaction

▸ `Abstract` **getSimulateTransaction**(`invocation`, `invocationDetails`, `blockIdentifier?`, `skipValidate?`): `Promise`<[`TransactionSimulationResponse`](../interfaces/types.TransactionSimulationResponse.md)\>

Simulates the transaction and returns the transaction trace and estimated fee.

#### Parameters

| Name                | Type                                                                                | Description                                                                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | -                                                                                                                                                                                                                       |
| `blockIdentifier?`  | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`     | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`<[`TransactionSimulationResponse`](../interfaces/types.TransactionSimulationResponse.md)\>

the transaction trace and estimated fee

#### Defined in

[src/provider/interface.ts:328](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L328)

---

### getStateUpdate

▸ `Abstract` **getStateUpdate**(`blockIdentifier?`): `Promise`<[`StateUpdateResponse`](../interfaces/types.StateUpdateResponse.md)\>

Gets the state changes in a specific block

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`<[`StateUpdateResponse`](../interfaces/types.StateUpdateResponse.md)\>

StateUpdateResponse

#### Defined in

[src/provider/interface.ts:341](https://github.com/0xs34n/starknet.js/blob/develop/src/provider/interface.ts#L341)

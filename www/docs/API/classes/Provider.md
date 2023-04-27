---
id: 'Provider'
title: 'Class: Provider'
sidebar_label: 'Provider'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Provider`**

  ↳ [`Account`](Account.md)

## Implements

- [`ProviderInterface`](ProviderInterface.md)

## Constructors

### constructor

• **new Provider**(`providerOrOptions?`)

#### Parameters

| Name                 | Type                                                                                                 |
| :------------------- | :--------------------------------------------------------------------------------------------------- |
| `providerOrOptions?` | [`ProviderInterface`](ProviderInterface.md) \| [`ProviderOptions`](../interfaces/ProviderOptions.md) |

#### Defined in

[src/provider/default.ts:39](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L39)

## Properties

### provider

• `Private` **provider**: [`ProviderInterface`](ProviderInterface.md)

#### Defined in

[src/provider/default.ts:37](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L37)

## Methods

### getChainId

▸ **getChainId**(): `Promise`<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

Gets the Starknet chain Id

#### Returns

`Promise`<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

the chain Id

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getChainId](ProviderInterface.md#getchainid)

#### Defined in

[src/provider/default.ts:61](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L61)

---

### getBlock

▸ **getBlock**(`blockIdentifier`): `Promise`<[`GetBlockResponse`](../interfaces/GetBlockResponse.md)\>

Gets the block information

#### Parameters

| Name              | Type              | Description      |
| :---------------- | :---------------- | :--------------- |
| `blockIdentifier` | `BlockIdentifier` | block identifier |

#### Returns

`Promise`<[`GetBlockResponse`](../interfaces/GetBlockResponse.md)\>

the block object

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getBlock](ProviderInterface.md#getblock)

#### Defined in

[src/provider/default.ts:65](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L65)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`<[`ContractClass`](../interfaces/ContractClass.md)\>

Gets the contract class of the deployed contract.

#### Parameters

| Name               | Type              | Description      |
| :----------------- | :---------------- | :--------------- |
| `contractAddress`  | `string`          | contract address |
| `blockIdentifier?` | `BlockIdentifier` | block identifier |

#### Returns

`Promise`<[`ContractClass`](../interfaces/ContractClass.md)\>

Contract class of compiled contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassAt](ProviderInterface.md#getclassat)

#### Defined in

[src/provider/default.ts:69](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L69)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier`): `Promise`<`string`\>

Returns the class hash deployed under the given address.

#### Parameters

| Name              | Type              | Description      |
| :---------------- | :---------------- | :--------------- |
| `contractAddress` | `string`          | contract address |
| `blockIdentifier` | `BlockIdentifier` | block identifier |

#### Returns

`Promise`<`string`\>

Class hash

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassHashAt](ProviderInterface.md#getclasshashat)

#### Defined in

[src/provider/default.ts:76](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L76)

---

### getClassByHash

▸ **getClassByHash**(`classHash`): `Promise`<[`ContractClass`](../interfaces/ContractClass.md)\>

Returns the contract class deployed under the given class hash.

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `classHash` | `string` | class hash  |

#### Returns

`Promise`<[`ContractClass`](../interfaces/ContractClass.md)\>

Contract class of compiled contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getClassByHash](ProviderInterface.md#getclassbyhash)

#### Defined in

[src/provider/default.ts:83](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L83)

---

### getEstimateFee

▸ **getEstimateFee**(`invocationWithTxType`, `invocationDetails`, `blockIdentifier`): `Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

**`Deprecated`**

Please use getInvokeEstimateFee or getDeclareEstimateFee instead. Should not be used outside of Account class

#### Parameters

| Name                   | Type                                                                       | Description                                                                                                                                                                                                             |
| :--------------------- | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocationWithTxType` | [`Invocation`](../modules.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails`    | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier`      | `BlockIdentifier`                                                          | block identifier                                                                                                                                                                                                        |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getEstimateFee](ProviderInterface.md#getestimatefee)

#### Defined in

[src/provider/default.ts:87](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L87)

---

### getInvokeEstimateFee

▸ **getInvokeEstimateFee**(`invocationWithTxType`, `invocationDetails`, `blockIdentifier?`): `Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name                   | Type                                                                       | Description                                                                                                                                                                                                             |
| :--------------------- | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocationWithTxType` | [`Invocation`](../modules.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails`    | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier?`     | `BlockIdentifier`                                                          | block identifier                                                                                                                                                                                                        |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getInvokeEstimateFee](ProviderInterface.md#getinvokeestimatefee)

#### Defined in

[src/provider/default.ts:95](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L95)

---

### getEstimateFeeBulk

▸ **getEstimateFeeBulk**(`invocations`, `blockIdentifier?`): `Promise`<[`EstimateFeeResponseBulk`](../modules.md#estimatefeeresponsebulk)\>

Estimates the fee for a list of INVOKE transaction

#### Parameters

| Name               | Type                                             | Description                                                                                                                                                                                                                                                    |
| :----------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations`      | [`InvocationBulk`](../modules.md#invocationbulk) | the array of invocation and invocation details object containing: - contractAddress - the address of the account - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature - nonce - optional nonce - version - optional version |
| `blockIdentifier?` | `BlockIdentifier`                                | block identifier                                                                                                                                                                                                                                               |

#### Returns

`Promise`<[`EstimateFeeResponseBulk`](../modules.md#estimatefeeresponsebulk)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getEstimateFeeBulk](ProviderInterface.md#getestimatefeebulk)

#### Defined in

[src/provider/default.ts:107](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L107)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`<[`BigNumberish`](../namespaces/num.md#bignumberish)\>

Gets the nonce of a contract with respect to a specific block

#### Parameters

| Name               | Type              | Description      |
| :----------------- | :---------------- | :--------------- |
| `contractAddress`  | `string`          | contract address |
| `blockIdentifier?` | `BlockIdentifier` | -                |

#### Returns

`Promise`<[`BigNumberish`](../namespaces/num.md#bignumberish)\>

the hex nonce

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getNonceForAddress](ProviderInterface.md#getnonceforaddress)

#### Defined in

[src/provider/default.ts:114](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L114)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`<[`BigNumberish`](../namespaces/num.md#bignumberish)\>

Gets the contract's storage variable at a specific key.

#### Parameters

| Name               | Type                                                | Description                                                |
| :----------------- | :-------------------------------------------------- | :--------------------------------------------------------- |
| `contractAddress`  | `string`                                            |                                                            |
| `key`              | [`BigNumberish`](../namespaces/num.md#bignumberish) | from getStorageVarAddress('<STORAGE_VARIABLE_NAME>') (WIP) |
| `blockIdentifier?` | `BlockIdentifier`                                   | block identifier                                           |

#### Returns

`Promise`<[`BigNumberish`](../namespaces/num.md#bignumberish)\>

the value of the storage variable

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getStorageAt](ProviderInterface.md#getstorageat)

#### Defined in

[src/provider/default.ts:121](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L121)

---

### getTransaction

▸ **getTransaction**(`txHash`): `Promise`<[`GetTransactionResponse`](../modules.md#gettransactionresponse)\>

Gets the transaction information from a tx id.

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/num.md#bignumberish) |

#### Returns

`Promise`<[`GetTransactionResponse`](../modules.md#gettransactionresponse)\>

the transaction object { transaction_id, status, transaction, block_number?, block_number?, transaction_index?, transaction_failure_reason? }

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getTransaction](ProviderInterface.md#gettransaction)

#### Defined in

[src/provider/default.ts:129](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L129)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

Gets the transaction receipt from a tx hash.

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/num.md#bignumberish) |

#### Returns

`Promise`<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

the transaction receipt object

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getTransactionReceipt](ProviderInterface.md#gettransactionreceipt)

#### Defined in

[src/provider/default.ts:133](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L133)

---

### callContract

▸ **callContract**(`request`, `blockIdentifier?`): `Promise`<[`CallContractResponse`](../modules.md#callcontractresponse)\>

Calls a function on the Starknet contract.

#### Parameters

| Name               | Type                         | Description              |
| :----------------- | :--------------------------- | :----------------------- |
| `request`          | [`Call`](../modules.md#call) | transaction to be called |
| `blockIdentifier?` | `BlockIdentifier`            | block identifier         |

#### Returns

`Promise`<[`CallContractResponse`](../modules.md#callcontractresponse)\>

the result of the function on the smart contract.

#### Implementation of

[ProviderInterface](ProviderInterface.md).[callContract](ProviderInterface.md#callcontract)

#### Defined in

[src/provider/default.ts:137](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L137)

---

### invokeFunction

▸ **invokeFunction**(`functionInvocation`, `details`): `Promise`<[`InvokeFunctionResponse`](../interfaces/InvokeFunctionResponse.md)\>

Invokes a function on starknet

**`Deprecated`**

This method wont be supported as soon as fees are mandatory. Should not be used outside of Account class

#### Parameters

| Name                 | Type                                                                       | Description                                                                                                                                                                                                             |
| :------------------- | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../modules.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`            | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version - maxFee - optional maxFee                                                                                                           |

#### Returns

`Promise`<[`InvokeFunctionResponse`](../interfaces/InvokeFunctionResponse.md)\>

response from addTransaction

#### Implementation of

[ProviderInterface](ProviderInterface.md).[invokeFunction](ProviderInterface.md#invokefunction)

#### Defined in

[src/provider/default.ts:144](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L144)

---

### deployAccountContract

▸ **deployAccountContract**(`payload`, `details`): `Promise`<[`DeployContractResponse`](../interfaces/DeployContractResponse.md)\>

Deploys a given compiled Account contract (json) to starknet

#### Parameters

| Name      | Type                                                                                 | Description                                                                                       |
| :-------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| `payload` | [`DeployAccountContractTransaction`](../modules.md#deployaccountcontracttransaction) | payload to be deployed containing: - compiled contract code - constructor calldata - address salt |
| `details` | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce)           | -                                                                                                 |

#### Returns

`Promise`<[`DeployContractResponse`](../interfaces/DeployContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[deployAccountContract](ProviderInterface.md#deployaccountcontract)

#### Defined in

[src/provider/default.ts:151](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L151)

---

### declareContract

▸ **declareContract**(`transaction`, `details`): `Promise`<[`DeclareContractResponse`](../interfaces/DeclareContractResponse.md)\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name          | Type                                                                       | Description                                                                                          |
| :------------ | :------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeclareContractTransaction`](../modules.md#declarecontracttransaction)   | transaction payload to be deployed containing: - compiled contract code - sender address - signature |
| `details`     | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | Invocation Details containing: - nonce - optional version - optional maxFee                          |

#### Returns

`Promise`<[`DeclareContractResponse`](../interfaces/DeclareContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[ProviderInterface](ProviderInterface.md).[declareContract](ProviderInterface.md#declarecontract)

#### Defined in

[src/provider/default.ts:158](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L158)

---

### getDeclareEstimateFee

▸ **getDeclareEstimateFee**(`transaction`, `details`, `blockIdentifier?`): `Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

Estimates the fee for a given DECLARE transaction

#### Parameters

| Name               | Type                                                                       | Description                                                                                                                           |
| :----------------- | :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeclareContractTransaction`](../modules.md#declarecontracttransaction)   | transaction payload to be declared containing: - compiled contract code - sender address - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | optional details containing: - nonce - version - optional version - optional maxFee                                                   |
| `blockIdentifier?` | `BlockIdentifier`                                                          | block identifier                                                                                                                      |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getDeclareEstimateFee](ProviderInterface.md#getdeclareestimatefee)

#### Defined in

[src/provider/default.ts:165](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L165)

---

### getDeployAccountEstimateFee

▸ **getDeployAccountEstimateFee**(`transaction`, `details`, `blockIdentifier?`): `Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

Estimates the fee for a given DEPLOY_ACCOUNT transaction

#### Parameters

| Name               | Type                                                                                 | Description                                                                                                                                 |
| :----------------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeployAccountContractTransaction`](../modules.md#deployaccountcontracttransaction) | transaction payload to be deployed containing: - classHash - constructorCalldata - addressSalt - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce)           | optional details containing: - nonce - version - optional version - optional maxFee                                                         |
| `blockIdentifier?` | `BlockIdentifier`                                                                    | block identifier                                                                                                                            |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getDeployAccountEstimateFee](ProviderInterface.md#getdeployaccountestimatefee)

#### Defined in

[src/provider/default.ts:173](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L173)

---

### getCode

▸ **getCode**(`contractAddress`, `blockIdentifier?`): `Promise`<[`GetCodeResponse`](../interfaces/GetCodeResponse.md)\>

**`Deprecated`**

The method should not be used

#### Parameters

| Name               | Type              |
| :----------------- | :---------------- |
| `contractAddress`  | `string`          |
| `blockIdentifier?` | `BlockIdentifier` |

#### Returns

`Promise`<[`GetCodeResponse`](../interfaces/GetCodeResponse.md)\>

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getCode](ProviderInterface.md#getcode)

#### Defined in

[src/provider/default.ts:181](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L181)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options`): `Promise`<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

Wait for the transaction to be accepted

#### Parameters

| Name      | Type                                                                   | Description      |
| :-------- | :--------------------------------------------------------------------- | :--------------- |
| `txHash`  | [`BigNumberish`](../namespaces/num.md#bignumberish)                    | transaction hash |
| `options` | [`waitForTransactionOptions`](../modules.md#waitfortransactionoptions) | -                |

#### Returns

`Promise`<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

GetTransactionReceiptResponse

#### Implementation of

[ProviderInterface](ProviderInterface.md).[waitForTransaction](ProviderInterface.md#waitfortransaction)

#### Defined in

[src/provider/default.ts:188](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L188)

---

### getSimulateTransaction

▸ **getSimulateTransaction**(`invocation`, `invocationDetails`, `blockIdentifier?`): `Promise`<[`TransactionSimulationResponse`](../interfaces/TransactionSimulationResponse.md)\>

Simulates the transaction and returns the transaction trace and estimated fee.

#### Parameters

| Name                | Type                                                                       | Description                                                                                                                                                                                                             |
| :------------------ | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../modules.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../modules.md#invocationsdetailswithnonce) | -                                                                                                                                                                                                                       |
| `blockIdentifier?`  | `BlockIdentifier`                                                          | block identifier                                                                                                                                                                                                        |

#### Returns

`Promise`<[`TransactionSimulationResponse`](../interfaces/TransactionSimulationResponse.md)\>

the transaction trace and estimated fee

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getSimulateTransaction](ProviderInterface.md#getsimulatetransaction)

#### Defined in

[src/provider/default.ts:195](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L195)

---

### getStateUpdate

▸ **getStateUpdate**(`blockIdentifier?`): `Promise`<[`StateUpdateResponse`](../interfaces/StateUpdateResponse.md)\>

Gets the state changes in a specific block

#### Parameters

| Name               | Type              | Description      |
| :----------------- | :---------------- | :--------------- |
| `blockIdentifier?` | `BlockIdentifier` | block identifier |

#### Returns

`Promise`<[`StateUpdateResponse`](../interfaces/StateUpdateResponse.md)\>

StateUpdateResponse

#### Implementation of

[ProviderInterface](ProviderInterface.md).[getStateUpdate](ProviderInterface.md#getstateupdate)

#### Defined in

[src/provider/default.ts:203](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L203)

---

### getStarkName

▸ **getStarkName**(`address`, `StarknetIdContract?`): `Promise`<`string`\>

#### Parameters

| Name                  | Type                                                |
| :-------------------- | :-------------------------------------------------- |
| `address`             | [`BigNumberish`](../namespaces/num.md#bignumberish) |
| `StarknetIdContract?` | `string`                                            |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/provider/default.ts:207](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L207)

---

### getAddressFromStarkName

▸ **getAddressFromStarkName**(`name`, `StarknetIdContract?`): `Promise`<`string`\>

#### Parameters

| Name                  | Type     |
| :-------------------- | :------- |
| `name`                | `string` |
| `StarknetIdContract?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/provider/default.ts:211](https://github.com/PhilippeR26/starknet.js/blob/689c0e5/src/provider/default.ts#L211)

---
id: 'AccountInterface'
title: 'Class: AccountInterface'
sidebar_label: 'AccountInterface'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ProviderInterface`](ProviderInterface.md)

  ↳ **`AccountInterface`**

## Implemented by

- [`Account`](Account.md)
- [`WalletAccount`](WalletAccount.md)

## Constructors

### constructor

• **new AccountInterface**(): [`AccountInterface`](AccountInterface.md)

#### Returns

[`AccountInterface`](AccountInterface.md)

#### Inherited from

[ProviderInterface](ProviderInterface.md).[constructor](ProviderInterface.md#constructor)

## Properties

### address

• `Abstract` **address**: `string`

#### Defined in

[src/account/interface.ts:35](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L35)

---

### signer

• `Abstract` **signer**: [`SignerInterface`](SignerInterface.md)

#### Defined in

[src/account/interface.ts:37](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L37)

---

### cairoVersion

• `Abstract` **cairoVersion**: [`CairoVersion`](../namespaces/types.md#cairoversion)

#### Defined in

[src/account/interface.ts:39](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L39)

---

### channel

• `Abstract` **channel**: [`RpcChannel`](RPC06.RpcChannel.md) \| [`RpcChannel`](RPC07.RpcChannel.md)

#### Inherited from

[ProviderInterface](ProviderInterface.md).[channel](ProviderInterface.md#channel)

#### Defined in

[src/provider/interface.ts:37](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L37)

## Methods

### estimateInvokeFee

▸ **estimateInvokeFee**(`calls`, `estimateFeeDetails?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimate Fee for executing an INVOKE transaction on starknet

#### Parameters

| Name                  | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------- | :----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calls`               | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata? - (defaults to []) the calldata                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `estimateFeeDetails?` | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md)                          | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

response from estimate_fee

#### Defined in

[src/account/interface.ts:62](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L62)

---

### estimateDeclareFee

▸ **estimateDeclareFee**(`contractPayload`, `estimateFeeDetails?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimate Fee for executing a DECLARE transaction on starknet

#### Parameters

| Name                  | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------- | :------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractPayload`     | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload) | the payload object containing: - contract - the compiled contract to be declared - casm? - compiled cairo assembly. Cairo1(casm or compiledClassHash are required) - classHash? - the class hash of the compiled contract. Precalculate for faster execution. - compiledClassHash?: class hash of the cairo assembly. Cairo1(casm or compiledClassHash are required)                                                                                                                                                                                                                                                                                 |
| `estimateFeeDetails?` | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md)         | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

response from estimate_fee

#### Defined in

[src/account/interface.ts:89](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L89)

---

### estimateAccountDeployFee

▸ **estimateAccountDeployFee**(`contractPayload`, `estimateFeeDetails?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimate Fee for executing a DEPLOY_ACCOUNT transaction on starknet

#### Parameters

| Name                  | Type                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractPayload`     | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | classHash - the class hash of the compiled contract. - constructorCalldata? - constructor data; - contractAddress? - future account contract address. Precalculate for faster execution. - addressSalt? - salt used for calculation of the contractAddress. Required if contractAddress is provided.                                                                                                                                                                                                                                             |
| `estimateFeeDetails?` | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md)                     | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

response from estimate_fee

#### Defined in

[src/account/interface.ts:115](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L115)

---

### estimateDeployFee

▸ **estimateDeployFee**(`deployContractPayload`, `estimateFeeDetails?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimate Fee for executing a UDC DEPLOY transaction on starknet
This is different from the normal DEPLOY transaction as it goes through the Universal Deployer Contract (UDC)

#### Parameters

| Name                    | Type                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deployContractPayload` | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | array or singular - classHash: computed class hash of compiled contract - salt: address salt - unique: bool if true ensure unique salt - constructorCalldata: constructor calldata                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `estimateFeeDetails?`   | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md)                                                                                                                                | blockIdentifier? - nonce? - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Defined in

[src/account/interface.ts:141](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L141)

---

### estimateFeeBulk

▸ **estimateFeeBulk**(`invocations`, `details?`): `Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

Estimate Fee for executing a list of transactions on starknet
Contract must be deployed for fee estimation to be possible

#### Parameters

| Name          | Type                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------ | :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations` | [`Invocations`](../namespaces/types.md#invocations)               | array of transaction object containing : - type - the type of transaction : 'DECLARE' \| (multi)'DEPLOY' \| (multi)'INVOKE_FUNCTION' \| 'DEPLOY_ACCOUNT' - payload - the payload of the transaction                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `details?`    | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md) | blockIdentifier? - nonce? - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

response from estimate_fee

#### Defined in

[src/account/interface.ts:167](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L167)

---

### getSuggestedFee

▸ **getSuggestedFee**(`estimateFeeAction`, `details`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Gets Suggested Max Fee based on the transaction type

#### Parameters

| Name                | Type                                                              |
| :------------------ | :---------------------------------------------------------------- |
| `estimateFeeAction` | [`EstimateFeeAction`](../namespaces/types.md#estimatefeeaction)   |
| `details`           | [`EstimateFeeDetails`](../interfaces/types.EstimateFeeDetails.md) |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

EstimateFee (...response, resourceBounds, suggestedMaxFee)

#### Defined in

[src/account/interface.ts:179](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L179)

---

### simulateTransaction

▸ **simulateTransaction**(`invocations`, `details?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

Simulates an array of transaction and returns an array of transaction trace and estimated fee.

#### Parameters

| Name          | Type                                                                              | Description                                                                                                       |
| :------------ | :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `invocations` | [`Invocations`](../namespaces/types.md#invocations)                               | Invocations containing: - type - transaction type: DECLARE, (multi)DEPLOY, DEPLOY_ACCOUNT, (multi)INVOKE_FUNCTION |
| `details?`    | [`SimulateTransactionDetails`](../namespaces/types.md#simulatetransactiondetails) | SimulateTransactionDetails                                                                                        |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

response from simulate_transaction

#### Defined in

[src/account/interface.ts:193](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L193)

---

### execute

▸ **execute**(`transactions`, `transactionsDetail?`): `Promise`\<\{ `transaction_hash`: `string` }\>

Invoke execute function in account contract

#### Parameters

| Name                  | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`        | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object or an array of them, containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `transactionsDetail?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                          | Additional optional parameters for the transaction                                                                                                                                                                                           |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

response from addTransaction

#### Defined in

[src/account/interface.ts:210](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L210)

▸ **execute**(`transactions`, `abis?`, `transactionsDetail?`): `Promise`\<\{ `transaction_hash`: `string` }\>

#### Parameters

| Name                  | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`        | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object or an array of them, containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `abis?`               | [`Abi`](../namespaces/types.md#abi)[]                                                      | (optional) the abi of the contract for better displaying                                                                                                                                                                                     |
| `transactionsDetail?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                          | Additional optional parameters for the transaction \*                                                                                                                                                                                        |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

response from addTransaction

**`Deprecated`**

#### Defined in

[src/account/interface.ts:225](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L225)

---

### declare

▸ **declare**(`contractPayload`, `transactionsDetail?`): `Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name                  | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------- | :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractPayload`     | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload) | transaction payload to be deployed containing: - contract: compiled contract code - (optional) classHash: computed class hash of compiled contract. Pre-compute it for faster execution. - (required for Cairo1 without compiledClassHash) casm: CompiledContract \| string; - (optional for Cairo1 with casm) compiledClassHash: compiled class hash from casm. Pre-compute it for faster execution. |
| `transactionsDetail?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)         | InvocationsDetails                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

`Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

a confirmation of sending a transaction on the starknet contract

#### Defined in

[src/account/interface.ts:243](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L243)

---

### deploy

▸ **deploy**(`payload`, `details?`): `Promise`\<[`MultiDeployContractResponse`](../namespaces/types.md#multideploycontractresponse)\>

Deploys a declared contract to starknet - using Universal Deployer Contract (UDC)
support multicall

#### Parameters

| Name       | Type                                                                                                                                                                                             | Description                                                                                                                                                                            |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`  | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | classHash: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                                                                                                                                | InvocationsDetails                                                                                                                                                                     |

#### Returns

`Promise`\<[`MultiDeployContractResponse`](../namespaces/types.md#multideploycontractresponse)\>

- contract_address[]
- transaction_hash

#### Defined in

[src/account/interface.ts:263](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L263)

---

### deployContract

▸ **deployContract**(`payload`, `details?`): `Promise`\<[`DeployContractUDCResponse`](../namespaces/types.md#deploycontractudcresponse)\>

Simplify deploy simulating old DeployContract with same response + UDC specific response
Internal wait for L2 transaction, support multicall

#### Parameters

| Name       | Type                                                                                                                                                                                             | Description                                                                                                                                                                            |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`  | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | classHash: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                                                                                                                                | InvocationsDetails                                                                                                                                                                     |

#### Returns

`Promise`\<[`DeployContractUDCResponse`](../namespaces/types.md#deploycontractudcresponse)\>

- contract_address
- transaction_hash
- address
- deployer
- unique
- classHash
- calldata_len
- calldata
- salt

#### Defined in

[src/account/interface.ts:290](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L290)

---

### declareAndDeploy

▸ **declareAndDeploy**(`payload`, `details?`): `Promise`\<[`DeclareDeployUDCResponse`](../namespaces/types.md#declaredeployudcresponse)\>

Declares and Deploy a given compiled contract (json) to starknet using UDC
Internal wait for L2 transaction, do not support multicall
Method will pass even if contract is already declared (internal using DeclareIfNot)

#### Parameters

| Name       | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                          |
| :--------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`  | [`DeclareAndDeployContractPayload`](../namespaces/types.md#declareanddeploycontractpayload) | contract: compiled contract code - [casm=cairo1]: CairoAssembly \| undefined; - [compiledClassHash]: string \| undefined; - [classHash]: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                           | InvocationsDetails                                                                                                                                                                                                                                                                                                   |

#### Returns

`Promise`\<[`DeclareDeployUDCResponse`](../namespaces/types.md#declaredeployudcresponse)\>

- declare
  - transaction_hash
- deploy
  - contract_address
  - transaction_hash
  - address
  - deployer
  - unique
  - classHash
  - calldata_len
  - calldata
  - salt

#### Defined in

[src/account/interface.ts:324](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L324)

---

### deployAccount

▸ **deployAccount**(`contractPayload`, `transactionsDetail?`): `Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

Deploy the account on Starknet

#### Parameters

| Name                  | Type                                                                                  | Description                                                                                                                                                                             |
| :-------------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractPayload`     | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | transaction payload to be deployed containing: - classHash: computed class hash of compiled contract - optional constructor calldata - optional address salt - optional contractAddress |
| `transactionsDetail?` | [`InvocationsDetails`](../namespaces/types.md#invocationsdetails)                     | InvocationsDetails                                                                                                                                                                      |

#### Returns

`Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Defined in

[src/account/interface.ts:341](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L341)

---

### signMessage

▸ **signMessage**(`typedData`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a TypedData object for off-chain usage with the Starknet private key and returns the signature
This adds a message prefix so it can't be interchanged with transactions

#### Parameters

| Name        | Type                                                                     | Description                   |
| :---------- | :----------------------------------------------------------------------- | :---------------------------- |
| `typedData` | [`TypedData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.TypedData.md) | TypedData object to be signed |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

the signature of the TypedData object

**`Throws`**

if typedData is not a valid TypedData

#### Defined in

[src/account/interface.ts:354](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L354)

---

### hashMessage

▸ **hashMessage**(`typedData`): `Promise`\<`string`\>

Hash a TypedData object with Pedersen hash and return the hash
This adds a message prefix so it can't be interchanged with transactions

#### Parameters

| Name        | Type                                                                     | Description                   |
| :---------- | :----------------------------------------------------------------------- | :---------------------------- |
| `typedData` | [`TypedData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.TypedData.md) | TypedData object to be hashed |

#### Returns

`Promise`\<`string`\>

the hash of the TypedData object

**`Throws`**

if typedData is not a valid TypedData

#### Defined in

[src/account/interface.ts:364](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L364)

---

### verifyMessage

▸ **verifyMessage**(`typedData`, `signature`): `Promise`\<`boolean`\>

Verify a signature of a TypedData object

#### Parameters

| Name        | Type                                                                     | Description                       |
| :---------- | :----------------------------------------------------------------------- | :-------------------------------- |
| `typedData` | [`TypedData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.TypedData.md) | TypedData object to be verified   |
| `signature` | [`Signature`](../namespaces/types.md#signature)                          | signature of the TypedData object |

#### Returns

`Promise`\<`boolean`\>

true if the signature is valid, false otherwise

**`Throws`**

if typedData is not a valid TypedData or the signature is not a valid signature

#### Defined in

[src/account/interface.ts:374](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L374)

---

### verifyMessageHash

▸ **verifyMessageHash**(`hash`, `signature`): `Promise`\<`boolean`\>

Verify a signature of a given hash

#### Parameters

| Name        | Type                                                  | Description           |
| :---------- | :---------------------------------------------------- | :-------------------- |
| `hash`      | [`BigNumberish`](../namespaces/types.md#bignumberish) | hash to be verified   |
| `signature` | [`Signature`](../namespaces/types.md#signature)       | signature of the hash |

#### Returns

`Promise`\<`boolean`\>

true if the signature is valid, false otherwise

**`Warning`**

This method is not recommended, use verifyMessage instead

**`Throws`**

if the signature is not a valid signature

#### Defined in

[src/account/interface.ts:385](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L385)

---

### getNonce

▸ **getNonce**(`blockIdentifier?`): `Promise`\<`string`\>

Gets the nonce of the account with respect to a specific block

#### Parameters

| Name               | Type                                                        | Description                                     |
| :----------------- | :---------------------------------------------------------- | :---------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | optional blockIdentifier. Defaults to 'pending' |

#### Returns

`Promise`\<`string`\>

nonce of the account

#### Defined in

[src/account/interface.ts:393](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/interface.ts#L393)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

Gets the Starknet chain Id

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

the chain Id

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getChainId](ProviderInterface.md#getchainid)

#### Defined in

[src/provider/interface.ts:44](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L44)

---

### callContract

▸ **callContract**(`call`, `blockIdentifier?`): `Promise`\<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

Calls a function on the Starknet contract.

#### Parameters

| Name               | Type                                                        | Description              |
| :----------------- | :---------------------------------------------------------- | :----------------------- |
| `call`             | [`Call`](../namespaces/types.md#call)                       | transaction to be called |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier         |

#### Returns

`Promise`\<[`CallContractResponse`](../namespaces/types.md#callcontractresponse)\>

the result of the function on the smart contract.

#### Inherited from

[ProviderInterface](ProviderInterface.md).[callContract](ProviderInterface.md#callcontract)

#### Defined in

[src/provider/interface.ts:53](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L53)

---

### getBlock

▸ **getBlock**(`blockIdentifier?`): `Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

Gets the block information

#### Parameters

| Name               | Type        | Description      |
| :----------------- | :---------- | :--------------- |
| `blockIdentifier?` | `"pending"` | block identifier |

#### Returns

`Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

the block object

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getBlock](ProviderInterface.md#getblock)

#### Defined in

[src/provider/interface.ts:64](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L64)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `blockIdentifier` | `"latest"` |

#### Returns

`Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getBlock](ProviderInterface.md#getblock)

#### Defined in

[src/provider/interface.ts:65](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L65)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Parameters

| Name              | Type                                                        |
| :---------------- | :---------------------------------------------------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getBlock](ProviderInterface.md#getblock)

#### Defined in

[src/provider/interface.ts:66](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L66)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`ContractClassResponse`](../namespaces/types.md#contractclassresponse)\>

Gets the contract class of the deployed contract.

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<[`ContractClassResponse`](../namespaces/types.md#contractclassresponse)\>

Contract class of compiled contract

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getClassAt](ProviderInterface.md#getclassat)

#### Defined in

[src/provider/interface.ts:75](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L75)

---

### getL1GasPrice

▸ **getL1GasPrice**(`blockIdentifier`): `Promise`\<`string`\>

Gets the price of l1 gas in the block

#### Parameters

| Name              | Type                                                        | Description      |
| :---------------- | :---------------------------------------------------------- | :--------------- |
| `blockIdentifier` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<`string`\>

gas price of the block

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getL1GasPrice](ProviderInterface.md#getl1gasprice)

#### Defined in

[src/provider/interface.ts:86](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L86)

---

### getL1MessageHash

▸ **getL1MessageHash**(`l2TxHash`): `Promise`\<`string`\>

Get L1 message hash from L2 transaction hash

#### Parameters

| Name       | Type                                                  | Description         |
| :--------- | :---------------------------------------------------- | :------------------ |
| `l2TxHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) | L2 transaction hash |

#### Returns

`Promise`\<`string`\>

Hex string of L1 message hash

**`Example`**

In Sepolia Testnet :

```typescript
const result = provider.getL1MessageHash(
  '0x28dfc05eb4f261b37ddad451ff22f1d08d4e3c24dc646af0ec69fa20e096819'
);
// result = '0x55b3f8b6e607fffd9b4d843dfe8f9b5c05822cd94fcad8797deb01d77805532a'
```

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getL1MessageHash](ProviderInterface.md#getl1messagehash)

#### Defined in

[src/provider/interface.ts:99](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L99)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the contract class hash in the given block for the contract deployed at the given address

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<`string`\>

Class hash

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getClassHashAt](ProviderInterface.md#getclasshashat)

#### Defined in

[src/provider/interface.ts:108](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L108)

---

### getClassByHash

▸ **getClassByHash**(`classHash`): `Promise`\<[`ContractClassResponse`](../namespaces/types.md#contractclassresponse)\>

Returns the contract class deployed under the given class hash.

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `classHash` | `string` | class hash  |

#### Returns

`Promise`\<[`ContractClassResponse`](../namespaces/types.md#contractclassresponse)\>

Contract class of compiled contract

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getClassByHash](ProviderInterface.md#getclassbyhash)

#### Defined in

[src/provider/interface.ts:119](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L119)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the nonce associated with the given address in the given block

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | `string`                                                    | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                |

#### Returns

`Promise`\<`string`\>

the hex nonce

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getNonceForAddress](ProviderInterface.md#getnonceforaddress)

#### Defined in

[src/provider/interface.ts:127](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L127)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`\<`string`\>

Get the value of the storage (contract's variable) at the given address and key

#### Parameters

| Name               | Type                                                        | Description                                                  |
| :----------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| `contractAddress`  | `string`                                                    |                                                              |
| `key`              | [`BigNumberish`](../namespaces/types.md#bignumberish)       | from getStorageVarAddress('\<STORAGE_VARIABLE_NAME\>') (WIP) |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier                                             |

#### Returns

`Promise`\<`string`\>

the value of the storage variable

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getStorageAt](ProviderInterface.md#getstorageat)

#### Defined in

[src/provider/interface.ts:140](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L140)

---

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`\<`TransactionWithHash`\>

Gets the transaction information from a tx id.

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<`TransactionWithHash`\>

the transaction object `{ transaction_id, status, transaction, block_number?, block_number?, transaction_index?, transaction_failure_reason? }`

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getTransaction](ProviderInterface.md#gettransaction)

#### Defined in

[src/provider/interface.ts:152](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L152)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

Gets the transaction receipt from a tx hash.

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `transactionHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

the transaction receipt object

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getTransactionReceipt](ProviderInterface.md#gettransactionreceipt)

#### Defined in

[src/provider/interface.ts:160](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L160)

---

### deployAccountContract

▸ **deployAccountContract**(`payload`, `details`): `Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

Deploys a given compiled Account contract (json) to starknet

#### Parameters

| Name      | Type                                                                                  | Description                                                                                       |
| :-------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| `payload` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | payload to be deployed containing: - compiled contract code - constructor calldata - address salt |
| `details` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)   | -                                                                                                 |

#### Returns

`Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Inherited from

[ProviderInterface](ProviderInterface.md).[deployAccountContract](ProviderInterface.md#deployaccountcontract)

#### Defined in

[src/provider/interface.ts:173](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L173)

---

### invokeFunction

▸ **invokeFunction**(`invocation`, `details`): `Promise`\<\{ `transaction_hash`: `string` }\>

Invokes a function on starknet

#### Parameters

| Name         | Type                                                                                | Description                                                                                                                                                                                                             |
| :----------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation` | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`    | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version - maxFee - optional maxFee                                                                                                           |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

response from addTransaction

**`Deprecated`**

This method won't be supported as soon as fees are mandatory. Should not be used outside of Account class

#### Inherited from

[ProviderInterface](ProviderInterface.md).[invokeFunction](ProviderInterface.md#invokefunction)

#### Defined in

[src/provider/interface.ts:193](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L193)

---

### declareContract

▸ **declareContract**(`transaction`, `details`): `Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name          | Type                                                                                | Description                                                                                          |
| :------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be deployed containing: - compiled contract code - sender address - signature |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | Invocation Details containing: - nonce - optional version - optional maxFee                          |

#### Returns

`Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

a confirmation of sending a transaction on the starknet contract

#### Inherited from

[ProviderInterface](ProviderInterface.md).[declareContract](ProviderInterface.md#declarecontract)

#### Defined in

[src/provider/interface.ts:210](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L210)

---

### getEstimateFee

▸ **getEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                                                                                                             |
| :----------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`       | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

**`Deprecated`**

Please use getInvokeEstimateFee or getDeclareEstimateFee instead. Should not be used outside of Account class

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getEstimateFee](ProviderInterface.md#getestimatefee)

#### Defined in

[src/provider/interface.ts:231](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L231)

---

### getInvokeEstimateFee

▸ **getInvokeEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                                                                                                             |
| :----------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`       | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getInvokeEstimateFee](ProviderInterface.md#getinvokeestimatefee)

#### Defined in

[src/provider/interface.ts:253](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L253)

---

### getDeclareEstimateFee

▸ **getDeclareEstimateFee**(`transaction`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DECLARE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be declared containing: - compiled contract code - sender address - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - version - optional version - optional maxFee                                                   |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                           |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                             |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getDeclareEstimateFee](ProviderInterface.md#getdeclareestimatefee)

#### Defined in

[src/provider/interface.ts:275](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L275)

---

### getDeployAccountEstimateFee

▸ **getDeployAccountEstimateFee**(`transaction`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DEPLOY_ACCOUNT transaction

#### Parameters

| Name               | Type                                                                                          | Description                                                                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `transaction`      | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | transaction payload to be deployed containing: - classHash - constructorCalldata - addressSalt - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | optional details containing: - nonce - version - optional version - optional maxFee                                                         |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                                   | (optional) block identifier                                                                                                                 |
| `skipValidate?`    | `boolean`                                                                                     | (optional) skip cairo **validate** method                                                                                                   |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getDeployAccountEstimateFee](ProviderInterface.md#getdeployaccountestimatefee)

#### Defined in

[src/provider/interface.ts:298](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L298)

---

### getEstimateFeeBulk

▸ **getEstimateFeeBulk**(`invocations`, `options?`): `Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

Estimates the fee for a list of INVOKE transaction

#### Parameters

| Name          | Type                                                                            | Description                                                              |
| :------------ | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| `invocations` | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               | AccountInvocations - Complete invocations array with account details     |
| `options?`    | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) | getEstimateFeeBulkOptions - (optional) blockIdentifier - BlockIdentifier |

#### Returns

`Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

the estimated fee

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getEstimateFeeBulk](ProviderInterface.md#getestimatefeebulk)

#### Defined in

[src/provider/interface.ts:313](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L313)

---

### waitForTransaction

▸ **waitForTransaction**(`txHash`, `options?`): `Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

Wait for the transaction to be accepted

#### Parameters

| Name       | Type                                                                            | Description                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `txHash`   | [`BigNumberish`](../namespaces/types.md#bignumberish)                           | transaction hash                                                                                                                         |
| `options?` | [`waitForTransactionOptions`](../namespaces/types.md#waitfortransactionoptions) | waitForTransactionOptions - (optional) retryInterval: number \| undefined; - (optional) successStates: TransactionStatus[] \| undefined; |

#### Returns

`Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

GetTransactionReceiptResponse

#### Inherited from

[ProviderInterface](ProviderInterface.md).[waitForTransaction](ProviderInterface.md#waitfortransaction)

#### Defined in

[src/provider/interface.ts:326](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L326)

---

### getSimulateTransaction

▸ **getSimulateTransaction**(`invocations`, `options?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

Simulates the transaction and returns the transaction trace and estimated fee.

#### Parameters

| Name          | Type                                                                                    | Description                                                                                                                                                                                       |
| :------------ | :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `invocations` | [`AccountInvocations`](../namespaces/types.md#accountinvocations)                       | AccountInvocations - Complete invocations array with account details                                                                                                                              |
| `options?`    | [`getSimulateTransactionOptions`](../namespaces/types.md#getsimulatetransactionoptions) | getSimulateTransactionOptions - (optional) blockIdentifier - block identifier - (optional) skipValidate - skip cairo **validate** method - (optional) skipExecute - skip cairo **execute** method |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

an array of transaction trace and estimated fee

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getSimulateTransaction](ProviderInterface.md#getsimulatetransaction)

#### Defined in

[src/provider/interface.ts:341](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L341)

---

### getStateUpdate

▸ **getStateUpdate**(`blockIdentifier?`): `Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

Gets the state changes in a specific block (result of executing the requested block)

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<[`StateUpdateResponse`](../namespaces/types.md#stateupdateresponse)\>

StateUpdateResponse

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getStateUpdate](ProviderInterface.md#getstateupdate)

#### Defined in

[src/provider/interface.ts:352](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L352)

---

### getContractVersion

▸ **getContractVersion**(`contractAddress`, `classHash?`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Gets the contract version from the provided address

#### Parameters

| Name              | Type                                                                            | Description                                                                                                                                                          |
| :---------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractAddress` | `string`                                                                        | string                                                                                                                                                               |
| `classHash?`      | `undefined`                                                                     | undefined                                                                                                                                                            |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) | getContractVersionOptions - (optional) compiler - (default true) extract compiler version using type tactic from abi - (optional) blockIdentifier - block identifier |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getContractVersion](ProviderInterface.md#getcontractversion)

#### Defined in

[src/provider/interface.ts:362](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L362)

▸ **getContractVersion**(`contractAddress`, `classHash`, `options?`): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Gets the contract version from the provided address

#### Parameters

| Name              | Type                                                                            | Description                                                                                                                                                          |
| :---------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contractAddress` | `undefined`                                                                     | undefined                                                                                                                                                            |
| `classHash`       | `string`                                                                        |                                                                                                                                                                      |
| `options?`        | [`getContractVersionOptions`](../namespaces/types.md#getcontractversionoptions) | getContractVersionOptions - (optional) compiler - (default true) extract compiler version using type tactic from abi - (optional) blockIdentifier - block identifier |

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Inherited from

[ProviderInterface](ProviderInterface.md).[getContractVersion](ProviderInterface.md#getcontractversion)

#### Defined in

[src/provider/interface.ts:376](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/interface.ts#L376)

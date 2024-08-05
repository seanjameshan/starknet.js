---
id: 'Account'
title: 'Class: Account'
sidebar_label: 'Account'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Provider`](Provider.md)

  ↳ **`Account`**

  ↳↳ [`WalletAccount`](WalletAccount.md)

## Implements

- [`AccountInterface`](AccountInterface.md)

## Constructors

### constructor

• **new Account**(`providerOrOptions`, `address`, `pkOrSigner`, `cairoVersion?`, `transactionVersion?`): [`Account`](Account.md)

#### Parameters

| Name                 | Type                                                                                                       | Default value            |
| :------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------- |
| `providerOrOptions`  | [`ProviderOptions`](../interfaces/types.ProviderOptions.md) \| [`ProviderInterface`](ProviderInterface.md) | `undefined`              |
| `address`            | `string`                                                                                                   | `undefined`              |
| `pkOrSigner`         | `string` \| `Uint8Array` \| [`SignerInterface`](SignerInterface.md)                                        | `undefined`              |
| `cairoVersion?`      | [`CairoVersion`](../namespaces/types.md#cairoversion)                                                      | `undefined`              |
| `transactionVersion` | `"0x2"` \| `"0x3"`                                                                                         | `ETransactionVersion.V2` |

#### Returns

[`Account`](Account.md)

#### Overrides

[Provider](Provider.md).[constructor](Provider.md#constructor)

#### Defined in

[src/account/default.ts:72](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L72)

## Properties

### signer

• **signer**: [`SignerInterface`](SignerInterface.md)

#### Implementation of

[AccountInterface](AccountInterface.md).[signer](AccountInterface.md#signer)

#### Defined in

[src/account/default.ts:64](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L64)

---

### address

• **address**: `string`

#### Implementation of

[AccountInterface](AccountInterface.md).[address](AccountInterface.md#address)

#### Defined in

[src/account/default.ts:66](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L66)

---

### cairoVersion

• **cairoVersion**: [`CairoVersion`](../namespaces/types.md#cairoversion)

#### Implementation of

[AccountInterface](AccountInterface.md).[cairoVersion](AccountInterface.md#cairoversion)

#### Defined in

[src/account/default.ts:68](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L68)

---

### transactionVersion

• `Readonly` **transactionVersion**: `"0x2"` \| `"0x3"`

#### Defined in

[src/account/default.ts:70](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L70)

---

### deploySelf

• **deploySelf**: (`__namedParameters`: [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload), `details`: [`UniversalDetails`](../interfaces/types.UniversalDetails.md)) => `Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

#### Type declaration

▸ (`«destructured»`, `details?`): `Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

##### Parameters

| Name             | Type                                                                                  |
| :--------------- | :------------------------------------------------------------------------------------ |
| `«destructured»` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) |
| `details`        | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                         |

##### Returns

`Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

#### Defined in

[src/account/default.ts:476](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L476)

---

### responseParser

• **responseParser**: [`RPCResponseParser`](RPCResponseParser.md)

#### Inherited from

[Provider](Provider.md).[responseParser](Provider.md#responseparser)

#### Defined in

[src/provider/rpc.ts:46](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L46)

---

### channel

• **channel**: [`RpcChannel`](RPC06.RpcChannel.md) \| [`RpcChannel`](RPC07.RpcChannel.md)

#### Implementation of

[AccountInterface](AccountInterface.md).[channel](AccountInterface.md#channel)

#### Inherited from

[Provider](Provider.md).[channel](Provider.md#channel)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[getStateUpdate](AccountInterface.md#getstateupdate)

#### Inherited from

[Provider](Provider.md).[getStateUpdate](Provider.md#getstateupdate)

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

[Provider](Provider.md).[getStarkName](Provider.md#getstarkname)

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

[Provider](Provider.md).[getAddressFromStarkName](Provider.md#getaddressfromstarkname)

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

[Provider](Provider.md).[getStarkProfile](Provider.md#getstarkprofile)

#### Defined in

[src/provider/extensions/starknetId.ts:121](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L121)

---

### getPreferredVersion

▸ **getPreferredVersion**(`type12`, `type3`): [`ETransactionVersion`](../namespaces/types.RPC.RPCSPEC07.API.md#etransactionversion-1)

#### Parameters

| Name     | Type                                                                                    |
| :------- | :-------------------------------------------------------------------------------------- |
| `type12` | [`ETransactionVersion`](../namespaces/types.RPC.RPCSPEC07.API.md#etransactionversion-1) |
| `type3`  | [`ETransactionVersion`](../namespaces/types.RPC.RPCSPEC07.API.md#etransactionversion-1) |

#### Returns

[`ETransactionVersion`](../namespaces/types.RPC.RPCSPEC07.API.md#etransactionversion-1)

#### Defined in

[src/account/default.ts:95](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L95)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[getNonce](AccountInterface.md#getnonce)

#### Defined in

[src/account/default.ts:102](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L102)

---

### getNonceSafe

▸ **getNonceSafe**(`nonce?`): `Promise`\<`bigint`\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `nonce?` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<`bigint`\>

#### Defined in

[src/account/default.ts:106](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L106)

---

### getCairoVersion

▸ **getCairoVersion**(`classHash?`): `Promise`\<[`CairoVersion`](../namespaces/types.md#cairoversion)\>

Retrieves the Cairo version from the network and sets `cairoVersion` if not already set in the constructor.

#### Parameters

| Name         | Type     | Description                                                                          |
| :----------- | :------- | :----------------------------------------------------------------------------------- |
| `classHash?` | `string` | if provided detects Cairo version from classHash, otherwise from the account address |

#### Returns

`Promise`\<[`CairoVersion`](../namespaces/types.md#cairoversion)\>

#### Defined in

[src/account/default.ts:119](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L119)

---

### estimateFee

▸ **estimateFee**(`calls`, `estimateFeeDetails?`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

#### Parameters

| Name                 | Type                                                                                       |
| :------------------- | :----------------------------------------------------------------------------------------- |
| `calls`              | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> |
| `estimateFeeDetails` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                              |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

#### Defined in

[src/account/default.ts:129](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L129)

---

### estimateInvokeFee

▸ **estimateInvokeFee**(`calls`, `details?`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Estimate Fee for executing an INVOKE transaction on starknet

#### Parameters

| Name      | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calls`   | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata? - (defaults to []) the calldata                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                              | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

response from estimate_fee

#### Implementation of

[AccountInterface](AccountInterface.md).[estimateInvokeFee](AccountInterface.md#estimateinvokefee)

#### Defined in

[src/account/default.ts:136](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L136)

---

### estimateDeclareFee

▸ **estimateDeclareFee**(`payload`, `details?`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Estimate Fee for executing a DECLARE transaction on starknet

#### Parameters

| Name      | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload) | the payload object containing: - contract - the compiled contract to be declared - casm? - compiled cairo assembly. Cairo1(casm or compiledClassHash are required) - classHash? - the class hash of the compiled contract. Precalculate for faster execution. - compiledClassHash?: class hash of the cairo assembly. Cairo1(casm or compiledClassHash are required)                                                                                                                                                                                                                                                                                 |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)             | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

response from estimate_fee

#### Implementation of

[AccountInterface](AccountInterface.md).[estimateDeclareFee](AccountInterface.md#estimatedeclarefee)

#### Defined in

[src/account/default.ts:175](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L175)

---

### estimateAccountDeployFee

▸ **estimateAccountDeployFee**(`«destructured»`, `details?`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Estimate Fee for executing a DEPLOY_ACCOUNT transaction on starknet

#### Parameters

| Name             | Type                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :--------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | classHash - the class hash of the compiled contract. - constructorCalldata? - constructor data; - contractAddress? - future account contract address. Precalculate for faster execution. - addressSalt? - salt used for calculation of the contractAddress. Required if contractAddress is provided.                                                                                                                                                                                                                                             |
| `details`        | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                         | blockIdentifier? - nonce? = 0 - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

response from estimate_fee

#### Implementation of

[AccountInterface](AccountInterface.md).[estimateAccountDeployFee](AccountInterface.md#estimateaccountdeployfee)

#### Defined in

[src/account/default.ts:213](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L213)

---

### estimateDeployFee

▸ **estimateDeployFee**(`payload`, `details?`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Estimate Fee for executing a UDC DEPLOY transaction on starknet
This is different from the normal DEPLOY transaction as it goes through the Universal Deployer Contract (UDC)

#### Parameters

| Name      | Type                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | array or singular - classHash: computed class hash of compiled contract - salt: address salt - unique: bool if true ensure unique salt - constructorCalldata: constructor calldata                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                                                                                                                                    | blockIdentifier? - nonce? - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

#### Implementation of

[AccountInterface](AccountInterface.md).[estimateDeployFee](AccountInterface.md#estimatedeployfee)

#### Defined in

[src/account/default.ts:252](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L252)

---

### estimateFeeBulk

▸ **estimateFeeBulk**(`invocations`, `details?`): `Promise`\<[`EstimateFeeBulk`](../namespaces/types.md#estimatefeebulk)\>

Estimate Fee for executing a list of transactions on starknet
Contract must be deployed for fee estimation to be possible

#### Parameters

| Name          | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------ | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocations` | [`Invocations`](../namespaces/types.md#invocations)           | array of transaction object containing : - type - the type of transaction : 'DECLARE' \| (multi)'DEPLOY' \| (multi)'INVOKE_FUNCTION' \| 'DEPLOY_ACCOUNT' - payload - the payload of the transaction                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `details`     | [`UniversalDetails`](../interfaces/types.UniversalDetails.md) | blockIdentifier? - nonce? - skipValidate? - default true - tip? - prioritize order of transactions in the mempool. - accountDeploymentData? - deploy an account contract (substitution for deploy account transaction) - paymasterData? - entity other than the transaction sender to pay the transaction fees(EIP-4337) - nonceDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - feeDataAvailabilityMode? - allows users to choose their preferred data availability mode (Volition) - version? - specify ETransactionVersion - V3 Transactions fee is in fri, oldV transactions fee is in wei |

#### Returns

`Promise`\<[`EstimateFeeBulk`](../namespaces/types.md#estimatefeebulk)\>

response from estimate_fee

#### Implementation of

[AccountInterface](AccountInterface.md).[estimateFeeBulk](AccountInterface.md#estimatefeebulk)

#### Defined in

[src/account/default.ts:260](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L260)

---

### simulateTransaction

▸ **simulateTransaction**(`invocations`, `details?`): `Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

Simulates an array of transaction and returns an array of transaction trace and estimated fee.

#### Parameters

| Name          | Type                                                                              | Description                                                                                                       |
| :------------ | :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `invocations` | [`Invocations`](../namespaces/types.md#invocations)                               | Invocations containing: - type - transaction type: DECLARE, (multi)DEPLOY, DEPLOY_ACCOUNT, (multi)INVOKE_FUNCTION |
| `details`     | [`SimulateTransactionDetails`](../namespaces/types.md#simulatetransactiondetails) | SimulateTransactionDetails                                                                                        |

#### Returns

`Promise`\<[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)\>

response from simulate_transaction

#### Implementation of

[AccountInterface](AccountInterface.md).[simulateTransaction](AccountInterface.md#simulatetransaction)

#### Defined in

[src/account/default.ts:285](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L285)

---

### execute

▸ **execute**(`transactions`, `transactionsDetail?`): `Promise`\<\{ `transaction_hash`: `string` }\>

Invoke execute function in account contract

#### Parameters

| Name                  | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`        | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object or an array of them, containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `transactionsDetail?` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                              | Additional optional parameters for the transaction                                                                                                                                                                                           |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

response from addTransaction

#### Implementation of

[AccountInterface](AccountInterface.md).[execute](AccountInterface.md#execute)

#### Defined in

[src/account/default.ts:311](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L311)

▸ **execute**(`transactions`, `abis?`, `transactionsDetail?`): `Promise`\<\{ `transaction_hash`: `string` }\>

#### Parameters

| Name                  | Type                                                                                       | Description                                                                                                                                                                                                                                  |
| :-------------------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`        | [`AllowArray`](../namespaces/types.md#allowarray)\<[`Call`](../namespaces/types.md#call)\> | the invocation object or an array of them, containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `abis?`               | [`Abi`](../namespaces/types.md#abi)[]                                                      | (optional) the abi of the contract for better displaying                                                                                                                                                                                     |
| `transactionsDetail?` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                              | Additional optional parameters for the transaction \*                                                                                                                                                                                        |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

response from addTransaction

**`Deprecated`**

#### Implementation of

[AccountInterface](AccountInterface.md).[execute](AccountInterface.md#execute)

#### Defined in

[src/account/default.ts:315](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L315)

---

### declareIfNot

▸ **declareIfNot**(`payload`, `transactionsDetail?`): `Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

First check if contract is already declared, if not declare it
If contract already declared returned transaction_hash is ''.
Method will pass even if contract is already declared

#### Parameters

| Name                 | Type                                                                      | Description |
| :------------------- | :------------------------------------------------------------------------ | :---------- |
| `payload`            | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload) | -           |
| `transactionsDetail` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)             | (optional)  |

#### Returns

`Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

#### Defined in

[src/account/default.ts:377](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L377)

---

### declare

▸ **declare**(`payload`, `details?`): `Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name      | Type                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------- | :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload) | transaction payload to be deployed containing: - contract: compiled contract code - (optional) classHash: computed class hash of compiled contract. Pre-compute it for faster execution. - (required for Cairo1 without compiledClassHash) casm: CompiledContract \| string; - (optional for Cairo1 with casm) compiledClassHash: compiled class hash from casm. Pre-compute it for faster execution. |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)             | InvocationsDetails                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

`Promise`\<\{ `class_hash`: `string` ; `transaction_hash`: `string` }\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[AccountInterface](AccountInterface.md).[declare](AccountInterface.md#declare)

#### Defined in

[src/account/default.ts:393](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L393)

---

### deploy

▸ **deploy**(`payload`, `details?`): `Promise`\<[`MultiDeployContractResponse`](../namespaces/types.md#multideploycontractresponse)\>

Deploys a declared contract to starknet - using Universal Deployer Contract (UDC)
support multicall

#### Parameters

| Name      | Type                                                                                                                                                                                             | Description                                                                                                                                                                            |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | classHash: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                                                                                                                                    | InvocationsDetails                                                                                                                                                                     |

#### Returns

`Promise`\<[`MultiDeployContractResponse`](../namespaces/types.md#multideploycontractresponse)\>

- contract_address[]
- transaction_hash

#### Implementation of

[AccountInterface](AccountInterface.md).[deploy](AccountInterface.md#deploy)

#### Defined in

[src/account/default.ts:437](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L437)

---

### deployContract

▸ **deployContract**(`payload`, `details?`): `Promise`\<[`DeployContractUDCResponse`](../namespaces/types.md#deploycontractudcresponse)\>

Simplify deploy simulating old DeployContract with same response + UDC specific response
Internal wait for L2 transaction, support multicall

#### Parameters

| Name      | Type                                                                                                                                                                                             | Description                                                                                                                                                                            |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] | classHash: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                                                                                                                                    | InvocationsDetails                                                                                                                                                                     |

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

#### Implementation of

[AccountInterface](AccountInterface.md).[deployContract](AccountInterface.md#deploycontract)

#### Defined in

[src/account/default.ts:450](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L450)

---

### declareAndDeploy

▸ **declareAndDeploy**(`payload`, `details?`): `Promise`\<[`DeclareDeployUDCResponse`](../namespaces/types.md#declaredeployudcresponse)\>

Declares and Deploy a given compiled contract (json) to starknet using UDC
Internal wait for L2 transaction, do not support multicall
Method will pass even if contract is already declared (internal using DeclareIfNot)

#### Parameters

| Name      | Type                                                                                        | Description                                                                                                                                                                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`DeclareAndDeployContractPayload`](../namespaces/types.md#declareanddeploycontractpayload) | contract: compiled contract code - [casm=cairo1]: CairoAssembly \| undefined; - [compiledClassHash]: string \| undefined; - [classHash]: computed class hash of compiled contract - [constructorCalldata] contract constructor calldata - [salt=pseudorandom] deploy address salt - [unique=true] ensure unique salt |
| `details` | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                               | InvocationsDetails                                                                                                                                                                                                                                                                                                   |

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

#### Implementation of

[AccountInterface](AccountInterface.md).[declareAndDeploy](AccountInterface.md#declareanddeploy)

#### Defined in

[src/account/default.ts:459](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L459)

---

### deployAccount

▸ **deployAccount**(`«destructured»`, `details?`): `Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

Deploy the account on Starknet

#### Parameters

| Name             | Type                                                                                  | Description                                                                                                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) | transaction payload to be deployed containing: - classHash: computed class hash of compiled contract - optional constructor calldata - optional address salt - optional contractAddress |
| `details`        | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                         | InvocationsDetails                                                                                                                                                                      |

#### Returns

`Promise`\<[`DeployContractResponse`](../interfaces/types.DeployContractResponse.md)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[AccountInterface](AccountInterface.md).[deployAccount](AccountInterface.md#deployaccount)

#### Defined in

[src/account/default.ts:478](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L478)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[signMessage](AccountInterface.md#signmessage)

#### Defined in

[src/account/default.ts:538](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L538)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[hashMessage](AccountInterface.md#hashmessage)

#### Defined in

[src/account/default.ts:542](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L542)

---

### verifyMessageHash

▸ **verifyMessageHash**(`hash`, `signature`, `signatureVerificationFunctionName?`, `signatureVerificationResponse?`): `Promise`\<`boolean`\>

Verify a signature of a given hash

#### Parameters

| Name                                        | Type                                                  | Description           |
| :------------------------------------------ | :---------------------------------------------------- | :-------------------- |
| `hash`                                      | [`BigNumberish`](../namespaces/types.md#bignumberish) | hash to be verified   |
| `signature`                                 | [`Signature`](../namespaces/types.md#signature)       | signature of the hash |
| `signatureVerificationFunctionName?`        | `string`                                              | -                     |
| `signatureVerificationResponse?`            | `Object`                                              | -                     |
| `signatureVerificationResponse.okResponse`  | `string`[]                                            | -                     |
| `signatureVerificationResponse.nokResponse` | `string`[]                                            | -                     |
| `signatureVerificationResponse.error`       | `string`[]                                            | -                     |

#### Returns

`Promise`\<`boolean`\>

true if the signature is valid, false otherwise

**`Warning`**

This method is not recommended, use verifyMessage instead

**`Throws`**

if the signature is not a valid signature

#### Implementation of

[AccountInterface](AccountInterface.md).[verifyMessageHash](AccountInterface.md#verifymessagehash)

#### Defined in

[src/account/default.ts:546](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L546)

---

### verifyMessage

▸ **verifyMessage**(`typedData`, `signature`, `signatureVerificationFunctionName?`, `signatureVerificationResponse?`): `Promise`\<`boolean`\>

Verify a signature of a TypedData object

#### Parameters

| Name                                        | Type                                                                     | Description                       |
| :------------------------------------------ | :----------------------------------------------------------------------- | :-------------------------------- |
| `typedData`                                 | [`TypedData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.TypedData.md) | TypedData object to be verified   |
| `signature`                                 | [`Signature`](../namespaces/types.md#signature)                          | signature of the TypedData object |
| `signatureVerificationFunctionName?`        | `string`                                                                 | -                                 |
| `signatureVerificationResponse?`            | `Object`                                                                 | -                                 |
| `signatureVerificationResponse.okResponse`  | `string`[]                                                               | -                                 |
| `signatureVerificationResponse.nokResponse` | `string`[]                                                               | -                                 |
| `signatureVerificationResponse.error`       | `string`[]                                                               | -                                 |

#### Returns

`Promise`\<`boolean`\>

true if the signature is valid, false otherwise

**`Throws`**

if typedData is not a valid TypedData or the signature is not a valid signature

#### Implementation of

[AccountInterface](AccountInterface.md).[verifyMessage](AccountInterface.md#verifymessage)

#### Defined in

[src/account/default.ts:617](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L617)

---

### getUniversalSuggestedFee

▸ **getUniversalSuggestedFee**(`version`, `«destructured»`, `details`): `Promise`\<\{ `maxFee`: [`BigNumberish`](../namespaces/types.md#bignumberish) ; `resourceBounds`: [`RESOURCE_BOUNDS_MAPPING`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#resource_bounds_mapping) }\>

#### Parameters

| Name             | Type                                                                                    |
| :--------------- | :-------------------------------------------------------------------------------------- |
| `version`        | [`ETransactionVersion`](../namespaces/types.RPC.RPCSPEC07.API.md#etransactionversion-1) |
| `«destructured»` | [`EstimateFeeAction`](../namespaces/types.md#estimatefeeaction)                         |
| `details`        | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)                           |

#### Returns

`Promise`\<\{ `maxFee`: [`BigNumberish`](../namespaces/types.md#bignumberish) ; `resourceBounds`: [`RESOURCE_BOUNDS_MAPPING`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#resource_bounds_mapping) }\>

#### Defined in

[src/account/default.ts:636](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L636)

---

### getSuggestedFee

▸ **getSuggestedFee**(`«destructured»`, `details`): `Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

Gets Suggested Max Fee based on the transaction type

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `«destructured»` | [`EstimateFeeAction`](../namespaces/types.md#estimatefeeaction) |
| `details`        | [`UniversalDetails`](../interfaces/types.UniversalDetails.md)   |

#### Returns

`Promise`\<[`EstimateFee`](../interfaces/types.EstimateFee.md)\>

EstimateFee (...response, resourceBounds, suggestedMaxFee)

#### Implementation of

[AccountInterface](AccountInterface.md).[getSuggestedFee](AccountInterface.md#getsuggestedfee)

#### Defined in

[src/account/default.ts:659](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L659)

---

### buildInvocation

▸ **buildInvocation**(`call`, `details`): `Promise`\<[`Invocation`](../namespaces/types.md#invocation)\>

#### Parameters

| Name      | Type                                                                          |
| :-------- | :---------------------------------------------------------------------------- |
| `call`    | [`Call`](../namespaces/types.md#call)[]                                       |
| `details` | [`InvocationsSignerDetails`](../namespaces/types.md#invocationssignerdetails) |

#### Returns

`Promise`\<[`Invocation`](../namespaces/types.md#invocation)\>

#### Defined in

[src/account/default.ts:696](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L696)

---

### buildDeclarePayload

▸ **buildDeclarePayload**(`payload`, `details`): `Promise`\<[`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)\>

#### Parameters

| Name      | Type                                                                          |
| :-------- | :---------------------------------------------------------------------------- |
| `payload` | [`DeclareContractPayload`](../namespaces/types.md#declarecontractpayload)     |
| `details` | [`InvocationsSignerDetails`](../namespaces/types.md#invocationssignerdetails) |

#### Returns

`Promise`\<[`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)\>

#### Defined in

[src/account/default.ts:711](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L711)

---

### buildAccountDeployPayload

▸ **buildAccountDeployPayload**(`«destructured»`, `details`): `Promise`\<[`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction)\>

#### Parameters

| Name             | Type                                                                                  |
| :--------------- | :------------------------------------------------------------------------------------ |
| `«destructured»` | [`DeployAccountContractPayload`](../namespaces/types.md#deployaccountcontractpayload) |
| `details`        | [`InvocationsSignerDetails`](../namespaces/types.md#invocationssignerdetails)         |

#### Returns

`Promise`\<[`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction)\>

#### Defined in

[src/account/default.ts:743](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L743)

---

### buildUDCContractPayload

▸ **buildUDCContractPayload**(`payload`): [`Call`](../namespaces/types.md#call)[]

#### Parameters

| Name      | Type                                                                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload` | [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload) \| [`UniversalDeployerContractPayload`](../namespaces/types.md#universaldeployercontractpayload)[] |

#### Returns

[`Call`](../namespaces/types.md#call)[]

#### Defined in

[src/account/default.ts:777](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L777)

---

### accountInvocationsFactory

▸ **accountInvocationsFactory**(`invocations`, `details`): `Promise`\<[`AccountInvocations`](../namespaces/types.md#accountinvocations)\>

#### Parameters

| Name          | Type                                                                                          |
| :------------ | :-------------------------------------------------------------------------------------------- |
| `invocations` | [`Invocations`](../namespaces/types.md#invocations)                                           |
| `details`     | [`AccountInvocationsFactoryDetails`](../namespaces/types.md#accountinvocationsfactorydetails) |

#### Returns

`Promise`\<[`AccountInvocations`](../namespaces/types.md#accountinvocations)\>

#### Defined in

[src/account/default.ts:804](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L804)

---

### getStarkName

▸ **getStarkName**(`address?`, `StarknetIdContract?`): `Promise`\<`string`\>

#### Parameters

| Name                  | Type                                                  |
| :-------------------- | :---------------------------------------------------- |
| `address`             | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `StarknetIdContract?` | `string`                                              |

#### Returns

`Promise`\<`string`\>

#### Overrides

[Provider](Provider.md).[getStarkName](Provider.md#getstarkname-1)

#### Defined in

[src/account/default.ts:898](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/account/default.ts#L898)

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

[Provider](Provider.md).[fetch](Provider.md#fetch)

#### Defined in

[src/provider/rpc.ts:63](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L63)

---

### getChainId

▸ **getChainId**(): `Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

Gets the Starknet chain Id

#### Returns

`Promise`\<[`StarknetChainId`](../enums/constants.StarknetChainId.md)\>

the chain Id

#### Implementation of

[AccountInterface](AccountInterface.md).[getChainId](AccountInterface.md#getchainid)

#### Inherited from

[Provider](Provider.md).[getChainId](Provider.md#getchainid)

#### Defined in

[src/provider/rpc.ts:67](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L67)

---

### getSpecVersion

▸ **getSpecVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[Provider](Provider.md).[getSpecVersion](Provider.md#getspecversion)

#### Defined in

[src/provider/rpc.ts:71](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L71)

---

### getNonceForAddress

▸ **getNonceForAddress**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the nonce associated with the given address in the given block

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                |

#### Returns

`Promise`\<`string`\>

the hex nonce

#### Implementation of

[AccountInterface](AccountInterface.md).[getNonceForAddress](AccountInterface.md#getnonceforaddress)

#### Inherited from

[Provider](Provider.md).[getNonceForAddress](Provider.md#getnonceforaddress)

#### Defined in

[src/provider/rpc.ts:75](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L75)

---

### getBlock

▸ **getBlock**(): `Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

Gets the block information

#### Returns

`Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

the block object

#### Implementation of

[AccountInterface](AccountInterface.md).[getBlock](AccountInterface.md#getblock)

#### Inherited from

[Provider](Provider.md).[getBlock](Provider.md#getblock)

#### Defined in

[src/provider/rpc.ts:82](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L82)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Parameters

| Name              | Type        |
| :---------------- | :---------- |
| `blockIdentifier` | `"pending"` |

#### Returns

`Promise`\<[`PendingBlock`](../namespaces/types.md#pendingblock)\>

#### Implementation of

[AccountInterface](AccountInterface.md).[getBlock](AccountInterface.md#getblock)

#### Inherited from

[Provider](Provider.md).[getBlock](Provider.md#getblock)

#### Defined in

[src/provider/rpc.ts:83](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L83)

▸ **getBlock**(`blockIdentifier`): `Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `blockIdentifier` | `"latest"` |

#### Returns

`Promise`\<[`Block`](../namespaces/types.md#block)\>

#### Implementation of

[AccountInterface](AccountInterface.md).[getBlock](AccountInterface.md#getblock)

#### Inherited from

[Provider](Provider.md).[getBlock](Provider.md#getblock)

#### Defined in

[src/provider/rpc.ts:84](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L84)

▸ **getBlock**(`blockIdentifier?`): `Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) |

#### Returns

`Promise`\<[`GetBlockResponse`](../namespaces/types.md#getblockresponse)\>

#### Implementation of

AccountInterface.getBlock

#### Inherited from

[Provider](Provider.md).[getBlock](Provider.md#getblock)

#### Defined in

[src/provider/rpc.ts:85](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L85)

---

### getBlockLatestAccepted

▸ **getBlockLatestAccepted**(): `Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

Get the most recent accepted block hash and number

#### Returns

`Promise`\<[`BlockHashAndNumber`](../namespaces/types.RPC.RPCSPEC06.md#blockhashandnumber)\>

#### Inherited from

[Provider](Provider.md).[getBlockLatestAccepted](Provider.md#getblocklatestaccepted)

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

[Provider](Provider.md).[getBlockNumber](Provider.md#getblocknumber)

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

[Provider](Provider.md).[getBlockWithTxHashes](Provider.md#getblockwithtxhashes)

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

[Provider](Provider.md).[getBlockWithTxs](Provider.md#getblockwithtxs)

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

[Provider](Provider.md).[waitForBlock](Provider.md#waitforblock)

#### Defined in

[src/provider/rpc.ts:127](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L127)

---

### getL1GasPrice

▸ **getL1GasPrice**(`blockIdentifier?`): `Promise`\<`string`\>

Gets the price of l1 gas in the block

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<`string`\>

gas price of the block

#### Implementation of

[AccountInterface](AccountInterface.md).[getL1GasPrice](AccountInterface.md#getl1gasprice)

#### Inherited from

[Provider](Provider.md).[getL1GasPrice](Provider.md#getl1gasprice)

#### Defined in

[src/provider/rpc.ts:157](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L157)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[getL1MessageHash](AccountInterface.md#getl1messagehash)

#### Inherited from

[Provider](Provider.md).[getL1MessageHash](Provider.md#getl1messagehash)

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

[Provider](Provider.md).[getBlockWithReceipts](Provider.md#getblockwithreceipts)

#### Defined in

[src/provider/rpc.ts:185](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L185)

---

### getBlockStateUpdate

▸ **getBlockStateUpdate**(): `Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Returns

`Promise`\<\{ `block_hash`: `never` ; `old_root`: `string` ; `state_diff`: \{ storage_diffs: \{ address: string; storage_entries: \{ key: string; value: string; }[]; }[]; deprecated_declared_classes: string[]; declared_classes: \{ class_hash: string; compiled_class_hash: string; }[]; deployed_contracts: \{ ...; }[]; replaced_classes: \{ ...; }[]; nonces: \{ ...; }[]; } }\>

#### Inherited from

[Provider](Provider.md).[getBlockStateUpdate](Provider.md#getblockstateupdate)

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

[Provider](Provider.md).[getBlockStateUpdate](Provider.md#getblockstateupdate)

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

[Provider](Provider.md).[getBlockStateUpdate](Provider.md#getblockstateupdate)

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

[Provider](Provider.md).[getBlockStateUpdate](Provider.md#getblockstateupdate)

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

[Provider](Provider.md).[getBlockTransactionsTraces](Provider.md#getblocktransactionstraces)

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

[Provider](Provider.md).[getBlockTransactionCount](Provider.md#getblocktransactioncount)

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

[Provider](Provider.md).[getPendingTransactions](Provider.md#getpendingtransactions)

#### Defined in

[src/provider/rpc.ts:215](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L215)

---

### getTransaction

▸ **getTransaction**(`txHash`): `Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

Gets the transaction information from a tx id.

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`TransactionWithHash`](../namespaces/types.RPC.RPCSPEC06.md#transactionwithhash)\>

the transaction object `{ transaction_id, status, transaction, block_number?, block_number?, transaction_index?, transaction_failure_reason? }`

#### Implementation of

[AccountInterface](AccountInterface.md).[getTransaction](AccountInterface.md#gettransaction)

#### Inherited from

[Provider](Provider.md).[getTransaction](Provider.md#gettransaction)

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

[Provider](Provider.md).[getTransactionByHash](Provider.md#gettransactionbyhash)

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

[Provider](Provider.md).[getTransactionByBlockIdAndIndex](Provider.md#gettransactionbyblockidandindex)

#### Defined in

[src/provider/rpc.ts:230](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L230)

---

### getTransactionReceipt

▸ **getTransactionReceipt**(`txHash`): `Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

Gets the transaction receipt from a tx hash.

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `txHash` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Promise`\<[`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse)\>

the transaction receipt object

#### Implementation of

[AccountInterface](AccountInterface.md).[getTransactionReceipt](AccountInterface.md#gettransactionreceipt)

#### Inherited from

[Provider](Provider.md).[getTransactionReceipt](Provider.md#gettransactionreceipt)

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

[Provider](Provider.md).[getTransactionTrace](Provider.md#gettransactiontrace)

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

[Provider](Provider.md).[getTransactionStatus](Provider.md#gettransactionstatus)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[getSimulateTransaction](AccountInterface.md#getsimulatetransaction)

#### Inherited from

[Provider](Provider.md).[getSimulateTransaction](Provider.md#getsimulatetransaction)

#### Defined in

[src/provider/rpc.ts:259](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L259)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[waitForTransaction](AccountInterface.md#waitfortransaction)

#### Inherited from

[Provider](Provider.md).[waitForTransaction](Provider.md#waitfortransaction)

#### Defined in

[src/provider/rpc.ts:269](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L269)

---

### getStorageAt

▸ **getStorageAt**(`contractAddress`, `key`, `blockIdentifier?`): `Promise`\<`string`\>

Get the value of the storage (contract's variable) at the given address and key

#### Parameters

| Name               | Type                                                        | Description                                                  |
| :----------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       |                                                              |
| `key`              | [`BigNumberish`](../namespaces/types.md#bignumberish)       | from getStorageVarAddress('\<STORAGE_VARIABLE_NAME\>') (WIP) |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier                                             |

#### Returns

`Promise`\<`string`\>

the value of the storage variable

#### Implementation of

[AccountInterface](AccountInterface.md).[getStorageAt](AccountInterface.md#getstorageat)

#### Inherited from

[Provider](Provider.md).[getStorageAt](Provider.md#getstorageat)

#### Defined in

[src/provider/rpc.ts:281](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L281)

---

### getClassHashAt

▸ **getClassHashAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<`string`\>

Returns the contract class hash in the given block for the contract deployed at the given address

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<`string`\>

Class hash

#### Implementation of

[AccountInterface](AccountInterface.md).[getClassHashAt](AccountInterface.md#getclasshashat)

#### Inherited from

[Provider](Provider.md).[getClassHashAt](Provider.md#getclasshashat)

#### Defined in

[src/provider/rpc.ts:289](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L289)

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

[AccountInterface](AccountInterface.md).[getClassByHash](AccountInterface.md#getclassbyhash)

#### Inherited from

[Provider](Provider.md).[getClassByHash](Provider.md#getclassbyhash)

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

[Provider](Provider.md).[getClass](Provider.md#getclass)

#### Defined in

[src/provider/rpc.ts:297](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L297)

---

### getClassAt

▸ **getClassAt**(`contractAddress`, `blockIdentifier?`): `Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Gets the contract class of the deployed contract.

#### Parameters

| Name               | Type                                                        | Description      |
| :----------------- | :---------------------------------------------------------- | :--------------- |
| `contractAddress`  | [`BigNumberish`](../namespaces/types.md#bignumberish)       | contract address |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier |

#### Returns

`Promise`\<[`LegacyContractClass`](../namespaces/types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](../namespaces/types.md#compiledsierra), `"sierra_program_debug_info"`\>\>

Contract class of compiled contract

#### Implementation of

[AccountInterface](AccountInterface.md).[getClassAt](AccountInterface.md#getclassat)

#### Inherited from

[Provider](Provider.md).[getClassAt](Provider.md#getclassat)

#### Defined in

[src/provider/rpc.ts:303](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L303)

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

[AccountInterface](AccountInterface.md).[getContractVersion](AccountInterface.md#getcontractversion)

#### Inherited from

[Provider](Provider.md).[getContractVersion](Provider.md#getcontractversion)

#### Defined in

[src/provider/rpc.ts:309](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L309)

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

[AccountInterface](AccountInterface.md).[getContractVersion](AccountInterface.md#getcontractversion)

#### Inherited from

[Provider](Provider.md).[getContractVersion](Provider.md#getcontractversion)

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

#### Implementation of

[AccountInterface](AccountInterface.md).[getEstimateFee](AccountInterface.md#getestimatefee)

#### Inherited from

[Provider](Provider.md).[getEstimateFee](Provider.md#getestimatefee)

#### Defined in

[src/provider/rpc.ts:350](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L350)

---

### getInvokeEstimateFee

▸ **getInvokeEstimateFee**(`invocation`, `invocationDetails`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given INVOKE transaction

#### Parameters

| Name                | Type                                                                                | Description                                                                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invocation`        | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `invocationDetails` | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version                                                                                                                                      |
| `blockIdentifier?`  | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                                                                                                             |
| `skipValidate?`     | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                                                                                                               |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[AccountInterface](AccountInterface.md).[getInvokeEstimateFee](AccountInterface.md#getinvokeestimatefee)

#### Inherited from

[Provider](Provider.md).[getInvokeEstimateFee](Provider.md#getinvokeestimatefee)

#### Defined in

[src/provider/rpc.ts:359](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L359)

---

### getDeclareEstimateFee

▸ **getDeclareEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DECLARE transaction

#### Parameters

| Name               | Type                                                                                | Description                                                                                                                           |
| :----------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `invocation`       | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be declared containing: - compiled contract code - sender address - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - version - optional version - optional maxFee                                                   |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                         | (optional) block identifier                                                                                                           |
| `skipValidate?`    | `boolean`                                                                           | (optional) skip cairo **validate** method                                                                                             |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[AccountInterface](AccountInterface.md).[getDeclareEstimateFee](AccountInterface.md#getdeclareestimatefee)

#### Inherited from

[Provider](Provider.md).[getDeclareEstimateFee](Provider.md#getdeclareestimatefee)

#### Defined in

[src/provider/rpc.ts:379](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L379)

---

### getDeployAccountEstimateFee

▸ **getDeployAccountEstimateFee**(`invocation`, `details`, `blockIdentifier?`, `skipValidate?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates the fee for a given DEPLOY_ACCOUNT transaction

#### Parameters

| Name               | Type                                                                                          | Description                                                                                                                                 |
| :----------------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `invocation`       | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | transaction payload to be deployed containing: - classHash - constructorCalldata - addressSalt - signature - (defaults to []) the signature |
| `details`          | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | optional details containing: - nonce - version - optional version - optional maxFee                                                         |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier)                                   | (optional) block identifier                                                                                                                 |
| `skipValidate?`    | `boolean`                                                                                     | (optional) skip cairo **validate** method                                                                                                   |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

the estimated fee

#### Implementation of

[AccountInterface](AccountInterface.md).[getDeployAccountEstimateFee](AccountInterface.md#getdeployaccountestimatefee)

#### Inherited from

[Provider](Provider.md).[getDeployAccountEstimateFee](Provider.md#getdeployaccountestimatefee)

#### Defined in

[src/provider/rpc.ts:399](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L399)

---

### getEstimateFeeBulk

▸ **getEstimateFeeBulk**(`invocations`, `options`): `Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

Estimates the fee for a list of INVOKE transaction

#### Parameters

| Name          | Type                                                                            | Description                                                              |
| :------------ | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| `invocations` | [`AccountInvocations`](../namespaces/types.md#accountinvocations)               | AccountInvocations - Complete invocations array with account details     |
| `options`     | [`getEstimateFeeBulkOptions`](../namespaces/types.md#getestimatefeebulkoptions) | getEstimateFeeBulkOptions - (optional) blockIdentifier - BlockIdentifier |

#### Returns

`Promise`\<[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)\>

the estimated fee

#### Implementation of

[AccountInterface](AccountInterface.md).[getEstimateFeeBulk](AccountInterface.md#getestimatefeebulk)

#### Inherited from

[Provider](Provider.md).[getEstimateFeeBulk](Provider.md#getestimatefeebulk)

#### Defined in

[src/provider/rpc.ts:419](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L419)

---

### invokeFunction

▸ **invokeFunction**(`functionInvocation`, `details`): `Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

Invokes a function on starknet

#### Parameters

| Name                 | Type                                                                                | Description                                                                                                                                                                                                             |
| :------------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `functionInvocation` | [`Invocation`](../namespaces/types.md#invocation)                                   | the invocation object containing: - contractAddress - the address of the contract - entrypoint - the entrypoint of the contract - calldata - (defaults to []) the calldata - signature - (defaults to []) the signature |
| `details`            | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | optional details containing: - nonce - optional nonce - version - optional version - maxFee - optional maxFee                                                                                                           |

#### Returns

`Promise`\<[`InvokedTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#invokedtransaction)\>

response from addTransaction

**`Deprecated`**

This method won't be supported as soon as fees are mandatory. Should not be used outside of Account class

#### Implementation of

[AccountInterface](AccountInterface.md).[invokeFunction](AccountInterface.md#invokefunction)

#### Inherited from

[Provider](Provider.md).[invokeFunction](Provider.md#invokefunction)

#### Defined in

[src/provider/rpc.ts:428](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L428)

---

### declareContract

▸ **declareContract**(`transaction`, `details`): `Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

Declares a given compiled contract (json) to starknet

#### Parameters

| Name          | Type                                                                                | Description                                                                                          |
| :------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeclareContractTransaction`](../namespaces/types.md#declarecontracttransaction)   | transaction payload to be deployed containing: - compiled contract code - sender address - signature |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce) | Invocation Details containing: - nonce - optional version - optional maxFee                          |

#### Returns

`Promise`\<[`DeclaredTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#declaredtransaction)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[AccountInterface](AccountInterface.md).[declareContract](AccountInterface.md#declarecontract)

#### Inherited from

[Provider](Provider.md).[declareContract](Provider.md#declarecontract)

#### Defined in

[src/provider/rpc.ts:435](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L435)

---

### deployAccountContract

▸ **deployAccountContract**(`transaction`, `details`): `Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

Deploys a given compiled Account contract (json) to starknet

#### Parameters

| Name          | Type                                                                                          | Description                                                                                       |
| :------------ | :-------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| `transaction` | [`DeployAccountContractTransaction`](../namespaces/types.md#deployaccountcontracttransaction) | payload to be deployed containing: - compiled contract code - constructor calldata - address salt |
| `details`     | [`InvocationsDetailsWithNonce`](../namespaces/types.md#invocationsdetailswithnonce)           | -                                                                                                 |

#### Returns

`Promise`\<[`DeployedAccountTransaction`](../namespaces/types.RPC.RPCSPEC07.API.md#deployedaccounttransaction)\>

a confirmation of sending a transaction on the starknet contract

#### Implementation of

[AccountInterface](AccountInterface.md).[deployAccountContract](AccountInterface.md#deployaccountcontract)

#### Inherited from

[Provider](Provider.md).[deployAccountContract](Provider.md#deployaccountcontract)

#### Defined in

[src/provider/rpc.ts:442](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L442)

---

### callContract

▸ **callContract**(`call`, `blockIdentifier?`): `Promise`\<`string`[]\>

Calls a function on the Starknet contract.

#### Parameters

| Name               | Type                                                        | Description              |
| :----------------- | :---------------------------------------------------------- | :----------------------- |
| `call`             | [`Call`](../namespaces/types.md#call)                       | transaction to be called |
| `blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | block identifier         |

#### Returns

`Promise`\<`string`[]\>

the result of the function on the smart contract.

#### Implementation of

[AccountInterface](AccountInterface.md).[callContract](AccountInterface.md#callcontract)

#### Inherited from

[Provider](Provider.md).[callContract](Provider.md#callcontract)

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

[Provider](Provider.md).[estimateMessageFee](Provider.md#estimatemessagefee)

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

[Provider](Provider.md).[getSyncingStats](Provider.md#getsyncingstats)

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

[Provider](Provider.md).[getEvents](Provider.md#getevents)

#### Defined in

[src/provider/rpc.ts:476](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/rpc.ts#L476)

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

[Provider](Provider.md).[getAddressFromStarkName](Provider.md#getaddressfromstarkname-1)

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

[Provider](Provider.md).[getStarkProfile](Provider.md#getstarkprofile-1)

#### Defined in

[src/provider/extensions/starknetId.ts:39](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/provider/extensions/starknetId.ts#L39)

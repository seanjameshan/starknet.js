---
id: 'Signer'
title: 'Class: Signer'
sidebar_label: 'Signer'
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`SignerInterface`](SignerInterface.md)

## Constructors

### constructor

• **new Signer**(`pk?`)

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `pk` | `string` \| `Uint8Array` |

#### Defined in

[src/signer/default.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L26)

## Properties

### pk

• `Protected` **pk**: `string` \| `Uint8Array`

#### Defined in

[src/signer/default.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L24)

## Methods

### getPubKey

▸ **getPubKey**(): `Promise`\<`string`\>

Method to get the public key of the signer

#### Returns

`Promise`\<`string`\>

public key of signer as hex string with 0x prefix

#### Implementation of

[SignerInterface](SignerInterface.md).[getPubKey](SignerInterface.md#getpubkey)

#### Defined in

[src/signer/default.ts:30](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L30)

---

### signMessage

▸ **signMessage**(`typedData`, `accountAddress`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Sign an JSON object for off-chain usage with the starknet private key and return the signature
This adds a message prefix so it can't be interchanged with transactions

**`Throws`**

if the JSON object is not a valid JSON

#### Parameters

| Name             | Type                                            | Description              |
| :--------------- | :---------------------------------------------- | :----------------------- |
| `typedData`      | [`TypedData`](../interfaces/types.TypedData.md) | JSON object to be signed |
| `accountAddress` | `string`                                        | account                  |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

the signature of the JSON object

#### Implementation of

[SignerInterface](SignerInterface.md).[signMessage](SignerInterface.md#signmessage)

#### Defined in

[src/signer/default.ts:34](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L34)

---

### signTransaction

▸ **signTransaction**(`transactions`, `transactionsDetail`, `abis?`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a transaction with the starknet private key and returns the signature

#### Parameters

| Name                 | Type                                                                          |
| :------------------- | :---------------------------------------------------------------------------- |
| `transactions`       | [`Call`](../namespaces/types.md#call)[]                                       |
| `transactionsDetail` | [`InvocationsSignerDetails`](../interfaces/types.InvocationsSignerDetails.md) |
| `abis?`              | [`Abi`](../namespaces/types.md#abi)[]                                         |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

signature

#### Implementation of

[SignerInterface](SignerInterface.md).[signTransaction](SignerInterface.md#signtransaction)

#### Defined in

[src/signer/default.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L39)

---

### signDeployAccountTransaction

▸ **signDeployAccountTransaction**(`«destructured»`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a DEPLOY_ACCOUNT transaction with the starknet private key and returns the signature

#### Parameters

| Name             | Type                                                                              | Description                                                                                                                                                                                                                                                                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountSignerDetails`](../namespaces/types.md#deployaccountsignerdetails) | contractAddress - the computed address of the contract - constructorCalldata - calldata to be passed in deploy constructor - addressSalt - contract address salt - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

signature

#### Implementation of

[SignerInterface](SignerInterface.md).[signDeployAccountTransaction](SignerInterface.md#signdeployaccounttransaction)

#### Defined in

[src/signer/default.ts:63](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L63)

---

### signDeclareTransaction

▸ **signDeclareTransaction**(`«destructured»`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a DECLARE transaction with the starknet private key and returns the signature

#### Parameters

| Name             | Type                                                                  | Description                                                                                                                                                                                                                                                                                                                                     |
| :--------------- | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `«destructured»` | [`DeclareSignerDetails`](../interfaces/types.DeclareSignerDetails.md) | classHash - computed class hash. Will be replaced by ContractClass in future once class hash is present in CompiledContract - senderAddress - the address of the sender - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

signature

#### Implementation of

[SignerInterface](SignerInterface.md).[signDeclareTransaction](SignerInterface.md#signdeclaretransaction)

#### Defined in

[src/signer/default.ts:87](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/default.ts#L87)

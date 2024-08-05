---
id: 'SignerInterface'
title: 'Class: SignerInterface'
sidebar_label: 'SignerInterface'
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Signer`](Signer.md)

## Constructors

### constructor

• **new SignerInterface**()

## Methods

### getPubKey

▸ `Abstract` **getPubKey**(): `Promise`\<`string`\>

Method to get the public key of the signer

#### Returns

`Promise`\<`string`\>

public key of signer as hex string with 0x prefix

#### Defined in

[src/signer/interface.ts:17](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L17)

---

### signMessage

▸ `Abstract` **signMessage**(`typedData`, `accountAddress`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

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

#### Defined in

[src/signer/interface.ts:28](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L28)

---

### signTransaction

▸ `Abstract` **signTransaction**(`transactions`, `transactionsDetail`, `abis?`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

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

#### Defined in

[src/signer/interface.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L41)

---

### signDeployAccountTransaction

▸ `Abstract` **signDeployAccountTransaction**(`transaction`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a DEPLOY_ACCOUNT transaction with the starknet private key and returns the signature

#### Parameters

| Name          | Type                                                                              | Description                                                                                                                                                                                                                                                                                                                              |
| :------------ | :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeployAccountSignerDetails`](../namespaces/types.md#deployaccountsignerdetails) | contractAddress - the computed address of the contract - constructorCalldata - calldata to be passed in deploy constructor - addressSalt - contract address salt - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

signature

#### Defined in

[src/signer/interface.ts:60](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L60)

---

### signDeclareTransaction

▸ `Abstract` **signDeclareTransaction**(`transaction`): `Promise`\<[`Signature`](../namespaces/types.md#signature)\>

Signs a DECLARE transaction with the starknet private key and returns the signature

#### Parameters

| Name          | Type                                                                  | Description                                                                                                                                                                                                                                                                                                                                     |
| :------------ | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transaction` | [`DeclareSignerDetails`](../interfaces/types.DeclareSignerDetails.md) | classHash - computed class hash. Will be replaced by ContractClass in future once class hash is present in CompiledContract - senderAddress - the address of the sender - chainId - the chainId to declare contract on - maxFee - maxFee for the declare transaction - version - transaction version - nonce - Nonce of the declare transaction |

#### Returns

`Promise`\<[`Signature`](../namespaces/types.md#signature)\>

signature

#### Defined in

[src/signer/interface.ts:76](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/signer/interface.ts#L76)

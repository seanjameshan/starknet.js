---
id: 'ContractInterface'
title: 'Class: ContractInterface'
sidebar_label: 'ContractInterface'
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Contract`](Contract.md)

## Indexable

▪ [key: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction) \| `any`

## Constructors

### constructor

• **new ContractInterface**(): [`ContractInterface`](ContractInterface.md)

#### Returns

[`ContractInterface`](ContractInterface.md)

## Properties

### abi

• `Abstract` **abi**: [`Abi`](../namespaces/types.md#abi)

#### Defined in

[src/contract/interface.ts:49](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L49)

---

### address

• `Abstract` **address**: `string`

#### Defined in

[src/contract/interface.ts:51](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L51)

---

### providerOrAccount

• `Abstract` **providerOrAccount**: [`ProviderInterface`](ProviderInterface.md) \| [`AccountInterface`](AccountInterface.md)

#### Defined in

[src/contract/interface.ts:53](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L53)

---

### deployTransactionHash

• `Optional` `Abstract` **deployTransactionHash**: `string`

#### Defined in

[src/contract/interface.ts:55](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L55)

---

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction)

#### Defined in

[src/contract/interface.ts:57](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L57)

---

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction)

#### Defined in

[src/contract/interface.ts:59](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L59)

---

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../namespaces/types.md#contractfunction)

#### Defined in

[src/contract/interface.ts:61](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L61)

---

### estimateFee

• `Readonly` **estimateFee**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../namespaces/types.md#contractfunction)

#### Defined in

[src/contract/interface.ts:63](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L63)

## Methods

### attach

▸ **attach**(`address`): `void`

Saves the address of the contract deployed on network that will be used for interaction

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `address` | `string` | address of the contract |

#### Returns

`void`

#### Defined in

[src/contract/interface.ts:72](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L72)

---

### connect

▸ **connect**(`providerOrAccount`): `void`

Attaches to new Provider or Account

#### Parameters

| Name                | Type                                                                                     | Description                          |
| :------------------ | :--------------------------------------------------------------------------------------- | :----------------------------------- |
| `providerOrAccount` | [`ProviderInterface`](ProviderInterface.md) \| [`AccountInterface`](AccountInterface.md) | new Provider or Account to attach to |

#### Returns

`void`

#### Defined in

[src/contract/interface.ts:79](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L79)

---

### deployed

▸ **deployed**(): `Promise`\<[`ContractInterface`](ContractInterface.md)\>

Resolves when contract is deployed on the network or when no deployment transaction is found

#### Returns

`Promise`\<[`ContractInterface`](ContractInterface.md)\>

Promise that resolves when contract is deployed on the network or when no deployment transaction is found

**`Throws`**

When deployment fails

#### Defined in

[src/contract/interface.ts:87](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L87)

---

### call

▸ **call**(`method`, `args?`, `options?`): `Promise`\<[`Result`](../namespaces/types.md#result)\>

Calls a method on a contract

#### Parameters

| Name       | Type                                                      | Description                         |
| :--------- | :-------------------------------------------------------- | :---------------------------------- |
| `method`   | `string`                                                  | name of the method                  |
| `args?`    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the call |
| `options?` | [`CallOptions`](../namespaces/types.md#calloptions)       | optional blockIdentifier            |

#### Returns

`Promise`\<[`Result`](../namespaces/types.md#result)\>

Result of the call as an array with key value pars

#### Defined in

[src/contract/interface.ts:97](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L97)

---

### invoke

▸ **invoke**(`method`, `args?`, `options?`): `Promise`\<\{ `transaction_hash`: `string` }\>

Invokes a method on a contract

#### Parameters

| Name       | Type                                                      | Description                                       |
| :--------- | :-------------------------------------------------------- | :------------------------------------------------ |
| `method`   | `string`                                                  | name of the method                                |
| `args?`    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the invoke or Calldata |
| `options?` | [`InvokeOptions`](../namespaces/types.md#invokeoptions)   |                                                   |

#### Returns

`Promise`\<\{ `transaction_hash`: `string` }\>

Add Transaction Response

#### Defined in

[src/contract/interface.ts:111](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L111)

---

### estimate

▸ **estimate**(`method`, `args?`, `options?`): `Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates a method on a contract

#### Parameters

| Name                       | Type                                                        | Description                                     |
| :------------------------- | :---------------------------------------------------------- | :---------------------------------------------- |
| `method`                   | `string`                                                    | name of the method                              |
| `args?`                    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata)   | Array of the arguments for the call or Calldata |
| `options?`                 | `Object`                                                    | optional blockIdentifier                        |
| `options.blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                                               |

#### Returns

`Promise`\<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Defined in

[src/contract/interface.ts:124](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L124)

---

### populate

▸ **populate**(`method`, `args?`): [`Invocation`](../namespaces/types.md#invocation)

Calls a method on a contract

#### Parameters

| Name     | Type                                                      | Description                                     |
| :------- | :-------------------------------------------------------- | :---------------------------------------------- |
| `method` | `string`                                                  | name of the method                              |
| `args?`  | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the call or Calldata |

#### Returns

[`Invocation`](../namespaces/types.md#invocation)

Invocation object

#### Defined in

[src/contract/interface.ts:139](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L139)

---

### parseEvents

▸ **parseEvents**(`receipt`): [`ParsedEvents`](../namespaces/types.md#parsedevents)

Parse contract events of a GetTransactionReceiptResponse received from waitForTransaction. Based on contract's abi

#### Parameters

| Name      | Type                                                                           | Description         |
| :-------- | :----------------------------------------------------------------------------- | :------------------ |
| `receipt` | [`GetTransactionReceiptResponse`](../modules.md#gettransactionreceiptresponse) | transaction receipt |

#### Returns

[`ParsedEvents`](../namespaces/types.md#parsedevents)

Events parsed

#### Defined in

[src/contract/interface.ts:147](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L147)

---

### isCairo1

▸ **isCairo1**(): `boolean`

tells if the contract comes from a Cairo 1 contract

#### Returns

`boolean`

TRUE if the contract comes from a Cairo1 contract

**`Example`**

```typescript
const isCairo1: boolean = myContract.isCairo1();
```

#### Defined in

[src/contract/interface.ts:158](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L158)

---

### getVersion

▸ **getVersion**(): `Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Retrieves the version of the contract (cairo version & compiler version)

#### Returns

`Promise`\<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Defined in

[src/contract/interface.ts:163](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L163)

---

### typedv2

▸ **typedv2**\<`TAbi`\>(`tAbi`): `TypedContractV2`\<`TAbi`\>

Returns a typed instance of ContractV2 based on the supplied ABI.

#### Type parameters

| Name   | Type                                                                                                                            |
| :----- | :------------------------------------------------------------------------------------------------------------------------------ |
| `TAbi` | extends readonly (`AbiImpl` \| `AbiFunction` \| `AbiInterface` \| `AbiConstructor` \| `AbiEvent` \| `AbiStruct` \| `AbiEnum`)[] |

#### Parameters

| Name   | Type   | Description                                            |
| :----- | :----- | :----------------------------------------------------- |
| `tAbi` | `TAbi` | The ABI (Abstract Binary Interface) of the ContractV2. |

#### Returns

`TypedContractV2`\<`TAbi`\>

- A typed instance of ContractV2.

#### Defined in

[src/contract/interface.ts:171](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/contract/interface.ts#L171)

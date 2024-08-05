---
id: 'CairoUint256'
title: 'Class: CairoUint256'
sidebar_label: 'CairoUint256'
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new CairoUint256**(`bigNumberish`): [`CairoUint256`](CairoUint256.md)

Default constructor (Lib usage)

#### Parameters

| Name           | Type                                                  | Description                            |
| :------------- | :---------------------------------------------------- | :------------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) | BigNumberish value representing uin256 |

#### Returns

[`CairoUint256`](CairoUint256.md)

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:29](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L29)

• **new CairoUint256**(`low`, `high`): [`CairoUint256`](CairoUint256.md)

Direct props initialization (Api response)

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `low`  | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `high` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

[`CairoUint256`](CairoUint256.md)

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:33](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L33)

• **new CairoUint256**(`uint256`): [`CairoUint256`](CairoUint256.md)

Initialization from Uint256 object

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `uint256` | [`Uint256`](../interfaces/types.Uint256.md) |

#### Returns

[`CairoUint256`](CairoUint256.md)

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:37](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L37)

## Properties

### abiSelector

▪ `Static` **abiSelector**: `string` = `'core::integer::u256'`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:23](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L23)

---

### low

• **low**: `bigint`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:19](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L19)

---

### high

• **high**: `bigint`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:21](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L21)

## Methods

### validate

▸ **validate**(`bigNumberish`): `bigint`

Validate if BigNumberish can be represented as Unit256

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`bigint`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:60](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L60)

---

### validateProps

▸ **validateProps**(`low`, `high`): `Object`

Validate if low and high can be represented as Unit256

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `low`  | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `high` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`Object`

| Name   | Type     |
| :----- | :------- |
| `low`  | `bigint` |
| `high` | `bigint` |

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:70](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L70)

---

### is

▸ **is**(`bigNumberish`): `boolean`

Check if BigNumberish can be represented as Unit256

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:85](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L85)

---

### isAbiType

▸ **isAbiType**(`abiType`): `boolean`

Check if provided abi type is this data type

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `abiType` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:97](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L97)

---

### toBigInt

▸ **toBigInt**(): `bigint`

Return bigint representation

#### Returns

`bigint`

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:104](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L104)

---

### toUint256HexString

▸ **toUint256HexString**(): `Object`

Return Uint256 structure with HexString props
`{low: HexString, high: HexString}`

#### Returns

`Object`

| Name   | Type     |
| :----- | :------- |
| `low`  | `string` |
| `high` | `string` |

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:112](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L112)

---

### toUint256DecimalString

▸ **toUint256DecimalString**(): `Object`

Return Uint256 structure with DecimalString props
`{low: DecString, high: DecString}`

#### Returns

`Object`

| Name   | Type     |
| :----- | :------- |
| `low`  | `string` |
| `high` | `string` |

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:123](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L123)

---

### toApiRequest

▸ **toApiRequest**(): `string`[]

Return api requests representation witch is felt array

#### Returns

`string`[]

#### Defined in

[src/utils/cairoDataTypes/uint256.ts:133](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/uint256.ts#L133)

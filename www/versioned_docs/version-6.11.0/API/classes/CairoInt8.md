---
id: 'CairoInt8'
title: 'Class: CairoInt8'
sidebar_label: 'CairoInt8'
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new CairoInt8**(`bigNumberish`): [`CairoInt8`](CairoInt8.md)

Default constructor (Lib usage)

#### Parameters

| Name           | Type                                                  | Description                         |
| :------------- | :---------------------------------------------------- | :---------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) | BigNumberish value representing in8 |

#### Returns

[`CairoInt8`](CairoInt8.md)

#### Defined in

[src/utils/cairoDataTypes/int8.ts:29](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L29)

• **new CairoInt8**(`int8`): [`CairoInt8`](CairoInt8.md)

Direct props initialization (Api response)

#### Parameters

| Name   | Type                                                  |
| :----- | :---------------------------------------------------- |
| `int8` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

[`CairoInt8`](CairoInt8.md)

#### Defined in

[src/utils/cairoDataTypes/int8.ts:33](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L19)

• **new CairoInt8**(`Int8`): [`CairoInt8`](CairoInt8.md)

Initialization from Int8 object

#### Parameters

| Name   | Type                                  |
| :----- | :------------------------------------ |
| `int8` | [`int8`](../interfaces/types.Int8.md) |

#### Returns

[`CairoInt8`](CairoInt8.md)

#### Defined in

[src/utils/cairoDataTypes/int8.ts:37](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L37)

## Properties

### abiSelector

▪ `Static` **abiSelector**: `string` = `'core::integer::u256'`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:23](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L23)

---

### low

• **low**: `bigint`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:19](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L19)

---

### high

• **high**: `bigint`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:21](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L21)

## Methods

### validate

▸ **validate**(`bigNumberish`): `bigint`

Validate if BigNumberish can be represented as Int8

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`bigint`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:60](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L60)

---

### validateProps

▸ **validateProps**(`low`, `high`): `Object`

Validate if low and high can be represented as Int8

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

[src/utils/cairoDataTypes/int8.ts:70](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L70)

---

### is

▸ **is**(`bigNumberish`): `boolean`

Check if BigNumberish can be represented as Int8

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `bigNumberish` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`boolean`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:85](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L85)

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

[src/utils/cairoDataTypes/int8.ts:97](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L97)

---

### toBigInt

▸ **toBigInt**(): `bigint`

Return bigint representation

#### Returns

`bigint`

#### Defined in

[src/utils/cairoDataTypes/int8.ts:104](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L104)

---

### toInt8HexString

▸ **toInt8HexString**(): `Object`

Return c structure with HexString props
{low: HexString, high: HexString}

#### Returns

`Object`

| Name   | Type     |
| :----- | :------- |
| `low`  | `string` |
| `high` | `string` |

#### Defined in

[src/utils/cairoDataTypes/int8.ts:112](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L112)

---

### toInt8DecimalString

▸ **toInt8DecimalString**(): `Object`

Return int8 structure with DecimalString props
{low: DecString, high: DecString}

#### Returns

`Object`

| Name   | Type     |
| :----- | :------- |
| `low`  | `string` |
| `high` | `string` |

#### Defined in

[src/utils/cairoDataTypes/int8.ts:123](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L123)

---

### toApiRequest

▸ **toApiRequest**(): `string`[]

Return api requests representation witch is felt array

#### Returns

`string`[]

#### Defined in

[src/utils/cairoDataTypes/int8.ts:133](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/cairoDataTypes/int8.ts#L133)

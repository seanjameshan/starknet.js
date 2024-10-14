---
id: 'cairo'
title: 'Namespace: cairo'
sidebar_label: 'cairo'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### isCairo1Abi

▸ **isCairo1Abi**(`abi`): `boolean`

Test if an ABI comes from a Cairo 1 contract

**`Example`**

```typescript
const isCairo1: boolean = isCairo1Abi(myAbi: Abi);
```

#### Parameters

| Name  | Type                  | Description                                    |
| :---- | :-------------------- | :--------------------------------------------- |
| `abi` | [`Abi`](types.md#abi) | representing the interface of a Cairo contract |

#### Returns

`boolean`

TRUE if it is an ABI from a Cairo1 contract

#### Defined in

[src/utils/calldata/cairo.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L53)

---

### getAbiContractVersion

▸ **getAbiContractVersion**(`abi`): [`ContractVersion`](types.md#contractversion)

Return ContractVersion (Abi version) based on Abi
or undefined for unknown version

#### Parameters

| Name  | Type                  |
| :---- | :-------------------- |
| `abi` | [`Abi`](types.md#abi) |

#### Returns

[`ContractVersion`](types.md#contractversion)

string

#### Defined in

[src/utils/calldata/cairo.ts:67](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L67)

---

### felt

▸ **felt**(`it`): `string`

Create felt Cairo type (cairo type helper)

#### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `it` | [`BigNumberish`](types.md#bignumberish) |

#### Returns

`string`

format: felt-string

#### Defined in

[src/utils/calldata/cairo.ts:127](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L127)

---

### isLen

▸ **isLen**(`name`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L16)

---

### isTypeFelt

▸ **isTypeFelt**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:17](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L17)

---

### isTypeArray

▸ **isTypeArray**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:18](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L18)

---

### isTypeTuple

▸ **isTypeTuple**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:22](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L22)

---

### isTypeNamedTuple

▸ **isTypeNamedTuple**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:23](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L23)

---

### isTypeStruct

▸ **isTypeStruct**(`type`, `structs`): `boolean`

#### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `type`    | `string`                            |
| `structs` | [`AbiStructs`](types.md#abistructs) |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L24)

---

### isTypeEnum

▸ **isTypeEnum**(`type`, `enums`): `boolean`

#### Parameters

| Name    | Type                            |
| :------ | :------------------------------ |
| `type`  | `string`                        |
| `enums` | [`AbiEnums`](types.md#abienums) |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:25](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L25)

---

### isTypeOption

▸ **isTypeOption**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L26)

---

### isTypeResult

▸ **isTypeResult**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L27)

---

### isTypeUint

▸ **isTypeUint**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:28](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L28)

---

### isTypeLitteral

▸ **isTypeLitteral**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:29](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L29)

---

### isTypeUint256

▸ **isTypeUint256**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:30](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L30)

---

### isTypeBool

▸ **isTypeBool**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:31](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L31)

---

### isTypeContractAddress

▸ **isTypeContractAddress**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:32](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L32)

---

### isTypeEthAddress

▸ **isTypeEthAddress**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:34](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L34)

---

### isCairo1Type

▸ **isCairo1Type**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:36](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L36)

---

### getArrayType

▸ **getArrayType**(`type`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/calldata/cairo.ts:37](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L37)

---

### uint256

▸ **uint256**(`it`): [`Uint256`](../interfaces/types.Uint256.md)

Create Uint256 Cairo type (helper for common struct type)

**`Example`**

```typescript
uint256('892349863487563453485768723498');
```

#### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `it` | [`BigNumberish`](types.md#bignumberish) |

#### Returns

[`Uint256`](../interfaces/types.Uint256.md)

#### Defined in

[src/utils/calldata/cairo.ts:101](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L101)

---

### tuple

▸ **tuple**(`...args`): `Record`\<`number`, `boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish)\>

Create unnamed tuple Cairo type (helper same as common struct type)

**`Example`**

```typescript
tuple(1, '0x101', 16);
```

#### Parameters

| Name      | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `...args` | (`boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish))[] |

#### Returns

`Record`\<`number`, `boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish)\>

#### Defined in

[src/utils/calldata/cairo.ts:119](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/cairo.ts#L119)

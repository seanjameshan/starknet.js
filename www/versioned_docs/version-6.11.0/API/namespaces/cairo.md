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

#### Parameters

| Name  | Type                  | Description                                    |
| :---- | :-------------------- | :--------------------------------------------- |
| `abi` | [`Abi`](types.md#abi) | representing the interface of a Cairo contract |

#### Returns

`boolean`

TRUE if it is an ABI from a Cairo1 contract

**`Example`**

```typescript
const isCairo1: boolean = isCairo1Abi(myAbi: Abi);
```

#### Defined in

[src/utils/calldata/cairo.ts:169](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L169)

---

### isTypeNonZero

▸ **isTypeNonZero**(`type`): `boolean`

Checks if the given type is a NonZero type.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

`true` if the type is NonZero type, `false` otherwise.

**`Example`**

```typescript
const result = cairo.isTypeNonZero('core::zeroable::NonZero::<u8>');
//result = true
```

#### Defined in

[src/utils/calldata/cairo.ts:188](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L188)

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

[src/utils/calldata/cairo.ts:198](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L198)

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

[src/utils/calldata/cairo.ts:264](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L264)

---

### isLen

▸ **isLen**(`name`): `boolean`

Checks if the given name ends with "\_len".

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `name` | `string` | The name to be checked. |

#### Returns

`boolean`

- True if the name ends with "\_len", false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:23](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L23)

---

### isTypeFelt

▸ **isTypeFelt**(`type`): `boolean`

Checks if a given type is felt.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the type is felt, false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:30](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L30)

---

### isTypeArray

▸ **isTypeArray**(`type`): `boolean`

Checks if the given type is an array type.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- `true` if the type is an array type, `false` otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:37](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L37)

---

### isTypeTuple

▸ **isTypeTuple**(`type`): `boolean`

Checks if the given type is a tuple type.

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `type` | `string` | The type to be checked. |

#### Returns

`boolean`

- `true` if the type is a tuple type, otherwise `false`.

#### Defined in

[src/utils/calldata/cairo.ts:47](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L47)

---

### isTypeNamedTuple

▸ **isTypeNamedTuple**(`type`): `boolean`

Checks whether a given type is a named tuple.

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `type` | `string` | The type to be checked. |

#### Returns

`boolean`

- True if the type is a named tuple, false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:54](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L54)

---

### isTypeStruct

▸ **isTypeStruct**(`type`, `structs`): `boolean`

Checks if a given type is a struct.

#### Parameters

| Name      | Type                                | Description                             |
| :-------- | :---------------------------------- | :-------------------------------------- |
| `type`    | `string`                            | The type to check for existence.        |
| `structs` | [`AbiStructs`](types.md#abistructs) | The collection of structs to search in. |

#### Returns

`boolean`

- True if the type exists in the structs, false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:62](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L62)

---

### isTypeEnum

▸ **isTypeEnum**(`type`, `enums`): `boolean`

Checks if a given type is an enum.

#### Parameters

| Name    | Type                            | Description                   |
| :------ | :------------------------------ | :---------------------------- |
| `type`  | `string`                        | The type to check.            |
| `enums` | [`AbiEnums`](types.md#abienums) | The enumeration to search in. |

#### Returns

`boolean`

- True if the type exists in the enumeration, otherwise false.

#### Defined in

[src/utils/calldata/cairo.ts:70](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L70)

---

### isTypeOption

▸ **isTypeOption**(`type`): `boolean`

Determines if the given type is an Option type.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the type is an Option type, false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:77](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L77)

---

### isTypeResult

▸ **isTypeResult**(`type`): `boolean`

Checks whether a given type starts with 'core::result::Result::'.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the type starts with 'core::result::Result::', false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:84](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L84)

---

### isTypeUint

▸ **isTypeUint**(`type`): `boolean`

Checks if the given value is a valid Uint type.

#### Parameters

| Name   | Type     | Description         |
| :----- | :------- | :------------------ |
| `type` | `string` | The value to check. |

#### Returns

`boolean`

- Returns true if the value is a valid Uint type, otherwise false.

#### Defined in

[src/utils/calldata/cairo.ts:91](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L91)

---

### isTypeUint256

▸ **isTypeUint256**(`type`): `boolean`

Checks if the given type is `uint256`.

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `type` | `string` | The type to be checked. |

#### Returns

`boolean`

- Returns true if the type is `uint256`, otherwise false.

#### Defined in

[src/utils/calldata/cairo.ts:99](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L99)

---

### isTypeLiteral

▸ **isTypeLiteral**(`type`): `boolean`

Checks if the given type is a literal type.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the type is a literal type, false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:106](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L106)

---

### isTypeBool

▸ **isTypeBool**(`type`): `boolean`

Checks if the given type is a boolean type.

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `type` | `string` | The type to be checked. |

#### Returns

`boolean`

- Returns true if the type is a boolean type, otherwise false.

#### Defined in

[src/utils/calldata/cairo.ts:113](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L113)

---

### isTypeContractAddress

▸ **isTypeContractAddress**(`type`): `boolean`

Checks if the provided type is equal to 'core::starknet::contract_address::ContractAddress'.

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `type` | `string` | The type to be checked. |

#### Returns

`boolean`

- true if the type matches 'core::starknet::contract_address::ContractAddress', false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:119](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L119)

---

### isTypeEthAddress

▸ **isTypeEthAddress**(`type`): `boolean`

Determines if the given type is an Ethereum address type.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- Returns true if the given type is 'core::starknet::eth_address::EthAddress', otherwise false.

#### Defined in

[src/utils/calldata/cairo.ts:127](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L127)

---

### isTypeBytes31

▸ **isTypeBytes31**(`type`): `boolean`

Checks if the given type is 'core::bytes_31::bytes31'.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the type is 'core::bytes_31::bytes31', false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:135](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L135)

---

### isTypeByteArray

▸ **isTypeByteArray**(`type`): `boolean`

Checks if the given type is equal to the 'core::byte_array::ByteArray'.

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `type` | `string` | The type to check. |

#### Returns

`boolean`

- True if the given type is equal to 'core::byte_array::ByteArray', false otherwise.

#### Defined in

[src/utils/calldata/cairo.ts:142](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L142)

---

### isTypeSecp256k1Point

▸ **isTypeSecp256k1Point**(`type`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/calldata/cairo.ts:143](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L143)

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

[src/utils/calldata/cairo.ts:145](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L145)

---

### getArrayType

▸ **getArrayType**(`type`): `string`

Retrieves the array type from the given type string.

Works also for core::zeroable::NonZero type.

#### Parameters

| Name   | Type     | Description      |
| :----- | :------- | :--------------- |
| `type` | `string` | The type string. |

#### Returns

`string`

- The array type.

#### Defined in

[src/utils/calldata/cairo.ts:153](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L153)

---

### uint256

▸ **uint256**(`it`): [`Uint256`](../interfaces/types.Uint256.md)

Create Uint256 Cairo type (helper for common struct type)

#### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `it` | [`BigNumberish`](types.md#bignumberish) |

#### Returns

[`Uint256`](../interfaces/types.Uint256.md)

**`Example`**

```typescript
uint256('892349863487563453485768723498');
```

#### Defined in

[src/utils/calldata/cairo.ts:232](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L232)

---

### uint512

▸ **uint512**(`it`): [`Uint512`](../interfaces/types.Uint512.md)

Create Uint512 Cairo type (helper for common struct type)

#### Parameters

| Name | Type                                    | Description                                               |
| :--- | :-------------------------------------- | :-------------------------------------------------------- |
| `it` | [`BigNumberish`](types.md#bignumberish) | BigNumberish representation of a 512 bits unsigned number |

#### Returns

[`Uint512`](../interfaces/types.Uint512.md)

Uint512 struct

**`Example`**

```typescript
uint512('345745685892349863487563453485768723498');
```

#### Defined in

[src/utils/calldata/cairo.ts:245](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L245)

---

### tuple

▸ **tuple**(`...args`): `Record`\<`number`, `boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish)\>

Create unnamed tuple Cairo type (helper same as common struct type)

#### Parameters

| Name      | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `...args` | (`boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish))[] |

#### Returns

`Record`\<`number`, `boolean` \| `object` \| [`BigNumberish`](types.md#bignumberish)\>

**`Example`**

```typescript
tuple(1, '0x101', 16);
```

#### Defined in

[src/utils/calldata/cairo.ts:256](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/cairo.ts#L256)

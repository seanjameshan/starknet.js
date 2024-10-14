---
id: 'typedData'
title: 'Namespace: typedData'
sidebar_label: 'typedData'
sidebar_position: 0
custom_edit_url: null
---

## References

### StarkNetMerkleType

Re-exports [StarkNetMerkleType](types.md#starknetmerkletype)

---

### StarkNetType

Re-exports [StarkNetType](types.md#starknettype)

---

### StarkNetDomain

Re-exports [StarkNetDomain](../interfaces/types.StarkNetDomain.md)

---

### TypedData

Re-exports [TypedData](../interfaces/types.TypedData.md)

## Functions

### prepareSelector

▸ **prepareSelector**(`selector`): `string`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `selector` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/typedData.ts:36](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L36)

---

### isMerkleTreeType

▸ **isMerkleTreeType**(`type`): type is StarkNetMerkleType

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `type` | [`StarkNetType`](types.md#starknettype) |

#### Returns

type is StarkNetMerkleType

#### Defined in

[src/utils/typedData.ts:40](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L40)

---

### getDependencies

▸ **getDependencies**(`types`, `type`, `dependencies?`): `string`[]

Get the dependencies of a struct type. If a struct has the same dependency multiple times, it's only included once
in the resulting array.

#### Parameters

| Name            | Type                                                            | Default value |
| :-------------- | :-------------------------------------------------------------- | :------------ |
| `types`         | `Record`\<`string`, [`StarkNetType`](types.md#starknettype)[]\> | `undefined`   |
| `type`          | `string`                                                        | `undefined`   |
| `dependencies?` | `string`[]                                                      | `[]`          |

#### Returns

`string`[]

#### Defined in

[src/utils/typedData.ts:58](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L58)

---

### encodeType

▸ **encodeType**(`types`, `type`): `string`

Encode a type to a string. All dependent types are alphabetically sorted.

#### Parameters

| Name    | Type                                                            |
| :------ | :-------------------------------------------------------------- |
| `types` | `Record`\<`string`, [`StarkNetType`](types.md#starknettype)[]\> |
| `type`  | `string`                                                        |

#### Returns

`string`

#### Defined in

[src/utils/typedData.ts:110](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L110)

---

### getTypeHash

▸ **getTypeHash**(`types`, `type`): `string`

Get a type string as hash.

#### Parameters

| Name    | Type                                                            |
| :------ | :-------------------------------------------------------------- |
| `types` | `Record`\<`string`, [`StarkNetType`](types.md#starknettype)[]\> |
| `type`  | `string`                                                        |

#### Returns

`string`

#### Defined in

[src/utils/typedData.ts:124](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L124)

---

### encodeValue

▸ **encodeValue**(`types`, `type`, `data`, `ctx?`): [`string`, `string`]

Encodes a single value to an ABI serialisable string, number or Buffer. Returns the data as tuple, which consists of
an array of ABI compatible types, and an array of corresponding values.

#### Parameters

| Name    | Type                                                            |
| :------ | :-------------------------------------------------------------- |
| `types` | `Record`\<`string`, [`StarkNetType`](types.md#starknettype)[]\> |
| `type`  | `string`                                                        |
| `data`  | `unknown`                                                       |
| `ctx`   | `Context`                                                       |

#### Returns

[`string`, `string`]

#### Defined in

[src/utils/typedData.ts:132](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L132)

---

### encodeData

▸ **encodeData**\<`T`\>(`types`, `type`, `data`): `string`[][]

Encode the data to an ABI encoded Buffer. The data should be a key -> value object with all the required values.
All dependent types are automatically encoded.

#### Type parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `T`  | extends [`TypedData`](../interfaces/types.TypedData.md) |

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `types` | `T`[``"types"``]   |
| `type`  | `string`           |
| `data`  | `T`[``"message"``] |

#### Returns

`string`[][]

#### Defined in

[src/utils/typedData.ts:180](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L180)

---

### getStructHash

▸ **getStructHash**\<`T`\>(`types`, `type`, `data`): `string`

Get encoded data as a hash. The data should be a key -> value object with all the required values.
All dependent types are automatically encoded.

#### Type parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `T`  | extends [`TypedData`](../interfaces/types.TypedData.md) |

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `types` | `T`[``"types"``]   |
| `type`  | `string`           |
| `data`  | `T`[``"message"``] |

#### Returns

`string`

#### Defined in

[src/utils/typedData.ts:212](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L212)

---

### getMessageHash

▸ **getMessageHash**(`typedData`, `account`): `string`

Get the EIP-191 encoded message to sign, from the typedData object.

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `typedData` | [`TypedData`](../interfaces/types.TypedData.md) |
| `account`   | [`BigNumberish`](types.md#bignumberish)         |

#### Returns

`string`

#### Defined in

[src/utils/typedData.ts:223](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/typedData.ts#L223)

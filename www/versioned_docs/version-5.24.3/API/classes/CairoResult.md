---
id: 'CairoResult'
title: 'Class: CairoResult<T, U>'
sidebar_label: 'CairoResult'
sidebar_position: 0
custom_edit_url: null
---

Class to handle Cairo Result

**`Param`**

CairoResultVariant.Ok or CairoResultVariant.Err

**`Param`**

value of type T or U.

**`Example`**

```typescript
const myOption = new CairoResult<BigNumberish, CustomError>(CairoResultVariant.Ok, '0x54dda8');
```

## Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

## Constructors

### constructor

• **new CairoResult**\<`T`, `U`\>(`variant`, `resultContent`)

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name            | Type                                                   |
| :-------------- | :----------------------------------------------------- |
| `variant`       | [`CairoResultVariant`](../enums/CairoResultVariant.md) |
| `resultContent` | `T` \| `U`                                             |

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:20](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L20)

## Properties

### Ok

• `Optional` `Readonly` **Ok**: `T`

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L16)

---

### Err

• `Optional` `Readonly` **Err**: `U`

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:18](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L18)

## Methods

### unwrap

▸ **unwrap**(): `T` \| `U`

#### Returns

`T` \| `U`

the content of the valid variant of a Cairo Result.

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:37](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L37)

---

### isOk

▸ **isOk**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'Ok'.

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:51](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L51)

---

### isErr

▸ **isErr**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'isErr'.

#### Defined in

[src/utils/calldata/enum/CairoResult.ts:59](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoResult.ts#L59)

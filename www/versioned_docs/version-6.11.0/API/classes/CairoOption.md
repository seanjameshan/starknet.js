---
id: 'CairoOption'
title: 'Class: CairoOption<T>'
sidebar_label: 'CairoOption'
sidebar_position: 0
custom_edit_url: null
---

Class to handle Cairo Option

**`Param`**

CairoOptionVariant.Some or CairoOptionVariant.None

**`Param`**

value of type T.

**`Example`**

```typescript
const myOption = new CairoOption<BigNumberish>(CairoOptionVariant.Some, '0x54dda8');
```

## Type parameters

| Name |
| :--- |
| `T`  |

## Constructors

### constructor

• **new CairoOption**\<`T`\>(`variant`, `someContent?`): [`CairoOption`](CairoOption.md)\<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type                                                   |
| :------------- | :----------------------------------------------------- |
| `variant`      | [`CairoOptionVariant`](../enums/CairoOptionVariant.md) |
| `someContent?` | `T`                                                    |

#### Returns

[`CairoOption`](CairoOption.md)\<`T`\>

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:21](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L21)

## Properties

### Some

• `Optional` `Readonly` **Some**: `T`

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:17](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L17)

---

### None

• `Optional` `Readonly` **None**: `boolean`

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:19](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L19)

## Methods

### unwrap

▸ **unwrap**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

the content of the valid variant of a Cairo custom Enum.
If None, returns 'undefined'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:44](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L44)

---

### isSome

▸ **isSome**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'isSome'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:55](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L55)

---

### isNone

▸ **isNone**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'isNone'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:63](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/enum/CairoOption.ts#L63)

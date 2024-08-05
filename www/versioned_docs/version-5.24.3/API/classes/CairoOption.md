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

• **new CairoOption**\<`T`\>(`variant`, `someContent?`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type                                                   |
| :------------- | :----------------------------------------------------- |
| `variant`      | [`CairoOptionVariant`](../enums/CairoOptionVariant.md) |
| `someContent?` | `T`                                                    |

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:20](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L20)

## Properties

### Some

• `Optional` `Readonly` **Some**: `T`

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L16)

---

### None

• `Optional` `Readonly` **None**: `boolean`

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:18](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L18)

## Methods

### unwrap

▸ **unwrap**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

the content of the valid variant of a Cairo custom Enum.
If None, returns 'undefined'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:43](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L43)

---

### isSome

▸ **isSome**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'isSome'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:54](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L54)

---

### isNone

▸ **isNone**(): `boolean`

#### Returns

`boolean`

true if the valid variant is 'isNone'.

#### Defined in

[src/utils/calldata/enum/CairoOption.ts:62](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoOption.ts#L62)

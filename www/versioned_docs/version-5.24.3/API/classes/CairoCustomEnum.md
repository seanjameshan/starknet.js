---
id: 'CairoCustomEnum'
title: 'Class: CairoCustomEnum'
sidebar_label: 'CairoCustomEnum'
sidebar_position: 0
custom_edit_url: null
---

Class to handle Cairo custom Enum

**`Param`**

object containing the variants and its content. Example:
`{Success: 234, Warning: undefined, Error: undefined}`.
Only one variant with a value, object, array.

**`Example`**

```typescript
const myCairoEnum = new CairoCustomEnum({
  Success: undefined,
  Warning: '0x7f32ea',
  Error: undefined,
});
```

## Constructors

### constructor

• **new CairoCustomEnum**(`enumContent`)

#### Parameters

| Name          | Type                                         | Description                                                                                      |
| :------------ | :------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `enumContent` | [`CairoEnumRaw`](../modules.md#cairoenumraw) | an object with the variants as keys and the content as value. Only one content shall be defined. |

#### Defined in

[src/utils/calldata/enum/CairoCustomEnum.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoCustomEnum.ts#L27)

## Properties

### variant

• `Readonly` **variant**: [`CairoEnumRaw`](../modules.md#cairoenumraw)

direct readonly access to variants of the Cairo Custom Enum.

**`Example`**

```typescript
const successValue = myCairoEnum.variant.Success;

#### Defined in

[src/utils/calldata/enum/CairoCustomEnum.ts:22](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoCustomEnum.ts#L22)

## Methods

### unwrap

▸ **unwrap**(): `any`

#### Returns

`any`

the content of the valid variant of a Cairo custom Enum.

#### Defined in

[src/utils/calldata/enum/CairoCustomEnum.ts:45](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoCustomEnum.ts#L45)

___

### activeVariant

▸ **activeVariant**(): `string`

#### Returns

`string`

the name of the valid variant of a Cairo custom Enum.

#### Defined in

[src/utils/calldata/enum/CairoCustomEnum.ts:58](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/calldata/enum/CairoCustomEnum.ts#L58)
```

---
id: 'ec.weierstrass.ProjPointType'
title: 'Interface: ProjPointType<T>'
sidebar_label: 'ProjPointType'
custom_edit_url: null
---

[ec](../namespaces/ec.md).[weierstrass](../namespaces/ec.weierstrass.md).ProjPointType

### Design rationale for types

- Interaction between classes from different curves should fail:
  `k256.Point.BASE.add(p256.Point.BASE)`
- For this purpose we want to use `instanceof` operator, which is fast and works during runtime
- Different calls of `curve()` would return different classes -
  `curve(params) !== curve(params)`: if somebody decided to monkey-patch their curve,
  it won't affect others

TypeScript can't infer types for classes created inside a function. Classes is one instance of nominative types in TypeScript and interfaces only check for shape, so it's hard to create unique type for every function call.

We can use generic types via some param, like curve opts, but that would: 1. Enable interaction between `curve(params)` and `curve(params)` (curves of same params)
which is hard to debug. 2. Params can be generic and we can't enforce them to be constant value:
if somebody creates curve from non-constant params,
it would be allowed to interact with other curves with non-constant params

TODO: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- `Group`\<[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>\>

  ↳ **`ProjPointType`**

## Properties

### px

• `Readonly` **px**: `T`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:58

---

### py

• `Readonly` **py**: `T`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:59

---

### pz

• `Readonly` **pz**: `T`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:60

## Accessors

### x

• `get` **x**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:61

---

### y

• `get` **y**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:62

## Methods

### multiply

▸ **multiply**(`scalar`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `scalar` | `bigint` |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Overrides

Group.multiply

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:63

---

### toAffine

▸ **toAffine**(`iz?`): [`AffinePoint`](../namespaces/ec.weierstrass.md#affinepoint)\<`T`\>

#### Parameters

| Name  | Type |
| :---- | :--- |
| `iz?` | `T`  |

#### Returns

[`AffinePoint`](../namespaces/ec.weierstrass.md#affinepoint)\<`T`\>

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:64

---

### isTorsionFree

▸ **isTorsionFree**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:65

---

### clearCofactor

▸ **clearCofactor**(): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:66

---

### assertValidity

▸ **assertValidity**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:67

---

### hasEvenY

▸ **hasEvenY**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:68

---

### toRawBytes

▸ **toRawBytes**(`isCompressed?`): `Uint8Array`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `isCompressed?` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:69

---

### toHex

▸ **toHex**(`isCompressed?`): `string`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `isCompressed?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:70

---

### multiplyUnsafe

▸ **multiplyUnsafe**(`scalar`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `scalar` | `bigint` |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:71

---

### multiplyAndAddUnsafe

▸ **multiplyAndAddUnsafe**(`Q`, `a`, `b`): `undefined` \| [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `Q`  | [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\> |
| `a`  | `bigint`                                                  |
| `b`  | `bigint`                                                  |

#### Returns

`undefined` \| [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:72

---

### \_setWindowSize

▸ **\_setWindowSize**(`windowSize`): `void`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `windowSize` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@noble/curves/abstract/weierstrass.d.ts:73

---

### double

▸ **double**(): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

Group.double

#### Defined in

node_modules/@noble/curves/abstract/curve.d.ts:11

---

### negate

▸ **negate**(): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

Group.negate

#### Defined in

node_modules/@noble/curves/abstract/curve.d.ts:12

---

### add

▸ **add**(`other`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `other` | [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\> |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

Group.add

#### Defined in

node_modules/@noble/curves/abstract/curve.d.ts:13

---

### subtract

▸ **subtract**(`other`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `other` | [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\> |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

Group.subtract

#### Defined in

node_modules/@noble/curves/abstract/curve.d.ts:14

---

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name    | Type                                                      |
| :------ | :-------------------------------------------------------- |
| `other` | [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\> |

#### Returns

`boolean`

#### Inherited from

Group.equals

#### Defined in

node_modules/@noble/curves/abstract/curve.d.ts:15

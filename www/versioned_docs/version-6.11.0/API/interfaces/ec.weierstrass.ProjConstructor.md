---
id: 'ec.weierstrass.ProjConstructor'
title: 'Interface: ProjConstructor<T>'
sidebar_label: 'ProjConstructor'
custom_edit_url: null
---

[ec](../namespaces/ec.md).[weierstrass](../namespaces/ec.weierstrass.md).ProjConstructor

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- `GroupConstructor`\<[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>\>

  ↳ **`ProjConstructor`**

## Constructors

### constructor

• **new ProjConstructor**(`x`, `y`, `z`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name | Type |
| :--- | :--- |
| `x`  | `T`  |
| `y`  | `T`  |
| `z`  | `T`  |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

GroupConstructor\<ProjPointType\<T\>\>.constructor

#### Defined in

node_modules/@noble/curves/esm/abstract/weierstrass.d.ts:75

## Properties

### BASE

• **BASE**: [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

GroupConstructor.BASE

#### Defined in

node_modules/@noble/curves/esm/abstract/curve.d.ts:19

---

### ZERO

• **ZERO**: [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Inherited from

GroupConstructor.ZERO

#### Defined in

node_modules/@noble/curves/esm/abstract/curve.d.ts:20

## Methods

### fromAffine

▸ **fromAffine**(`p`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name | Type                                                                |
| :--- | :------------------------------------------------------------------ |
| `p`  | [`AffinePoint`](../namespaces/ec.weierstrass.md#affinepoint)\<`T`\> |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/esm/abstract/weierstrass.d.ts:76

---

### fromHex

▸ **fromHex**(`hex`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `hex` | `Hex` |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/esm/abstract/weierstrass.d.ts:77

---

### fromPrivateKey

▸ **fromPrivateKey**(`privateKey`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `privateKey` | `PrivKey` |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>

#### Defined in

node_modules/@noble/curves/esm/abstract/weierstrass.d.ts:78

---

### normalizeZ

▸ **normalizeZ**(`points`): [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>[]

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `points` | [`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>[] |

#### Returns

[`ProjPointType`](ec.weierstrass.ProjPointType.md)\<`T`\>[]

#### Defined in

node_modules/@noble/curves/esm/abstract/weierstrass.d.ts:79

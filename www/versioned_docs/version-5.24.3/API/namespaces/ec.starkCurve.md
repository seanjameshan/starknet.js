---
id: 'ec.starkCurve'
title: 'Namespace: starkCurve'
sidebar_label: 'starkCurve'
custom_edit_url: null
---

[ec](ec.md).starkCurve

## Type Aliases

### ProjectivePoint

Ƭ **ProjectivePoint**: [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\>

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:6

node_modules/@scure/starknet/lib/index.d.ts:45

---

### PoseidonOpts

Ƭ **PoseidonOpts**: `Object`

#### Type declaration

| Name            | Type                 |
| :-------------- | :------------------- |
| `Fp`            | `IField`\<`bigint`\> |
| `rate`          | `number`             |
| `capacity`      | `number`             |
| `roundsFull`    | `number`             |
| `roundsPartial` | `number`             |

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:62

---

### PoseidonFn

Ƭ **PoseidonFn**: `ReturnType`\<typeof [`poseidon`](hash.poseidon.md#poseidon)\> & \{ `m`: `number` ; `rate`: `number` ; `capacity`: `number` \}

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:69

## Variables

### MAX_VALUE

• `Const` **MAX_VALUE**: `bigint`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:7

---

### \_starkCurve

• `Const` **\_starkCurve**: [`weierstrass`](ec.weierstrass.md)

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:8

---

### CURVE

• `Const` **CURVE**: `Readonly`\<\{ `nBitLength`: `number` ; `nByteLength`: `number` ; `Fp`: `IField`\<`bigint`\> ; `n`: `bigint` ; `h`: `bigint` ; `hEff?`: `bigint` ; `Gx`: `bigint` ; `Gy`: `bigint` ; `allowInfinityPoint?`: `boolean` ; `a`: `bigint` ; `b`: `bigint` ; `allowedPrivateKeyLengths?`: readonly `number`[] ; `wrapPrivateKey?`: `boolean` ; `endo?`: \{ `beta`: `bigint` ; `splitScalar`: (`k`: `bigint`) => \{ `k1neg`: `boolean` ; `k1`: `bigint` ; `k2neg`: `boolean` ; `k2`: `bigint` \} \} ; `isTorsionFree?`: (`c`: [`weierstrass`](ec.weierstrass.md), `point`: [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\>) => `boolean` ; `clearCofactor?`: (`c`: [`weierstrass`](ec.weierstrass.md), `point`: [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\>) => [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\> ; `hash`: `u.CHash` ; `hmac`: (`key`: `Uint8Array`, ...`messages`: `Uint8Array`[]) => `Uint8Array` ; `randomBytes`: (`bytesLength?`: `number`) => `Uint8Array` ; `lowS`: `boolean` ; `bits2int?`: (`bytes`: `Uint8Array`) => `bigint` ; `bits2int_modN?`: (`bytes`: `Uint8Array`) => `bigint` ; `p`: `bigint` \}\>

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:13

---

### ProjectivePoint

• **ProjectivePoint**: [`ProjConstructor`](../interfaces/ec.weierstrass.ProjConstructor.md)\<`bigint`\>

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:6

node_modules/@scure/starknet/lib/index.d.ts:45

---

### Signature

• `Const` **Signature**: [`weierstrass`](ec.weierstrass.md)

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:45

---

### utils

• `Const` **utils**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                              |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `normPrivateKeyToScalar` | (`key`: `u.PrivKey`) => `bigint`                                                                                                                                                                  |
| `randomPrivateKey`       | () => `Uint8Array`                                                                                                                                                                                |
| `precompute`             | (`windowSize?`: `number`, `point?`: [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\>) => [`ProjPointType`](../interfaces/ec.weierstrass.ProjPointType.md)\<`bigint`\> |
| `isValidPrivateKey`      | (`privateKey`: `PrivKey`) => `boolean`                                                                                                                                                            |

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:45

---

### Fp251

• `Const` **Fp251**: `Readonly`\<`IField`\<`bigint`\> & `Required`\<`Pick`\<`IField`\<`bigint`\>, `"isOdd"`\>\>\>

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:60

## Functions

### getPublicKey

▸ **getPublicKey**(`privKey`, `isCompressed?`): `Uint8Array`

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `privKey`       | `Hex`     |
| `isCompressed?` | `boolean` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:9

---

### getSharedSecret

▸ **getSharedSecret**(`privKeyA`, `pubKeyB`): `Uint8Array`

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `privKeyA` | `Hex` |
| `pubKeyB`  | `Hex` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:10

---

### sign

▸ **sign**(`msgHash`, `privKey`, `opts?`): [`SignatureType`](../interfaces/ec.weierstrass.SignatureType.md)

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `msgHash` | `Hex` |
| `privKey` | `Hex` |
| `opts?`   | `any` |

#### Returns

[`SignatureType`](../interfaces/ec.weierstrass.SignatureType.md)

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:11

---

### verify

▸ **verify**(`signature`, `msgHash`, `pubKey`): `boolean`

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `signature` | `Hex` \| [`SignatureType`](../interfaces/ec.weierstrass.SignatureType.md) |
| `msgHash`   | `Hex`                                                                     |
| `pubKey`    | `Hex`                                                                     |

#### Returns

`boolean`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:12

---

### grindKey

▸ **grindKey**(`seed`): `string`

#### Parameters

| Name   | Type  |
| :----- | :---- |
| `seed` | `Hex` |

#### Returns

`string`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:52

---

### getStarkKey

▸ **getStarkKey**(`privateKey`): `string`

#### Parameters

| Name         | Type  |
| :----------- | :---- |
| `privateKey` | `Hex` |

#### Returns

`string`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:53

---

### ethSigToPrivate

▸ **ethSigToPrivate**(`signature`): `string`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `signature` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:54

---

### getAccountPath

▸ **getAccountPath**(`layer`, `application`, `ethereumAddress`, `index`): `string`

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `layer`           | `string` |
| `application`     | `string` |
| `ethereumAddress` | `string` |
| `index`           | `number` |

#### Returns

`string`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:55

---

### pedersen

▸ **pedersen**(`x`, `y`): `string`

#### Parameters

| Name | Type          |
| :--- | :------------ |
| `x`  | `PedersenArg` |
| `y`  | `PedersenArg` |

#### Returns

`string`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:57

---

### \_poseidonMDS

▸ **\_poseidonMDS**(`Fp`, `name`, `m`, `attempt?`): `bigint`[][]

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `Fp`       | `IField`\<`bigint`\> |
| `name`     | `string`             |
| `m`        | `number`             |
| `attempt?` | `number`             |

#### Returns

`bigint`[][]

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:61

---

### poseidonBasic

▸ **poseidonBasic**(`opts`, `mds`): [`PoseidonFn`](ec.starkCurve.md#poseidonfn)

#### Parameters

| Name   | Type                                            |
| :----- | :---------------------------------------------- |
| `opts` | [`PoseidonOpts`](ec.starkCurve.md#poseidonopts) |
| `mds`  | `bigint`[][]                                    |

#### Returns

[`PoseidonFn`](ec.starkCurve.md#poseidonfn)

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:74

---

### poseidonCreate

▸ **poseidonCreate**(`opts`, `mdsAttempt?`): [`PoseidonFn`](ec.starkCurve.md#poseidonfn)

#### Parameters

| Name          | Type                                            |
| :------------ | :---------------------------------------------- |
| `opts`        | [`PoseidonOpts`](ec.starkCurve.md#poseidonopts) |
| `mdsAttempt?` | `number`                                        |

#### Returns

[`PoseidonFn`](ec.starkCurve.md#poseidonfn)

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:75

---

### poseidonHash

▸ **poseidonHash**(`x`, `y`, `fn?`): `bigint`

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `x`   | `bigint`                                    |
| `y`   | `bigint`                                    |
| `fn?` | [`PoseidonFn`](ec.starkCurve.md#poseidonfn) |

#### Returns

`bigint`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:77

---

### poseidonHashFunc

▸ **poseidonHashFunc**(`x`, `y`, `fn?`): `Uint8Array`

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `x`   | `Uint8Array`                                |
| `y`   | `Uint8Array`                                |
| `fn?` | [`PoseidonFn`](ec.starkCurve.md#poseidonfn) |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:78

---

### poseidonHashSingle

▸ **poseidonHashSingle**(`x`, `fn?`): `bigint`

#### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `x`   | `bigint`                                    |
| `fn?` | [`PoseidonFn`](ec.starkCurve.md#poseidonfn) |

#### Returns

`bigint`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:79

---

### poseidonHashMany

▸ **poseidonHashMany**(`values`, `fn?`): `bigint`

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `values` | `bigint`[]                                  |
| `fn?`    | [`PoseidonFn`](ec.starkCurve.md#poseidonfn) |

#### Returns

`bigint`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:80

---

### computeHashOnElements

▸ **computeHashOnElements**(`data`, `fn?`): `PedersenArg`

#### Parameters

| Name   | Type                                                 |
| :----- | :--------------------------------------------------- |
| `data` | `PedersenArg`[]                                      |
| `fn?`  | (`x`: `PedersenArg`, `y`: `PedersenArg`) => `string` |

#### Returns

`PedersenArg`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:58

---

### keccak

▸ **keccak**(`data`): `bigint`

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `data` | `Uint8Array` |

#### Returns

`bigint`

#### Defined in

node_modules/@scure/starknet/lib/index.d.ts:59

---

### poseidonSmall

▸ **poseidonSmall**(`values`): `bigint`[]

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `values` | `bigint`[] |

#### Returns

`bigint`[]

#### Defined in

node_modules/@noble/curves/abstract/poseidon.d.ts:27

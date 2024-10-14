---
id: 'hash.poseidon'
title: 'Namespace: poseidon'
sidebar_label: 'poseidon'
custom_edit_url: null
---

[hash](hash.md).poseidon

Hashes Exports

## Type Aliases

### PoseidonOpts

Ƭ **PoseidonOpts**: `Object`

#### Type declaration

| Name                    | Type                 |
| :---------------------- | :------------------- |
| `Fp`                    | `IField`\<`bigint`\> |
| `t`                     | `number`             |
| `roundsFull`            | `number`             |
| `roundsPartial`         | `number`             |
| `sboxPower?`            | `number`             |
| `reversePartialPowIdx?` | `boolean`            |
| `mds`                   | `bigint`[][]         |
| `roundConstants`        | `bigint`[][]         |

#### Defined in

node_modules/@noble/curves/esm/abstract/poseidon.d.ts:3

## Functions

### validateOpts

▸ **validateOpts**(`opts`): `Readonly`\<\{ `rounds`: `number` ; `sboxFn`: (`n`: `bigint`) => `bigint` ; `roundConstants`: `bigint`[][] ; `mds`: `bigint`[][] ; `Fp`: `IField`\<`bigint`\> ; `t`: `number` ; `roundsFull`: `number` ; `roundsPartial`: `number` ; `sboxPower?`: `number` ; `reversePartialPowIdx?`: `boolean` }\>

#### Parameters

| Name   | Type                                            |
| :----- | :---------------------------------------------- |
| `opts` | [`PoseidonOpts`](hash.poseidon.md#poseidonopts) |

#### Returns

`Readonly`\<\{ `rounds`: `number` ; `sboxFn`: (`n`: `bigint`) => `bigint` ; `roundConstants`: `bigint`[][] ; `mds`: `bigint`[][] ; `Fp`: `IField`\<`bigint`\> ; `t`: `number` ; `roundsFull`: `number` ; `roundsPartial`: `number` ; `sboxPower?`: `number` ; `reversePartialPowIdx?`: `boolean` }\>

#### Defined in

node_modules/@noble/curves/esm/abstract/poseidon.d.ts:13

---

### splitConstants

▸ **splitConstants**(`rc`, `t`): `bigint`[][]

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `rc` | `bigint`[] |
| `t`  | `number`   |

#### Returns

`bigint`[][]

#### Defined in

node_modules/@noble/curves/esm/abstract/poseidon.d.ts:25

---

### poseidon

▸ **poseidon**(`opts`): (`values`: `bigint`[]) => `bigint`[]

#### Parameters

| Name   | Type                                            |
| :----- | :---------------------------------------------- |
| `opts` | [`PoseidonOpts`](hash.poseidon.md#poseidonopts) |

#### Returns

`fn`

▸ (`values`): `bigint`[]

##### Parameters

| Name     | Type       |
| :------- | :--------- |
| `values` | `bigint`[] |

##### Returns

`bigint`[]

| Name             | Type         |
| :--------------- | :----------- |
| `roundConstants` | `bigint`[][] |

#### Defined in

node_modules/@noble/curves/esm/abstract/poseidon.d.ts:26

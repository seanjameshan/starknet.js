---
id: 'provider-1'
title: 'Namespace: provider'
sidebar_label: 'provider'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### wait

▸ **wait**(`delay`): `Promise`\<`unknown`\>

Helper - Async Sleep for 'delay' time

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `delay` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/utils/provider.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/provider.ts#L16)

---

### createSierraContractClass

▸ **createSierraContractClass**(`contract`): [`SierraContractClass`](types.md#sierracontractclass)

Create Sierra Contract Class from a given Compiled Sierra

CompiledSierra -> SierraContractClass

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `contract` | [`CompiledSierra`](types.md#compiledsierra) |

#### Returns

[`SierraContractClass`](types.md#sierracontractclass)

#### Defined in

[src/utils/provider.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/provider.ts#L27)

---

### parseContract

▸ **parseContract**(`contract`): [`ContractClass`](types.md#contractclass)

Create Contract Class from a given CompiledContract or string

(CompiledContract or string) -> ContractClass

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `contract` | `string` \| [`CompiledContract`](types.md#compiledcontract) |

#### Returns

[`ContractClass`](types.md#contractclass)

#### Defined in

[src/utils/provider.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/utils/provider.ts#L41)

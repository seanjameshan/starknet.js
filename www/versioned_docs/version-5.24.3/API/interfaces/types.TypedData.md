---
id: 'types.TypedData'
title: 'Interface: TypedData'
sidebar_label: 'TypedData'
custom_edit_url: null
---

[types](../namespaces/types.md).TypedData

The complete typed data, with all the structs, domain data, primary type of the message, and the message itself.

## Properties

### types

• **types**: `Record`\<`string`, [`StarkNetType`](../namespaces/types.md#starknettype)[]\>

#### Defined in

[src/types/typedData.ts:33](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L33)

---

### primaryType

• **primaryType**: `string`

#### Defined in

[src/types/typedData.ts:34](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L34)

---

### domain

• **domain**: [`StarkNetDomain`](types.StarkNetDomain.md)

#### Defined in

[src/types/typedData.ts:35](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L35)

---

### message

• **message**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/typedData.ts:36](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L36)

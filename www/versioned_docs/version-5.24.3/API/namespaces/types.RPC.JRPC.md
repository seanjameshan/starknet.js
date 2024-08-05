---
id: 'types.RPC.JRPC'
title: 'Namespace: JRPC'
sidebar_label: 'JRPC'
custom_edit_url: null
---

[types](types.md).[RPC](types.RPC.md).JRPC

## Type Aliases

### RequestBody

Ƭ **RequestBody**: `Object`

#### Type declaration

| Name      | Type                 |
| :-------- | :------------------- |
| `id`      | `number` \| `string` |
| `jsonrpc` | `"2.0"`              |
| `method`  | `string`             |
| `params?` | {}                   |

#### Defined in

[src/types/api/jsonrpc/index.ts:1](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/jsonrpc/index.ts#L1)

---

### ResponseBody

Ƭ **ResponseBody**: \{ `id`: `number` \| `string` ; `jsonrpc`: `"2.0"` \} & [`SuccessResponseBody`](types.RPC.JRPC.md#successresponsebody) \| [`ErrorResponseBody`](types.RPC.JRPC.md#errorresponsebody)

#### Defined in

[src/types/api/jsonrpc/index.ts:8](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/jsonrpc/index.ts#L8)

---

### SuccessResponseBody

Ƭ **SuccessResponseBody**: `Object`

#### Type declaration

| Name     | Type      |
| :------- | :-------- |
| `result` | `unknown` |

#### Defined in

[src/types/api/jsonrpc/index.ts:13](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/jsonrpc/index.ts#L13)

---

### ErrorResponseBody

Ƭ **ErrorResponseBody**: `Object`

#### Type declaration

| Name    | Type                               |
| :------ | :--------------------------------- |
| `error` | [`Error`](types.RPC.JRPC.md#error) |

#### Defined in

[src/types/api/jsonrpc/index.ts:17](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/jsonrpc/index.ts#L17)

---

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name      | Type      |
| :-------- | :-------- |
| `code`    | `number`  |
| `message` | `string`  |
| `data?`   | `unknown` |

#### Defined in

[src/types/api/jsonrpc/index.ts:21](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/jsonrpc/index.ts#L21)

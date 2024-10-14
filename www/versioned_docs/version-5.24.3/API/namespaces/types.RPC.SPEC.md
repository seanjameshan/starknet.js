---
id: 'types.RPC.SPEC'
title: 'Namespace: SPEC'
sidebar_label: 'SPEC'
custom_edit_url: null
---

[types](types.md).[RPC](types.RPC.md).SPEC

## Type Aliases

### FELT

Ƭ **FELT**: `string`

A field element. represented by at most 63 hex digits

**`Pattern`**

^0x(0|[a-fA-F1-9]{1}[a-fA-F0-9]{0,62})$

#### Defined in

[src/types/api/rpcspec/components.ts:9](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L9)

---

### ETH_ADDRESS

Ƭ **ETH_ADDRESS**: `string`

an ethereum address represented as 40 hex digits

**`Pattern`**

^0x[a-fA-F0-9]{40}$

#### Defined in

[src/types/api/rpcspec/components.ts:14](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L14)

---

### STORAGE_KEY

Ƭ **STORAGE_KEY**: `string`

A storage key. Represented as up to 62 hex digits, 3 bits, and 5 leading zeroes.

**`Pattern`**

^0x0[0-7]{1}[a-fA-F0-9]{0,62}$

#### Defined in

[src/types/api/rpcspec/components.ts:19](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L19)

---

### ADDRESS

Ƭ **ADDRESS**: [`FELT`](types.RPC.SPEC.md#felt)

#### Defined in

[src/types/api/rpcspec/components.ts:20](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L20)

---

### NUM_AS_HEX

Ƭ **NUM_AS_HEX**: `string`

#### Defined in

[src/types/api/rpcspec/components.ts:21](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L21)

---

### SIGNATURE

Ƭ **SIGNATURE**: [`FELT`](types.RPC.SPEC.md#felt)[]

#### Defined in

[src/types/api/rpcspec/components.ts:22](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L22)

---

### BLOCK_NUMBER

Ƭ **BLOCK_NUMBER**: `number`

#### Defined in

[src/types/api/rpcspec/components.ts:23](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L23)

---

### BLOCK_HASH

Ƭ **BLOCK_HASH**: [`FELT`](types.RPC.SPEC.md#felt)

#### Defined in

[src/types/api/rpcspec/components.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L24)

---

### TXN_HASH

Ƭ **TXN_HASH**: [`FELT`](types.RPC.SPEC.md#felt)

#### Defined in

[src/types/api/rpcspec/components.ts:25](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L25)

---

### CHAIN_ID

Ƭ **CHAIN_ID**: [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex)

#### Defined in

[src/types/api/rpcspec/components.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L26)

---

### STRUCT_ABI_TYPE

Ƭ **STRUCT_ABI_TYPE**: `"struct"`

#### Defined in

[src/types/api/rpcspec/components.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L27)

---

### EVENT_ABI_TYPE

Ƭ **EVENT_ABI_TYPE**: `"event"`

#### Defined in

[src/types/api/rpcspec/components.ts:28](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L28)

---

### FUNCTION_ABI_TYPE

Ƭ **FUNCTION_ABI_TYPE**: `"function"` \| `"l1_handler"` \| `"constructor"`

#### Defined in

[src/types/api/rpcspec/components.ts:29](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L29)

---

### ENTRY_POINT_TYPE

Ƭ **ENTRY_POINT_TYPE**: `"EXTERNAL"` \| `"L1_HANDLER"` \| `"CONSTRUCTOR"`

#### Defined in

[src/types/api/rpcspec/components.ts:31](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L31)

---

### CALL_TYPE

Ƭ **CALL_TYPE**: `"DELEGATE"` \| `"LIBRARY_CALL"` \| `"CALL"`

#### Defined in

[src/types/api/rpcspec/components.ts:33](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L33)

---

### TXN_STATUS

Ƭ **TXN_STATUS**: `"RECEIVED"` \| `"REJECTED"` \| `"ACCEPTED_ON_L2"` \| `"ACCEPTED_ON_L1"`

#### Defined in

[src/types/api/rpcspec/components.ts:35](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L35)

---

### SIMULATION_FLAG

Ƭ **SIMULATION_FLAG**: `"SKIP_VALIDATE"` \| `"SKIP_FEE_CHARGE"`

#### Defined in

[src/types/api/rpcspec/components.ts:37](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L37)

---

### DA_MODE

Ƭ **DA_MODE**: `"L1"` \| `"L2"`

#### Defined in

[src/types/api/rpcspec/components.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L39)

---

### TXN_TYPE

Ƭ **TXN_TYPE**: `"DECLARE"` \| `"DEPLOY"` \| `"DEPLOY_ACCOUNT"` \| `"INVOKE"` \| `"L1_HANDLER"`

#### Defined in

[src/types/api/rpcspec/components.ts:40](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L40)

---

### TXN_FINALITY_STATUS

Ƭ **TXN_FINALITY_STATUS**: `"ACCEPTED_ON_L2"` \| `"ACCEPTED_ON_L1"`

#### Defined in

[src/types/api/rpcspec/components.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L41)

---

### TXN_EXECUTION_STATUS

Ƭ **TXN_EXECUTION_STATUS**: `"SUCCEEDED"` \| `"REVERTED"`

#### Defined in

[src/types/api/rpcspec/components.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L42)

---

### BLOCK_STATUS

Ƭ **BLOCK_STATUS**: `"PENDING"` \| `"ACCEPTED_ON_L2"` \| `"ACCEPTED_ON_L1"` \| `"REJECTED"`

#### Defined in

[src/types/api/rpcspec/components.ts:43](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L43)

---

### BLOCK_TAG

Ƭ **BLOCK_TAG**: `"latest"` \| `"pending"`

#### Defined in

[src/types/api/rpcspec/components.ts:44](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L44)

---

### EVENTS_CHUNK

Ƭ **EVENTS_CHUNK**: `Object`

READ API

#### Type declaration

| Name                  | Type                                                 |
| :-------------------- | :--------------------------------------------------- |
| `events`              | [`EMITTED_EVENT`](types.RPC.SPEC.md#emitted_event)[] |
| `continuation_token?` | `string`                                             |

#### Defined in

[src/types/api/rpcspec/components.ts:50](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L50)

---

### RESULT_PAGE_REQUEST

Ƭ **RESULT_PAGE_REQUEST**: `Object`

#### Type declaration

| Name                  | Type     |
| :-------------------- | :------- |
| `continuation_token?` | `string` |
| `chunk_size`          | `number` |

#### Defined in

[src/types/api/rpcspec/components.ts:57](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L57)

---

### EMITTED_EVENT

Ƭ **EMITTED_EVENT**: [`EVENT`](types.RPC.SPEC.md#event) & \{ `block_hash`: [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash) ; `block_number`: [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) ; `transaction_hash`: [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) \}

#### Defined in

[src/types/api/rpcspec/components.ts:64](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L64)

---

### EVENT

Ƭ **EVENT**: \{ `from_address`: [`ADDRESS`](types.RPC.SPEC.md#address) \} & [`EVENT_CONTENT`](types.RPC.SPEC.md#event_content)

#### Defined in

[src/types/api/rpcspec/components.ts:70](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L70)

---

### EVENT_CONTENT

Ƭ **EVENT_CONTENT**: `Object`

#### Type declaration

| Name   | Type                               |
| :----- | :--------------------------------- |
| `keys` | [`FELT`](types.RPC.SPEC.md#felt)[] |
| `data` | [`FELT`](types.RPC.SPEC.md#felt)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:74](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L74)

---

### EVENT_FILTER

Ƭ **EVENT_FILTER**: `Object`

#### Type declaration

| Name          | Type                                     |
| :------------ | :--------------------------------------- |
| `from_block?` | [`BLOCK_ID`](types.RPC.SPEC.md#block_id) |
| `to_block?`   | [`BLOCK_ID`](types.RPC.SPEC.md#block_id) |
| `address?`    | [`ADDRESS`](types.RPC.SPEC.md#address)   |
| `keys?`       | [`FELT`](types.RPC.SPEC.md#felt)[][]     |

#### Defined in

[src/types/api/rpcspec/components.ts:79](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L79)

---

### BLOCK_ID

Ƭ **BLOCK_ID**: \{ `block_hash?`: [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash) ; `block_number?`: [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) \} \| [`BLOCK_TAG`](types.RPC.SPEC.md#block_tag)

#### Defined in

[src/types/api/rpcspec/components.ts:86](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L86)

---

### SYNC_STATUS

Ƭ **SYNC_STATUS**: `Object`

#### Type declaration

| Name                  | Type                                             |
| :-------------------- | :----------------------------------------------- |
| `starting_block_hash` | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)     |
| `starting_block_num`  | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) |
| `current_block_hash`  | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)     |
| `current_block_num`   | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) |
| `highest_block_hash`  | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)     |
| `highest_block_num`   | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) |

#### Defined in

[src/types/api/rpcspec/components.ts:93](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L93)

---

### NEW_CLASSES

Ƭ **NEW_CLASSES**: `Object`

#### Type declaration

| Name                  | Type                             |
| :-------------------- | :------------------------------- |
| `class_hash`          | [`FELT`](types.RPC.SPEC.md#felt) |
| `compiled_class_hash` | [`FELT`](types.RPC.SPEC.md#felt) |

#### Defined in

[src/types/api/rpcspec/components.ts:102](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L102)

---

### REPLACED_CLASS

Ƭ **REPLACED_CLASS**: `Object`

#### Type declaration

| Name               | Type                             |
| :----------------- | :------------------------------- |
| `class_hash`       | [`FELT`](types.RPC.SPEC.md#felt) |
| `contract_address` | [`FELT`](types.RPC.SPEC.md#felt) |

#### Defined in

[src/types/api/rpcspec/components.ts:107](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L107)

---

### NONCE_UPDATE

Ƭ **NONCE_UPDATE**: `Object`

#### Type declaration

| Name               | Type                                   |
| :----------------- | :------------------------------------- |
| `contract_address` | [`ADDRESS`](types.RPC.SPEC.md#address) |
| `nonce`            | [`FELT`](types.RPC.SPEC.md#felt)       |

#### Defined in

[src/types/api/rpcspec/components.ts:112](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L112)

---

### STATE_DIFF

Ƭ **STATE_DIFF**: `Object`

#### Type declaration

| Name                          | Type                                                                           |
| :---------------------------- | :----------------------------------------------------------------------------- |
| `storage_diffs`               | [`CONTRACT_STORAGE_DIFF_ITEM`](types.RPC.SPEC.md#contract_storage_diff_item)[] |
| `deprecated_declared_classes` | [`FELT`](types.RPC.SPEC.md#felt)[]                                             |
| `declared_classes`            | [`NEW_CLASSES`](types.RPC.SPEC.md#new_classes)[]                               |
| `deployed_contracts`          | [`DEPLOYED_CONTRACT_ITEM`](types.RPC.SPEC.md#deployed_contract_item)[]         |
| `replaced_classes`            | [`REPLACED_CLASS`](types.RPC.SPEC.md#replaced_class)[]                         |
| `nonces`                      | [`NONCE_UPDATE`](types.RPC.SPEC.md#nonce_update)[]                             |

#### Defined in

[src/types/api/rpcspec/components.ts:117](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L117)

---

### PENDING_STATE_UPDATE

Ƭ **PENDING_STATE_UPDATE**: `Object`

#### Type declaration

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `old_root`   | [`FELT`](types.RPC.SPEC.md#felt)             |
| `state_diff` | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff) |

#### Defined in

[src/types/api/rpcspec/components.ts:126](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L126)

---

### STATE_UPDATE

Ƭ **STATE_UPDATE**: `Object`

#### Type declaration

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `block_hash` | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash) |
| `old_root`   | [`FELT`](types.RPC.SPEC.md#felt)             |
| `new_root`   | [`FELT`](types.RPC.SPEC.md#felt)             |
| `state_diff` | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff) |

#### Defined in

[src/types/api/rpcspec/components.ts:131](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L131)

---

### BLOCK_BODY_WITH_TX_HASHES

Ƭ **BLOCK_BODY_WITH_TX_HASHES**: `Object`

#### Type declaration

| Name           | Type                                       |
| :------------- | :----------------------------------------- |
| `transactions` | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:138](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L138)

---

### BLOCK_BODY_WITH_TXS

Ƭ **BLOCK_BODY_WITH_TXS**: `Object`

#### Type declaration

| Name           | Type                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------- |
| `transactions` | \{ `transaction`: [`TXN`](types.RPC.SPEC.md#txn) ; `transaction_hash`: [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) \}[] |

#### Defined in

[src/types/api/rpcspec/components.ts:142](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L142)

---

### BLOCK_HEADER

Ƭ **BLOCK_HEADER**: `Object`

#### Type declaration

| Name                | Type                                                 |
| :------------------ | :--------------------------------------------------- |
| `block_hash`        | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)         |
| `parent_hash`       | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)         |
| `block_number`      | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number)     |
| `new_root`          | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `timestamp`         | `number`                                             |
| `sequencer_address` | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `l1_gas_price`      | [`RESOURCE_PRICE`](types.RPC.SPEC.md#resource_price) |
| `starknet_version`  | `string`                                             |

#### Defined in

[src/types/api/rpcspec/components.ts:149](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L149)

---

### PENDING_BLOCK_HEADER

Ƭ **PENDING_BLOCK_HEADER**: `Object`

#### Type declaration

| Name                | Type                                                 |
| :------------------ | :--------------------------------------------------- |
| `parent_hash`       | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)         |
| `timestamp`         | `number`                                             |
| `sequencer_address` | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `l1_gas_price`      | [`RESOURCE_PRICE`](types.RPC.SPEC.md#resource_price) |
| `starknet_version`  | `string`                                             |

#### Defined in

[src/types/api/rpcspec/components.ts:160](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L160)

---

### BLOCK_WITH_TX_HASHES

Ƭ **BLOCK_WITH_TX_HASHES**: \{ `status`: [`BLOCK_STATUS`](types.RPC.SPEC.md#block_status) \} & [`BLOCK_HEADER`](types.RPC.SPEC.md#block_header) & [`BLOCK_BODY_WITH_TX_HASHES`](types.RPC.SPEC.md#block_body_with_tx_hashes)

#### Defined in

[src/types/api/rpcspec/components.ts:168](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L168)

---

### BLOCK_WITH_TXS

Ƭ **BLOCK_WITH_TXS**: \{ `status`: [`BLOCK_STATUS`](types.RPC.SPEC.md#block_status) \} & [`BLOCK_HEADER`](types.RPC.SPEC.md#block_header) & [`BLOCK_BODY_WITH_TXS`](types.RPC.SPEC.md#block_body_with_txs)

#### Defined in

[src/types/api/rpcspec/components.ts:171](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L171)

---

### PENDING_BLOCK_WITH_TX_HASHES

Ƭ **PENDING_BLOCK_WITH_TX_HASHES**: [`BLOCK_BODY_WITH_TX_HASHES`](types.RPC.SPEC.md#block_body_with_tx_hashes) & [`PENDING_BLOCK_HEADER`](types.RPC.SPEC.md#pending_block_header)

#### Defined in

[src/types/api/rpcspec/components.ts:173](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L173)

---

### PENDING_BLOCK_WITH_TXS

Ƭ **PENDING_BLOCK_WITH_TXS**: [`BLOCK_BODY_WITH_TXS`](types.RPC.SPEC.md#block_body_with_txs) & [`PENDING_BLOCK_HEADER`](types.RPC.SPEC.md#pending_block_header)

#### Defined in

[src/types/api/rpcspec/components.ts:175](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L175)

---

### DEPLOYED_CONTRACT_ITEM

Ƭ **DEPLOYED_CONTRACT_ITEM**: `Object`

#### Type declaration

| Name         | Type                             |
| :----------- | :------------------------------- |
| `address`    | [`FELT`](types.RPC.SPEC.md#felt) |
| `class_hash` | [`FELT`](types.RPC.SPEC.md#felt) |

#### Defined in

[src/types/api/rpcspec/components.ts:177](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L177)

---

### CONTRACT_STORAGE_DIFF_ITEM

Ƭ **CONTRACT_STORAGE_DIFF_ITEM**: `Object`

#### Type declaration

| Name              | Type                                                     |
| :---------------- | :------------------------------------------------------- |
| `address`         | `string`                                                 |
| `storage_entries` | [`StorageDiffItem`](types.RPC.SPEC.md#storagediffitem)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:182](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L182)

---

### StorageDiffItem

Ƭ **StorageDiffItem**: `Object`

#### Type declaration

| Name    | Type     |
| :------ | :------- |
| `key`   | `string` |
| `value` | `string` |

#### Defined in

[src/types/api/rpcspec/components.ts:189](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L189)

---

### TXN

Ƭ **TXN**: [`INVOKE_TXN`](types.RPC.SPEC.md#invoke_txn) \| [`L1_HANDLER_TXN`](types.RPC.SPEC.md#l1_handler_txn) \| [`DECLARE_TXN`](types.RPC.SPEC.md#declare_txn) \| [`DEPLOY_TXN`](types.RPC.SPEC.md#deploy_txn) \| [`DEPLOY_ACCOUNT_TXN`](types.RPC.SPEC.md#deploy_account_txn)

#### Defined in

[src/types/api/rpcspec/components.ts:196](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L196)

---

### DECLARE_TXN

Ƭ **DECLARE_TXN**: [`DECLARE_TXN_V0`](types.RPC.SPEC.md#declare_txn_v0) \| [`DECLARE_TXN_V1`](types.RPC.SPEC.md#declare_txn_v1) \| [`DECLARE_TXN_V2`](types.RPC.SPEC.md#declare_txn_v2)

#### Defined in

[src/types/api/rpcspec/components.ts:198](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L198)

---

### DECLARE_TXN_V0

Ƭ **DECLARE_TXN_V0**: `Object`

#### Type declaration

| Name             | Type                                       |
| :--------------- | :----------------------------------------- |
| `type`           | `"DECLARE"`                                |
| `sender_address` | [`ADDRESS`](types.RPC.SPEC.md#address)     |
| `max_fee`        | [`FELT`](types.RPC.SPEC.md#felt)           |
| `version`        | `"0x0"`                                    |
| `signature`      | [`SIGNATURE`](types.RPC.SPEC.md#signature) |
| `class_hash`     | [`FELT`](types.RPC.SPEC.md#felt)           |

#### Defined in

[src/types/api/rpcspec/components.ts:200](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L200)

---

### DECLARE_TXN_V1

Ƭ **DECLARE_TXN_V1**: `Object`

#### Type declaration

| Name             | Type                                       |
| :--------------- | :----------------------------------------- |
| `type`           | `"DECLARE"`                                |
| `sender_address` | [`ADDRESS`](types.RPC.SPEC.md#address)     |
| `max_fee`        | [`FELT`](types.RPC.SPEC.md#felt)           |
| `version`        | `"0x1"`                                    |
| `signature`      | [`SIGNATURE`](types.RPC.SPEC.md#signature) |
| `nonce`          | [`FELT`](types.RPC.SPEC.md#felt)           |
| `class_hash`     | [`FELT`](types.RPC.SPEC.md#felt)           |

#### Defined in

[src/types/api/rpcspec/components.ts:209](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L209)

---

### DECLARE_TXN_V2

Ƭ **DECLARE_TXN_V2**: `Object`

#### Type declaration

| Name                  | Type                                       |
| :-------------------- | :----------------------------------------- |
| `type`                | `"DECLARE"`                                |
| `sender_address`      | [`ADDRESS`](types.RPC.SPEC.md#address)     |
| `compiled_class_hash` | [`FELT`](types.RPC.SPEC.md#felt)           |
| `max_fee`             | [`FELT`](types.RPC.SPEC.md#felt)           |
| `version`             | `"0x2"`                                    |
| `signature`           | [`SIGNATURE`](types.RPC.SPEC.md#signature) |
| `nonce`               | [`FELT`](types.RPC.SPEC.md#felt)           |
| `class_hash`          | [`FELT`](types.RPC.SPEC.md#felt)           |

#### Defined in

[src/types/api/rpcspec/components.ts:219](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L219)

---

### BROADCASTED_TXN

Ƭ **BROADCASTED_TXN**: [`BROADCASTED_INVOKE_TXN`](types.RPC.SPEC.md#broadcasted_invoke_txn) \| [`BROADCASTED_DECLARE_TXN`](types.RPC.SPEC.md#broadcasted_declare_txn) \| [`BROADCASTED_DEPLOY_ACCOUNT_TXN`](types.RPC.SPEC.md#broadcasted_deploy_account_txn)

#### Defined in

[src/types/api/rpcspec/components.ts:230](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L230)

---

### BROADCASTED_INVOKE_TXN

Ƭ **BROADCASTED_INVOKE_TXN**: [`INVOKE_TXN_V0`](types.RPC.SPEC.md#invoke_txn_v0) \| [`INVOKE_TXN_V1`](types.RPC.SPEC.md#invoke_txn_v1)

#### Defined in

[src/types/api/rpcspec/components.ts:235](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L235)

---

### BROADCASTED_DEPLOY_ACCOUNT_TXN

Ƭ **BROADCASTED_DEPLOY_ACCOUNT_TXN**: [`DEPLOY_ACCOUNT_TXN`](types.RPC.SPEC.md#deploy_account_txn)

#### Defined in

[src/types/api/rpcspec/components.ts:237](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L237)

---

### BROADCASTED_DECLARE_TXN

Ƭ **BROADCASTED_DECLARE_TXN**: [`BROADCASTED_DECLARE_TXN_V1`](types.RPC.SPEC.md#broadcasted_declare_txn_v1) \| [`BROADCASTED_DECLARE_TXN_V2`](types.RPC.SPEC.md#broadcasted_declare_txn_v2)

#### Defined in

[src/types/api/rpcspec/components.ts:239](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L239)

---

### BROADCASTED_DECLARE_TXN_V1

Ƭ **BROADCASTED_DECLARE_TXN_V1**: `Object`

#### Type declaration

| Name             | Type                                                                       |
| :--------------- | :------------------------------------------------------------------------- |
| `type`           | `"DECLARE"`                                                                |
| `sender_address` | [`ADDRESS`](types.RPC.SPEC.md#address)                                     |
| `max_fee`        | [`FELT`](types.RPC.SPEC.md#felt)                                           |
| `version`        | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex)                               |
| `signature`      | [`SIGNATURE`](types.RPC.SPEC.md#signature)                                 |
| `nonce`          | [`FELT`](types.RPC.SPEC.md#felt)                                           |
| `contract_class` | [`DEPRECATED_CONTRACT_CLASS`](types.RPC.SPEC.md#deprecated_contract_class) |

#### Defined in

[src/types/api/rpcspec/components.ts:241](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L241)

---

### BROADCASTED_DECLARE_TXN_V2

Ƭ **BROADCASTED_DECLARE_TXN_V2**: `Object`

#### Type declaration

| Name                  | Type                                                 |
| :-------------------- | :--------------------------------------------------- |
| `type`                | `"DECLARE"`                                          |
| `sender_address`      | [`ADDRESS`](types.RPC.SPEC.md#address)               |
| `compiled_class_hash` | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `max_fee`             | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `version`             | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex)         |
| `signature`           | [`SIGNATURE`](types.RPC.SPEC.md#signature)           |
| `nonce`               | [`FELT`](types.RPC.SPEC.md#felt)                     |
| `contract_class`      | [`CONTRACT_CLASS`](types.RPC.SPEC.md#contract_class) |

#### Defined in

[src/types/api/rpcspec/components.ts:251](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L251)

---

### DEPLOY_ACCOUNT_TXN

Ƭ **DEPLOY_ACCOUNT_TXN**: [`DEPLOY_ACCOUNT_TXN_V1`](types.RPC.SPEC.md#deploy_account_txn_v1)

#### Defined in

[src/types/api/rpcspec/components.ts:262](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L262)

---

### DEPLOY_ACCOUNT_TXN_V1

Ƭ **DEPLOY_ACCOUNT_TXN_V1**: `Object`

#### Type declaration

| Name                    | Type                                         |
| :---------------------- | :------------------------------------------- |
| `type`                  | `"DEPLOY_ACCOUNT"`                           |
| `max_fee`               | [`FELT`](types.RPC.SPEC.md#felt)             |
| `version`               | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `signature`             | [`SIGNATURE`](types.RPC.SPEC.md#signature)   |
| `nonce`                 | [`FELT`](types.RPC.SPEC.md#felt)             |
| `contract_address_salt` | [`FELT`](types.RPC.SPEC.md#felt)             |
| `constructor_calldata`  | [`FELT`](types.RPC.SPEC.md#felt)[]           |
| `class_hash`            | [`FELT`](types.RPC.SPEC.md#felt)             |

#### Defined in

[src/types/api/rpcspec/components.ts:264](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L264)

---

### DEPLOY_TXN

Ƭ **DEPLOY_TXN**: `Object`

#### Type declaration

| Name                    | Type                                         |
| :---------------------- | :------------------------------------------- |
| `type`                  | `"DEPLOY"`                                   |
| `version`               | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `contract_address_salt` | [`FELT`](types.RPC.SPEC.md#felt)             |
| `constructor_calldata`  | [`FELT`](types.RPC.SPEC.md#felt)[]           |
| `class_hash`            | [`FELT`](types.RPC.SPEC.md#felt)             |

#### Defined in

[src/types/api/rpcspec/components.ts:275](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L275)

---

### INVOKE_TXN

Ƭ **INVOKE_TXN**: [`INVOKE_TXN_V0`](types.RPC.SPEC.md#invoke_txn_v0) \| [`INVOKE_TXN_V1`](types.RPC.SPEC.md#invoke_txn_v1)

#### Defined in

[src/types/api/rpcspec/components.ts:283](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L283)

---

### INVOKE_TXN_V0

Ƭ **INVOKE_TXN_V0**: `Object`

#### Type declaration

| Name                   | Type                                       |
| :--------------------- | :----------------------------------------- |
| `type`                 | `"INVOKE"`                                 |
| `max_fee`              | [`FELT`](types.RPC.SPEC.md#felt)           |
| `version`              | `"0x0"`                                    |
| `signature`            | [`SIGNATURE`](types.RPC.SPEC.md#signature) |
| `contract_address`     | [`ADDRESS`](types.RPC.SPEC.md#address)     |
| `entry_point_selector` | [`FELT`](types.RPC.SPEC.md#felt)           |
| `calldata`             | [`FELT`](types.RPC.SPEC.md#felt)[]         |

#### Defined in

[src/types/api/rpcspec/components.ts:285](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L285)

---

### INVOKE_TXN_V1

Ƭ **INVOKE_TXN_V1**: `Object`

#### Type declaration

| Name             | Type                                         |
| :--------------- | :------------------------------------------- |
| `type`           | `"INVOKE"`                                   |
| `sender_address` | [`ADDRESS`](types.RPC.SPEC.md#address)       |
| `calldata`       | [`FELT`](types.RPC.SPEC.md#felt)[]           |
| `max_fee`        | [`FELT`](types.RPC.SPEC.md#felt)             |
| `version`        | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `signature`      | [`SIGNATURE`](types.RPC.SPEC.md#signature)   |
| `nonce`          | [`FELT`](types.RPC.SPEC.md#felt)             |

#### Defined in

[src/types/api/rpcspec/components.ts:295](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L295)

---

### L1_HANDLER_TXN

Ƭ **L1_HANDLER_TXN**: \{ `version`: [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) ; `type`: `"L1_HANDLER"` ; `nonce`: [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) \} & [`FUNCTION_CALL`](types.RPC.SPEC.md#function_call)

#### Defined in

[src/types/api/rpcspec/components.ts:305](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L305)

---

### COMMON_RECEIPT_PROPERTIES

Ƭ **COMMON_RECEIPT_PROPERTIES**: `Object`

#### Type declaration

| Name                  | Type                                                             |
| :-------------------- | :--------------------------------------------------------------- |
| `transaction_hash`    | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash)                         |
| `actual_fee`          | [`FELT`](types.RPC.SPEC.md#felt)                                 |
| `execution_status`    | [`TXN_EXECUTION_STATUS`](types.RPC.SPEC.md#txn_execution_status) |
| `finality_status`     | [`TXN_FINALITY_STATUS`](types.RPC.SPEC.md#txn_finality_status)   |
| `block_hash`          | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)                     |
| `block_number`        | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number)                 |
| `messages_sent`       | [`MSG_TO_L1`](types.RPC.SPEC.md#msg_to_l1)[]                     |
| `revert_reason`       | `string`                                                         |
| `events`              | [`EVENT`](types.RPC.SPEC.md#event)[]                             |
| `execution_resources` | [`EXECUTION_RESOURCES`](types.RPC.SPEC.md#execution_resources)   |

#### Defined in

[src/types/api/rpcspec/components.ts:311](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L311)

---

### PENDING_COMMON_RECEIPT_PROPERTIES

Ƭ **PENDING_COMMON_RECEIPT_PROPERTIES**: `Object`

#### Type declaration

| Name                  | Type                                                             |
| :-------------------- | :--------------------------------------------------------------- |
| `transaction_hash`    | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash)                         |
| `actual_fee`          | [`FELT`](types.RPC.SPEC.md#felt)                                 |
| `type`                | [`TXN_TYPE`](types.RPC.SPEC.md#txn_type)                         |
| `messages_sent`       | [`MSG_TO_L1`](types.RPC.SPEC.md#msg_to_l1)[]                     |
| `events`              | [`EVENT`](types.RPC.SPEC.md#event)[]                             |
| `revert_reason`       | `string`                                                         |
| `finality_status`     | `"ACCEPTED_ON_L2"`                                               |
| `execution_status`    | [`TXN_EXECUTION_STATUS`](types.RPC.SPEC.md#txn_execution_status) |
| `execution_resources` | [`EXECUTION_RESOURCES`](types.RPC.SPEC.md#execution_resources)   |

#### Defined in

[src/types/api/rpcspec/components.ts:324](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L324)

---

### INVOKE_TXN_RECEIPT

Ƭ **INVOKE_TXN_RECEIPT**: \{ `type`: `"INVOKE"` \} & [`COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:336](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L336)

---

### PENDING_INVOKE_TXN_RECEIPT

Ƭ **PENDING_INVOKE_TXN_RECEIPT**: \{ `type`: `"INVOKE"` \} & [`PENDING_COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#pending_common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:340](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L340)

---

### DECLARE_TXN_RECEIPT

Ƭ **DECLARE_TXN_RECEIPT**: \{ `type`: `"DECLARE"` \} & [`COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:344](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L344)

---

### PENDING_DECLARE_TXN_RECEIPT

Ƭ **PENDING_DECLARE_TXN_RECEIPT**: \{ `type`: `"DECLARE"` \} & [`PENDING_COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#pending_common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:348](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L348)

---

### DEPLOY_ACCOUNT_TXN_RECEIPT

Ƭ **DEPLOY_ACCOUNT_TXN_RECEIPT**: \{ `type`: `"DEPLOY_ACCOUNT"` ; `contract_address`: [`FELT`](types.RPC.SPEC.md#felt) \} & [`COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:352](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L352)

---

### PENDING_DEPLOY_ACCOUNT_TXN_RECEIPT

Ƭ **PENDING_DEPLOY_ACCOUNT_TXN_RECEIPT**: \{ `type`: `"DEPLOY_ACCOUNT"` ; `contract_address`: [`FELT`](types.RPC.SPEC.md#felt) \} & [`PENDING_COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#pending_common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:357](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L357)

---

### DEPLOY_TXN_RECEIPT

Ƭ **DEPLOY_TXN_RECEIPT**: \{ `type`: `"DEPLOY"` ; `contract_address`: [`FELT`](types.RPC.SPEC.md#felt) \} & [`COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:362](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L362)

---

### L1_HANDLER_TXN_RECEIPT

Ƭ **L1_HANDLER_TXN_RECEIPT**: \{ `type`: `"L1_HANDLER"` ; `message_hash`: [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) \} & [`COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:367](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L367)

---

### PENDING_L1_HANDLER_TXN_RECEIPT

Ƭ **PENDING_L1_HANDLER_TXN_RECEIPT**: \{ `type`: `"L1_HANDLER"` ; `message_hash`: [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) \} & [`PENDING_COMMON_RECEIPT_PROPERTIES`](types.RPC.SPEC.md#pending_common_receipt_properties)

#### Defined in

[src/types/api/rpcspec/components.ts:372](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L372)

---

### TXN_RECEIPT

Ƭ **TXN_RECEIPT**: [`INVOKE_TXN_RECEIPT`](types.RPC.SPEC.md#invoke_txn_receipt) \| [`L1_HANDLER_TXN_RECEIPT`](types.RPC.SPEC.md#l1_handler_txn_receipt) \| [`DECLARE_TXN_RECEIPT`](types.RPC.SPEC.md#declare_txn_receipt) \| [`DEPLOY_TXN_RECEIPT`](types.RPC.SPEC.md#deploy_txn_receipt) \| [`DEPLOY_ACCOUNT_TXN_RECEIPT`](types.RPC.SPEC.md#deploy_account_txn_receipt)

#### Defined in

[src/types/api/rpcspec/components.ts:377](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L377)

---

### PENDING_TXN_RECEIPT

Ƭ **PENDING_TXN_RECEIPT**: [`PENDING_INVOKE_TXN_RECEIPT`](types.RPC.SPEC.md#pending_invoke_txn_receipt) \| [`PENDING_L1_HANDLER_TXN_RECEIPT`](types.RPC.SPEC.md#pending_l1_handler_txn_receipt) \| [`PENDING_DECLARE_TXN_RECEIPT`](types.RPC.SPEC.md#pending_declare_txn_receipt) \| [`PENDING_DEPLOY_ACCOUNT_TXN_RECEIPT`](types.RPC.SPEC.md#pending_deploy_account_txn_receipt)

#### Defined in

[src/types/api/rpcspec/components.ts:384](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L384)

---

### MSG_TO_L1

Ƭ **MSG_TO_L1**: `Object`

#### Type declaration

| Name           | Type                               |
| :------------- | :--------------------------------- |
| `from_address` | [`FELT`](types.RPC.SPEC.md#felt)   |
| `to_address`   | [`FELT`](types.RPC.SPEC.md#felt)   |
| `payload`      | [`FELT`](types.RPC.SPEC.md#felt)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:390](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L390)

---

### MSG_FROM_L1

Ƭ **MSG_FROM_L1**: `Object`

#### Type declaration

| Name                   | Type                                           |
| :--------------------- | :--------------------------------------------- |
| `from_address`         | [`ETH_ADDRESS`](types.RPC.SPEC.md#eth_address) |
| `to_address`           | [`ADDRESS`](types.RPC.SPEC.md#address)         |
| `entry_point_selector` | [`FELT`](types.RPC.SPEC.md#felt)               |
| `payload`              | [`FELT`](types.RPC.SPEC.md#felt)[]             |

#### Defined in

[src/types/api/rpcspec/components.ts:396](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L396)

---

### FUNCTION_CALL

Ƭ **FUNCTION_CALL**: `Object`

#### Type declaration

| Name                   | Type                                   |
| :--------------------- | :------------------------------------- |
| `contract_address`     | [`ADDRESS`](types.RPC.SPEC.md#address) |
| `entry_point_selector` | [`FELT`](types.RPC.SPEC.md#felt)       |
| `calldata`             | [`FELT`](types.RPC.SPEC.md#felt)[]     |

#### Defined in

[src/types/api/rpcspec/components.ts:403](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L403)

---

### CONTRACT_CLASS

Ƭ **CONTRACT_CLASS**: `Object`

#### Type declaration

| Name                               | Type                                                                                                                                                                                                                                            |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sierra_program`                   | [`FELT`](types.RPC.SPEC.md#felt)[]                                                                                                                                                                                                              |
| `contract_class_version`           | `string`                                                                                                                                                                                                                                        |
| `entry_points_by_type`             | \{ `CONSTRUCTOR`: [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[] ; `EXTERNAL`: [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[] ; `L1_HANDLER`: [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[] \} |
| `entry_points_by_type.CONSTRUCTOR` | [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[]                                                                                                                                                                                  |
| `entry_points_by_type.EXTERNAL`    | [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[]                                                                                                                                                                                  |
| `entry_points_by_type.L1_HANDLER`  | [`SIERRA_ENTRY_POINT`](types.RPC.SPEC.md#sierra_entry_point)[]                                                                                                                                                                                  |
| `abi`                              | `string`                                                                                                                                                                                                                                        |

#### Defined in

[src/types/api/rpcspec/components.ts:409](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L409)

---

### DEPRECATED_CONTRACT_CLASS

Ƭ **DEPRECATED_CONTRACT_CLASS**: `Object`

#### Type declaration

| Name                               | Type                                                                                                                                                                                                                                                                                                        |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `program`                          | `string`                                                                                                                                                                                                                                                                                                    |
| `entry_points_by_type`             | \{ `CONSTRUCTOR`: [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[] ; `EXTERNAL`: [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[] ; `L1_HANDLER`: [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[] \} |
| `entry_points_by_type.CONSTRUCTOR` | [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[]                                                                                                                                                                                                                          |
| `entry_points_by_type.EXTERNAL`    | [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[]                                                                                                                                                                                                                          |
| `entry_points_by_type.L1_HANDLER`  | [`DEPRECATED_CAIRO_ENTRY_POINT`](types.RPC.SPEC.md#deprecated_cairo_entry_point)[]                                                                                                                                                                                                                          |
| `abi`                              | [`CONTRACT_ABI`](types.RPC.SPEC.md#contract_abi)                                                                                                                                                                                                                                                            |

#### Defined in

[src/types/api/rpcspec/components.ts:420](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L420)

---

### DEPRECATED_CAIRO_ENTRY_POINT

Ƭ **DEPRECATED_CAIRO_ENTRY_POINT**: `Object`

#### Type declaration

| Name       | Type                                                     |
| :--------- | :------------------------------------------------------- |
| `offset`   | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) \| `number` |
| `selector` | [`FELT`](types.RPC.SPEC.md#felt)                         |

#### Defined in

[src/types/api/rpcspec/components.ts:430](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L430)

---

### SIERRA_ENTRY_POINT

Ƭ **SIERRA_ENTRY_POINT**: `Object`

#### Type declaration

| Name           | Type                             |
| :------------- | :------------------------------- |
| `selector`     | [`FELT`](types.RPC.SPEC.md#felt) |
| `function_idx` | `number`                         |

#### Defined in

[src/types/api/rpcspec/components.ts:435](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L435)

---

### CONTRACT_ABI

Ƭ **CONTRACT_ABI**: [`CONTRACT_ABI_ENTRY`](types.RPC.SPEC.md#contract_abi_entry)[]

#### Defined in

[src/types/api/rpcspec/components.ts:440](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L440)

---

### CONTRACT_ABI_ENTRY

Ƭ **CONTRACT_ABI_ENTRY**: `Object`

#### Type declaration

| Name       | Type                             |
| :--------- | :------------------------------- |
| `selector` | [`FELT`](types.RPC.SPEC.md#felt) |
| `input`    | `string`                         |
| `output`   | `string`                         |

#### Defined in

[src/types/api/rpcspec/components.ts:442](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L442)

---

### STRUCT_ABI_ENTRY

Ƭ **STRUCT_ABI_ENTRY**: `Object`

#### Type declaration

| Name      | Type                                                   |
| :-------- | :----------------------------------------------------- |
| `type`    | [`STRUCT_ABI_TYPE`](types.RPC.SPEC.md#struct_abi_type) |
| `name`    | `string`                                               |
| `size`    | `number`                                               |
| `members` | [`STRUCT_MEMBER`](types.RPC.SPEC.md#struct_member)[]   |

#### Defined in

[src/types/api/rpcspec/components.ts:448](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L448)

---

### STRUCT_MEMBER

Ƭ **STRUCT_MEMBER**: [`TYPED_PARAMETER`](types.RPC.SPEC.md#typed_parameter) & \{ `offset`: `number` \}

#### Defined in

[src/types/api/rpcspec/components.ts:455](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L455)

---

### EVENT_ABI_ENTRY

Ƭ **EVENT_ABI_ENTRY**: `Object`

#### Type declaration

| Name   | Type                                                     |
| :----- | :------------------------------------------------------- |
| `type` | [`EVENT_ABI_TYPE`](types.RPC.SPEC.md#event_abi_type)     |
| `name` | `string`                                                 |
| `keys` | [`TYPED_PARAMETER`](types.RPC.SPEC.md#typed_parameter)[] |
| `data` | [`TYPED_PARAMETER`](types.RPC.SPEC.md#typed_parameter)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:459](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L459)

---

### FUNCTION_STATE_MUTABILITY

Ƭ **FUNCTION_STATE_MUTABILITY**: `"view"`

#### Defined in

[src/types/api/rpcspec/components.ts:466](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L466)

---

### FUNCTION_ABI_ENTRY

Ƭ **FUNCTION_ABI_ENTRY**: `Object`

#### Type declaration

| Name              | Type                                                                       |
| :---------------- | :------------------------------------------------------------------------- |
| `type`            | [`FUNCTION_ABI_TYPE`](types.RPC.SPEC.md#function_abi_type)                 |
| `name`            | `string`                                                                   |
| `inputs`          | [`TYPED_PARAMETER`](types.RPC.SPEC.md#typed_parameter)[]                   |
| `outputs`         | [`TYPED_PARAMETER`](types.RPC.SPEC.md#typed_parameter)[]                   |
| `stateMutability` | [`FUNCTION_STATE_MUTABILITY`](types.RPC.SPEC.md#function_state_mutability) |

#### Defined in

[src/types/api/rpcspec/components.ts:468](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L468)

---

### TYPED_PARAMETER

Ƭ **TYPED_PARAMETER**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |
| `type` | `string` |

#### Defined in

[src/types/api/rpcspec/components.ts:476](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L476)

---

### FEE_ESTIMATE

Ƭ **FEE_ESTIMATE**: `Object`

#### Type declaration

| Name           | Type                                         |
| :------------- | :------------------------------------------- |
| `gas_consumed` | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `gas_price`    | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `overall_fee`  | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |

#### Defined in

[src/types/api/rpcspec/components.ts:481](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L481)

---

### RESOURCE_LIMITS

Ƭ **RESOURCE_LIMITS**: `Object`

#### Type declaration

| Name                 | Type                                         |
| :------------------- | :------------------------------------------- |
| `max_amount`         | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `max_price_per_unit` | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |

#### Defined in

[src/types/api/rpcspec/components.ts:487](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L487)

---

### RESOURCE_PRICE

Ƭ **RESOURCE_PRICE**: `Object`

#### Type declaration

| Name             | Type                                         |
| :--------------- | :------------------------------------------- |
| `price_in_strk?` | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `price_in_wei`   | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |

#### Defined in

[src/types/api/rpcspec/components.ts:492](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L492)

---

### EXECUTION_RESOURCES

Ƭ **EXECUTION_RESOURCES**: `Object`

#### Type declaration

| Name                               | Type                                         |
| :--------------------------------- | :------------------------------------------- |
| `steps`                            | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `memory_holes`                     | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `range_check_builtin_applications` | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `pedersen_builtin_applications`    | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `poseidon_builtin_applications`    | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `ec_op_builtin_applications`       | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `ecdsa_builtin_applications`       | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `bitwise_builtin_applications`     | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |
| `keccak_builtin_applications`      | [`NUM_AS_HEX`](types.RPC.SPEC.md#num_as_hex) |

#### Defined in

[src/types/api/rpcspec/components.ts:497](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L497)

---

### TRANSACTION_TRACE

Ƭ **TRANSACTION_TRACE**: `Object`

TRACE API

#### Type declaration

| Name                       | Type                                                                     |
| :------------------------- | :----------------------------------------------------------------------- |
| `invoke_tx_trace?`         | [`INVOKE_TXN_TRACE`](types.RPC.SPEC.md#invoke_txn_trace)                 |
| `declare_tx_trace?`        | [`DECLARE_TXN_TRACE`](types.RPC.SPEC.md#declare_txn_trace)               |
| `deploy_account_tx_trace?` | [`DEPLOY_ACCOUNT_TXN_TRACE`](types.RPC.SPEC.md#deploy_account_txn_trace) |
| `l1_handler_tx_trace?`     | [`L1_HANDLER_TXN_TRACE`](types.RPC.SPEC.md#l1_handler_txn_trace)         |

#### Defined in

[src/types/api/rpcspec/components.ts:514](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L514)

---

### INVOKE_TXN_TRACE

Ƭ **INVOKE_TXN_TRACE**: `Object`

#### Type declaration

| Name                       | Type                                                                                              |
| :------------------------- | :------------------------------------------------------------------------------------------------ |
| `type`                     | `"INVOKE"`                                                                                        |
| `execute_invocation`       | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) \| \{ `revert_reason`: `string` \} |
| `validate_invocation?`     | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation)                                    |
| `fee_transfer_invocation?` | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation)                                    |
| `state_diff?`              | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff)                                                      |

#### Defined in

[src/types/api/rpcspec/components.ts:522](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L522)

---

### DECLARE_TXN_TRACE

Ƭ **DECLARE_TXN_TRACE**: `Object`

#### Type declaration

| Name                       | Type                                                           |
| :------------------------- | :------------------------------------------------------------- |
| `type`                     | `"DECLARE"`                                                    |
| `validate_invocation?`     | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `fee_transfer_invocation?` | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `state_diff?`              | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff)                   |

#### Defined in

[src/types/api/rpcspec/components.ts:531](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L531)

---

### DEPLOY_ACCOUNT_TXN_TRACE

Ƭ **DEPLOY_ACCOUNT_TXN_TRACE**: `Object`

#### Type declaration

| Name                       | Type                                                           |
| :------------------------- | :------------------------------------------------------------- |
| `type`                     | `"DEPLOY_ACCOUNT"`                                             |
| `constructor_invocation`   | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `validate_invocation?`     | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `fee_transfer_invocation?` | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `state_diff?`              | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff)                   |

#### Defined in

[src/types/api/rpcspec/components.ts:539](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L539)

---

### L1_HANDLER_TXN_TRACE

Ƭ **L1_HANDLER_TXN_TRACE**: `Object`

#### Type declaration

| Name                  | Type                                                           |
| :-------------------- | :------------------------------------------------------------- |
| `type`                | `"L1_HANDLER"`                                                 |
| `function_invocation` | [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation) |
| `state_diff?`         | [`STATE_DIFF`](types.RPC.SPEC.md#state_diff)                   |

#### Defined in

[src/types/api/rpcspec/components.ts:548](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L548)

---

### NESTED_CALL

Ƭ **NESTED_CALL**: [`FUNCTION_INVOCATION`](types.RPC.SPEC.md#function_invocation)

#### Defined in

[src/types/api/rpcspec/components.ts:555](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L555)

---

### FUNCTION_INVOCATION

Ƭ **FUNCTION_INVOCATION**: `Object`

#### Type declaration

| Name               | Type                                                     |
| :----------------- | :------------------------------------------------------- |
| `function_call`    | [`FUNCTION_CALL`](types.RPC.SPEC.md#function_call)       |
| `caller_address`   | `string`                                                 |
| `class_hash`       | `string`                                                 |
| `entry_point_type` | [`ENTRY_POINT_TYPE`](types.RPC.SPEC.md#entry_point_type) |
| `call_type`        | [`CALL_TYPE`](types.RPC.SPEC.md#call_type)               |
| `result`           | `string`[]                                               |
| `calls`            | [`NESTED_CALL`](types.RPC.SPEC.md#nested_call)[]         |
| `events`           | [`ORDERED_EVENT`](types.RPC.SPEC.md#ordered_event)[]     |
| `messages`         | [`ORDERED_MESSAGE`](types.RPC.SPEC.md#ordered_message)[] |

#### Defined in

[src/types/api/rpcspec/components.ts:558](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L558)

---

### ORDERED_EVENT

Ƭ **ORDERED_EVENT**: `Object`

#### Type declaration

| Name    | Type                               |
| :------ | :--------------------------------- |
| `order` | `number`                           |
| `event` | [`EVENT`](types.RPC.SPEC.md#event) |

#### Defined in

[src/types/api/rpcspec/components.ts:571](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L571)

---

### ORDERED_MESSAGE

Ƭ **ORDERED_MESSAGE**: `Object`

#### Type declaration

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `order`   | `number`                                   |
| `message` | [`MSG_TO_L1`](types.RPC.SPEC.md#msg_to_l1) |

#### Defined in

[src/types/api/rpcspec/components.ts:577](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/components.ts#L577)

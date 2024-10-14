---
id: 'types.RPC'
title: 'Namespace: RPC'
sidebar_label: 'RPC'
custom_edit_url: null
---

[types](types.md).RPC

## Namespaces

- [JRPC](types.RPC.JRPC.md)
- [Errors](types.RPC.Errors.md)
- [SPEC](types.RPC.SPEC.md)

## Enumerations

- [ETransactionType](../enums/types.RPC.ETransactionType.md)
- [ESimulationFlag](../enums/types.RPC.ESimulationFlag.md)
- [ETransactionStatus](../enums/types.RPC.ETransactionStatus.md)
- [ETransactionFinalityStatus](../enums/types.RPC.ETransactionFinalityStatus.md)
- [ETransactionExecutionStatus](../enums/types.RPC.ETransactionExecutionStatus.md)
- [EBlockTag](../enums/types.RPC.EBlockTag.md)
- [EDataAvailabilityMode](../enums/types.RPC.EDataAvailabilityMode.md)

## Type Aliases

### Methods

Ƭ **Methods**: `ReadMethods` & `WriteMethods` & `TraceMethods`

#### Defined in

[src/types/api/rpcspec/methods.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/methods.ts#L42)

---

### ABI

Ƭ **ABI**: (`FUNCTION` \| `CONSTRUCTOR` \| `L1_HANDLER` \| `EVENT` \| `STRUCT` \| `ENUM` \| `INTERFACE` \| `IMPL`)[]

TypeScript Representation of Cairo1 v2+ Starknet Contract ABI

starknet_metadata.json - tags/v0.5.0

'starknet-specs' (OpenRpc protocol types)
https://github.com/starkware-libs/starknet-specs

#### Defined in

[src/types/api/rpcspec/contract.ts:10](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/contract.ts#L10)

---

### ContractClass

Ƭ **ContractClass**: [`CONTRACT_CLASS`](types.RPC.SPEC.md#contract_class) \| [`DEPRECATED_CONTRACT_CLASS`](types.RPC.SPEC.md#deprecated_contract_class)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:40](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L40)

---

### SimulateTransactionResponse

Ƭ **SimulateTransactionResponse**: \{ `transaction_trace`: [`TRANSACTION_TRACE`](types.RPC.SPEC.md#transaction_trace) ; `fee_estimation`: [`FEE_ESTIMATE`](types.RPC.SPEC.md#fee_estimate) \}[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L42)

---

### FeeEstimate

Ƭ **FeeEstimate**: [`FEE_ESTIMATE`](types.RPC.SPEC.md#fee_estimate)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:47](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L47)

---

### TransactionWithHash

Ƭ **TransactionWithHash**: [`TXN`](types.RPC.SPEC.md#txn) & \{ `transaction_hash`: [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) \}

#### Defined in

[src/types/api/rpcspec/nonspec.ts:49](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L49)

---

### BlockHashAndNumber

Ƭ **BlockHashAndNumber**: `Object`

#### Type declaration

| Name           | Type                                             |
| :------------- | :----------------------------------------------- |
| `block_hash`   | [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)     |
| `block_number` | [`BLOCK_NUMBER`](types.RPC.SPEC.md#block_number) |

#### Defined in

[src/types/api/rpcspec/nonspec.ts:51](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L51)

---

### BlockWithTxs

Ƭ **BlockWithTxs**: [`BLOCK_WITH_TXS`](types.RPC.SPEC.md#block_with_txs) \| [`PENDING_BLOCK_WITH_TXS`](types.RPC.SPEC.md#pending_block_with_txs)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L53)

---

### BlockWithTxHashes

Ƭ **BlockWithTxHashes**: [`BLOCK_WITH_TX_HASHES`](types.RPC.SPEC.md#block_with_tx_hashes) \| [`PENDING_BLOCK_WITH_TX_HASHES`](types.RPC.SPEC.md#pending_block_with_tx_hashes)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:55](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L55)

---

### StateUpdate

Ƭ **StateUpdate**: [`STATE_UPDATE`](types.RPC.SPEC.md#state_update) \| [`PENDING_STATE_UPDATE`](types.RPC.SPEC.md#pending_state_update)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:57](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L57)

---

### BlockTransactionsTraces

Ƭ **BlockTransactionsTraces**: \{ `transaction_hash`: [`FELT`](types.RPC.SPEC.md#felt) ; `trace_root`: [`TRANSACTION_TRACE`](types.RPC.SPEC.md#transaction_trace) \}[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:59](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L59)

---

### Syncing

Ƭ **Syncing**: `false` \| [`SYNC_STATUS`](types.RPC.SPEC.md#sync_status)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:61](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L61)

---

### Events

Ƭ **Events**: [`EVENTS_CHUNK`](types.RPC.SPEC.md#events_chunk)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:63](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L63)

---

### InvokedTransaction

Ƭ **InvokedTransaction**: `Object`

#### Type declaration

| Name               | Type                                     |
| :----------------- | :--------------------------------------- |
| `transaction_hash` | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) |

#### Defined in

[src/types/api/rpcspec/nonspec.ts:65](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L65)

---

### DeclaredTransaction

Ƭ **DeclaredTransaction**: `Object`

#### Type declaration

| Name               | Type                                     |
| :----------------- | :--------------------------------------- |
| `transaction_hash` | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) |
| `class_hash`       | [`FELT`](types.RPC.SPEC.md#felt)         |

#### Defined in

[src/types/api/rpcspec/nonspec.ts:67](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L67)

---

### DeployedAccountTransaction

Ƭ **DeployedAccountTransaction**: `Object`

#### Type declaration

| Name               | Type                                     |
| :----------------- | :--------------------------------------- |
| `transaction_hash` | [`TXN_HASH`](types.RPC.SPEC.md#txn_hash) |
| `contract_address` | [`FELT`](types.RPC.SPEC.md#felt)         |

#### Defined in

[src/types/api/rpcspec/nonspec.ts:69](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L69)

---

### ContractAddress

Ƭ **ContractAddress**: [`ADDRESS`](types.RPC.SPEC.md#address)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:72](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L72)

---

### Felt

Ƭ **Felt**: [`FELT`](types.RPC.SPEC.md#felt)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:73](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L73)

---

### Nonce

Ƭ **Nonce**: [`FELT`](types.RPC.SPEC.md#felt)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:74](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L74)

---

### TransactionHash

Ƭ **TransactionHash**: [`TXN_HASH`](types.RPC.SPEC.md#txn_hash)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:75](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L75)

---

### TransactionTrace

Ƭ **TransactionTrace**: [`TRANSACTION_TRACE`](types.RPC.SPEC.md#transaction_trace)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:76](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L76)

---

### BlockHash

Ƭ **BlockHash**: [`BLOCK_HASH`](types.RPC.SPEC.md#block_hash)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:77](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L77)

---

### TransactionReceipt

Ƭ **TransactionReceipt**: [`TXN_RECEIPT`](types.RPC.SPEC.md#txn_receipt) \| [`PENDING_TXN_RECEIPT`](types.RPC.SPEC.md#pending_txn_receipt)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:78](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L78)

---

### EventFilter

Ƭ **EventFilter**: [`EVENT_FILTER`](types.RPC.SPEC.md#event_filter) & [`RESULT_PAGE_REQUEST`](types.RPC.SPEC.md#result_page_request)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:79](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L79)

---

### SimulationFlags

Ƭ **SimulationFlags**: [`SIMULATION_FLAG`](types.RPC.SPEC.md#simulation_flag)[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:80](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L80)

---

### L1Message

Ƭ **L1Message**: [`MSG_FROM_L1`](types.RPC.SPEC.md#msg_from_l1)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:81](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L81)

---

### BaseTransaction

Ƭ **BaseTransaction**: [`BROADCASTED_TXN`](types.RPC.SPEC.md#broadcasted_txn)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:82](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L82)

---

### ChainId

Ƭ **ChainId**: [`CHAIN_ID`](types.RPC.SPEC.md#chain_id)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:83](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L83)

---

### Transaction

Ƭ **Transaction**: [`TXN`](types.RPC.SPEC.md#txn)

#### Defined in

[src/types/api/rpcspec/nonspec.ts:84](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L84)

---

### TransactionStatus

Ƭ **TransactionStatus**: `Object`

#### Type declaration

| Name                | Type                                                             |
| :------------------ | :--------------------------------------------------------------- |
| `finality_status`   | [`TXN_STATUS`](types.RPC.SPEC.md#txn_status)                     |
| `execution_status?` | [`TXN_EXECUTION_STATUS`](types.RPC.SPEC.md#txn_execution_status) |

#### Defined in

[src/types/api/rpcspec/nonspec.ts:85](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L85)

---

### StorageDiffs

Ƭ **StorageDiffs**: [`CONTRACT_STORAGE_DIFF_ITEM`](types.RPC.SPEC.md#contract_storage_diff_item)[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:91](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L91)

---

### DeprecatedDeclaredClasses

Ƭ **DeprecatedDeclaredClasses**: [`FELT`](types.RPC.SPEC.md#felt)[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:92](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L92)

---

### NonceUpdates

Ƭ **NonceUpdates**: [`NONCE_UPDATE`](types.RPC.SPEC.md#nonce_update)[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:93](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L93)

---

### ReplacedClasses

Ƭ **ReplacedClasses**: [`REPLACED_CLASS`](types.RPC.SPEC.md#replaced_class)[]

#### Defined in

[src/types/api/rpcspec/nonspec.ts:94](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/rpcspec/nonspec.ts#L94)

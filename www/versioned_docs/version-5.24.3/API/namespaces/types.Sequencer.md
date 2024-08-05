---
id: 'types.Sequencer'
title: 'Namespace: Sequencer'
sidebar_label: 'Sequencer'
custom_edit_url: null
---

[types](types.md).Sequencer

## Interfaces

- [InvokeFunctionTransactionResponse](../interfaces/types.Sequencer.InvokeFunctionTransactionResponse.md)

## References

### GetTransactionStatusResponse

Re-exports [GetTransactionStatusResponse](types.md#gettransactionstatusresponse)

---

### GetContractAddressesResponse

Re-exports [GetContractAddressesResponse](types.md#getcontractaddressesresponse)

---

### FunctionInvocation

Re-exports [FunctionInvocation](types.md#functioninvocation)

---

### ExecutionResources

Re-exports [ExecutionResources](types.md#executionresources)

---

### CallL1Handler

Re-exports [CallL1Handler](types.md#calll1handler)

---

### DeployedContractItem

Re-exports [DeployedContractItem](types.md#deployedcontractitem)

---

### SequencerIdentifier

Re-exports [SequencerIdentifier](types.md#sequenceridentifier)

## Type Aliases

### TransactionTraceResponse

Ƭ **TransactionTraceResponse**: `Object`

#### Type declaration

| Name                       | Type                                                |
| :------------------------- | :-------------------------------------------------- |
| `validate_invocation?`     | [`FunctionInvocation`](types.md#functioninvocation) |
| `function_invocation?`     | [`FunctionInvocation`](types.md#functioninvocation) |
| `fee_transfer_invocation?` | [`FunctionInvocation`](types.md#functioninvocation) |
| `constructor_invocation?`  | [`FunctionInvocation`](types.md#functioninvocation) |
| `signature`                | `string`[]                                          |

#### Defined in

[src/types/api/sequencer.ts:81](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L81)

---

### DeclareTransaction

Ƭ **DeclareTransaction**: `Object`

#### Type declaration

| Name                   | Type                                                   |
| :--------------------- | :----------------------------------------------------- |
| `type`                 | [`DECLARE`](../enums/types.TransactionType.md#declare) |
| `sender_address`       | `string`                                               |
| `contract_class`       | [`ContractClass`](types.md#contractclass)              |
| `signature?`           | `string`[]                                             |
| `nonce`                | [`BigNumberish`](types.md#bignumberish)                |
| `max_fee?`             | [`BigNumberish`](types.md#bignumberish)                |
| `version?`             | [`BigNumberish`](types.md#bignumberish)                |
| `compiled_class_hash?` | `string`                                               |

#### Defined in

[src/types/api/sequencer.ts:89](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L89)

---

### DeployTransaction

Ƭ **DeployTransaction**: `Object`

#### Type declaration

| Name                    | Type                                                 |
| :---------------------- | :--------------------------------------------------- |
| `type`                  | [`DEPLOY`](../enums/types.TransactionType.md#deploy) |
| `contract_definition`   | [`ContractClass`](types.md#contractclass)            |
| `contract_address_salt` | [`BigNumberish`](types.md#bignumberish)              |
| `constructor_calldata`  | `string`[]                                           |
| `nonce?`                | [`BigNumberish`](types.md#bignumberish)              |

#### Defined in

[src/types/api/sequencer.ts:100](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L100)

---

### DeployAccountTransaction

Ƭ **DeployAccountTransaction**: `Object`

#### Type declaration

| Name                    | Type                                                                 |
| :---------------------- | :------------------------------------------------------------------- |
| `type`                  | [`DEPLOY_ACCOUNT`](../enums/types.TransactionType.md#deploy_account) |
| `class_hash`            | `string`                                                             |
| `contract_address_salt` | [`BigNumberish`](types.md#bignumberish)                              |
| `constructor_calldata`  | `string`[]                                                           |
| `signature?`            | `string`[]                                                           |
| `max_fee?`              | [`BigNumberish`](types.md#bignumberish)                              |
| `version?`              | [`BigNumberish`](types.md#bignumberish)                              |
| `nonce?`                | [`BigNumberish`](types.md#bignumberish)                              |

#### Defined in

[src/types/api/sequencer.ts:108](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L108)

---

### InvokeFunctionTransaction

Ƭ **InvokeFunctionTransaction**: `Object`

#### Type declaration

| Name                | Type                                                    |
| :------------------ | :------------------------------------------------------ |
| `type`              | [`INVOKE`](../enums/types.TransactionType.md#invoke)    |
| `sender_address`    | `string`                                                |
| `signature?`        | `string`[]                                              |
| `entry_point_type?` | [`EXTERNAL`](../enums/types.EntryPointType.md#external) |
| `calldata?`         | [`RawCalldata`](types.md#rawcalldata)                   |
| `nonce`             | [`BigNumberish`](types.md#bignumberish)                 |
| `max_fee?`          | [`BigNumberish`](types.md#bignumberish)                 |
| `version?`          | [`BigNumberish`](types.md#bignumberish)                 |

#### Defined in

[src/types/api/sequencer.ts:119](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L119)

---

### Transaction

Ƭ **Transaction**: [`DeclareTransaction`](types.Sequencer.md#declaretransaction) \| [`DeployTransaction`](types.Sequencer.md#deploytransaction) \| [`InvokeFunctionTransaction`](types.Sequencer.md#invokefunctiontransaction) \| [`DeployAccountTransaction`](types.Sequencer.md#deployaccounttransaction)

#### Defined in

[src/types/api/sequencer.ts:130](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L130)

---

### AddTransactionResponse

Ƭ **AddTransactionResponse**: `Object`

#### Type declaration

| Name               | Type                     |
| :----------------- | :----------------------- |
| `transaction_hash` | `string`                 |
| `code?`            | `"TRANSACTION_RECEIVED"` |
| `address?`         | `string`                 |
| `class_hash?`      | `string`                 |

#### Defined in

[src/types/api/sequencer.ts:136](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L136)

---

### GetCodeResponse

Ƭ **GetCodeResponse**: `Object`

#### Type declaration

| Name       | Type                            |
| :--------- | :------------------------------ |
| `bytecode` | [`ByteCode`](types.md#bytecode) |
| `abi`      | [`Abi`](types.md#abi)           |

#### Defined in

[src/types/api/sequencer.ts:143](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L143)

---

### TransactionResponse

Ƭ **TransactionResponse**: [`DeclareTransaction`](types.Sequencer.md#declaretransaction) \| [`DeployTransaction`](types.Sequencer.md#deploytransaction) \| [`InvokeFunctionTransactionResponse`](../interfaces/types.Sequencer.InvokeFunctionTransactionResponse.md)

#### Defined in

[src/types/api/sequencer.ts:153](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L153)

---

### SuccessfulTransactionResponse

Ƭ **SuccessfulTransactionResponse**: `Object`

#### Type declaration

| Name                | Type                                                                       |
| :------------------ | :------------------------------------------------------------------------- |
| `execution_status`  | [`SUCCEEDED`](../enums/types.TransactionExecutionStatus.md#succeeded)      |
| `finality_status`   | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) |
| `status`            | [`TransactionStatus`](../enums/types.TransactionStatus.md)                 |
| `block_hash`        | `string`                                                                   |
| `block_number`      | [`BlockNumber`](types.md#blocknumber)                                      |
| `transaction_index` | `number`                                                                   |
| `transaction`       | [`TransactionResponse`](types.Sequencer.md#transactionresponse)            |

#### Defined in

[src/types/api/sequencer.ts:158](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L158)

---

### RevertedTransactionResponse

Ƭ **RevertedTransactionResponse**: `Object`

#### Type declaration

| Name                | Type                                                                       |
| :------------------ | :------------------------------------------------------------------------- |
| `execution_status`  | [`REVERTED`](../enums/types.TransactionExecutionStatus.md#reverted)        |
| `finality_status`   | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) |
| `status`            | [`TransactionStatus`](../enums/types.TransactionStatus.md)                 |
| `block_hash`        | `string`                                                                   |
| `block_number`      | [`BlockNumber`](types.md#blocknumber)                                      |
| `transaction_index` | `number`                                                                   |
| `transaction`       | [`TransactionResponse`](types.Sequencer.md#transactionresponse)            |
| `revert_error`      | `string`                                                                   |

#### Defined in

[src/types/api/sequencer.ts:168](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L168)

---

### FailedTransactionResponse

Ƭ **FailedTransactionResponse**: `Object`

#### Type declaration

| Name                                       | Type                                                            |
| :----------------------------------------- | :-------------------------------------------------------------- |
| `status`                                   | [`REJECTED`](../enums/types.TransactionStatus.md#rejected)      |
| `transaction_failure_reason`               | \{ `code`: `string` ; `error_message`: `string` \}              |
| `transaction_failure_reason.code`          | `string`                                                        |
| `transaction_failure_reason.error_message` | `string`                                                        |
| `transaction`                              | [`TransactionResponse`](types.Sequencer.md#transactionresponse) |

#### Defined in

[src/types/api/sequencer.ts:179](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L179)

---

### GetTransactionResponse

Ƭ **GetTransactionResponse**: [`SuccessfulTransactionResponse`](types.Sequencer.md#successfultransactionresponse) \| [`RevertedTransactionResponse`](types.Sequencer.md#revertedtransactionresponse) \| [`FailedTransactionResponse`](types.Sequencer.md#failedtransactionresponse)

#### Defined in

[src/types/api/sequencer.ts:188](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L188)

---

### TransactionReceiptResponse

Ƭ **TransactionReceiptResponse**: [`SuccessfulTransactionReceiptResponse`](types.Sequencer.md#successfultransactionreceiptresponse) \| [`RevertedTransactionReceiptResponse`](types.Sequencer.md#revertedtransactionreceiptresponse) \| [`RejectedTransactionReceiptResponse`](types.Sequencer.md#rejectedtransactionreceiptresponse)

#### Defined in

[src/types/api/sequencer.ts:193](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L193)

---

### SuccessfulTransactionReceiptResponse

Ƭ **SuccessfulTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                   | Type                                                                       |
| :--------------------- | :------------------------------------------------------------------------- |
| `execution_status`     | [`SUCCEEDED`](../enums/types.TransactionExecutionStatus.md#succeeded)      |
| `finality_status`      | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) |
| `status`               | [`TransactionStatus`](../enums/types.TransactionStatus.md)                 |
| `actual_fee`           | `string`                                                                   |
| `block_hash`           | `string`                                                                   |
| `block_number`         | [`BlockNumber`](types.md#blocknumber)                                      |
| `transaction_hash`     | `string`                                                                   |
| `transaction_index`    | `number`                                                                   |
| `l2_to_l1_messages`    | `string`[]                                                                 |
| `events`               | `string`[]                                                                 |
| `execution_resources?` | [`ExecutionResources`](types.md#executionresources)                        |

#### Defined in

[src/types/api/sequencer.ts:198](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L198)

---

### RevertedTransactionReceiptResponse

Ƭ **RevertedTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                | Type                                                                       |
| :------------------ | :------------------------------------------------------------------------- |
| `execution_status`  | [`REVERTED`](../enums/types.TransactionExecutionStatus.md#reverted)        |
| `finality_status`   | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) |
| `status`            | [`REVERTED`](../enums/types.TransactionStatus.md#reverted)                 |
| `actual_fee`        | `string`                                                                   |
| `block_hash`        | `string`                                                                   |
| `block_number`      | [`BlockNumber`](types.md#blocknumber)                                      |
| `transaction_hash`  | `string`                                                                   |
| `transaction_index` | `number`                                                                   |
| `l2_to_l1_messages` | `string`[]                                                                 |
| `events`            | `string`[]                                                                 |
| `revert_error`      | `string`                                                                   |

#### Defined in

[src/types/api/sequencer.ts:212](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L212)

---

### RejectedTransactionReceiptResponse

Ƭ **RejectedTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                                       | Type                                                                       |
| :----------------------------------------- | :------------------------------------------------------------------------- |
| `execution_status`                         | [`REJECTED`](../enums/types.TransactionExecutionStatus.md#rejected)        |
| `finality_status`                          | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) |
| `status`                                   | [`REJECTED`](../enums/types.TransactionStatus.md#rejected)                 |
| `transaction_hash`                         | `string`                                                                   |
| `l2_to_l1_messages`                        | `string`[]                                                                 |
| `events`                                   | `string`[]                                                                 |
| `transaction_failure_reason`               | \{ `code`: `string` ; `error_message`: `string` \}                         |
| `transaction_failure_reason.code`          | `string`                                                                   |
| `transaction_failure_reason.error_message` | `string`                                                                   |

#### Defined in

[src/types/api/sequencer.ts:226](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L226)

---

### GetBlockResponse

Ƭ **GetBlockResponse**: `Object`

#### Type declaration

| Name                   | Type                                                                                                                                                                                                                                                                                                                                                           |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block_number`         | `number`                                                                                                                                                                                                                                                                                                                                                       |
| `state_root`           | `string`                                                                                                                                                                                                                                                                                                                                                       |
| `block_hash`           | `string`                                                                                                                                                                                                                                                                                                                                                       |
| `transactions`         | \{ `[txHash: string]`: [`TransactionResponse`](types.Sequencer.md#transactionresponse); \}                                                                                                                                                                                                                                                                     |
| `timestamp`            | `number`                                                                                                                                                                                                                                                                                                                                                       |
| `transaction_receipts` | \{ `[txHash: string]`: \{ `block_hash`: `string` ; `transaction_hash`: `string` ; `l2_to_l1_messages`: \{ `to_address`: `string` ; `payload`: `string`[] ; `from_address`: `string` \}[] ; `block_number`: [`BlockNumber`](types.md#blocknumber) ; `status`: [`TransactionStatus`](../enums/types.TransactionStatus.md) ; `transaction_index`: `number` \}; \} |
| `parent_block_hash`    | `string`                                                                                                                                                                                                                                                                                                                                                       |
| `status`               | [`BlockStatus`](../enums/types.BlockStatus.md)                                                                                                                                                                                                                                                                                                                 |
| `gas_price`            | `string`                                                                                                                                                                                                                                                                                                                                                       |
| `sequencer_address`    | `string`                                                                                                                                                                                                                                                                                                                                                       |
| `starknet_version`     | `string`                                                                                                                                                                                                                                                                                                                                                       |

#### Defined in

[src/types/api/sequencer.ts:239](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L239)

---

### CallContractTransaction

Ƭ **CallContractTransaction**: \{ `calldata?`: [`RawCalldata`](types.md#rawcalldata) ; `max_fee?`: [`BigNumberish`](types.md#bignumberish) ; `version?`: [`BigNumberish`](types.md#bignumberish) ; `entry_point_selector`: `string` \} & \{ `sender_address`: `string` ; `signature`: `string`[] \} \| \{ `contract_address`: `string` ; `signature?`: `never` \}

#### Defined in

[src/types/api/sequencer.ts:268](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L268)

---

### CallContractResponse

Ƭ **CallContractResponse**: `Object`

#### Type declaration

| Name     | Type       |
| :------- | :--------- |
| `result` | `string`[] |

#### Defined in

[src/types/api/sequencer.ts:284](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L284)

---

### InvokeEstimateFee

Ƭ **InvokeEstimateFee**: `Omit`\<[`InvokeFunctionTransaction`](types.Sequencer.md#invokefunctiontransaction), `"max_fee"` \| `"entry_point_type"`\>

#### Defined in

[src/types/api/sequencer.ts:288](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L288)

---

### DeclareEstimateFee

Ƭ **DeclareEstimateFee**: `Omit`\<[`DeclareTransaction`](types.Sequencer.md#declaretransaction), `"max_fee"`\>

#### Defined in

[src/types/api/sequencer.ts:289](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L289)

---

### DeployAccountEstimateFee

Ƭ **DeployAccountEstimateFee**: `Omit`\<[`DeployAccountTransaction`](types.Sequencer.md#deployaccounttransaction), `"max_fee"`\>

#### Defined in

[src/types/api/sequencer.ts:290](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L290)

---

### DeployEstimateFee

Ƭ **DeployEstimateFee**: [`DeployTransaction`](types.Sequencer.md#deploytransaction)

#### Defined in

[src/types/api/sequencer.ts:291](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L291)

---

### SimulateTransactionResponse

Ƭ **SimulateTransactionResponse**: `Object`

#### Type declaration

| Name             | Type                                                                      |
| :--------------- | :------------------------------------------------------------------------ |
| `trace`          | [`TransactionTraceResponse`](types.Sequencer.md#transactiontraceresponse) |
| `fee_estimation` | [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse)           |

#### Defined in

[src/types/api/sequencer.ts:293](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L293)

---

### AccountTransactionItem

Ƭ **AccountTransactionItem**: [`InvokeEstimateFee`](types.Sequencer.md#invokeestimatefee) \| [`DeclareEstimateFee`](types.Sequencer.md#declareestimatefee) \| [`DeployEstimateFee`](types.Sequencer.md#deployestimatefee) \| [`DeployAccountEstimateFee`](types.Sequencer.md#deployaccountestimatefee)

#### Defined in

[src/types/api/sequencer.ts:298](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L298)

---

### AccountTransaction

Ƭ **AccountTransaction**: [`AllowArray`](types.md#allowarray)\<[`AccountTransactionItem`](types.Sequencer.md#accounttransactionitem)\>

Transaction filled with account data

#### Defined in

[src/types/api/sequencer.ts:307](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L307)

---

### EstimateFeeResponse

Ƭ **EstimateFeeResponse**: \{ `overall_fee`: `number` ; `gas_price`: `number` ; `gas_usage`: `number` ; `uint`: `string` \} \| \{ `amount`: `bigint` ; `unit`: `string` \}

#### Defined in

[src/types/api/sequencer.ts:310](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L310)

---

### EstimateFeeResponseBulk

Ƭ **EstimateFeeResponseBulk**: [`AllowArray`](types.md#allowarray)\<[`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse)\>

#### Defined in

[src/types/api/sequencer.ts:322](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L322)

---

### BlockTransactionTracesResponse

Ƭ **BlockTransactionTracesResponse**: `Object`

#### Type declaration

| Name     | Type                                                                                                             |
| :------- | :--------------------------------------------------------------------------------------------------------------- |
| `traces` | [`TransactionTraceResponse`](types.Sequencer.md#transactiontraceresponse) & \{ `transaction_hash`: `string` \}[] |

#### Defined in

[src/types/api/sequencer.ts:324](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L324)

---

### Storage

Ƭ **Storage**: `string`

#### Defined in

[src/types/api/sequencer.ts:328](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L328)

---

### StateUpdateResponse

Ƭ **StateUpdateResponse**: `Object`

#### Type declaration

| Name                                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block_hash`                        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `new_root`                          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `old_root`                          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `state_diff`                        | \{ `storage_diffs`: [`StorageDiffs`](types.Sequencer.md#storagediffs) ; `nonces`: [`Nonces`](types.Sequencer.md#nonces) ; `deployed_contracts`: [`DeployedContractItem`](types.md#deployedcontractitem)[] ; `old_declared_contracts`: [`OldDeclaredContracts`](types.Sequencer.md#olddeclaredcontracts) ; `declared_classes`: [`DeclaredClasses`](types.Sequencer.md#declaredclasses) ; `replaced_classes`: [`ReplacedClasses`](types.Sequencer.md#replacedclasses) \} |
| `state_diff.storage_diffs`          | [`StorageDiffs`](types.Sequencer.md#storagediffs)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `state_diff.nonces`                 | [`Nonces`](types.Sequencer.md#nonces)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `state_diff.deployed_contracts`     | [`DeployedContractItem`](types.md#deployedcontractitem)[]                                                                                                                                                                                                                                                                                                                                                                                                              |
| `state_diff.old_declared_contracts` | [`OldDeclaredContracts`](types.Sequencer.md#olddeclaredcontracts)                                                                                                                                                                                                                                                                                                                                                                                                      |
| `state_diff.declared_classes`       | [`DeclaredClasses`](types.Sequencer.md#declaredclasses)                                                                                                                                                                                                                                                                                                                                                                                                                |
| `state_diff.replaced_classes`       | [`ReplacedClasses`](types.Sequencer.md#replacedclasses)                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Defined in

[src/types/api/sequencer.ts:330](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L330)

---

### StorageDiffs

Ƭ **StorageDiffs**: `Object`

#### Index signature

▪ [address: `string`]: [`StateDiffItem`](types.Sequencer.md#statediffitem)[]

#### Defined in

[src/types/api/sequencer.ts:344](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L344)

---

### StateDiffItem

Ƭ **StateDiffItem**: `Object`

#### Type declaration

| Name    | Type     |
| :------ | :------- |
| `key`   | `string` |
| `value` | `string` |

#### Defined in

[src/types/api/sequencer.ts:346](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L346)

---

### Nonces

Ƭ **Nonces**: `Object`

#### Index signature

▪ [address: `string`]: [`Nonce`](types.Sequencer.md#nonce)

#### Defined in

[src/types/api/sequencer.ts:348](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L348)

---

### Nonce

Ƭ **Nonce**: `string`

#### Defined in

[src/types/api/sequencer.ts:350](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L350)

---

### DeployedContracts

Ƭ **DeployedContracts**: [`DeployedContractItem`](types.md#deployedcontractitem)[]

#### Defined in

[src/types/api/sequencer.ts:352](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L352)

---

### OldDeclaredContracts

Ƭ **OldDeclaredContracts**: `string`[]

#### Defined in

[src/types/api/sequencer.ts:354](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L354)

---

### DeclaredClasses

Ƭ **DeclaredClasses**: [`DeclaredClass`](types.Sequencer.md#declaredclass)[]

#### Defined in

[src/types/api/sequencer.ts:356](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L356)

---

### DeclaredClass

Ƭ **DeclaredClass**: `Object`

#### Type declaration

| Name                  | Type     |
| :-------------------- | :------- |
| `class_hash`          | `string` |
| `compiled_class_hash` | `string` |

#### Defined in

[src/types/api/sequencer.ts:358](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L358)

---

### ReplacedClasses

Ƭ **ReplacedClasses**: `string`[]

#### Defined in

[src/types/api/sequencer.ts:360](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L360)

---

### Endpoints

Ƭ **Endpoints**: `Object`

#### Type declaration

| Name                                                      | Type                                                                                                                                                                                                                                                                                       |
| :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get_contract_addresses`                                  | \{ `QUERY`: `never` ; `REQUEST`: `never` ; `RESPONSE`: [`GetContractAddressesResponse`](types.md#getcontractaddressesresponse) \}                                                                                                                                                          |
| `get_contract_addresses.QUERY`                            | `never`                                                                                                                                                                                                                                                                                    |
| `get_contract_addresses.REQUEST`                          | `never`                                                                                                                                                                                                                                                                                    |
| `get_contract_addresses.RESPONSE`                         | [`GetContractAddressesResponse`](types.md#getcontractaddressesresponse)                                                                                                                                                                                                                    |
| `add_transaction`                                         | \{ `QUERY`: `never` ; `REQUEST`: [`Transaction`](types.Sequencer.md#transaction) ; `RESPONSE`: [`AddTransactionResponse`](types.Sequencer.md#addtransactionresponse) \}                                                                                                                    |
| `add_transaction.QUERY`                                   | `never`                                                                                                                                                                                                                                                                                    |
| `add_transaction.REQUEST`                                 | [`Transaction`](types.Sequencer.md#transaction)                                                                                                                                                                                                                                            |
| `add_transaction.RESPONSE`                                | [`AddTransactionResponse`](types.Sequencer.md#addtransactionresponse)                                                                                                                                                                                                                      |
| `get_transaction`                                         | \{ `QUERY`: \{ `transactionHash`: `string` \} ; `REQUEST`: `never` ; `RESPONSE`: [`GetTransactionResponse`](types.Sequencer.md#gettransactionresponse) \}                                                                                                                                  |
| `get_transaction.QUERY`                                   | \{ `transactionHash`: `string` \}                                                                                                                                                                                                                                                          |
| `get_transaction.QUERY.transactionHash`                   | `string`                                                                                                                                                                                                                                                                                   |
| `get_transaction.REQUEST`                                 | `never`                                                                                                                                                                                                                                                                                    |
| `get_transaction.RESPONSE`                                | [`GetTransactionResponse`](types.Sequencer.md#gettransactionresponse)                                                                                                                                                                                                                      |
| `get_transaction_status`                                  | \{ `QUERY`: \{ `transactionHash`: `string` \} ; `REQUEST`: `never` ; `RESPONSE`: [`GetTransactionStatusResponse`](types.md#gettransactionstatusresponse) \}                                                                                                                                |
| `get_transaction_status.QUERY`                            | \{ `transactionHash`: `string` \}                                                                                                                                                                                                                                                          |
| `get_transaction_status.QUERY.transactionHash`            | `string`                                                                                                                                                                                                                                                                                   |
| `get_transaction_status.REQUEST`                          | `never`                                                                                                                                                                                                                                                                                    |
| `get_transaction_status.RESPONSE`                         | [`GetTransactionStatusResponse`](types.md#gettransactionstatusresponse)                                                                                                                                                                                                                    |
| `get_transaction_trace`                                   | \{ `QUERY`: \{ `transactionHash`: `string` \} ; `REQUEST`: `never` ; `RESPONSE`: [`TransactionTraceResponse`](types.Sequencer.md#transactiontraceresponse) \}                                                                                                                              |
| `get_transaction_trace.QUERY`                             | \{ `transactionHash`: `string` \}                                                                                                                                                                                                                                                          |
| `get_transaction_trace.QUERY.transactionHash`             | `string`                                                                                                                                                                                                                                                                                   |
| `get_transaction_trace.REQUEST`                           | `never`                                                                                                                                                                                                                                                                                    |
| `get_transaction_trace.RESPONSE`                          | [`TransactionTraceResponse`](types.Sequencer.md#transactiontraceresponse)                                                                                                                                                                                                                  |
| `get_transaction_receipt`                                 | \{ `QUERY`: \{ `transactionHash`: `string` \} ; `REQUEST`: `never` ; `RESPONSE`: [`TransactionReceiptResponse`](types.Sequencer.md#transactionreceiptresponse) \}                                                                                                                          |
| `get_transaction_receipt.QUERY`                           | \{ `transactionHash`: `string` \}                                                                                                                                                                                                                                                          |
| `get_transaction_receipt.QUERY.transactionHash`           | `string`                                                                                                                                                                                                                                                                                   |
| `get_transaction_receipt.REQUEST`                         | `never`                                                                                                                                                                                                                                                                                    |
| `get_transaction_receipt.RESPONSE`                        | [`TransactionReceiptResponse`](types.Sequencer.md#transactionreceiptresponse)                                                                                                                                                                                                              |
| `get_nonce`                                               | \{ `QUERY`: \{ `contractAddress`: `string` ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`Nonce`](types.Sequencer.md#nonce) \}                                                                                                 |
| `get_nonce.QUERY`                                         | \{ `contractAddress`: `string` ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                       |
| `get_nonce.QUERY.contractAddress`                         | `string`                                                                                                                                                                                                                                                                                   |
| `get_nonce.QUERY.blockIdentifier`                         | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_nonce.REQUEST`                                       | `never`                                                                                                                                                                                                                                                                                    |
| `get_nonce.RESPONSE`                                      | [`Nonce`](types.Sequencer.md#nonce)                                                                                                                                                                                                                                                        |
| `get_storage_at`                                          | \{ `QUERY`: \{ `contractAddress`: `string` ; `key`: [`BigNumberish`](types.md#bignumberish) ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`Storage`](types.Sequencer.md#storage) \}                                            |
| `get_storage_at.QUERY`                                    | \{ `contractAddress`: `string` ; `key`: [`BigNumberish`](types.md#bignumberish) ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                      |
| `get_storage_at.QUERY.contractAddress`                    | `string`                                                                                                                                                                                                                                                                                   |
| `get_storage_at.QUERY.key`                                | [`BigNumberish`](types.md#bignumberish)                                                                                                                                                                                                                                                    |
| `get_storage_at.QUERY.blockIdentifier`                    | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_storage_at.REQUEST`                                  | `never`                                                                                                                                                                                                                                                                                    |
| `get_storage_at.RESPONSE`                                 | [`Storage`](types.Sequencer.md#storage)                                                                                                                                                                                                                                                    |
| `get_code`                                                | \{ `QUERY`: \{ `contractAddress`: `string` ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`GetCodeResponse`](types.Sequencer.md#getcoderesponse) \}                                                                             |
| `get_code.QUERY`                                          | \{ `contractAddress`: `string` ; `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                       |
| `get_code.QUERY.contractAddress`                          | `string`                                                                                                                                                                                                                                                                                   |
| `get_code.QUERY.blockIdentifier`                          | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_code.REQUEST`                                        | `never`                                                                                                                                                                                                                                                                                    |
| `get_code.RESPONSE`                                       | [`GetCodeResponse`](types.Sequencer.md#getcoderesponse)                                                                                                                                                                                                                                    |
| `get_block`                                               | \{ `QUERY`: \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`GetBlockResponse`](types.Sequencer.md#getblockresponse) \}                                                                                                         |
| `get_block.QUERY`                                         | \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                                                     |
| `get_block.QUERY.blockIdentifier`                         | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_block.REQUEST`                                       | `never`                                                                                                                                                                                                                                                                                    |
| `get_block.RESPONSE`                                      | [`GetBlockResponse`](types.Sequencer.md#getblockresponse)                                                                                                                                                                                                                                  |
| `call_contract`                                           | \{ `QUERY`: \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: [`CallContractTransaction`](types.Sequencer.md#callcontracttransaction) ; `RESPONSE`: [`CallContractResponse`](types.Sequencer.md#callcontractresponse) \}                                 |
| `call_contract.QUERY`                                     | \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                                                     |
| `call_contract.QUERY.blockIdentifier`                     | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `call_contract.REQUEST`                                   | [`CallContractTransaction`](types.Sequencer.md#callcontracttransaction)                                                                                                                                                                                                                    |
| `call_contract.RESPONSE`                                  | [`CallContractResponse`](types.Sequencer.md#callcontractresponse)                                                                                                                                                                                                                          |
| `estimate_fee`                                            | \{ `QUERY`: \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \} ; `REQUEST`: [`AccountTransactionItem`](types.Sequencer.md#accounttransactionitem) ; `RESPONSE`: [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse) \}         |
| `estimate_fee.QUERY`                                      | \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \}                                                                                                                                                                                         |
| `estimate_fee.QUERY.blockIdentifier`                      | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `estimate_fee.QUERY.skipValidate`                         | `boolean`                                                                                                                                                                                                                                                                                  |
| `estimate_fee.REQUEST`                                    | [`AccountTransactionItem`](types.Sequencer.md#accounttransactionitem)                                                                                                                                                                                                                      |
| `estimate_fee.RESPONSE`                                   | [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse)                                                                                                                                                                                                                            |
| `get_class_by_hash`                                       | \{ `QUERY`: \{ `classHash`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`CompiledContract`](types.md#compiledcontract) \}                                                                                          |
| `get_class_by_hash.QUERY`                                 | \{ `classHash`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                            |
| `get_class_by_hash.QUERY.classHash`                       | `string`                                                                                                                                                                                                                                                                                   |
| `get_class_by_hash.QUERY.blockIdentifier?`                | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_class_by_hash.REQUEST`                               | `never`                                                                                                                                                                                                                                                                                    |
| `get_class_by_hash.RESPONSE`                              | [`CompiledContract`](types.md#compiledcontract)                                                                                                                                                                                                                                            |
| `get_class_hash_at`                                       | \{ `QUERY`: \{ `contractAddress`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: `string` \}                                                                                                                           |
| `get_class_hash_at.QUERY`                                 | \{ `contractAddress`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                      |
| `get_class_hash_at.QUERY.contractAddress`                 | `string`                                                                                                                                                                                                                                                                                   |
| `get_class_hash_at.QUERY.blockIdentifier?`                | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_class_hash_at.REQUEST`                               | `never`                                                                                                                                                                                                                                                                                    |
| `get_class_hash_at.RESPONSE`                              | `string`                                                                                                                                                                                                                                                                                   |
| `get_state_update`                                        | \{ `QUERY`: \{ `blockHash?`: `string` ; `blockNumber?`: [`BlockNumber`](types.md#blocknumber) \} ; `REQUEST`: `never` ; `RESPONSE`: [`StateUpdateResponse`](types.Sequencer.md#stateupdateresponse) \}                                                                                     |
| `get_state_update.QUERY`                                  | \{ `blockHash?`: `string` ; `blockNumber?`: [`BlockNumber`](types.md#blocknumber) \}                                                                                                                                                                                                       |
| `get_state_update.QUERY.blockHash?`                       | `string`                                                                                                                                                                                                                                                                                   |
| `get_state_update.QUERY.blockNumber?`                     | [`BlockNumber`](types.md#blocknumber)                                                                                                                                                                                                                                                      |
| `get_state_update.REQUEST`                                | `never`                                                                                                                                                                                                                                                                                    |
| `get_state_update.RESPONSE`                               | [`StateUpdateResponse`](types.Sequencer.md#stateupdateresponse)                                                                                                                                                                                                                            |
| `get_full_contract`                                       | \{ `QUERY`: \{ `contractAddress`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `never` ; `RESPONSE`: [`CompiledContract`](types.md#compiledcontract) \}                                                                                    |
| `get_full_contract.QUERY`                                 | \{ `contractAddress`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                      |
| `get_full_contract.QUERY.contractAddress`                 | `string`                                                                                                                                                                                                                                                                                   |
| `get_full_contract.QUERY.blockIdentifier?`                | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_full_contract.REQUEST`                               | `never`                                                                                                                                                                                                                                                                                    |
| `get_full_contract.RESPONSE`                              | [`CompiledContract`](types.md#compiledcontract)                                                                                                                                                                                                                                            |
| `estimate_message_fee`                                    | \{ `QUERY`: `any` ; `REQUEST`: `any` ; `RESPONSE`: [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse) \}                                                                                                                                                                      |
| `estimate_message_fee.QUERY`                              | `any`                                                                                                                                                                                                                                                                                      |
| `estimate_message_fee.REQUEST`                            | `any`                                                                                                                                                                                                                                                                                      |
| `estimate_message_fee.RESPONSE`                           | [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse)                                                                                                                                                                                                                            |
| `simulate_transaction`                                    | \{ `QUERY`: \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \} ; `REQUEST`: [`AccountTransaction`](types.Sequencer.md#accounttransaction) ; `RESPONSE`: [`SimulateTransactionResponse`](types.Sequencer.md#simulatetransactionresponse) \} |
| `simulate_transaction.QUERY`                              | \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \}                                                                                                                                                                                         |
| `simulate_transaction.QUERY.blockIdentifier`              | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `simulate_transaction.QUERY.skipValidate`                 | `boolean`                                                                                                                                                                                                                                                                                  |
| `simulate_transaction.REQUEST`                            | [`AccountTransaction`](types.Sequencer.md#accounttransaction)                                                                                                                                                                                                                              |
| `simulate_transaction.RESPONSE`                           | [`SimulateTransactionResponse`](types.Sequencer.md#simulatetransactionresponse)                                                                                                                                                                                                            |
| `estimate_fee_bulk`                                       | \{ `QUERY`: \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \} ; `REQUEST`: [`AccountTransaction`](types.Sequencer.md#accounttransaction) ; `RESPONSE`: [`EstimateFeeResponseBulk`](types.Sequencer.md#estimatefeeresponsebulk) \}         |
| `estimate_fee_bulk.QUERY`                                 | \{ `blockIdentifier`: [`BlockIdentifier`](types.md#blockidentifier) ; `skipValidate`: `boolean` \}                                                                                                                                                                                         |
| `estimate_fee_bulk.QUERY.blockIdentifier`                 | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `estimate_fee_bulk.QUERY.skipValidate`                    | `boolean`                                                                                                                                                                                                                                                                                  |
| `estimate_fee_bulk.REQUEST`                               | [`AccountTransaction`](types.Sequencer.md#accounttransaction)                                                                                                                                                                                                                              |
| `estimate_fee_bulk.RESPONSE`                              | [`EstimateFeeResponseBulk`](types.Sequencer.md#estimatefeeresponsebulk)                                                                                                                                                                                                                    |
| `get_block_traces`                                        | \{ `QUERY`: \{ `blockHash?`: `string` ; `blockNumber?`: [`BlockNumber`](types.md#blocknumber) \} ; `REQUEST`: `never` ; `RESPONSE`: [`BlockTransactionTracesResponse`](types.Sequencer.md#blocktransactiontracesresponse) \}                                                               |
| `get_block_traces.QUERY`                                  | \{ `blockHash?`: `string` ; `blockNumber?`: [`BlockNumber`](types.md#blocknumber) \}                                                                                                                                                                                                       |
| `get_block_traces.QUERY.blockHash?`                       | `string`                                                                                                                                                                                                                                                                                   |
| `get_block_traces.QUERY.blockNumber?`                     | [`BlockNumber`](types.md#blocknumber)                                                                                                                                                                                                                                                      |
| `get_block_traces.REQUEST`                                | `never`                                                                                                                                                                                                                                                                                    |
| `get_block_traces.RESPONSE`                               | [`BlockTransactionTracesResponse`](types.Sequencer.md#blocktransactiontracesresponse)                                                                                                                                                                                                      |
| `get_compiled_class_by_class_hash`                        | \{ `QUERY`: \{ `classHash`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \} ; `REQUEST`: `any` ; `RESPONSE`: [`CairoAssembly`](types.md#cairoassembly) \}                                                                                                  |
| `get_compiled_class_by_class_hash.QUERY`                  | \{ `classHash`: `string` ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) \}                                                                                                                                                                                            |
| `get_compiled_class_by_class_hash.QUERY.classHash`        | `string`                                                                                                                                                                                                                                                                                   |
| `get_compiled_class_by_class_hash.QUERY.blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier)                                                                                                                                                                                                                                              |
| `get_compiled_class_by_class_hash.REQUEST`                | `any`                                                                                                                                                                                                                                                                                      |
| `get_compiled_class_by_class_hash.RESPONSE`               | [`CairoAssembly`](types.md#cairoassembly)                                                                                                                                                                                                                                                  |

#### Defined in

[src/types/api/sequencer.ts:362](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L362)

---
id: 'types'
title: 'Namespace: types'
sidebar_label: 'types'
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [RPC](types.RPC.md)
- [Sequencer](types.Sequencer.md)

## Enumerations

- [SIMULATION_FLAG](../enums/types.SIMULATION_FLAG.md)
- [ValidateType](../enums/types.ValidateType.md)
- [Uint](../enums/types.Uint.md)
- [Litteral](../enums/types.Litteral.md)
- [TransactionType](../enums/types.TransactionType.md)
- [TransactionStatus](../enums/types.TransactionStatus.md)
- [TransactionFinalityStatus](../enums/types.TransactionFinalityStatus.md)
- [TransactionExecutionStatus](../enums/types.TransactionExecutionStatus.md)
- [BlockStatus](../enums/types.BlockStatus.md)
- [BlockTag](../enums/types.BlockTag.md)
- [EntryPointType](../enums/types.EntryPointType.md)

## Interfaces

- [EstimateFee](../interfaces/types.EstimateFee.md)
- [EstimateFeeDetails](../interfaces/types.EstimateFeeDetails.md)
- [DeployContractResponse](../interfaces/types.DeployContractResponse.md)
- [Uint256](../interfaces/types.Uint256.md)
- [CallStruct](../interfaces/types.CallStruct.md)
- [Program](../interfaces/types.Program.md)
- [ProviderOptions](../interfaces/types.ProviderOptions.md)
- [GetBlockResponse](../interfaces/types.GetBlockResponse.md)
- [GetCodeResponse](../interfaces/types.GetCodeResponse.md)
- [ContractEntryPoint](../interfaces/types.ContractEntryPoint.md)
- [CommonTransactionResponse](../interfaces/types.CommonTransactionResponse.md)
- [InvokeTransactionResponse](../interfaces/types.InvokeTransactionResponse.md)
- [DeclareTransactionResponse](../interfaces/types.DeclareTransactionResponse.md)
- [MessageToL1](../interfaces/types.MessageToL1.md)
- [Event](../interfaces/types.Event.md)
- [MessageToL2](../interfaces/types.MessageToL2.md)
- [InvokeTransactionReceiptResponse](../interfaces/types.InvokeTransactionReceiptResponse.md)
- [EstimateFeeResponse](../interfaces/types.EstimateFeeResponse.md)
- [InvokeFunctionResponse](../interfaces/types.InvokeFunctionResponse.md)
- [DeclareContractResponse](../interfaces/types.DeclareContractResponse.md)
- [StateUpdateResponse](../interfaces/types.StateUpdateResponse.md)
- [InvocationsSignerDetails](../interfaces/types.InvocationsSignerDetails.md)
- [DeclareSignerDetails](../interfaces/types.DeclareSignerDetails.md)
- [StarkNetDomain](../interfaces/types.StarkNetDomain.md)
- [TypedData](../interfaces/types.TypedData.md)

## Type Aliases

### CallL1Handler

Ƭ **CallL1Handler**: `Object`

#### Type declaration

| Name                   | Type       |
| :--------------------- | :--------- |
| `from_address`         | `string`   |
| `to_address`           | `string`   |
| `entry_point_selector` | `string`   |
| `payload`              | `string`[] |

#### Defined in

[src/types/api/sequencer.ts:66](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L66)

---

### DeployedContractItem

Ƭ **DeployedContractItem**: `Object`

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `address`    | `string` |
| `class_hash` | `string` |

#### Defined in

[src/types/api/sequencer.ts:73](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L73)

---

### ExecutionResources

Ƭ **ExecutionResources**: `Object`

#### Type declaration

| Name                                           | Type                                                                                                                                                                                     |
| :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `n_steps`                                      | `number`                                                                                                                                                                                 |
| `builtin_instance_counter`                     | \{ `pedersen_builtin`: `number` ; `range_check_builtin`: `number` ; `bitwise_builtin`: `number` ; `output_builtin`: `number` ; `ecdsa_builtin`: `number` ; `ec_op_builtin?`: `number` \} |
| `builtin_instance_counter.pedersen_builtin`    | `number`                                                                                                                                                                                 |
| `builtin_instance_counter.range_check_builtin` | `number`                                                                                                                                                                                 |
| `builtin_instance_counter.bitwise_builtin`     | `number`                                                                                                                                                                                 |
| `builtin_instance_counter.output_builtin`      | `number`                                                                                                                                                                                 |
| `builtin_instance_counter.ecdsa_builtin`       | `number`                                                                                                                                                                                 |
| `builtin_instance_counter.ec_op_builtin?`      | `number`                                                                                                                                                                                 |
| `n_memory_holes`                               | `number`                                                                                                                                                                                 |

#### Defined in

[src/types/api/sequencer.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L53)

---

### FunctionInvocation

Ƭ **FunctionInvocation**: `Object`

#### Type declaration

| Name                  | Type                                                    |
| :-------------------- | :------------------------------------------------------ |
| `caller_address`      | `string`                                                |
| `contract_address`    | `string`                                                |
| `calldata`            | [`RawCalldata`](types.md#rawcalldata)                   |
| `call_type?`          | `string`                                                |
| `class_hash?`         | `string`                                                |
| `selector?`           | `string`                                                |
| `entry_point_type?`   | [`EXTERNAL`](../enums/types.EntryPointType.md#external) |
| `result`              | `any`[]                                                 |
| `execution_resources` | [`ExecutionResources`](types.md#executionresources)     |
| `internal_calls`      | [`FunctionInvocation`](types.md#functioninvocation)[]   |
| `events`              | `any`[]                                                 |
| `messages`            | `any`[]                                                 |

#### Defined in

[src/types/api/sequencer.ts:38](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L38)

---

### GetContractAddressesResponse

Ƭ **GetContractAddressesResponse**: `Object`

#### Type declaration

| Name                   | Type     |
| :--------------------- | :------- |
| `Starknet`             | `string` |
| `GpsStatementVerifier` | `string` |

#### Defined in

[src/types/api/sequencer.ts:33](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L33)

---

### GetTransactionStatusResponse

Ƭ **GetTransactionStatusResponse**: `Object`

#### Type declaration

| Name                              | Type                                                                         |
| :-------------------------------- | :--------------------------------------------------------------------------- |
| `tx_status`                       | [`TransactionStatus`](../enums/types.TransactionStatus.md)                   |
| `execution_status`                | [`TransactionExecutionStatus`](../enums/types.TransactionExecutionStatus.md) |
| `finality_status`                 | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md)   |
| `block_hash?`                     | `string`                                                                     |
| `tx_failure_reason?`              | \{ `code`: `string` ; `error_message`: `string` \}                           |
| `tx_failure_reason.code`          | `string`                                                                     |
| `tx_failure_reason.error_message` | `string`                                                                     |
| `tx_revert_reason?`               | `string`                                                                     |

#### Defined in

[src/types/api/sequencer.ts:21](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L21)

---

### SequencerIdentifier

Ƭ **SequencerIdentifier**: \{ `blockHash`: `string` \} \| \{ `blockNumber`: [`BlockNumber`](types.md#blocknumber) \}

#### Defined in

[src/types/api/sequencer.ts:78](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/api/sequencer.ts#L78)

---

### EstimateFeeBulk

Ƭ **EstimateFeeBulk**: [`EstimateFee`](../interfaces/types.EstimateFee.md)[]

#### Defined in

[src/types/account.ts:8](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L8)

---

### AccountInvocationsFactoryDetails

Ƭ **AccountInvocationsFactoryDetails**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `versions`         | `bigint`[]                                    |
| `nonce?`           | [`BigNumberish`](types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |

#### Defined in

[src/types/account.ts:10](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L10)

---

### MultiDeployContractResponse

Ƭ **MultiDeployContractResponse**: `Object`

#### Type declaration

| Name               | Type       |
| :----------------- | :--------- |
| `contract_address` | `string`[] |
| `transaction_hash` | `string`   |

#### Defined in

[src/types/account.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L27)

---

### DeployContractUDCResponse

Ƭ **DeployContractUDCResponse**: `Object`

#### Type declaration

| Name               | Type       |
| :----------------- | :--------- |
| `contract_address` | `string`   |
| `transaction_hash` | `string`   |
| `address`          | `string`   |
| `deployer`         | `string`   |
| `unique`           | `string`   |
| `classHash`        | `string`   |
| `calldata_len`     | `string`   |
| `calldata`         | `string`[] |
| `salt`             | `string`   |

#### Defined in

[src/types/account.ts:32](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L32)

---

### DeclareDeployUDCResponse

Ƭ **DeclareDeployUDCResponse**: `Object`

#### Type declaration

| Name      | Type                                                                                                                                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `declare` | \{ `class_hash`: [`BigNumberish`](types.md#bignumberish) \} & `Partial`\<[`DeclareTransactionReceiptResponse`](types.md#declaretransactionreceiptresponse)\> |
| `deploy`  | [`DeployContractUDCResponse`](types.md#deploycontractudcresponse)                                                                                            |

#### Defined in

[src/types/account.ts:44](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L44)

---

### SimulateTransactionDetails

Ƭ **SimulateTransactionDetails**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `nonce?`           | [`BigNumberish`](types.md#bignumberish)       |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |
| `skipValidate?`    | `boolean`                                     |
| `skipExecute?`     | `boolean`                                     |

#### Defined in

[src/types/account.ts:51](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/account.ts#L51)

---

### AsyncContractFunction

Ƭ **AsyncContractFunction**\<`T`\>: (...`args`: [`ArgsOrCalldataWithOptions`](types.md#argsorcalldatawithoptions)) => `Promise`\<`T`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Type declaration

▸ (`...args`): `Promise`\<`T`\>

##### Parameters

| Name      | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `...args` | [`ArgsOrCalldataWithOptions`](types.md#argsorcalldatawithoptions) |

##### Returns

`Promise`\<`T`\>

#### Defined in

[src/types/contract.ts:11](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L11)

---

### ContractFunction

Ƭ **ContractFunction**: (...`args`: [`ArgsOrCalldataWithOptions`](types.md#argsorcalldatawithoptions)) => `any`

#### Type declaration

▸ (`...args`): `any`

##### Parameters

| Name      | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `...args` | [`ArgsOrCalldataWithOptions`](types.md#argsorcalldatawithoptions) |

##### Returns

`any`

#### Defined in

[src/types/contract.ts:12](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L12)

---

### Result

Ƭ **Result**: \{ `[key: string]`: `any`; \} \| [`Result`](types.md#result)[] \| `bigint` \| `string` \| `boolean` \| [`CairoEnum`](types.md#cairoenum)

#### Defined in

[src/types/contract.ts:14](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L14)

---

### ArgsOrCalldata

Ƭ **ArgsOrCalldata**: [`RawArgsArray`](types.md#rawargsarray) \| [[`Calldata`](types.md#calldata)] \| [`Calldata`](types.md#calldata)

#### Defined in

[src/types/contract.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L24)

---

### ArgsOrCalldataWithOptions

Ƭ **ArgsOrCalldataWithOptions**: [`ArgsOrCalldata`](types.md#argsorcalldata) & [`ContractOptions`](types.md#contractoptions)

#### Defined in

[src/types/contract.ts:25](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L25)

---

### ContractOptions

Ƭ **ContractOptions**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |
| `parseRequest?`    | `boolean`                                     |
| `parseResponse?`   | `boolean`                                     |
| `formatResponse?`  | \{ `[key: string]`: `any`; \}                 |
| `maxFee?`          | [`BigNumberish`](types.md#bignumberish)       |
| `nonce?`           | [`BigNumberish`](types.md#bignumberish)       |
| `signature?`       | [`Signature`](types.md#signature)             |
| `addressSalt?`     | `string`                                      |

#### Defined in

[src/types/contract.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L26)

---

### CallOptions

Ƭ **CallOptions**: `Pick`\<[`ContractOptions`](types.md#contractoptions), `"blockIdentifier"` \| `"parseRequest"` \| `"parseResponse"` \| `"formatResponse"`\>

#### Defined in

[src/types/contract.ts:37](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L37)

---

### InvokeOptions

Ƭ **InvokeOptions**: `Pick`\<[`ContractOptions`](types.md#contractoptions), `"maxFee"` \| `"nonce"` \| `"signature"` \| `"parseRequest"`\>

#### Defined in

[src/types/contract.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L42)

---

### ParsedEvent

Ƭ **ParsedEvent**: `Object`

#### Index signature

▪ [name: `string`]: [`ParsedStruct`](types.md#parsedstruct)

#### Defined in

[src/types/contract.ts:47](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L47)

---

### ParsedEvents

Ƭ **ParsedEvents**: [`ParsedEvent`](types.md#parsedevent)[]

#### Defined in

[src/types/contract.ts:49](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/contract.ts#L49)

---

### WeierstrassSignatureType

Ƭ **WeierstrassSignatureType**: [`SignatureType`](../interfaces/ec.weierstrass.SignatureType.md)

#### Defined in

[src/types/lib/index.ts:6](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L6)

---

### ArraySignatureType

Ƭ **ArraySignatureType**: `string`[]

#### Defined in

[src/types/lib/index.ts:7](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L7)

---

### Signature

Ƭ **Signature**: [`ArraySignatureType`](types.md#arraysignaturetype) \| [`WeierstrassSignatureType`](types.md#weierstrasssignaturetype)

#### Defined in

[src/types/lib/index.ts:8](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L8)

---

### BigNumberish

Ƭ **BigNumberish**: `string` \| `number` \| `bigint`

#### Defined in

[src/types/lib/index.ts:10](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L10)

---

### Calldata

Ƭ **Calldata**: `string`[] & \{ `__compiled__?`: `boolean` \}

Compiled calldata ready to be sent
decimal-string array

#### Defined in

[src/types/lib/index.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L16)

---

### RawCalldata

Ƭ **RawCalldata**: [`BigNumberish`](types.md#bignumberish)[]

BigNumberish array
use CallData.compile() to convert to Calldata

#### Defined in

[src/types/lib/index.ts:32](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L32)

---

### HexCalldata

Ƭ **HexCalldata**: `string`[]

Hexadecimal-string array

#### Defined in

[src/types/lib/index.ts:37](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L37)

---

### AllowArray

Ƭ **AllowArray**\<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types/lib/index.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L39)

---

### OptionalPayload

Ƭ **OptionalPayload**\<`T`\>: \{ `payload`: `T` \} \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types/lib/index.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L41)

---

### RawArgs

Ƭ **RawArgs**: [`RawArgsObject`](types.md#rawargsobject) \| [`RawArgsArray`](types.md#rawargsarray)

#### Defined in

[src/types/lib/index.ts:43](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L43)

---

### RawArgsObject

Ƭ **RawArgsObject**: `Object`

#### Index signature

▪ [inputName: `string`]: [`MultiType`](types.md#multitype) \| [`MultiType`](types.md#multitype)[] \| [`RawArgs`](types.md#rawargs)

#### Defined in

[src/types/lib/index.ts:45](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L45)

---

### RawArgsArray

Ƭ **RawArgsArray**: ([`MultiType`](types.md#multitype) \| [`MultiType`](types.md#multitype)[] \| [`RawArgs`](types.md#rawargs))[]

#### Defined in

[src/types/lib/index.ts:49](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L49)

---

### MultiType

Ƭ **MultiType**: [`BigNumberish`](types.md#bignumberish) \| [`Uint256`](../interfaces/types.Uint256.md) \| `object` \| `boolean` \| [`CairoEnum`](types.md#cairoenum)

#### Defined in

[src/types/lib/index.ts:51](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L51)

---

### UniversalDeployerContractPayload

Ƭ **UniversalDeployerContractPayload**: `Object`

#### Type declaration

| Name                   | Type                                    |
| :--------------------- | :-------------------------------------- |
| `classHash`            | [`BigNumberish`](types.md#bignumberish) |
| `salt?`                | `string`                                |
| `unique?`              | `boolean`                               |
| `constructorCalldata?` | [`RawArgs`](types.md#rawargs)           |

#### Defined in

[src/types/lib/index.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L53)

---

### DeployAccountContractPayload

Ƭ **DeployAccountContractPayload**: `Object`

#### Type declaration

| Name                   | Type                                    |
| :--------------------- | :-------------------------------------- |
| `classHash`            | `string`                                |
| `constructorCalldata?` | [`RawArgs`](types.md#rawargs)           |
| `addressSalt?`         | [`BigNumberish`](types.md#bignumberish) |
| `contractAddress?`     | `string`                                |

#### Defined in

[src/types/lib/index.ts:60](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L60)

---

### DeployAccountContractTransaction

Ƭ **DeployAccountContractTransaction**: `Omit`\<[`DeployAccountContractPayload`](types.md#deployaccountcontractpayload), `"contractAddress"`\> & \{ `signature?`: [`Signature`](types.md#signature) \}

#### Defined in

[src/types/lib/index.ts:67](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L67)

---

### DeclareContractPayload

Ƭ **DeclareContractPayload**: `Object`

#### Type declaration

| Name                 | Type                                                        |
| :------------------- | :---------------------------------------------------------- |
| `contract`           | [`CompiledContract`](types.md#compiledcontract) \| `string` |
| `classHash?`         | `string`                                                    |
| `casm?`              | [`CompiledSierraCasm`](types.md#compiledsierracasm)         |
| `compiledClassHash?` | `string`                                                    |

#### Defined in

[src/types/lib/index.ts:74](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L74)

---

### CompleteDeclareContractPayload

Ƭ **CompleteDeclareContractPayload**: `Object`

#### Type declaration

| Name                 | Type                                                        |
| :------------------- | :---------------------------------------------------------- |
| `contract`           | [`CompiledContract`](types.md#compiledcontract) \| `string` |
| `classHash`          | `string`                                                    |
| `casm?`              | [`CompiledSierraCasm`](types.md#compiledsierracasm)         |
| `compiledClassHash?` | `string`                                                    |

#### Defined in

[src/types/lib/index.ts:81](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L81)

---

### DeclareAndDeployContractPayload

Ƭ **DeclareAndDeployContractPayload**: `Omit`\<[`UniversalDeployerContractPayload`](types.md#universaldeployercontractpayload), `"classHash"`\> & [`DeclareContractPayload`](types.md#declarecontractpayload)

#### Defined in

[src/types/lib/index.ts:88](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L88)

---

### DeclareContractTransaction

Ƭ **DeclareContractTransaction**: `Object`

#### Type declaration

| Name                 | Type                                      |
| :------------------- | :---------------------------------------- |
| `contract`           | [`ContractClass`](types.md#contractclass) |
| `senderAddress`      | `string`                                  |
| `signature?`         | [`Signature`](types.md#signature)         |
| `compiledClassHash?` | `string`                                  |

#### Defined in

[src/types/lib/index.ts:91](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L91)

---

### CallDetails

Ƭ **CallDetails**: `Object`

#### Type declaration

| Name              | Type                                                             |
| :---------------- | :--------------------------------------------------------------- |
| `contractAddress` | `string`                                                         |
| `calldata?`       | [`RawArgs`](types.md#rawargs) \| [`Calldata`](types.md#calldata) |
| `entrypoint?`     | `string`                                                         |

#### Defined in

[src/types/lib/index.ts:98](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L98)

---

### Invocation

Ƭ **Invocation**: [`CallDetails`](types.md#calldetails) & \{ `signature?`: [`Signature`](types.md#signature) \}

#### Defined in

[src/types/lib/index.ts:104](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L104)

---

### Call

Ƭ **Call**: [`CallDetails`](types.md#calldetails) & \{ `entrypoint`: `string` \}

#### Defined in

[src/types/lib/index.ts:106](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L106)

---

### CairoVersion

Ƭ **CairoVersion**: `"0"` \| `"1"` \| `undefined`

#### Defined in

[src/types/lib/index.ts:108](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L108)

---

### CompilerVersion

Ƭ **CompilerVersion**: `"0"` \| `"1"` \| `"2"` \| `undefined`

#### Defined in

[src/types/lib/index.ts:109](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L109)

---

### InvocationsDetails

Ƭ **InvocationsDetails**: `Object`

#### Type declaration

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `nonce?`   | [`BigNumberish`](types.md#bignumberish) |
| `maxFee?`  | [`BigNumberish`](types.md#bignumberish) |
| `version?` | [`BigNumberish`](types.md#bignumberish) |

#### Defined in

[src/types/lib/index.ts:111](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L111)

---

### Details

Ƭ **Details**: `Object`

Contain all additional details params

#### Type declaration

| Name      | Type                                                       |
| :-------- | :--------------------------------------------------------- |
| `nonce`   | [`BigNumberish`](types.md#bignumberish)                    |
| `maxFee`  | [`BigNumberish`](types.md#bignumberish)                    |
| `version` | [`BigNumberish`](types.md#bignumberish)                    |
| `chainId` | [`StarknetChainId`](../enums/constants.StarknetChainId.md) |

#### Defined in

[src/types/lib/index.ts:120](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L120)

---

### InvocationsDetailsWithNonce

Ƭ **InvocationsDetailsWithNonce**: [`InvocationsDetails`](types.md#invocationsdetails) & \{ `nonce`: [`BigNumberish`](types.md#bignumberish) \}

#### Defined in

[src/types/lib/index.ts:127](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L127)

---

### BlockNumber

Ƭ **BlockNumber**: [`BlockTag`](../enums/types.BlockTag.md) \| `null` \| `number`

#### Defined in

[src/types/lib/index.ts:176](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L176)

---

### BlockIdentifier

Ƭ **BlockIdentifier**: [`BlockNumber`](types.md#blocknumber) \| [`BigNumberish`](types.md#bignumberish)

hex string and BN are detected as block hashes
decimal string and number are detected as block numbers
null appends nothing to the request url

#### Defined in

[src/types/lib/index.ts:183](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L183)

---

### AccountInvocationItem

Ƭ **AccountInvocationItem**: \{ `type`: [`DECLARE`](../enums/types.TransactionType.md#declare) \} & [`DeclareContractTransaction`](types.md#declarecontracttransaction) \| \{ `type`: [`DEPLOY_ACCOUNT`](../enums/types.TransactionType.md#deploy_account) \} & [`DeployAccountContractTransaction`](types.md#deployaccountcontracttransaction) \| \{ `type`: [`INVOKE`](../enums/types.TransactionType.md#invoke) \} & [`Invocation`](types.md#invocation) & [`InvocationsDetailsWithNonce`](types.md#invocationsdetailswithnonce)

items used by AccountInvocations

#### Defined in

[src/types/lib/index.ts:188](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L188)

---

### AccountInvocations

Ƭ **AccountInvocations**: [`AccountInvocationItem`](types.md#accountinvocationitem)[]

Complete invocations array with account details (internal type from account -> provider)

#### Defined in

[src/types/lib/index.ts:198](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L198)

---

### Invocations

Ƭ **Invocations**: (\{ `type`: [`DECLARE`](../enums/types.TransactionType.md#declare) \} & [`OptionalPayload`](types.md#optionalpayload)\<[`DeclareContractPayload`](types.md#declarecontractpayload)\> \| \{ `type`: [`DEPLOY`](../enums/types.TransactionType.md#deploy) \} & [`OptionalPayload`](types.md#optionalpayload)\<[`AllowArray`](types.md#allowarray)\<[`UniversalDeployerContractPayload`](types.md#universaldeployercontractpayload)\>\> \| \{ `type`: [`DEPLOY_ACCOUNT`](../enums/types.TransactionType.md#deploy_account) \} & [`OptionalPayload`](types.md#optionalpayload)\<[`DeployAccountContractPayload`](types.md#deployaccountcontractpayload)\> \| \{ `type`: [`INVOKE`](../enums/types.TransactionType.md#invoke) \} & [`OptionalPayload`](types.md#optionalpayload)\<[`AllowArray`](types.md#allowarray)\<[`Call`](types.md#call)\>\>)[]

Invocations array user provide to bulk method (simulate)

#### Defined in

[src/types/lib/index.ts:203](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L203)

---

### Tupled

Ƭ **Tupled**: `Object`

#### Type declaration

| Name      | Type     |
| :-------- | :------- |
| `element` | `any`    |
| `type`    | `string` |

#### Defined in

[src/types/lib/index.ts:212](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L212)

---

### Args

Ƭ **Args**: `Object`

#### Index signature

▪ [inputName: `string`]: [`BigNumberish`](types.md#bignumberish) \| [`BigNumberish`](types.md#bignumberish)[] \| [`ParsedStruct`](types.md#parsedstruct) \| [`ParsedStruct`](types.md#parsedstruct)[]

#### Defined in

[src/types/lib/index.ts:214](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L214)

---

### ParsedStruct

Ƭ **ParsedStruct**: `Object`

#### Index signature

▪ [key: `string`]: [`BigNumberish`](types.md#bignumberish) \| [`BigNumberish`](types.md#bignumberish)[] \| [`ParsedStruct`](types.md#parsedstruct) \| [`Uint256`](../interfaces/types.Uint256.md)

#### Defined in

[src/types/lib/index.ts:217](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L217)

---

### waitForTransactionOptions

Ƭ **waitForTransactionOptions**: `Object`

#### Type declaration

| Name             | Type                                                                                                                                                           |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `retryInterval?` | `number`                                                                                                                                                       |
| `successStates?` | ([`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) \| [`TransactionExecutionStatus`](../enums/types.TransactionExecutionStatus.md))[] |
| `errorStates?`   | ([`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) \| [`TransactionExecutionStatus`](../enums/types.TransactionExecutionStatus.md))[] |

#### Defined in

[src/types/lib/index.ts:221](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L221)

---

### getSimulateTransactionOptions

Ƭ **getSimulateTransactionOptions**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |
| `skipValidate?`    | `boolean`                                     |
| `skipExecute?`     | `boolean`                                     |
| `skipFeeCharge?`   | `boolean`                                     |

#### Defined in

[src/types/lib/index.ts:227](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L227)

---

### getContractVersionOptions

Ƭ **getContractVersionOptions**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |
| `compiler?`        | `boolean`                                     |

#### Defined in

[src/types/lib/index.ts:234](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L234)

---

### getEstimateFeeBulkOptions

Ƭ **getEstimateFeeBulkOptions**: `Object`

#### Type declaration

| Name               | Type                                          |
| :----------------- | :-------------------------------------------- |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier) |
| `skipValidate?`    | `boolean`                                     |

#### Defined in

[src/types/lib/index.ts:239](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L239)

---

### ContractVersion

Ƭ **ContractVersion**: `Object`

Represent Contract version

#### Type declaration

| Name       | Type                                          | Description                                                |
| :--------- | :-------------------------------------------- | :--------------------------------------------------------- |
| `cairo`    | [`CairoVersion`](types.md#cairoversion)       | version of the cairo language                              |
| `compiler` | [`CompilerVersion`](types.md#compilerversion) | version of the cairo compiler used to compile the contract |

#### Defined in

[src/types/lib/index.ts:253](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/index.ts#L253)

---

### ContractClass

Ƭ **ContractClass**: [`LegacyContractClass`](types.md#legacycontractclass) \| [`SierraContractClass`](types.md#sierracontractclass)

format produced after compressing compiled contract
CompressedCompiledContract

#### Defined in

[src/types/lib/contract/index.ts:9](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/index.ts#L9)

---

### CompiledContract

Ƭ **CompiledContract**: [`LegacyCompiledContract`](types.md#legacycompiledcontract) \| [`CompiledSierra`](types.md#compiledsierra)

format produced after compile .cairo to .json

#### Defined in

[src/types/lib/contract/index.ts:14](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/index.ts#L14)

---

### CairoContract

Ƭ **CairoContract**: [`ContractClass`](types.md#contractclass) \| [`CompiledContract`](types.md#compiledcontract)

Compressed or decompressed Cairo0 or Cairo1 Contract

#### Defined in

[src/types/lib/contract/index.ts:19](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/index.ts#L19)

---

### Abi

Ƭ **Abi**: ([`FunctionAbi`](types.md#functionabi) \| [`EventAbi`](types.md#eventabi) \| [`StructAbi`](types.md#structabi) \| `any`)[]

ABI

#### Defined in

[src/types/lib/contract/abi.ts:2](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L2)

---

### AbiEntry

Ƭ **AbiEntry**: `Object`

#### Type declaration

| Name   | Type                              |
| :----- | :-------------------------------- |
| `name` | `string`                          |
| `type` | `"felt"` \| `"felt*"` \| `string` |

#### Defined in

[src/types/lib/contract/abi.ts:5](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L5)

---

### EventEntry

Ƭ **EventEntry**: `Object`

#### Type declaration

| Name   | Type                              |
| :----- | :-------------------------------- |
| `name` | `string`                          |
| `type` | `"felt"` \| `"felt*"` \| `string` |
| `kind` | `"key"` \| `"data"`               |

#### Defined in

[src/types/lib/contract/abi.ts:7](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L7)

---

### FunctionAbi

Ƭ **FunctionAbi**: `Object`

#### Type declaration

| Name                | Type                              |
| :------------------ | :-------------------------------- |
| `inputs`            | [`AbiEntry`](types.md#abientry)[] |
| `name`              | `string`                          |
| `outputs`           | [`AbiEntry`](types.md#abientry)[] |
| `stateMutability?`  | `"view"`                          |
| `state_mutability?` | `string`                          |
| `type`              | `FunctionAbiType`                 |

#### Defined in

[src/types/lib/contract/abi.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L16)

---

### AbiStructs

Ƭ **AbiStructs**: `Object`

#### Index signature

▪ [name: `string`]: [`StructAbi`](types.md#structabi)

#### Defined in

[src/types/lib/contract/abi.ts:25](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L25)

---

### StructAbi

Ƭ **StructAbi**: `Object`

#### Type declaration

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `members` | [`AbiEntry`](types.md#abientry) & \{ `offset`: `number` }[] |
| `name`    | `string`                                                    |
| `size`    | `number`                                                    |
| `type`    | `"struct"`                                                  |

#### Defined in

[src/types/lib/contract/abi.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L27)

---

### AbiEnums

Ƭ **AbiEnums**: `Object`

#### Index signature

▪ [name: `string`]: [`EnumAbi`](types.md#enumabi)

#### Defined in

[src/types/lib/contract/abi.ts:34](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L34)

---

### EnumAbi

Ƭ **EnumAbi**: `Object`

#### Type declaration

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `variants` | [`AbiEntry`](types.md#abientry) & \{ `offset`: `number` }[] |
| `name`     | `string`                                                    |
| `size`     | `number`                                                    |
| `type`     | `"enum"`                                                    |

#### Defined in

[src/types/lib/contract/abi.ts:35](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L35)

---

### AbiEvents

Ƭ **AbiEvents**: `Object`

#### Index signature

▪ [hash: `string`]: [`EventAbi`](types.md#eventabi)

#### Defined in

[src/types/lib/contract/abi.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L42)

---

### EventAbi

Ƭ **EventAbi**: [`Cairo1Event`](types.md#cairo1event) \| [`LegacyEvent`](types.md#legacyevent)

#### Defined in

[src/types/lib/contract/abi.ts:44](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L44)

---

### Cairo1Event

Ƭ **Cairo1Event**: `Object`

#### Type declaration

| Name      | Type                                  |
| :-------- | :------------------------------------ |
| `name`    | `string`                              |
| `members` | [`EventEntry`](types.md#evententry)[] |
| `kind`    | `"struct"`                            |
| `type`    | `"event"`                             |

#### Defined in

[src/types/lib/contract/abi.ts:46](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L46)

---

### LegacyEvent

Ƭ **LegacyEvent**: `Object`

#### Type declaration

| Name   | Type                                  |
| :----- | :------------------------------------ |
| `name` | `string`                              |
| `type` | `"event"`                             |
| `data` | [`EventEntry`](types.md#evententry)[] |
| `keys` | [`EventEntry`](types.md#evententry)[] |

#### Defined in

[src/types/lib/contract/abi.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/abi.ts#L53)

---

### LegacyContractClass

Ƭ **LegacyContractClass**: `Object`

format produced after compressing 'program' property

#### Type declaration

| Name                   | Type                                              |
| :--------------------- | :------------------------------------------------ |
| `program`              | [`CompressedProgram`](types.md#compressedprogram) |
| `entry_points_by_type` | [`EntryPointsByType`](types.md#entrypointsbytype) |
| `abi`                  | [`Abi`](types.md#abi)                             |

#### Defined in

[src/types/lib/contract/legacy.ts:7](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L7)

---

### LegacyCompiledContract

Ƭ **LegacyCompiledContract**: `Omit`\<[`LegacyContractClass`](types.md#legacycontractclass), `"program"`\> & \{ `program`: [`Program`](../interfaces/types.Program.md) }

format produced after compile .cairo to .json

#### Defined in

[src/types/lib/contract/legacy.ts:16](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L16)

---

### Builtins

Ƭ **Builtins**: `string`[]

SUBTYPES

#### Defined in

[src/types/lib/contract/legacy.ts:21](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L21)

---

### CompressedProgram

Ƭ **CompressedProgram**: `string`

#### Defined in

[src/types/lib/contract/legacy.ts:22](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L22)

---

### EntryPointsByType

Ƭ **EntryPointsByType**: `Object`

#### Type declaration

| Name          | Type                                                              |
| :------------ | :---------------------------------------------------------------- |
| `CONSTRUCTOR` | [`ContractEntryPointFields`](types.md#contractentrypointfields)[] |
| `EXTERNAL`    | [`ContractEntryPointFields`](types.md#contractentrypointfields)[] |
| `L1_HANDLER`  | [`ContractEntryPointFields`](types.md#contractentrypointfields)[] |

#### Defined in

[src/types/lib/contract/legacy.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L24)

---

### ContractEntryPointFields

Ƭ **ContractEntryPointFields**: `Object`

#### Type declaration

| Name        | Type                            |
| :---------- | :------------------------------ |
| `selector`  | `string`                        |
| `offset`    | `string` \| `number`            |
| `builtins?` | [`Builtins`](types.md#builtins) |

#### Defined in

[src/types/lib/contract/legacy.ts:30](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/legacy.ts#L30)

---

### CairoAssembly

Ƭ **CairoAssembly**: `Object`

SYSTEM TYPES

#### Type declaration

| Name                   | Type                                              |
| :--------------------- | :------------------------------------------------ |
| `prime`                | `string`                                          |
| `compiler_version`     | `string`                                          |
| `bytecode`             | [`ByteCode`](types.md#bytecode)                   |
| `hints`                | `any`[]                                           |
| `pythonic_hints?`      | [`PythonicHints`](types.md#pythonichints)         |
| `entry_points_by_type` | [`EntryPointsByType`](types.md#entrypointsbytype) |

#### Defined in

[src/types/lib/contract/sierra.ts:5](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L5)

---

### CompiledSierra

Ƭ **CompiledSierra**: `Object`

format produced after starknet-compile .cairo to .json
sierra_program is hex array

#### Type declaration

| Name                         | Type                                                          |
| :--------------------------- | :------------------------------------------------------------ |
| `sierra_program`             | [`ByteCode`](types.md#bytecode)                               |
| `sierra_program_debug_info?` | [`SierraProgramDebugInfo`](types.md#sierraprogramdebuginfo)   |
| `contract_class_version`     | `string`                                                      |
| `entry_points_by_type`       | [`SierraEntryPointsByType`](types.md#sierraentrypointsbytype) |
| `abi`                        | [`Abi`](types.md#abi)                                         |

#### Defined in

[src/types/lib/contract/sierra.ts:19](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L19)

---

### SierraContractClass

Ƭ **SierraContractClass**: `Omit`\<[`CompiledSierra`](types.md#compiledsierra), `"abi"` \| `"sierra_program_debug_info"`\> & \{ `sierra_program`: `string` ; `abi`: `string` }

format produced after compressing 'sierra_program', stringifies 'abi' property and omit sierra_program_debug_info
CompressedCompiledSierra

#### Defined in

[src/types/lib/contract/sierra.ts:31](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L31)

---

### CompiledSierraCasm

Ƭ **CompiledSierraCasm**: [`CairoAssembly`](types.md#cairoassembly)

#### Defined in

[src/types/lib/contract/sierra.ts:35](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L35)

---

### ByteCode

Ƭ **ByteCode**: `string`[]

SUBTYPES

#### Defined in

[src/types/lib/contract/sierra.ts:38](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L38)

---

### PythonicHints

Ƭ **PythonicHints**: [`number`, `string`[]][]

#### Defined in

[src/types/lib/contract/sierra.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L39)

---

### SierraProgramDebugInfo

Ƭ **SierraProgramDebugInfo**: `Object`

#### Type declaration

| Name              | Type                   |
| :---------------- | :--------------------- |
| `type_names`      | [`number`, `string`][] |
| `libfunc_names`   | [`number`, `string`][] |
| `user_func_names` | [`number`, `string`][] |

#### Defined in

[src/types/lib/contract/sierra.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L41)

---

### SierraEntryPointsByType

Ƭ **SierraEntryPointsByType**: `Object`

#### Type declaration

| Name          | Type                                                                          |
| :------------ | :---------------------------------------------------------------------------- |
| `CONSTRUCTOR` | [`SierraContractEntryPointFields`](types.md#sierracontractentrypointfields)[] |
| `EXTERNAL`    | [`SierraContractEntryPointFields`](types.md#sierracontractentrypointfields)[] |
| `L1_HANDLER`  | [`SierraContractEntryPointFields`](types.md#sierracontractentrypointfields)[] |

#### Defined in

[src/types/lib/contract/sierra.ts:47](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L47)

---

### SierraContractEntryPointFields

Ƭ **SierraContractEntryPointFields**: `Object`

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `selector`     | `string` |
| `function_idx` | `number` |

#### Defined in

[src/types/lib/contract/sierra.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/lib/contract/sierra.ts#L53)

---

### RpcProviderOptions

Ƭ **RpcProviderOptions**: `Object`

#### Type declaration

| Name               | Type                                                           |
| :----------------- | :------------------------------------------------------------- |
| `nodeUrl?`         | `string` \| [`NetworkName`](../enums/constants.NetworkName.md) |
| `retries?`         | `number`                                                       |
| `headers?`         | `object`                                                       |
| `blockIdentifier?` | [`BlockIdentifier`](types.md#blockidentifier)                  |
| `chainId?`         | [`StarknetChainId`](../enums/constants.StarknetChainId.md)     |
| `default?`         | `boolean`                                                      |

#### Defined in

[src/types/provider/configuration.ts:9](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/configuration.ts#L9)

---

### SequencerHttpMethod

Ƭ **SequencerHttpMethod**: `"POST"` \| `"GET"`

#### Defined in

[src/types/provider/configuration.ts:18](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/configuration.ts#L18)

---

### SequencerProviderOptions

Ƭ **SequencerProviderOptions**: \{ `headers?`: `Record`\<`string`, `string`\> ; `blockIdentifier?`: [`BlockIdentifier`](types.md#blockidentifier) ; `chainId?`: [`StarknetChainId`](../enums/constants.StarknetChainId.md) \} & \{ `network`: [`NetworkName`](../enums/constants.NetworkName.md) \| [`StarknetChainId`](../enums/constants.StarknetChainId.md) \} \| \{ `baseUrl`: `string` ; `feederGatewayUrl?`: `string` ; `gatewayUrl?`: `string` }

#### Defined in

[src/types/provider/configuration.ts:20](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/configuration.ts#L20)

---

### GetTransactionResponse

Ƭ **GetTransactionResponse**: [`InvokeTransactionResponse`](../interfaces/types.InvokeTransactionResponse.md) \| [`DeclareTransactionResponse`](../interfaces/types.DeclareTransactionResponse.md) \| [`RejectedTransactionResponse`](types.md#rejectedtransactionresponse)

#### Defined in

[src/types/provider/response.ts:52](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L52)

---

### RejectedTransactionResponse

Ƭ **RejectedTransactionResponse**: `Object`

#### Type declaration

| Name                                       | Type                                               |
| :----------------------------------------- | :------------------------------------------------- |
| `status`                                   | `REJECTED`                                         |
| `transaction_failure_reason`               | \{ `code`: `string` ; `error_message`: `string` \} |
| `transaction_failure_reason.code`          | `string`                                           |
| `transaction_failure_reason.error_message` | `string`                                           |

#### Defined in

[src/types/provider/response.ts:93](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L93)

---

### GetTransactionReceiptResponse

Ƭ **GetTransactionReceiptResponse**: [`SuccessfulTransactionReceiptResponse`](types.md#successfultransactionreceiptresponse) \| [`RevertedTransactionReceiptResponse`](types.md#revertedtransactionreceiptresponse) \| [`RejectedTransactionReceiptResponse`](types.md#rejectedtransactionreceiptresponse)

#### Defined in

[src/types/provider/response.ts:101](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L101)

---

### SuccessfulTransactionReceiptResponse

Ƭ **SuccessfulTransactionReceiptResponse**: [`InvokeTransactionReceiptResponse`](../interfaces/types.InvokeTransactionReceiptResponse.md) \| [`DeployTransactionReceiptResponse`](types.md#deploytransactionreceiptresponse) \| [`DeclareTransactionReceiptResponse`](types.md#declaretransactionreceiptresponse)

#### Defined in

[src/types/provider/response.ts:106](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L106)

---

### DeclareTransactionReceiptResponse

Ƭ **DeclareTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                 | Type                                                                         |
| :------------------- | :--------------------------------------------------------------------------- |
| `type?`              | [`TransactionType`](../enums/types.TransactionType.md)                       |
| `execution_status`   | [`TransactionExecutionStatus`](../enums/types.TransactionExecutionStatus.md) |
| `finality_status`    | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md)   |
| `status?`            | [`TransactionStatus`](../enums/types.TransactionStatus.md)                   |
| `actual_fee`         | `string`                                                                     |
| `block_hash`         | [`BlockHash`](types.RPC.md#blockhash)                                        |
| `block_number`       | [`BlockNumber`](types.md#blocknumber)                                        |
| `transaction_hash`   | `string`                                                                     |
| `transaction_index?` | `number`                                                                     |
| `messages_sent`      | [`MessageToL1`](../interfaces/types.MessageToL1.md)[]                        |
| `events`             | `any`[]                                                                      |

#### Defined in

[src/types/provider/response.ts:126](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L126)

---

### DeployTransactionReceiptResponse

Ƭ **DeployTransactionReceiptResponse**: [`InvokeTransactionReceiptResponse`](../interfaces/types.InvokeTransactionReceiptResponse.md)

#### Defined in

[src/types/provider/response.ts:140](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L140)

---

### RejectedTransactionReceiptResponse

Ƭ **RejectedTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                                       | Type                                               |
| :----------------------------------------- | :------------------------------------------------- |
| `status`                                   | `REJECTED`                                         |
| `transaction_failure_reason`               | \{ `code`: `string` ; `error_message`: `string` \} |
| `transaction_failure_reason.code`          | `string`                                           |
| `transaction_failure_reason.error_message` | `string`                                           |

#### Defined in

[src/types/provider/response.ts:148](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L148)

---

### RevertedTransactionReceiptResponse

Ƭ **RevertedTransactionReceiptResponse**: `Object`

#### Type declaration

| Name                 | Type                                                                                |
| :------------------- | :---------------------------------------------------------------------------------- |
| `type?`              | [`TransactionType`](../enums/types.TransactionType.md) \| `any`                     |
| `execution_status`   | [`REVERTED`](../enums/types.TransactionExecutionStatus.md#reverted) \| `any`        |
| `finality_status`    | [`TransactionFinalityStatus`](../enums/types.TransactionFinalityStatus.md) \| `any` |
| `status?`            | [`TransactionStatus`](../enums/types.TransactionStatus.md)                          |
| `actual_fee`         | `string`                                                                            |
| `block_hash?`        | `string`                                                                            |
| `block_number?`      | [`BlockNumber`](types.md#blocknumber)                                               |
| `transaction_hash`   | `string`                                                                            |
| `transaction_index?` | `number`                                                                            |
| `messages_sent`      | [`MessageToL1`](../interfaces/types.MessageToL1.md)[]                               |
| `events`             | `any`[]                                                                             |
| `revert_reason?`     | `string`                                                                            |

#### Defined in

[src/types/provider/response.ts:156](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L156)

---

### CallContractResponse

Ƭ **CallContractResponse**: `Object`

#### Type declaration

| Name     | Type       |
| :------- | :--------- |
| `result` | `string`[] |

#### Defined in

[src/types/provider/response.ts:187](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L187)

---

### EstimateFeeAction

Ƭ **EstimateFeeAction**: \{ `type`: [`INVOKE`](../enums/types.TransactionType.md#invoke) ; `payload`: [`AllowArray`](types.md#allowarray)\<[`Call`](types.md#call)\> \} \| \{ `type`: [`DECLARE`](../enums/types.TransactionType.md#declare) ; `payload`: [`DeclareContractPayload`](types.md#declarecontractpayload) \} \| \{ `type`: [`DEPLOY_ACCOUNT`](../enums/types.TransactionType.md#deploy_account) ; `payload`: [`DeployAccountContractPayload`](types.md#deployaccountcontractpayload) \} \| \{ `type`: [`DEPLOY`](../enums/types.TransactionType.md#deploy) ; `payload`: [`UniversalDeployerContractPayload`](types.md#universaldeployercontractpayload) }

#### Defined in

[src/types/provider/response.ts:191](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L191)

---

### EstimateFeeResponseBulk

Ƭ **EstimateFeeResponseBulk**: [`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)[]

#### Defined in

[src/types/provider/response.ts:209](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L209)

---

### Storage

Ƭ **Storage**: [`Storage`](types.Sequencer.md#storage)

#### Defined in

[src/types/provider/response.ts:211](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L211)

---

### Nonce

Ƭ **Nonce**: [`Nonce`](types.Sequencer.md#nonce)

#### Defined in

[src/types/provider/response.ts:213](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L213)

---

### SimulationFlags

Ƭ **SimulationFlags**: [`SimulationFlags`](types.RPC.md#simulationflags)

#### Defined in

[src/types/provider/response.ts:215](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L215)

---

### SimulatedTransaction

Ƭ **SimulatedTransaction**: `Object`

#### Type declaration

| Name                | Type                                                                                                                             |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------- |
| `transaction_trace` | [`TransactionTrace`](types.RPC.md#transactiontrace) \| [`TransactionTraceResponse`](types.Sequencer.md#transactiontraceresponse) |
| `fee_estimation`    | [`FeeEstimate`](types.RPC.md#feeestimate) \| [`EstimateFeeResponse`](types.Sequencer.md#estimatefeeresponse)                     |
| `suggestedMaxFee?`  | `string` \| `bigint`                                                                                                             |

#### Defined in

[src/types/provider/response.ts:217](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L217)

---

### SimulateTransactionResponse

Ƭ **SimulateTransactionResponse**: [`SimulatedTransaction`](types.md#simulatedtransaction)[]

#### Defined in

[src/types/provider/response.ts:223](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L223)

---

### ContractClassResponse

Ƭ **ContractClassResponse**: [`LegacyContractClass`](types.md#legacycontractclass) \| `Omit`\<[`CompiledSierra`](types.md#compiledsierra), `"sierra_program_debug_info"`\>

Standardized type
Cairo0 program compressed and Cairo1 sierra_program decompressed
abi Abi
CompiledSierra without '.sierra_program_debug_info'

#### Defined in

[src/types/provider/response.ts:247](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/provider/response.ts#L247)

---

### DeployAccountSignerDetails

Ƭ **DeployAccountSignerDetails**: `Required`\<[`DeployAccountContractPayload`](types.md#deployaccountcontractpayload)\> & `Required`\<[`InvocationsDetails`](types.md#invocationsdetails)\> & \{ `contractAddress`: [`BigNumberish`](types.md#bignumberish) ; `chainId`: [`StarknetChainId`](../enums/constants.StarknetChainId.md) }

#### Defined in

[src/types/signer.ts:25](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/signer.ts#L25)

---

### StarkNetMerkleType

Ƭ **StarkNetMerkleType**: `Object`

#### Type declaration

| Name       | Type           |
| :--------- | :------------- |
| `name`     | `string`       |
| `type`     | `"merkletree"` |
| `contains` | `string`       |

#### Defined in

[src/types/typedData.ts:1](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L1)

---

### StarkNetType

Ƭ **StarkNetType**: \{ `name`: `string` ; `type`: `string` \} \| [`StarkNetMerkleType`](types.md#starknetmerkletype)

A single type, as part of a struct. The `type` field can be any of the EIP-712 supported types.

Note that the `uint` and `int` aliases like in Solidity, and fixed point numbers are not supported by the EIP-712
standard.

#### Defined in

[src/types/typedData.ts:13](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/typedData.ts#L13)

---

### CairoEnum

Ƭ **CairoEnum**: [`CairoCustomEnum`](../classes/CairoCustomEnum.md) \| [`CairoOption`](../classes/CairoOption.md)\<`any`\> \| [`CairoResult`](../classes/CairoResult.md)\<`any`, `any`\>

#### Defined in

[src/types/cairoEnum.ts:3](https://github.com/starknet-io/starknet.js/blob/v5.24.3/src/types/cairoEnum.ts#L3)

---
id: 'RPCResponseParser'
title: 'Class: RPCResponseParser'
sidebar_label: 'RPCResponseParser'
sidebar_position: 0
custom_edit_url: null
---

## Implements

- `Omit`\<[`ResponseParser`](ResponseParser.md), `"parseDeclareContractResponse"` \| `"parseDeployContractResponse"` \| `"parseInvokeFunctionResponse"` \| `"parseGetTransactionReceiptResponse"` \| `"parseGetTransactionResponse"` \| `"parseCallContractResponse"`\>

## Constructors

### constructor

• **new RPCResponseParser**(`margin?`): [`RPCResponseParser`](RPCResponseParser.md)

#### Parameters

| Name                            | Type     |
| :------------------------------ | :------- |
| `margin?`                       | `Object` |
| `margin.l1BoundMaxAmount`       | `number` |
| `margin.l1BoundMaxPricePerUnit` | `number` |
| `margin.maxFee`                 | `number` |

#### Returns

[`RPCResponseParser`](RPCResponseParser.md)

#### Defined in

[src/utils/responseParser/rpc.ts:38](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L38)

## Properties

### margin

• `Private` **margin**: `undefined` \| \{ `l1BoundMaxAmount`: `number` ; `l1BoundMaxPricePerUnit`: `number` ; `maxFee`: `number` }

#### Defined in

[src/utils/responseParser/rpc.ts:36](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L36)

## Methods

### estimatedFeeToMaxFee

▸ **estimatedFeeToMaxFee**(`estimatedFee`): `bigint`

#### Parameters

| Name           | Type                                                  |
| :------------- | :---------------------------------------------------- |
| `estimatedFee` | [`BigNumberish`](../namespaces/types.md#bignumberish) |

#### Returns

`bigint`

#### Defined in

[src/utils/responseParser/rpc.ts:42](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L42)

---

### estimateFeeToBounds

▸ **estimateFeeToBounds**(`estimate`): [`RESOURCE_BOUNDS_MAPPING`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#resource_bounds_mapping)

#### Parameters

| Name       | Type                                                                                                                                                                                                            |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `estimate` | `0n` \| \{ `unit`: `"WEI"` \| `"FRI"` ; `gas_consumed`: `string` ; `gas_price`: `string` ; `overall_fee`: `string` ; `data_gas_consumed`: `undefined` \| `string` ; `data_gas_price`: `undefined` \| `string` } |

#### Returns

[`RESOURCE_BOUNDS_MAPPING`](../namespaces/types.RPC.RPCSPEC07.API.SPEC.md#resource_bounds_mapping)

#### Defined in

[src/utils/responseParser/rpc.ts:46](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L46)

---

### parseGetBlockResponse

▸ **parseGetBlockResponse**(`res`): [`GetBlockResponse`](../namespaces/types.md#getblockresponse)

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `res` | [`BlockWithTxHashes`](../namespaces/types.md#blockwithtxhashes) |

#### Returns

[`GetBlockResponse`](../namespaces/types.md#getblockresponse)

#### Implementation of

Omit.parseGetBlockResponse

#### Defined in

[src/utils/responseParser/rpc.ts:54](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L54)

---

### parseTransactionReceipt

▸ **parseTransactionReceipt**(`res`): [`GetTxReceiptResponseWithoutHelper`](../namespaces/types.md#gettxreceiptresponsewithouthelper)

#### Parameters

| Name  | Type                                                              |
| :---- | :---------------------------------------------------------------- |
| `res` | [`TransactionReceipt`](../namespaces/types.md#transactionreceipt) |

#### Returns

[`GetTxReceiptResponseWithoutHelper`](../namespaces/types.md#gettxreceiptresponsewithouthelper)

#### Defined in

[src/utils/responseParser/rpc.ts:58](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L58)

---

### parseFeeEstimateResponse

▸ **parseFeeEstimateResponse**(`res`): [`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)

#### Parameters

| Name  | Type                                                                                                                                                                                                      |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `res` | \{ `unit`: `"WEI"` \| `"FRI"` ; `gas_consumed`: `string` ; `gas_price`: `string` ; `overall_fee`: `string` ; `data_gas_consumed`: `undefined` \| `string` ; `data_gas_price`: `undefined` \| `string` }[] |

#### Returns

[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)

#### Implementation of

Omit.parseFeeEstimateResponse

#### Defined in

[src/utils/responseParser/rpc.ts:74](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L74)

---

### parseFeeEstimateBulkResponse

▸ **parseFeeEstimateBulkResponse**(`res`): [`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)

#### Parameters

| Name  | Type                                                                                                                                                                                                      |
| :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `res` | \{ `unit`: `"WEI"` \| `"FRI"` ; `gas_consumed`: `string` ; `gas_price`: `string` ; `overall_fee`: `string` ; `data_gas_consumed`: `undefined` \| `string` ; `data_gas_price`: `undefined` \| `string` }[] |

#### Returns

[`EstimateFeeResponseBulk`](../namespaces/types.md#estimatefeeresponsebulk)

#### Defined in

[src/utils/responseParser/rpc.ts:88](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L88)

---

### parseSimulateTransactionResponse

▸ **parseSimulateTransactionResponse**(`res`): [`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `res` | `any` |

#### Returns

[`SimulateTransactionResponse`](../namespaces/types.md#simulatetransactionresponse)

#### Implementation of

Omit.parseSimulateTransactionResponse

#### Defined in

[src/utils/responseParser/rpc.ts:101](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L101)

---

### parseContractClassResponse

▸ **parseContractClassResponse**(`res`): [`ContractClassResponse`](../namespaces/types.md#contractclassresponse)

#### Parameters

| Name  | Type                                                                  |
| :---- | :-------------------------------------------------------------------- |
| `res` | [`ContractClassPayload`](../namespaces/types.md#contractclasspayload) |

#### Returns

[`ContractClassResponse`](../namespaces/types.md#contractclassresponse)

#### Defined in

[src/utils/responseParser/rpc.ts:118](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L118)

---

### parseL1GasPriceResponse

▸ **parseL1GasPriceResponse**(`res`): `string`

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `res` | [`BlockWithTxHashes`](../namespaces/types.md#blockwithtxhashes) |

#### Returns

`string`

#### Defined in

[src/utils/responseParser/rpc.ts:125](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/responseParser/rpc.ts#L125)

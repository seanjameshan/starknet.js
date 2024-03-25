/**
 * Map RPC Response to common interface response
 * Intersection (sequencer response ∩ (∪ rpc responses))
 */
import {
  BlockWithTxHashes,
  ContractClassPayload,
  ContractClassResponse,
  EstimateFeeResponse,
  EstimateFeeResponseBulk,
  FeeEstimate,
  GetBlockResponse,
  GetTransactionReceiptResponse,
  RpcProviderOptions,
  SimulateTransactionResponse,
  SimulatedTransaction,
  TransactionReceipt,
} from '../../types/provider';
import { toBigInt } from '../num';
import { isString } from '../shortString';
import { estimateFeeToBounds, estimatedFeeToMaxFee } from '../stark';
import { ResponseParser } from '.';

export class RPCResponseParser
  implements
    Omit<
      ResponseParser,
      | 'parseDeclareContractResponse'
      | 'parseDeployContractResponse'
      | 'parseInvokeFunctionResponse'
      | 'parseGetTransactionReceiptResponse'
      | 'parseGetTransactionResponse'
      | 'parseCallContractResponse'
    >
{
  private margin: RpcProviderOptions['feeMarginPercentage'];

  constructor(margin?: RpcProviderOptions['feeMarginPercentage']) {
    this.margin = margin;
  }

  private estimatedFeeToMaxFee(estimatedFee: Parameters<typeof estimatedFeeToMaxFee>[0]) {
    return estimatedFeeToMaxFee(estimatedFee, this.margin?.maxFee);
  }

  private estimateFeeToBounds(estimate: Parameters<typeof estimateFeeToBounds>[0]) {
    return estimateFeeToBounds(
      estimate,
      this.margin?.l1BoundMaxAmount,
      this.margin?.l1BoundMaxPricePerUnit
    );
  }

  public parseGetBlockResponse(res: BlockWithTxHashes): GetBlockResponse {
    return { status: 'PENDING', ...res } as GetBlockResponse;
  }

  public parseTransactionReceipt(res: TransactionReceipt): GetTransactionReceiptResponse {
    // HOTFIX RPC 0.5 to align with RPC 0.6
    // This case is RPC 0.5. It can be only v2 thx with FRI units
    if ('actual_fee' in res && isString(res.actual_fee)) {
      return {
        ...(res as GetTransactionReceiptResponse),
        actual_fee: {
          amount: res.actual_fee,
          unit: 'FRI',
        },
      };
    }

    return res as GetTransactionReceiptResponse;
  }

  public parseFeeEstimateResponse(res: FeeEstimate[]): EstimateFeeResponse {
    const val = res[0];
    return {
      overall_fee: toBigInt(val.overall_fee),
      gas_consumed: toBigInt(val.gas_consumed),
      gas_price: toBigInt(val.gas_price),
      unit: val.unit,
      suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
      resourceBounds: this.estimateFeeToBounds(val),
    };
  }

  public parseFeeEstimateBulkResponse(res: FeeEstimate[]): EstimateFeeResponseBulk {
    return res.map((val) => ({
      overall_fee: toBigInt(val.overall_fee),
      gas_consumed: toBigInt(val.gas_consumed),
      gas_price: toBigInt(val.gas_price),
      unit: val.unit,
      suggestedMaxFee: this.estimatedFeeToMaxFee(val.overall_fee),
      resourceBounds: this.estimateFeeToBounds(val),
    }));
  }

  public parseSimulateTransactionResponse(
    // TODO: revisit
    // set as 'any' to avoid a mapped type circular recursion error stemming from
    // merging src/types/api/rpcspec*/components/FUNCTION_INVOCATION.calls
    //
    // res: SimulateTransactionResponse
    res: any
  ): SimulateTransactionResponse {
    return res.map((it: SimulatedTransaction) => {
      return {
        ...it,
        suggestedMaxFee: this.estimatedFeeToMaxFee(it.fee_estimation.overall_fee),
        resourceBounds: this.estimateFeeToBounds(it.fee_estimation),
      };
    });
  }

  public parseContractClassResponse(res: ContractClassPayload): ContractClassResponse {
    return {
      ...(res as ContractClassResponse),
      abi: isString(res.abi) ? JSON.parse(res.abi) : res.abi,
    };
  }
}

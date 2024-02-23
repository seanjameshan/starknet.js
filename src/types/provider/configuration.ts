import { NetworkName, StarknetChainId } from '../../constants';
import { BlockIdentifier } from '../lib';

export interface ProviderOptions extends RpcProviderOptions {}

export type RpcProviderOptions = {
  nodeUrl?: string | NetworkName;
  retries?: number;
  headers?: object;
  blockIdentifier?: BlockIdentifier;
  chainId?: StarknetChainId;
  specVersion?: string;
  default?: boolean;
  waitMode?: boolean;
  baseFetch?: WindowOrWorkerGlobalScope['fetch'];
  feeMarginPercentage?: {
    l1BoundMaxAmount: number;
    l1BoundMaxPricePerUnit: number;
    maxFee: number;
  };
};

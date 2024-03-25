import { NetworkName, StarknetChainId } from '../../constants';
import { ERPCVersion } from '../api';
import { BlockIdentifier } from '../lib';

export type RpcChannelOptions = {
  nodeUrl?: string | NetworkName;
  retries?: number;
  headers?: object;
  blockIdentifier?: BlockIdentifier;
  chainId?: StarknetChainId;
  default?: boolean;
  waitMode?: boolean;
  rpcVersion?: ERPCVersion;
  specVersion?: string;
};

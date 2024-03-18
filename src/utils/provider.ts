import { NetworkName, RPC_NODES } from '../constants';
import {
  BigNumberish,
  BlockIdentifier,
  BlockTag,
  CompiledContract,
  CompiledSierra,
  ContractClass,
  GetBlockResponse,
  GetTransactionReceiptResponse,
  InvocationsDetailsWithNonce,
  LegacyContractClass,
  PendingBlock,
  PendingStateUpdate,
  RPC,
  SierraContractClass,
  StateUpdateResponse,
  V3TransactionDetails,
} from '../types';
import { ETransactionVersion } from '../types/api';
import { isSierra } from './contract';
import { formatSpaces } from './hash';
import { parse, stringify } from './json';
import { isBigInt, isHex, isNumber, isString, toHex } from './num';
import { compressProgram } from './stark';

/**
 * Helper - Async Sleep for 'delay' time
 */
export function wait(delay: number) {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

/**
 * Create Sierra Contract Class from a given Compiled Sierra
 *
 * CompiledSierra -> SierraContractClass
 */
export function createSierraContractClass(contract: CompiledSierra): SierraContractClass {
  const result = { ...contract } as any;
  delete result.sierra_program_debug_info;
  result.abi = formatSpaces(stringify(contract.abi));
  result.sierra_program = formatSpaces(stringify(contract.sierra_program));
  result.sierra_program = compressProgram(result.sierra_program);
  return result;
}

/**
 * Create Contract Class from a given CompiledContract or string
 *
 * (CompiledContract or string) -> ContractClass
 */
export function parseContract(contract: CompiledContract | string): ContractClass {
  const parsedContract =
    typeof contract === 'string' ? (parse(contract) as CompiledContract) : contract;

  if (!isSierra(contract)) {
    return {
      ...parsedContract,
      ...('program' in parsedContract && { program: compressProgram(parsedContract.program) }),
    } as LegacyContractClass;
  }

  return createSierraContractClass(parsedContract as CompiledSierra);
}

/**
 * Return randomly select available public node
 * @param networkName NetworkName
 * @param mute mute public node warning
 * @returns default node url
 */
export const getDefaultNodeUrl = (networkName?: NetworkName, mute: boolean = false): string => {
  if (!mute)
    // eslint-disable-next-line no-console
    console.warn('Using default public node url, please provide nodeUrl in provider options!');
  const nodes = RPC_NODES[networkName ?? NetworkName.SN_GOERLI]; // TODO: when goerli deprecated switch default to sepolia
  const randIdx = Math.floor(Math.random() * nodes.length);
  return nodes[randIdx];
};

/**
 * [Reference](https://github.com/starkware-libs/cairo-lang/blob/fc97bdd8322a7df043c87c371634b26c15ed6cee/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py#L148-L153)
 */
export function formatHash(hashValue: BigNumberish): string {
  if (typeof hashValue === 'string') return hashValue;
  return toHex(hashValue);
}

/**
 * [Reference](https://github.com/starkware-libs/cairo-lang/blob/fc97bdd8322a7df043c87c371634b26c15ed6cee/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py#L156-L161)
 */
export function txIdentifier(txHash?: BigNumberish, txId?: BigNumberish): string {
  if (!txHash) {
    return `transactionId=${JSON.stringify(txId)}`;
  }
  const hashString = formatHash(txHash);

  return `transactionHash=${hashString}`;
}

export const validBlockTags = Object.values(BlockTag);

export class Block {
  hash: BlockIdentifier = null;

  number: BlockIdentifier = null;

  tag: BlockIdentifier = null;

  private setIdentifier(__identifier: BlockIdentifier) {
    if (isString(__identifier)) {
      if (isHex(__identifier)) {
        this.hash = __identifier;
      } else if (validBlockTags.includes(__identifier as BlockTag)) {
        this.tag = __identifier;
      }
    } else if (isBigInt(__identifier)) {
      this.hash = toHex(__identifier);
    } else if (isNumber(__identifier)) {
      this.number = __identifier;
    } else {
      this.tag = BlockTag.pending;
    }
  }

  constructor(_identifier: BlockIdentifier) {
    this.setIdentifier(_identifier);
  }

  // TODO: fix any
  get queryIdentifier(): any {
    if (this.number !== null) {
      return `blockNumber=${this.number}`;
    }

    if (this.hash !== null) {
      return `blockHash=${this.hash}`;
    }

    return `blockNumber=${this.tag}`;
  }

  // TODO: fix any
  get identifier(): any {
    if (this.number !== null) {
      return { block_number: this.number };
    }

    if (this.hash !== null) {
      return { block_hash: this.hash };
    }

    return this.tag;
  }

  set identifier(_identifier: BlockIdentifier) {
    this.setIdentifier(_identifier);
  }

  valueOf = () => this.number;

  toString = () => this.hash;

  /*   get sequencerIdentifier(): SequencerIdentifier {
    return this.hash !== null
      ? { blockHash: this.hash as string }
      : { blockNumber: (this.number ?? this.tag) as BlockNumber };
  } */
}

export function isV3Tx(details: InvocationsDetailsWithNonce): details is V3TransactionDetails {
  const version = details.version ? toHex(details.version) : ETransactionVersion.V3;
  return version === ETransactionVersion.V3 || version === ETransactionVersion.F3;
}

export function isVersion(version: '0.5' | '0.6' | '0.7', response: string) {
  const [majorS, minorS] = version.split('.');
  const [majorR, minorR] = response.split('.');

  return majorS === majorR && minorS === minorR;
}

/**
 * Guard Pending Block
 */
export function isPendingBlock(response: GetBlockResponse): response is PendingBlock {
  return response.status === 'PENDING';
}

/**
 * Guard Pending Transaction
 */
export function isPendingTransaction(
  response: GetTransactionReceiptResponse
): response is RPC.PendingReceipt {
  return !('block_hash' in response);
}

/**
 * Guard Pending State Update
 * ex. if(isPendingStateUpdate(stateUpdate)) throw Error('Update must be final')
 */
export function isPendingStateUpdate(
  response: StateUpdateResponse
): response is PendingStateUpdate {
  return !('block_hash' in response);
}

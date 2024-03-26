import {
  type AccountChangeEventHandler,
  type AddStarknetChainParameters,
  type NetworkChangeEventHandler,
  type WatchAssetParameters,
} from 'get-starknet-core';
import { Account, AccountInterface } from '../account';
import { StarknetChainId } from '../constants';
import { ProviderInterface } from '../provider';
import {
  AllowArray,
  CairoVersion,
  Call,
  CompiledSierra,
  DeclareContractPayload,
  DeployAccountContractPayload,
  MultiDeployContractResponse,
  ProviderOptions,
  TypedData,
  UniversalDeployerContractPayload,
} from '../types';
import { CallData } from '../utils/calldata';
import { extractContractHashes } from '../utils/contract';
import { stringify } from '../utils/json';
import { buildUDCCall } from '../utils/transaction';
import {
  addDeclareTransaction,
  addDeployAccountTransaction,
  addInvokeTransaction,
  addStarknetChain,
  getPermissions,
  onAccountChange,
  onNetworkChanged,
  requestAccounts,
  signMessage,
  switchStarknetChain,
  watchAsset,
} from './connect';
import { StarknetWalletProvider } from './types';

// Represent 'Selected Active' Account inside Connected Wallet
export class WalletAccount extends Account implements AccountInterface {
  public address: string = '';

  public walletProvider: StarknetWalletProvider;

  constructor(
    providerOrOptions: ProviderOptions | ProviderInterface,
    walletProvider: StarknetWalletProvider,
    cairoVersion?: CairoVersion
  ) {
    super(providerOrOptions, '', '', cairoVersion); // At this point unknown address
    this.walletProvider = walletProvider;

    // Update Address on change
    this.walletProvider.on('accountsChanged', (res) => {
      if (!res) return;
      this.address = res[0].toLowerCase();
    });

    // Update Channel chainId on Network change
    this.walletProvider.on('networkChanged', (res) => {
      if (!res) return;
      // Determine is it better to set chainId or replace channel with new one
      // At the moment channel is stateless but it could change
      this.channel.setChainId(res as StarknetChainId);
    });

    // Get and Set Address !!! Post constructor initial empty string
    walletProvider
      .request({
        type: 'wallet_requestAccounts',
        params: {
          silentMode: false,
        },
      })
      .then((res) => {
        this.address = res[0].toLowerCase();
      });
  }

  /**
   * WALLET EVENTS
   */
  public onAccountChange(callback: AccountChangeEventHandler) {
    onAccountChange(this.walletProvider, callback);
  }

  public onNetworkChanged(callback: NetworkChangeEventHandler) {
    onNetworkChanged(this.walletProvider, callback);
  }

  /**
   * WALLET SPECIFIC METHODS
   */
  public requestAccounts(silentMode = false) {
    return requestAccounts(this.walletProvider, silentMode);
  }

  public getPermissions() {
    return getPermissions(this.walletProvider);
  }

  public switchStarknetChain(chainId: StarknetChainId) {
    return switchStarknetChain(this.walletProvider, chainId);
  }

  public watchAsset(asset: WatchAssetParameters) {
    return watchAsset(this.walletProvider, asset);
  }

  public addStarknetChain(chain: AddStarknetChainParameters) {
    return addStarknetChain(this.walletProvider, chain);
  }

  /**
   * ACCOUNT METHODS
   */
  override execute(calls: AllowArray<Call>) {
    const txCalls = [].concat(calls as any).map((it) => {
      const { contractAddress, entrypoint, calldata } = it;
      return {
        contract_address: contractAddress,
        entrypoint,
        calldata,
      };
    });

    const params = {
      calls: txCalls,
    };

    return addInvokeTransaction(this.walletProvider, params);
  }

  override declare(payload: DeclareContractPayload) {
    const declareContractPayload = extractContractHashes(payload);

    // DISCUSS: HOTFIX: Adapt Abi format
    const pContract = payload.contract as CompiledSierra;
    const cairo1Contract = {
      ...pContract,
      abi: stringify(pContract.abi),
    };

    // Check FIx
    if (!declareContractPayload.compiledClassHash) {
      throw Error('compiledClassHash is required');
    }

    const params = {
      compiled_class_hash: declareContractPayload.compiledClassHash,
      contract_class: cairo1Contract,
    };

    return addDeclareTransaction(this.walletProvider, params);
  }

  override async deploy(
    payload: UniversalDeployerContractPayload | UniversalDeployerContractPayload[]
  ): Promise<MultiDeployContractResponse> {
    const { calls, addresses } = buildUDCCall(payload, this.address);
    const invokeResponse = await this.execute(calls);

    return {
      ...invokeResponse,
      contract_address: addresses,
    };
  }

  override deployAccount(payload: DeployAccountContractPayload) {
    const params = {
      contract_address_salt: payload.addressSalt?.toString() || '0',
      constructor_calldata: payload.constructorCalldata
        ? CallData.compile(payload.constructorCalldata)
        : [],
      class_hash: payload.classHash,
    };

    return addDeployAccountTransaction(this.walletProvider, params);
  }

  override signMessage(typedData: TypedData) {
    return signMessage(this.walletProvider, typedData);
  }

  // TODO: MISSING ESTIMATES
}

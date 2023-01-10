import { BN } from 'bn.js';

import { UDC, ZERO } from '../constants';
import { ProviderInterface, ProviderOptions } from '../provider';
import { Provider } from '../provider/default';
import { BlockIdentifier } from '../provider/utils';
import { Signer, SignerInterface } from '../signer';
import {
  Abi,
  AllowArray,
  Call,
  DeclareContractPayload,
  DeclareContractResponse,
  DeclareContractTransaction,
  DeclareDeployContractPayload,
  DeclareDeployUDCResponse,
  DeployAccountContractPayload,
  DeployAccountContractTransaction,
  DeployContractResponse,
  DeployContractUDCResponse,
  EstimateFee,
  EstimateFeeAction,
  EstimateFeeDetails,
  Invocation,
  InvocationsDetails,
  InvocationsSignerDetails,
  InvokeFunctionResponse,
  KeyPair,
  MultiDeployContractResponse,
  Signature,
  TransactionBulk,
  UniversalDeployerContractPayload,
} from '../types';
import { EstimateFeeBulk } from '../types/account';
import { parseUDCEvent } from '../utils/events';
import {
  calculateContractAddressFromHash,
  feeTransactionVersion,
  pedersen,
  transactionVersion,
} from '../utils/hash';
import { BigNumberish, hexToDecimalString, toBN, toCairoBool } from '../utils/number';
import { parseContract } from '../utils/provider';
import { compileCalldata, estimatedFeeToMaxFee, randomAddress } from '../utils/stark';
import { getStarknetIdContract, useDecoded, useEncoded } from '../utils/starknetId';
import { fromCallsToExecuteCalldata } from '../utils/transaction';
import { TypedData, getMessageHash } from '../utils/typedData';
import { AccountInterface } from './interface';

export class Account extends Provider implements AccountInterface {
  public signer: SignerInterface;

  public address: string;

  constructor(
    providerOrOptions: ProviderOptions | ProviderInterface,
    address: string,
    keyPairOrSigner: KeyPair | SignerInterface
  ) {
    super(providerOrOptions);
    this.address = address.toLowerCase();
    this.signer =
      'getPubKey' in keyPairOrSigner ? keyPairOrSigner : new Signer(keyPairOrSigner as KeyPair);
  }

  public async getNonce(blockIdentifier?: BlockIdentifier): Promise<BigNumberish> {
    return super.getNonceForAddress(this.address, blockIdentifier);
  }

  public async getStarkName(StarknetIdContract?: string): Promise<string | Error> {
    const chainId = await this.getChainId();
    const contract = StarknetIdContract ?? getStarknetIdContract(chainId);

    try {
      const hexDomain = await this.callContract({
        contractAddress: contract,
        entrypoint: 'address_to_domain',
        calldata: compileCalldata({
          address: this.address,
        }),
      });
      const decimalDomain = hexDomain.result
        .map((element) => new BN(hexToDecimalString(element)))
        .slice(1);

      const stringDomain = useDecoded(decimalDomain);

      return stringDomain;
    } catch {
      return Error('Could not get stark name');
    }
  }

  public async getAddressFromStarkName(
    name: string,
    StarknetIdContract?: string
  ): Promise<string | Error> {
    const chainId = await this.getChainId();
    const contract = StarknetIdContract ?? getStarknetIdContract(chainId);

    try {
      const addressData = await this.callContract({
        contractAddress: contract,
        entrypoint: 'domain_to_address',
        calldata: compileCalldata({
          domain: [useEncoded(name.replace('.stark', '')).toString(10)],
        }),
      });

      return addressData.result[0];
    } catch {
      return Error('Could not get address from stark name');
    }
  }

  public async estimateFee(
    calls: AllowArray<Call>,
    estimateFeeDetails?: EstimateFeeDetails | undefined
  ): Promise<EstimateFee> {
    return this.estimateInvokeFee(calls, estimateFeeDetails);
  }

  public async estimateInvokeFee(
    calls: AllowArray<Call>,
    { nonce: providedNonce, blockIdentifier }: EstimateFeeDetails = {}
  ): Promise<EstimateFee> {
    const transactions = Array.isArray(calls) ? calls : [calls];
    const nonce = toBN(providedNonce ?? (await this.getNonce()));
    const version = toBN(feeTransactionVersion);
    const chainId = await this.getChainId();

    const signerDetails: InvocationsSignerDetails = {
      walletAddress: this.address,
      nonce,
      maxFee: ZERO,
      version,
      chainId,
    };

    const invocation = await this.buildInvocation(transactions, signerDetails);
    const response = await super.getInvokeEstimateFee(
      { ...invocation },
      { version, nonce },
      blockIdentifier
    );

    const suggestedMaxFee = estimatedFeeToMaxFee(response.overall_fee);

    return {
      ...response,
      suggestedMaxFee,
    };
  }

  public async estimateDeclareFee(
    { classHash, contract }: DeclareContractPayload,
    { blockIdentifier, nonce: providedNonce }: EstimateFeeDetails = {}
  ): Promise<EstimateFee> {
    const nonce = toBN(providedNonce ?? (await this.getNonce()));
    const version = toBN(feeTransactionVersion);
    const chainId = await this.getChainId();

    const payload = await this.buildDeclarePayload(
      { classHash, contract },
      { nonce, chainId, version, walletAddress: this.address, maxFee: ZERO }
    );

    const response = await super.getDeclareEstimateFee(
      { ...payload },
      { version, nonce },
      blockIdentifier
    );
    const suggestedMaxFee = estimatedFeeToMaxFee(response.overall_fee);

    return {
      ...response,
      suggestedMaxFee,
    };
  }

  public async estimateAccountDeployFee(
    {
      classHash,
      addressSalt = 0,
      constructorCalldata = [],
      contractAddress: providedContractAddress,
    }: DeployAccountContractPayload,
    { blockIdentifier }: EstimateFeeDetails = {}
  ): Promise<EstimateFee> {
    const nonce = '0x0';
    const version = toBN(feeTransactionVersion);
    const chainId = await this.getChainId();

    const payload = await this.buildAccountDeployPayload(
      { classHash, addressSalt, constructorCalldata, contractAddress: providedContractAddress },
      { nonce, chainId, version, walletAddress: this.address, maxFee: ZERO }
    );

    const response = await super.getDeployAccountEstimateFee(
      { ...payload },
      { version, nonce },
      blockIdentifier
    );
    const suggestedMaxFee = estimatedFeeToMaxFee(response.overall_fee);

    return {
      ...response,
      suggestedMaxFee,
    };
  }

  public async estimateDeployFee(
    payload: UniversalDeployerContractPayload | UniversalDeployerContractPayload[],
    transactionsDetail?: InvocationsDetails | undefined
  ): Promise<EstimateFee> {
    const calls = this.buildUDCContractPayload(payload);
    return this.estimateInvokeFee(calls, transactionsDetail);
  }

  public async estimateFeeBulk(
    transactions: TransactionBulk,
    { nonce: providedNonce, blockIdentifier }: EstimateFeeDetails = {}
  ): Promise<EstimateFeeBulk> {
    const nonce = toBN(providedNonce ?? (await this.getNonce()));
    const version = toBN(feeTransactionVersion);
    const chainId = await this.getChainId();

    const params: any = await Promise.all(
      [].concat(transactions as []).map(async (transaction: any, index: number) => {
        const signerDetails: InvocationsSignerDetails = {
          walletAddress: this.address,
          nonce: toBN(Number(nonce) + index),
          maxFee: ZERO,
          version,
          chainId,
        };

        const txPayload = transaction.payload;

        let res;
        if (typeof transaction === 'object' && transaction.type === 'INVOKE_FUNCTION') {
          const invocation = await this.buildInvocation(
            Array.isArray(txPayload) ? txPayload : [txPayload],
            signerDetails
          );
          res = {
            type: 'INVOKE_FUNCTION',
            ...invocation,
            version,
            nonce: toBN(Number(nonce) + index),
            blockIdentifier,
          };
        } else if (typeof transaction === 'object' && transaction.type === 'DECLARE') {
          const declareContractPayload = await this.buildDeclarePayload(txPayload, signerDetails);
          res = {
            type: 'DECLARE',
            ...declareContractPayload,
            version,
            nonce: toBN(Number(nonce) + index),
            blockIdentifier,
          };
        } else if (typeof transaction === 'object' && transaction.type === 'DEPLOY_ACCOUNT') {
          const payload = await this.buildAccountDeployPayload(txPayload, signerDetails);
          res = {
            type: 'DEPLOY_ACCOUNT',
            ...payload,
            version,
            nonce,
            blockIdentifier,
          };
        } else if (typeof transaction === 'object' && transaction.type === 'DEPLOY') {
          const calls = this.buildUDCContractPayload(txPayload);
          const invocation = await this.buildInvocation(calls, signerDetails);
          res = {
            type: 'INVOKE_FUNCTION',
            ...invocation,
            version,
            nonce: toBN(Number(nonce) + index),
            blockIdentifier,
          };
        }
        return res;
      })
    );

    const response = await super.getEstimateFeeBulk(params, blockIdentifier);

    return [].concat(response as []).map((elem: any) => {
      const suggestedMaxFee = estimatedFeeToMaxFee(elem.overall_fee);
      return {
        ...elem,
        suggestedMaxFee,
      };
    });
  }

  public async buildInvocation(
    call: Array<Call>,
    signerDetails: InvocationsSignerDetails
  ): Promise<Invocation> {
    const calldata = fromCallsToExecuteCalldata(call);
    const signature = await this.signer.signTransaction(call, signerDetails);

    return {
      contractAddress: this.address,
      calldata,
      signature,
    };
  }

  public async execute(
    calls: AllowArray<Call>,
    abis: Abi[] | undefined = undefined,
    transactionsDetail: InvocationsDetails = {}
  ): Promise<InvokeFunctionResponse> {
    const transactions = Array.isArray(calls) ? calls : [calls];
    const nonce = toBN(transactionsDetail.nonce ?? (await this.getNonce()));
    const maxFee =
      transactionsDetail.maxFee ??
      (await this.getSuggestedMaxFee({ type: 'INVOKE', payload: calls }, transactionsDetail));
    const version = toBN(transactionVersion);
    const chainId = await this.getChainId();

    const signerDetails: InvocationsSignerDetails = {
      walletAddress: this.address,
      nonce,
      maxFee,
      version,
      chainId,
    };

    const signature = await this.signer.signTransaction(transactions, signerDetails, abis);

    const calldata = fromCallsToExecuteCalldata(transactions);

    return this.invokeFunction(
      { contractAddress: this.address, calldata, signature },
      {
        nonce,
        maxFee,
        version,
      }
    );
  }

  public async declare(
    { classHash, contract }: DeclareContractPayload,
    transactionsDetail: InvocationsDetails = {}
  ): Promise<DeclareContractResponse> {
    const nonce = toBN(transactionsDetail.nonce ?? (await this.getNonce()));
    const maxFee =
      transactionsDetail.maxFee ??
      (await this.getSuggestedMaxFee(
        { type: 'DECLARE', payload: { classHash, contract } },
        transactionsDetail
      ));

    const version = toBN(transactionVersion);
    const chainId = await this.getChainId();

    const signature = await this.signer.signDeclareTransaction({
      classHash,
      senderAddress: this.address,
      chainId,
      maxFee,
      version,
      nonce,
    });

    const contractDefinition = parseContract(contract);

    return this.declareContract(
      { contractDefinition, senderAddress: this.address, signature },
      {
        nonce,
        maxFee,
        version,
      }
    );
  }

  public async deploy(
    payload: UniversalDeployerContractPayload | UniversalDeployerContractPayload[],
    details?: InvocationsDetails | undefined
  ): Promise<MultiDeployContractResponse> {
    const params = [].concat(payload as []).map((it) => {
      const {
        classHash,
        salt,
        unique = true,
        constructorCalldata = [],
      } = it as UniversalDeployerContractPayload;

      const compiledConstructorCallData = compileCalldata(constructorCalldata);
      const deploySalt = salt ?? randomAddress();

      return {
        call: {
          contractAddress: UDC.ADDRESS,
          entrypoint: UDC.ENTRYPOINT,
          calldata: [
            classHash,
            deploySalt,
            toCairoBool(unique),
            compiledConstructorCallData.length,
            ...compiledConstructorCallData,
          ],
        },
        address: calculateContractAddressFromHash(
          unique ? pedersen([this.address, deploySalt]) : deploySalt,
          classHash,
          compiledConstructorCallData,
          unique ? UDC.ADDRESS : 0
        ),
      };
    });

    const calls = params.map((it) => it.call);
    const addresses = params.map((it) => it.address);
    const invokeResponse = await this.execute(calls, undefined, details);

    return {
      ...invokeResponse,
      contract_address: addresses,
    };
  }

  public async deployContract(
    payload: UniversalDeployerContractPayload | UniversalDeployerContractPayload[],
    details?: InvocationsDetails | undefined
  ): Promise<DeployContractUDCResponse> {
    const deployTx = await this.deploy(payload, details);
    const txReceipt = await this.waitForTransaction(deployTx.transaction_hash, undefined, [
      'ACCEPTED_ON_L2',
    ]);
    return parseUDCEvent(txReceipt);
  }

  public async declareDeploy(
    payload: DeclareDeployContractPayload,
    details?: InvocationsDetails | undefined
  ): Promise<DeclareDeployUDCResponse> {
    const { classHash, contract, constructorCalldata, salt, unique } = payload;
    const { transaction_hash } = await this.declare({ contract, classHash }, details);
    const declare = await this.waitForTransaction(transaction_hash, undefined, ['ACCEPTED_ON_L2']);
    const deploy = await this.deployContract(
      { classHash, salt, unique, constructorCalldata },
      details
    );
    return { declare: { ...declare, class_hash: classHash }, deploy };
  }

  public async deployAccount(
    {
      classHash,
      constructorCalldata = [],
      addressSalt = 0,
      contractAddress: providedContractAddress,
    }: DeployAccountContractPayload,
    transactionsDetail: InvocationsDetails = {}
  ): Promise<DeployContractResponse> {
    const nonce = '0x0';
    const version = toBN(transactionVersion);
    const chainId = await this.getChainId();

    const contractAddress =
      providedContractAddress ??
      calculateContractAddressFromHash(addressSalt, classHash, constructorCalldata, 0);

    const maxFee =
      transactionsDetail.maxFee ??
      (await this.getSuggestedMaxFee(
        {
          type: 'DEPLOY_ACCOUNT',
          payload: { classHash, constructorCalldata, addressSalt, contractAddress },
        },
        transactionsDetail
      ));

    const signature = await this.signer.signDeployAccountTransaction({
      classHash,
      constructorCalldata,
      contractAddress,
      addressSalt,
      chainId,
      maxFee,
      version,
      nonce,
    });

    return this.deployAccountContract(
      { classHash, addressSalt, constructorCalldata, signature },
      {
        nonce,
        maxFee,
        version,
      }
    );
  }

  public async signMessage(typedData: TypedData): Promise<Signature> {
    return this.signer.signMessage(typedData, this.address);
  }

  public async hashMessage(typedData: TypedData): Promise<string> {
    return getMessageHash(typedData, this.address);
  }

  public async verifyMessageHash(hash: BigNumberish, signature: Signature): Promise<boolean> {
    try {
      await this.callContract({
        contractAddress: this.address,
        entrypoint: 'isValidSignature',
        calldata: compileCalldata({
          hash: toBN(hash).toString(),
          signature: signature.map((x) => toBN(x).toString()),
        }),
      });
      return true;
    } catch {
      return false;
    }
  }

  public async verifyMessage(typedData: TypedData, signature: Signature): Promise<boolean> {
    const hash = await this.hashMessage(typedData);
    return this.verifyMessageHash(hash, signature);
  }

  public async getSuggestedMaxFee(
    { type, payload }: EstimateFeeAction,
    details: EstimateFeeDetails
  ) {
    let feeEstimate: EstimateFee;

    switch (type) {
      case 'INVOKE':
        feeEstimate = await this.estimateInvokeFee(payload, details);
        break;

      case 'DECLARE':
        feeEstimate = await this.estimateDeclareFee(payload, details);
        break;

      case 'DEPLOY_ACCOUNT':
        feeEstimate = await this.estimateAccountDeployFee(payload, details);
        break;

      case 'DEPLOY':
        feeEstimate = await this.estimateDeployFee(payload, details);
        break;

      default:
        feeEstimate = { suggestedMaxFee: ZERO, overall_fee: ZERO };
        break;
    }

    return feeEstimate.suggestedMaxFee.toString();
  }

  public async buildDeclarePayload(
    { classHash, contract }: DeclareContractPayload,
    { nonce, chainId, version, walletAddress, maxFee }: InvocationsSignerDetails
  ): Promise<DeclareContractTransaction> {
    const contractDefinition = parseContract(contract);
    const signature = await this.signer.signDeclareTransaction({
      classHash,
      senderAddress: walletAddress,
      chainId,
      maxFee,
      version,
      nonce,
    });

    return {
      senderAddress: walletAddress,
      signature,
      contractDefinition,
    };
  }

  public async buildAccountDeployPayload(
    {
      classHash,
      addressSalt = 0,
      constructorCalldata = [],
      contractAddress: providedContractAddress,
    }: DeployAccountContractPayload,
    { nonce, chainId, version, maxFee }: InvocationsSignerDetails
  ): Promise<DeployAccountContractTransaction> {
    const contractAddress =
      providedContractAddress ??
      calculateContractAddressFromHash(addressSalt, classHash, constructorCalldata, 0);

    const signature = await this.signer.signDeployAccountTransaction({
      classHash,
      contractAddress,
      chainId,
      maxFee,
      version,
      nonce,
      addressSalt,
      constructorCalldata,
    });

    return {
      classHash,
      addressSalt,
      constructorCalldata,
      signature,
    };
  }

  public buildUDCContractPayload(
    payload: UniversalDeployerContractPayload | UniversalDeployerContractPayload[]
  ): Call[] {
    const calls = [].concat(payload as []).map((it) => {
      const {
        classHash,
        salt = '0',
        unique = true,
        constructorCalldata = [],
      } = it as UniversalDeployerContractPayload;
      const compiledConstructorCallData = compileCalldata(constructorCalldata);

      return {
        contractAddress: UDC.ADDRESS,
        entrypoint: UDC.ENTRYPOINT,
        calldata: [
          classHash,
          salt,
          toCairoBool(unique),
          compiledConstructorCallData.length,
          ...compiledConstructorCallData,
        ],
      };
    });
    return calls;
  }
}

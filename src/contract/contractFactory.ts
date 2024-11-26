import { AccountInterface } from '../account';
import {
  Abi,
  ArgsOrCalldata,
  CairoAssembly,
  CompiledContract,
  ContractOptions,
  ValidateType,
} from '../types';
import assert from '../utils/assert';
import { CallData } from '../utils/calldata';
import { Contract, getCalldata } from './default';

export type ContractFactoryParams = {
  compiledContract: CompiledContract;
  account: any;
  casm?: CairoAssembly;
  classHash?: string;
  compiledClassHash?: string;
  abi?: Abi;
  contractOptions?: ContractOptions;
};

export class ContractFactory {
  compiledContract: CompiledContract;

  account: AccountInterface;

  abi: Abi;

  classHash?: string;

  casm?: CairoAssembly;

  compiledClassHash?: string;

  private CallData: CallData;

  public contractOptions?: ContractOptions;

  /**
   * @param params CFParams
   *  - compiledContract: CompiledContract;
   *  - account: AccountInterface;
   *  - casm?: CairoAssembly;
   *  - classHash?: string;
   *  - compiledClassHash?: string;
   *  - abi?: Abi;
   */
  constructor(params: ContractFactoryParams) {
    this.compiledContract = params.compiledContract;
    this.account = params.account;
    this.casm = params.casm;
    this.abi = params.abi ?? params.compiledContract.abi;
    this.classHash = params.classHash;
    this.compiledClassHash = params.compiledClassHash;
    this.CallData = new CallData(this.abi);
    this.contractOptions = params.contractOptions;
  }

  /**
   * Deploys contract and returns new instance of the Contract
   *
   * If contract is not declared it will first declare it, and then deploy
   */
  public async deploy(...args: ArgsOrCalldata): Promise<Contract> {
    // const { args: param, options = { parseRequest: true } } = args; // splitArgsAndOptions(args);

    const constructorCalldata = getCalldata(args, () => {
      if (this.contractOptions?.parseRequest) {
        this.CallData.validate(ValidateType.DEPLOY, 'constructor', args);
        return this.CallData.compile('constructor', args);
      }
      // eslint-disable-next-line no-console
      console.warn('Call skipped parsing but provided rawArgs, possible malfunction request');
      return args;
    });

    const {
      deploy: { contract_address, transaction_hash },
    } = await this.account.declareAndDeploy({
      contract: this.compiledContract,
      casm: this.casm,
      classHash: this.classHash,
      compiledClassHash: this.compiledClassHash,
      constructorCalldata,
      salt: this.contractOptions?.addressSalt,
    });
    assert(Boolean(contract_address), 'Deployment of the contract failed');

    const contractInstance = new Contract(
      this.compiledContract.abi,
      contract_address!,
      this.account
    );
    contractInstance.deployTransactionHash = transaction_hash;

    return contractInstance;
  }

  /**
   * Attaches to new Account
   *
   * @param account - new Account to attach to
   */
  connect(account: AccountInterface): ContractFactory {
    this.account = account;
    return this;
  }

  /**
   * Attaches current abi and account to the new address
   */
  attach(address: string): Contract {
    return new Contract(this.abi, address, this.account);
  }

  // ethers.js' getDeployTransaction can't be supported as it requires the account or signer to return a signed transaction which is not possible with the current implementation
}

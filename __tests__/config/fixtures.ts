import fs from 'node:fs';
import path from 'node:path';

import { Account, Provider, ProviderInterface, RpcProvider, json } from '../../src';
import {
  CompiledSierra,
  CompiledSierraCasm,
  LegacyCompiledContract,
  waitForTransactionOptions,
} from '../../src/types';
import { ETransactionVersion } from '../../src/types/api';
import { toHex } from '../../src/utils/num';

const readContract = (name: string): LegacyCompiledContract =>
  json.parse(
    fs.readFileSync(path.resolve(__dirname, `../../__mocks__/${name}.json`)).toString('ascii')
  );

const readContractSierraCasm = (name: string): CompiledSierraCasm =>
  json.parse(
    fs.readFileSync(path.resolve(__dirname, `../../__mocks__/${name}.casm`)).toString('ascii')
  );

const readContractSierra = (name: string): CompiledSierra =>
  json.parse(
    fs.readFileSync(path.resolve(__dirname, `../../__mocks__/${name}.json`)).toString('ascii')
  );

export const compiledOpenZeppelinAccount = readContract('Account');
export const compiledErc20 = readContract('ERC20');
export const compiledErc20Echo = readContract('ERC20-echo');
export const compiledL1L2 = readContract('l1l2_compiled');
export const compiledTypeTransformation = readContract('contract');
export const compiledMulticall = readContract('multicall');
export const compiledTestDapp = readContract('TestDapp');
export const compiledHashSierra = readContractSierra('cairo/hash/hash');
export const compiledHashSierraCasm = readContractSierraCasm('cairo/hash/hash');
export const compiledHelloSierra = readContractSierra('cairo/helloSierra/hello');
export const compiledHelloSierraCasm = readContractSierraCasm('cairo/helloSierra/hello');
export const compiledComplexSierra = readContractSierra('cairo/complexInput/complexInput');
export const compiledC1Account = readContractSierra('cairo/account/accountOZ080');
export const compiledC1AccountCasm = readContractSierraCasm('cairo/account/accountOZ080');
export const compiledArgentAccount = readContractSierra('cairo/account/accountArgent040');
export const compiledArgentAccountCasm = readContractSierraCasm('cairo/account/accountArgent040');
export const compiledC1v2 = readContractSierra('cairo/helloCairo2/compiled');
export const compiledC1v2Casm = readContractSierraCasm('cairo/helloCairo2/compiled');
export const compiledC210 = readContractSierra('cairo/cairo210/cairo210.sierra');
export const compiledC210Casm = readContractSierraCasm('cairo/cairo210/cairo210');
export const compiledC240 = readContractSierra('cairo/cairo240/string.sierra');
export const compiledC240Casm = readContractSierraCasm('cairo/cairo240/string');
export const compiledEthAccount = readContractSierra(
  'cairo/ethSigner/openzeppelin_EthAccount090.sierra'
);
export const compiledEthCasm = readContractSierraCasm('cairo/ethSigner/openzeppelin_EthAccount090');
export const compiledDummy1Eth = readContractSierra('cairo/ethSigner/dummy1ForEth.sierra');
export const compiledDummy1EthCasm = readContractSierraCasm('cairo/ethSigner/dummy1ForEth');
export const compiledDummy2Eth = readContractSierra('cairo/ethSigner/dummy2ForEth.sierra');
export const compiledDummy2EthCasm = readContractSierraCasm('cairo/ethSigner/dummy2ForEth');
export const compiledEthPubk = readContractSierra('cairo/ethSigner/testEthPubKey.sierra');
export const compiledEthPubkCasm = readContractSierraCasm('cairo/ethSigner/testEthPubKey');
export const compiledC260 = readContractSierra('cairo/cairo260/hello260.sierra');
export const compiledC260Casm = readContractSierraCasm('cairo/cairo260/hello260');
export const compiledTuple = readContractSierra('cairo/cairo253/tupleResponse.sierra');
export const compiledTupleCasm = readContractSierraCasm('cairo/cairo253/tupleResponse');
export const compiledU512 = readContractSierra('cairo/cairo260/u512.sierra');
export const compiledU512Casm = readContractSierraCasm('cairo/cairo260/u512');
// StarknetId
export const compiledStarknetId = readContractSierra('starknetId/identity/identity.sierra');
export const compiledStarknetIdCasm = readContractSierraCasm('starknetId/identity/identity');
export const compiledNaming = readContractSierra('starknetId/naming/naming.sierra');
export const compiledNamingCasm = readContractSierraCasm('starknetId/naming/naming');
export const compiledPricing = readContractSierra('starknetId/pricing/pricing.sierra');
export const compiledPricingCasm = readContractSierraCasm('starknetId/pricing/pricing');
export const compiledTestRejectSierra = readContractSierra('cairo/testReject/test_reject.sierra');
export const compiledTestRejectCasm = readContractSierraCasm('cairo/testReject/test_reject');
export const compiledSidMulticall = readContractSierra('starknetId/multicall/multicall.sierra');
export const compiledSidMulticallCasm = readContractSierraCasm('starknetId/multicall/multicall');
export function getTestProvider(isProvider?: true): ProviderInterface;
export function getTestProvider(isProvider?: false): RpcProvider;
export function getTestProvider(isProvider: boolean = true): ProviderInterface | RpcProvider {
  const provider = isProvider
    ? new Provider({ nodeUrl: process.env.TEST_RPC_URL })
    : new RpcProvider({ nodeUrl: process.env.TEST_RPC_URL });

  if (process.env.IS_DEVNET === 'true') {
    // accelerate the tests when running locally
    const originalWaitForTransaction = provider.waitForTransaction.bind(provider);
    provider.waitForTransaction = (txHash: string, options: waitForTransactionOptions = {}) => {
      return originalWaitForTransaction(txHash, { retryInterval: 1000, ...options });
    };
  }

  return provider;
}

export const TEST_TX_VERSION = process.env.TX_VERSION === 'v3' ? ETransactionVersion.V3 : undefined;

export const getTestAccount = (provider: ProviderInterface) => {
  return new Account(
    provider,
    toHex(process.env.TEST_ACCOUNT_ADDRESS || ''),
    process.env.TEST_ACCOUNT_PRIVATE_KEY || '',
    undefined,
    TEST_TX_VERSION
  );
};

export const createBlockForDevnet = async (): Promise<void> => {
  if (!(process.env.IS_DEVNET === 'true')) return;
  await fetch(new URL('/create_block', process.env.TEST_RPC_URL), { method: 'POST' });
};

const describeIf = (condition: boolean) => (condition ? describe : describe.skip);
export const describeIfRpc = describeIf(process.env.IS_RPC === 'true');
export const describeIfNotDevnet = describeIf(process.env.IS_DEVNET === 'false');
export const describeIfDevnet = describeIf(process.env.IS_DEVNET === 'true');
export const describeIfTestnet = describeIf(process.env.IS_TESTNET === 'true');

export const erc20ClassHash = '0x54328a1075b8820eb43caf0caa233923148c983742402dcfc38541dd843d01a';
export const wrongClassHash = '0x000000000000000000000000000000000000000000000000000000000000000';

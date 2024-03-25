import { getStarkKey, utils } from '@scure/starknet';

import {
  Account,
  Block,
  CallData,
  Contract,
  ETransactionExecutionStatus,
  ETransactionStatus,
  FeeEstimate,
  RPC,
  RPC06,
  RpcProvider,
  stark,
  waitForTransactionOptions,
} from '../src';
import { StarknetChainId } from '../src/constants';
import { felt, uint256 } from '../src/utils/calldata/cairo';
import { toHexString } from '../src/utils/num';
import {
  compiledErc20Echo,
  compiledL1L2,
  compiledOpenZeppelinAccount,
  createBlockForDevnet,
  describeIfDevnet,
  describeIfNotDevnet,
  describeIfRpc,
  getTestAccount,
  getTestProvider,
} from './config/fixtures';
import { initializeMatcher } from './config/schema';

describeIfRpc('RPCProvider', () => {
  const rpcProvider = getTestProvider(false);
  const provider = getTestProvider();
  const account = getTestAccount(provider);
  let accountPublicKey: string;
  initializeMatcher(expect);

  beforeAll(async () => {
    expect(account).toBeInstanceOf(Account);
    const accountKeyPair = utils.randomPrivateKey();
    accountPublicKey = getStarkKey(accountKeyPair);
    await createBlockForDevnet();
  });

  test('getChainId', async () => {
    const fetchSpy = jest.spyOn(rpcProvider.channel as any, 'fetchEndpoint');
    (rpcProvider as any).chainId = undefined as unknown as StarknetChainId;
    const chainId1 = await rpcProvider.getChainId();
    const chainId2 = await rpcProvider.getChainId();
    expect(fetchSpy.mock.calls.length).toBe(1);
    expect(chainId1).toBe(chainId2);
    expect(Object.values(StarknetChainId)).toContain(chainId1);
    fetchSpy.mockRestore();
  });

  test('getTransactionCount', async () => {
    const count = await rpcProvider.getBlockTransactionCount('latest');
    expect(typeof count).toBe('number');
  });

  test('getBlockHashAndNumber', async () => {
    const blockHashAndNumber = await rpcProvider.getBlockLatestAccepted();
    expect(blockHashAndNumber).toHaveProperty('block_hash');
    expect(blockHashAndNumber).toHaveProperty('block_number');
  });

  test('getBlockNumber', async () => {
    const blockNumber = await rpcProvider.getBlockNumber();
    expect(typeof blockNumber).toBe('number');
  });

  test('getStateUpdate', async () => {
    const stateUpdate = await rpcProvider.getBlockStateUpdate('latest');
    expect(stateUpdate).toMatchSchemaRef('StateUpdateResponse');
  });

  test('getSpecVersion', async () => {
    const spec = await rpcProvider.getSpecVersion();
    expect(typeof spec).toBe('string');
  });

  test('configurable margin', async () => {
    const p = new RpcProvider({
      nodeUrl: provider.channel.nodeUrl,
      feeMarginPercentage: {
        l1BoundMaxAmount: 0,
        l1BoundMaxPricePerUnit: 0,
        maxFee: 0,
      },
    });
    const estimateSpy = jest.spyOn(p.channel as any, 'getEstimateFee');
    const mockFeeEstimate: FeeEstimate = {
      gas_consumed: '0x2',
      gas_price: '0x1',
      data_gas_consumed: '0x2',
      data_gas_price: '0x1',
      overall_fee: '0x4',
      unit: 'WEI',
    };
    estimateSpy.mockResolvedValue([mockFeeEstimate]);
    const result = (await p.getEstimateFeeBulk([{} as any], {}))[0];
    expect(estimateSpy).toHaveBeenCalledTimes(1);
    expect(result.suggestedMaxFee).toBe(4n);
    expect(result.resourceBounds.l1_gas.max_amount).toBe('0x4');
    expect(result.resourceBounds.l1_gas.max_price_per_unit).toBe('0x1');
    estimateSpy.mockRestore();
  });

  describe('Test Estimate message fee', () => {
    const L1_ADDRESS = '0x8359E4B0152ed5A731162D3c7B0D8D56edB165A0';
    let l1l2ContractAddress: string;

    beforeAll(async () => {
      const { deploy } = await account.declareAndDeploy({
        contract: compiledL1L2,
      });
      l1l2ContractAddress = deploy.contract_address;
    });

    test('estimate message fee', async () => {
      const estimation = await rpcProvider.estimateMessageFee({
        from_address: L1_ADDRESS,
        to_address: l1l2ContractAddress,
        entry_point_selector: 'deposit',
        payload: ['556', '123'],
      });
      expect(estimation).toEqual(
        expect.objectContaining({
          gas_consumed: expect.anything(),
          gas_price: expect.anything(),
          overall_fee: expect.anything(),
        })
      );
    });
  });

  describe('waitForTransaction', () => {
    const receipt = {};
    const transactionStatusSpy = jest.spyOn(rpcProvider.channel as any, 'getTransactionStatus');
    const transactionReceiptSpy = jest.spyOn(rpcProvider.channel as any, 'getTransactionReceipt');

    const generateOptions = (o: waitForTransactionOptions) => ({ retryInterval: 10, ...o });
    const generateTransactionStatus = (
      finality_status: `${ETransactionStatus}`,
      execution_status?: `${ETransactionExecutionStatus}`
    ): RPC.TransactionStatus => ({
      finality_status,
      execution_status,
    });
    const response = {
      successful: generateTransactionStatus('ACCEPTED_ON_L1', 'SUCCEEDED'),
      reverted: generateTransactionStatus('ACCEPTED_ON_L2', 'REVERTED'),
      rejected: generateTransactionStatus('REJECTED'),
    };

    beforeAll(() => {
      transactionStatusSpy.mockResolvedValue(null);
      transactionReceiptSpy.mockResolvedValue(receipt);
    });

    afterAll(() => {
      transactionStatusSpy.mockRestore();
      transactionReceiptSpy.mockRestore();
    });

    test('successful - default', async () => {
      transactionStatusSpy.mockResolvedValueOnce(response.successful);
      await expect(rpcProvider.waitForTransaction(0)).resolves.toBe(receipt);
    });

    test('reverted - default', async () => {
      transactionStatusSpy.mockResolvedValueOnce(response.reverted);
      await expect(rpcProvider.waitForTransaction(0)).resolves.toBe(receipt);
    });

    test('rejected - default', async () => {
      transactionStatusSpy.mockResolvedValueOnce(response.rejected);
      await expect(rpcProvider.waitForTransaction(0)).rejects.toThrow(
        `${undefined}: ${RPC.ETransactionStatus.REJECTED}`
      );
    });

    test('reverted - as error state', async () => {
      transactionStatusSpy.mockResolvedValueOnce(response.reverted);
      const options = generateOptions({ errorStates: [ETransactionExecutionStatus.REVERTED] });
      await expect(rpcProvider.waitForTransaction(0, options)).rejects.toThrow(
        `${RPC.ETransactionExecutionStatus.REVERTED}: ${RPC.ETransactionStatus.ACCEPTED_ON_L2}`
      );
    });

    test('no error state; timed-out', async () => {
      const options = generateOptions({ errorStates: [] });
      await expect(rpcProvider.waitForTransaction(0, options)).rejects.toThrow(/timed-out/);
    });
  });

  describe('RPC methods', () => {
    let latestBlock: Block;

    beforeAll(async () => {
      latestBlock = await provider.getBlock('latest');
    });

    test('getBlockWithTxHashes', async () => {
      const blockResponse = await rpcProvider.getBlockWithTxHashes(latestBlock.block_number);
      expect(blockResponse).toHaveProperty('transactions');
    });

    test('getBlockWithTxs', async () => {
      const blockResponse = await rpcProvider.getBlockWithTxs(latestBlock.block_number);
      expect(blockResponse).toHaveProperty('transactions');
    });

    test('getBlockWithReceipts - 0.6 RpcChannel', async () => {
      const channel = new RPC06.RpcChannel({ nodeUrl: rpcProvider.channel.nodeUrl });
      const p = new RpcProvider({ channel } as any);
      await expect(p.getBlockWithReceipts(latestBlock.block_number)).rejects.toThrow(/Unsupported/);
    });

    test('getBlockWithReceipts - 0.7 RpcChannel', async () => {
      const blockResponse = await rpcProvider.getBlockWithReceipts(latestBlock.block_number);
      expect(blockResponse).toMatchSchemaRef('BlockWithTxReceipts');
    });

    test('getTransactionByBlockIdAndIndex', async () => {
      const transaction = await rpcProvider.getTransactionByBlockIdAndIndex(
        latestBlock.block_number,
        0
      );
      expect(transaction).toHaveProperty('transaction_hash');
    });

    test('getPendingTransactions', async () => {
      const transactions = await rpcProvider.getPendingTransactions();
      expect(Array.isArray(transactions)).toBe(true);
    });

    xtest('traceBlockTransactions', async () => {
      await rpcProvider.getBlockTransactionsTraces(latestBlock.block_hash);
    });

    describeIfDevnet('devnet only', () => {
      test('getSyncingStats', async () => {
        const syncingStats = await rpcProvider.getSyncingStats();
        expect(syncingStats).toBe(false);
      });

      test('getEvents ', async () => {
        const randomWallet = stark.randomAddress();
        const classHash = '0x011ab8626b891bcb29f7cc36907af7670d6fb8a0528c7944330729d8f01e9ea3';
        const transferSelector = toHexString(
          '271746229759260285552388728919865295615886751538523744128730118297934206697'
        );

        const { deploy } = await account.declareAndDeploy({
          contract: compiledErc20Echo,
          classHash,
          constructorCalldata: CallData.compile({
            name: felt('Token'),
            symbol: felt('ERC20'),
            decimals: felt('18'),
            initial_supply: uint256('1000000000'),
            recipient: felt(account.address),
            signers: [],
            threshold: 1,
          }),
        });

        const erc20EchoContract = new Contract(
          compiledErc20Echo.abi,
          deploy.contract_address!,
          account
        );
        await erc20EchoContract.transfer(randomWallet, uint256(1));
        await erc20EchoContract.transfer(randomWallet, uint256(1));

        const blockNumber = await rpcProvider.getBlockNumber();
        const result = await rpcProvider.getEvents({
          from_block: { block_number: 0 },
          to_block: { block_number: blockNumber },
          address: deploy.contract_address,
          keys: [[transferSelector]],
          chunk_size: 2,
        });

        const result1 = await rpcProvider.getEvents({
          chunk_size: 2, // all optional parameters removed
        });

        expect(result).toHaveProperty('continuation_token');
        expect(result).toHaveProperty('events');
        expect(result1).toHaveProperty('events');
        expect(Array.isArray(result?.events)).toBe(true);
        expect(result?.events?.length).toBe(2);
        expect(result.events[0]).toMatchSchemaRef('StarknetEmittedEvent');

        const result2 = await rpcProvider.getEvents({
          from_block: { block_number: 0 },
          to_block: { block_number: blockNumber },
          address: deploy.contract_address,
          keys: [[transferSelector]],
          chunk_size: 2,
          continuation_token: result.continuation_token,
        });

        expect(result2).not.toHaveProperty('continuation_token');
        expect(result2).toHaveProperty('events');
        expect(Array.isArray(result2?.events)).toBe(true);
        expect(result2?.events?.length).toBe(1);
      });
    });

    describe('deploy contract related tests', () => {
      let contract_address: string;
      let transaction_hash: string;
      let ozClassHash: string;

      beforeAll(async () => {
        const { deploy } = await account.declareAndDeploy({
          contract: compiledOpenZeppelinAccount,
          constructorCalldata: [accountPublicKey],
          salt: accountPublicKey,
        });

        contract_address = deploy.contract_address;
        transaction_hash = deploy.transaction_hash;
        ozClassHash = deploy.classHash;
      });

      test('declareDeploy()', () => {
        expect(contract_address).toBeTruthy();
        expect(transaction_hash).toBeTruthy();
      });

      test('getTransactionByHash', async () => {
        const transaction = await rpcProvider.getTransactionByHash(transaction_hash);
        expect(transaction).toMatchSchemaRef('GetTransactionResponse');
      });

      test('getTransactionStatus()', async () => {
        return expect(rpcProvider.getTransactionStatus(transaction_hash)).resolves.not.toThrow();
      });

      test('getTransaction', async () => {
        // todo - schema for rpc need to be created and expected response here updated
        const transaction = await rpcProvider.getTransactionByHash(transaction_hash);
        expect(transaction).toMatchSchemaRef('GetTransactionResponse');
      });

      test('getClassHashAt', async () => {
        const classHash = await rpcProvider.getClassHashAt(contract_address);
        expect(typeof classHash).toBe('string');
      });

      test('traceTransaction', async () => {
        const trace = await rpcProvider.getTransactionTrace(transaction_hash);
        expect(trace).toMatchSchemaRef('getTransactionTrace');
      });

      test('getClassAt', async () => {
        const classAt = await rpcProvider.getClassAt(contract_address);
        expect(classAt).toMatchSchemaRef('LegacyContractClass');
      });

      test('getClass classHash', async () => {
        const contractClass = await rpcProvider.getClass(ozClassHash);
        expect(contractClass).toMatchSchemaRef('LegacyContractClass');
      });
    });
  });

  describeIfNotDevnet('global rpc only', () => {
    test('getSyncingStats', async () => {
      const syncingStats = await rpcProvider.getSyncingStats();
      expect(syncingStats).toMatchSchemaRef('GetSyncingStatsResponse');
    });
  });
});

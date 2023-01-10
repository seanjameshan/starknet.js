import { Account, GetBlockResponse, RpcProvider, ec } from '../src';
import { StarknetChainId } from '../src/constants';
import {
  compiledOpenZeppelinAccount,
  describeIfNotDevnet,
  describeIfRpc,
  getTestAccount,
  getTestProvider,
} from './fixtures';

describeIfRpc('RPCProvider', () => {
  const rpcProvider = getTestProvider() as RpcProvider;
  const account = getTestAccount(rpcProvider);
  let accountPublicKey: string;

  beforeAll(async () => {
    expect(account).toBeInstanceOf(Account);
    const accountKeyPair = ec.genKeyPair();
    accountPublicKey = ec.getStarkKey(accountKeyPair);
  });

  test('getChainId', async () => {
    const chainId = await rpcProvider.getChainId();
    expect([StarknetChainId.TESTNET2, StarknetChainId.MAINNET, StarknetChainId.TESTNET]).toContain(
      chainId
    );
  });

  test('getTransactionCount', async () => {
    const count = await rpcProvider.getTransactionCount('latest');
    expect(typeof count).toBe('number');
  });

  test('getBlockHashAndNumber', async () => {
    const blockHashAndNumber = await rpcProvider.getBlockHashAndNumber();
    expect(blockHashAndNumber).toHaveProperty('block_hash');
    expect(blockHashAndNumber).toHaveProperty('block_number');
  });

  test('getStateUpdate', async () => {
    const stateUpdate = await rpcProvider.getStateUpdate('latest');
    expect(stateUpdate).toHaveProperty('block_hash');
    expect(stateUpdate).toHaveProperty('new_root');
    expect(stateUpdate).toHaveProperty('old_root');
    expect(stateUpdate).toHaveProperty('state_diff');
  });

  xtest('getProtocolVersion - pathfinder not implement', async () => {
    await rpcProvider.getProtocolVersion();
  });

  describeIfNotDevnet('devnet not implement', () => {
    test('getPendingTransactions', async () => {
      const transactions = await rpcProvider.getPendingTransactions();
      expect(Array.isArray(transactions)).toBe(true);
    });
  });

  describe('RPC methods', () => {
    let latestBlock: GetBlockResponse;

    beforeAll(async () => {
      latestBlock = await rpcProvider.getBlock('latest');
    });

    test('getBlockWithTxHashes', async () => {
      const blockResponse = await rpcProvider.getBlockWithTxHashes(latestBlock.block_number);
      expect(blockResponse).toHaveProperty('transactions');
    });

    test('getBlockWithTxs', async () => {
      const blockResponse = await rpcProvider.getBlockWithTxs(latestBlock.block_number);
      expect(blockResponse).toHaveProperty('transactions');
    });

    test('getTransactionByBlockIdAndIndex', async () => {
      const transaction = await rpcProvider.getTransactionByBlockIdAndIndex(
        latestBlock.block_number,
        0
      );
      expect(transaction).toHaveProperty('transaction_hash');
    });

    xtest('traceBlockTransactions', async () => {
      await rpcProvider.traceBlockTransactions(latestBlock.block_hash);
    });

    describe('deploy contract related tests', () => {
      let contract_address: string;
      let transaction_hash: string;

      beforeAll(async () => {
        const { deploy } = await account.declareDeploy({
          contract: compiledOpenZeppelinAccount,
          classHash: '0x058d97f7d76e78f44905cc30cb65b91ea49a4b908a76703c54197bca90f81773',
          constructorCalldata: [accountPublicKey],
          salt: accountPublicKey,
        });

        contract_address = deploy.contract_address;
        transaction_hash = deploy.transaction_hash;
      });

      test('declareDeploy()', () => {
        expect(contract_address).toBeTruthy();
        expect(transaction_hash).toBeTruthy();
      });

      test('getTransactionByHash', async () => {
        const transaction = await rpcProvider.getTransactionByHash(transaction_hash);
        expect(transaction).toHaveProperty('transaction_hash');
      });

      test('getClassHashAt', async () => {
        const classHash = await rpcProvider.getClassHashAt(contract_address);
        expect(typeof classHash).toBe('string');
      });

      xtest('traceTransaction', async () => {
        await rpcProvider.traceTransaction(transaction_hash);
      });
    });

    test('getClass classHash 0x058d97f7d76e78f44905cc30cb65b91ea49a4b908a76703c54197bca90f81773', async () => {
      const contractClass = await rpcProvider.getClass(
        '0x058d97f7d76e78f44905cc30cb65b91ea49a4b908a76703c54197bca90f81773'
      );
      expect(contractClass).toHaveProperty('program');
      expect(contractClass).toHaveProperty('entry_points_by_type');
    });
  });
});

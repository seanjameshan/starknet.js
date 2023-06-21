import {
  Abi,
  Account,
  BigNumberish,
  CallData,
  Calldata,
  Contract,
  DeclareDeployUDCResponse,
  RawArgsArray,
  RawArgsObject,
  SequencerProvider,
  cairo,
  ec,
  hash,
  num,
  shortString,
  stark,
} from '../src';
import { isCairo1Abi } from '../src/utils/calldata/cairo';
import { starknetKeccak } from '../src/utils/selector';
import {
  compiledC1Account,
  compiledC1AccountCasm,
  compiledComplexSierra,
  compiledHelloSierra,
  compiledHelloSierraCasm,
  describeIfDevnet,
  describeIfDevnetSequencer,
  describeIfSequencerTestnet2,
  getTestAccount,
  getTestProvider,
} from './fixtures';
import { initializeMatcher } from './schema';

describeIfDevnet('Cairo 1 Devnet', () => {
  describe('API &  Contract interactions', () => {
    const provider = getTestProvider();
    const account = getTestAccount(provider);
    let dd: DeclareDeployUDCResponse;
    let cairo1Contract: Contract;
    initializeMatcher(expect);

    beforeAll(async () => {
      dd = await account.declareAndDeploy({
        contract: compiledHelloSierra,
        casm: compiledHelloSierraCasm,
      });

      cairo1Contract = new Contract(compiledHelloSierra.abi, dd.deploy.contract_address, account);
    });

    test('Declare & deploy v2 - Hello Cairo 1 contract', async () => {
      expect(dd.declare).toMatchSchemaRef('DeclareContractResponse');
      expect(dd.deploy).toMatchSchemaRef('DeployContractUDCResponse');
      expect(cairo1Contract).toBeInstanceOf(Contract);
    });

    test('deployContract Cairo1', async () => {
      const deploy = await account.deployContract({
        classHash: dd.deploy.classHash,
      });
      expect(deploy).toHaveProperty('address');
    });

    test('GetClassByHash', async () => {
      const classResponse = await provider.getClassByHash(dd.deploy.classHash);
      expect(classResponse).toMatchSchemaRef('SierraContractClass');
    });

    test('GetClassAt', async () => {
      const classResponse = await provider.getClassAt(dd.deploy.contract_address);
      expect(classResponse).toMatchSchemaRef('SierraContractClass');
    });

    test('isCairo1', async () => {
      const isContractCairo1 = cairo1Contract.isCairo1();
      expect(isContractCairo1).toBe(true);
      const isAbiCairo1 = isCairo1Abi(cairo1Contract.abi);
      expect(isAbiCairo1).toBe(true);
    });

    test('Cairo 1 Contract Interaction - skip invoke validation & call parsing', async () => {
      const tx = await cairo1Contract.increase_balance(
        CallData.compile({
          amount: 100,
        })
      );
      await account.waitForTransaction(tx.transaction_hash);

      const balance = await cairo1Contract.get_balance({
        parseResponse: false,
      });

      expect(num.toBigInt(balance[0])).toBe(100n);
    });

    test('Cairo 1 Contract Interaction - felt252', async () => {
      const tx = await cairo1Contract.increase_balance(100);
      await account.waitForTransaction(tx.transaction_hash);
      const balance = await cairo1Contract.get_balance();
      expect(balance).toBe(200n);
    });

    test('Cairo 1 Contract Interaction - uint 8, 16, 32, 64, 128', async () => {
      const tx = await cairo1Contract.increase_balance_u8(255n);
      await account.waitForTransaction(tx.transaction_hash);
      const balance = await cairo1Contract.get_balance_u8();
      expect(balance).toBe(255n);

      let result = await cairo1Contract.test_u16(255n);
      expect(result).toBe(256n);
      result = await cairo1Contract.test_u32(255n);
      expect(result).toBe(256n);
      result = await cairo1Contract.test_u64(255n);
      expect(result).toBe(256n);
      result = await cairo1Contract.test_u128(255n);
      expect(result).toBe(256n);
    });

    test('Cairo 1 - uint256', async () => {
      // defined as number
      const result = await cairo1Contract.test_u256(2n ** 256n - 2n);
      expect(result).toBe(2n ** 256n - 1n);

      // defined as struct
      const result1 = await cairo1Contract.test_u256(cairo.uint256(2n ** 256n - 2n));
      expect(result1).toBe(2n ** 256n - 1n);
    });

    test('Cairo 1 Contract Interaction - bool', async () => {
      const cdata = CallData.compile({ false: false, true: true });
      expect(cdata).toEqual(['0', '1']);

      let tx = await cairo1Contract.set_status(true);
      await account.waitForTransaction(tx.transaction_hash);
      let status = await cairo1Contract.get_status();

      expect(status).toBe(true);

      tx = await cairo1Contract.set_status(false);
      await account.waitForTransaction(tx.transaction_hash);
      status = await cairo1Contract.get_status();

      expect(status).toBe(false);

      tx = await cairo1Contract.set_status(true);
      await account.waitForTransaction(tx.transaction_hash);
      status = await cairo1Contract.get_status();

      expect(status).toBe(true);
    });

    test('Cairo 1 Contract Interaction - ContractAddress', async () => {
      const tx = await cairo1Contract.set_ca('123');
      await account.waitForTransaction(tx.transaction_hash);
      const status = await cairo1Contract.get_ca();

      expect(status).toBe(123n);
    });

    test('Cairo1 simple getStorageAt variables retrieval', async () => {
      // u8
      let tx = await cairo1Contract.increase_balance(100);
      await account.waitForTransaction(tx.transaction_hash);
      const balance = await cairo1Contract.get_balance();
      let key = starknetKeccak('balance');
      let storage = await account.getStorageAt(cairo1Contract.address, key);
      expect(BigInt(storage)).toBe(balance);

      // felt
      tx = await cairo1Contract.set_ca('123');
      await account.waitForTransaction(tx.transaction_hash);
      const ca = await cairo1Contract.get_ca();
      key = starknetKeccak('ca');
      storage = await account.getStorageAt(cairo1Contract.address, key);
      expect(BigInt(storage)).toBe(ca);

      // bool
      tx = await cairo1Contract.set_status(true);
      await account.waitForTransaction(tx.transaction_hash);
      const status = await cairo1Contract.get_status();
      key = starknetKeccak('status');
      storage = await account.getStorageAt(cairo1Contract.address, key);
      expect(Boolean(BigInt(storage))).toBe(status);

      // simple struct
      tx = await cairo1Contract.set_user1({
        address: '0x54328a1075b8820eb43caf0caa233923148c983742402dcfc38541dd843d01a',
        is_claimed: true,
      });
      await account.waitForTransaction(tx.transaction_hash);
      const user = await cairo1Contract.get_user1();
      key = starknetKeccak('user1');
      const storage1 = await account.getStorageAt(cairo1Contract.address, key);
      const storage2 = await account.getStorageAt(cairo1Contract.address, key + 1n);
      expect(BigInt(storage1)).toBe(user.address);
      expect(Boolean(BigInt(storage2))).toBe(user.is_claimed);

      // TODO: Complex mapping - https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/contract-storage/
    });

    test('Cairo 1 Contract Interaction - echo flat un-named un-nested tuple', async () => {
      const status = await cairo1Contract.echo_un_tuple(cairo.tuple(77, 123));
      expect(Object.values(status)).toEqual([77n, 123n]);
    });

    test('Cairo 1 Contract Interaction - echo flat un-nested Array u8, uint256, bool', async () => {
      const status = await cairo1Contract.echo_array([123, 55, 77, 255]);
      expect(status).toEqual([123n, 55n, 77n, 255n]);

      // uint256 defiend as number
      const status1 = await cairo1Contract.echo_array_u256([123, 55, 77, 255]);
      expect(status1).toEqual([123n, 55n, 77n, 255n]);

      // uint256 defined as struct
      const status11 = await cairo1Contract.echo_array_u256([
        cairo.uint256(123),
        cairo.uint256(55),
        cairo.uint256(77),
        cairo.uint256(255),
      ]);
      expect(status11).toEqual([123n, 55n, 77n, 255n]);

      const status2 = await cairo1Contract.echo_array_bool([true, true, false, false]);
      expect(status2).toEqual([true, true, false, false]);
    });

    test('Cairo 1 Contract Interaction - echo flat un-nested Struct', async () => {
      const status = await cairo1Contract.echo_struct({
        val: 'simple',
      });
      expect(shortString.decodeShortString(status.val)).toBe('simple');
    });

    test('Cairo 1 more complex structs', async () => {
      const tx = await cairo1Contract.set_bet();
      await account.waitForTransaction(tx.transaction_hash);
      const status = await cairo1Contract.get_bet(1, {
        formatResponse: { name: 'string', description: 'string' },
      });

      const expected = {
        name: 'test',
        description: 'dec',
        expire_date: 1n,
        creation_time: 1n,
        creator: 3562055384976875123115280411327378123839557441680670463096306030682092229914n,
        is_cancelled: false,
        is_voted: false,
        bettor: {
          address: 3562055384976875123115280411327378123839557441680670463096306030682092229914n,
          is_claimed: false,
        },
        counter_bettor: {
          address: 3562055384976875123115280411327378123839557441680670463096306030682092229914n,
          is_claimed: false,
        },
        winner: false,
        pool: 10n,
        amount: 1000n,
      };
      expect(expected).toEqual(status);
    });

    test('C1 Array 2D', async () => {
      const cd = CallData.compile({
        test: [
          [1, 2],
          [3, 4],
        ],
      });

      const tx = await cairo1Contract.array2d_ex([
        [1, 2],
        [3, 4],
      ]);
      const tx1 = await cairo1Contract.array2d_ex(cd);
      await account.waitForTransaction(tx.transaction_hash);
      await account.waitForTransaction(tx1.transaction_hash);

      const result0 = await cairo1Contract.array2d_felt([
        [1, 2],
        [3, 4],
      ]);
      const result01 = await cairo1Contract.array2d_felt(cd);
      expect(result0).toBe(1n);
      expect(result0).toBe(result01);

      const result1 = await cairo1Contract.array2d_array([
        [1, 2],
        [3, 4],
      ]);
      const result11 = await cairo1Contract.array2d_array(cd);
      expect(result1).toEqual([
        [1n, 2n],
        [3n, 4n],
      ]);
      expect(result1).toEqual(result11);
    });

    test('mix tuples', async () => {
      const res = await cairo1Contract.array_bool_tuple([1, 2, 3], true);
      expect(res).toEqual({
        0: [1n, 2n, 3n, 1n, 2n],
        1: true,
      });

      const res1 = await cairo1Contract.tuple_echo(cairo.tuple([1, 2, 3], [4, 5, 6]));
      expect(res1).toEqual({
        0: [1n, 2n, 3n],
        1: [4n, 5n, 6n],
      });
    });

    test('myCallData.compile for Cairo 1', async () => {
      const myFalseUint256 = { high: 1, low: 23456 }; // wrong order
      type Order2 = {
        p1: BigNumberish;
        p2: BigNumberish[];
      };

      const myOrder2bis: Order2 = {
        // wrong order
        p2: [234, 467456745457n, '0x56ec'],
        p1: '17',
      };
      const myRawArgsObject: RawArgsObject = {
        // wrong order
        active: true,
        symbol: 'NIT',
        initial_supply: myFalseUint256,
        recipient: '0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a',
        decimals: 18,
        tupoftup: cairo.tuple(cairo.tuple(34, '0x5e'), myFalseUint256),
        card: myOrder2bis,
        longText: 'Bug is back, for ever, here and everywhere',
        array1: [100, 101, 102],
        array2: [
          [200, 201],
          [202, 203],
          [204, 205],
        ],
        array3: [myOrder2bis, myOrder2bis],
        array4: [myFalseUint256, myFalseUint256],
        tuple1: cairo.tuple(40000n, myOrder2bis, [54, 55n, '0xae'], 'texte'),
        name: 'niceToken',
        array5: [cairo.tuple(251, 40000n), cairo.tuple(252, 40001n)],
      };
      const myRawArgsArray: RawArgsArray = [
        'niceToken',
        'NIT',
        18,
        { low: 23456, high: 1 },
        { p1: '17', p2: [234, 467456745457n, '0x56ec'] },
        '0x7e00d496e324876bbc8531f2d9a82bf154d1a04a50218ee74cdd372f75a551a',
        true,
        { '0': { '0': 34, '1': '0x5e' }, '1': { low: 23456, high: 1 } },
        'Bug is back, for ever, here and everywhere',
        [100, 101, 102],
        [
          [200, 201],
          [202, 203],
          [204, 205],
        ],
        [
          { p1: '17', p2: [234, 467456745457n, '0x56ec'] },
          { p1: '17', p2: [234, 467456745457n, '0x56ec'] },
        ],
        [
          { low: 23456, high: 1 },
          { low: 23456, high: 1 },
        ],
        {
          '0': 40000n,
          '1': { p1: '17', p2: [234, 467456745457n, '0x56ec'] },
          '2': [54, 55n, '0xae'],
          '3': 'texte',
        },
        [
          { '0': 251, '1': 40000n },
          { '0': 252, '1': 40001n },
        ],
      ];

      const contractCallData: CallData = new CallData(compiledComplexSierra.abi);
      const callDataFromObject: Calldata = contractCallData.compile('constructor', myRawArgsObject);
      const callDataFromArray: Calldata = contractCallData.compile('constructor', myRawArgsArray);
      const expectedResult = [
        '2036735872918048433518',
        '5130580',
        '18',
        '23456',
        '1',
        '17',
        '3',
        '234',
        '467456745457',
        '22252',
        '3562055384976875123115280411327378123839557441680670463096306030682092229914',
        '1',
        '34',
        '94',
        '23456',
        '1',
        '2',
        '117422190885827407409664260607192623408641871979684112605616397634538401380',
        '39164769268277364419555941',
        '3',
        '100',
        '101',
        '102',
        '3',
        '2',
        '200',
        '201',
        '2',
        '202',
        '203',
        '2',
        '204',
        '205',
        '2',
        '17',
        '3',
        '234',
        '467456745457',
        '22252',
        '17',
        '3',
        '234',
        '467456745457',
        '22252',
        '2',
        '23456',
        '1',
        '23456',
        '1',
        '40000',
        '0',
        '17',
        '3',
        '234',
        '467456745457',
        '22252',
        '3',
        '54',
        '55',
        '174',
        '499918599269',
        '2',
        '251',
        '40000',
        '252',
        '40001',
      ];
      expect(callDataFromObject).toStrictEqual(expectedResult);
      expect(callDataFromArray).toStrictEqual(expectedResult);
    });

    describeIfDevnetSequencer('Sequencer only', () => {
      test('getCompiledClassByClassHash', async () => {
        const compiledClass = await (provider as SequencerProvider).getCompiledClassByClassHash(
          dd.deploy.classHash
        );
        expect(compiledClass).toMatchSchemaRef('CompiledClass');
      });
    });
  });

  describe('Cairo1 Account contract', () => {
    const provider = getTestProvider();
    const account = getTestAccount(provider);
    let accountC1: Account;

    beforeAll(async () => {
      // Deploy Cairo 1 Account
      const priKey = stark.randomAddress();
      const pubKey = ec.starkCurve.getStarkKey(priKey);

      const calldata = { publicKey: pubKey };

      // declare account
      const declareAccount = await account.declareIfNot({
        contract: compiledC1Account,
        casm: compiledC1AccountCasm,
      });
      if (declareAccount.transaction_hash) {
        await account.waitForTransaction(declareAccount.transaction_hash);
      }
      const accountClassHash = declareAccount.class_hash;

      // fund new account
      const toBeAccountAddress = hash.calculateContractAddressFromHash(
        pubKey,
        accountClassHash,
        calldata,
        0
      );
      const devnetERC20Address =
        '0x49D36570D4E46F48E99674BD3FCC84644DDD6B96F7C741B1562B82F9E004DC7';
      const { transaction_hash } = await account.execute({
        contractAddress: devnetERC20Address,
        entrypoint: 'transfer',
        calldata: {
          recipient: toBeAccountAddress,
          amount: cairo.uint256(1_000_000_000_000_000),
        },
      });
      await account.waitForTransaction(transaction_hash);

      // deploy account
      accountC1 = new Account(provider, toBeAccountAddress, priKey, '1');
      const deployed = await accountC1.deploySelf({
        classHash: accountClassHash,
        constructorCalldata: calldata,
        addressSalt: pubKey,
      });
      const receipt = await account.waitForTransaction(deployed.transaction_hash);
      expect(receipt).toMatchSchemaRef('GetTransactionReceiptResponse');
    });

    test('deploy Cairo1 Account from Cairo0 Account', () => {
      expect(accountC1).toBeInstanceOf(Account);
    });
  });
});

describeIfSequencerTestnet2('Cairo1 Testnet2', () => {
  describe('Sequencer API - C1 T2 C:0x771bbe2ba64f...', () => {
    const provider = getTestProvider() as SequencerProvider;
    const account = getTestAccount(provider);
    const classHash: any = '0x028b6f2ee9ae00d55a32072d939a55a6eb522974a283880f3c73a64c2f9fd6d6';
    const contractAddress: any =
      '0x771bbe2ba64fa5ab52f0c142b4296fc67460a3a2372b4cdce752c620e3e8194';
    let cairo1Contract: Contract;
    initializeMatcher(expect);

    beforeAll(async () => {
      const cairoClass = await provider.getClassByHash(classHash);
      // TODO: Fix typing and responses for abi
      cairo1Contract = new Contract(cairoClass.abi as Abi, contractAddress, account);
    });

    test('getCompiledClassByClassHash', async () => {
      const compiledClass = await provider.getCompiledClassByClassHash(classHash);
      expect(compiledClass).toMatchSchemaRef('CompiledClass');
    });

    test('GetClassByHash', async () => {
      const classResponse = await provider.getClassByHash(classHash);
      expect(classResponse).toMatchSchemaRef('SierraContractClass');
    });

    test('GetClassAt', async () => {
      const classResponse = await provider.getClassAt(contractAddress);
      expect(classResponse).toMatchSchemaRef('SierraContractClass');
    });

    test('Cairo 1 Contract Interaction - felt252', async () => {
      const result = await cairo1Contract.test_felt252(100);
      expect(result).toBe(101n);
    });

    test('Cairo 1 Contract Interaction - uint 8, 16, 32, 64, 128', async () => {
      let result = await cairo1Contract.test_u8(100n);
      expect(result).toBe(107n);
      result = await cairo1Contract.test_u16(100n);
      expect(result).toBe(106n);
      result = await cairo1Contract.test_u32(100n);
      expect(result).toBe(104n);
      result = await cairo1Contract.test_u64(255n);
      expect(result).toBe(258n);
      result = await cairo1Contract.test_u128(255n);
      expect(result).toBe(257n);
    });

    test('Cairo 1 - uint256 struct', async () => {
      const myUint256 = cairo.uint256(2n ** 256n - 2n);
      const result = await cairo1Contract.test_u256(myUint256);
      expect(result).toBe(2n ** 256n - 1n);
    });

    test('Cairo 1 - uint256 by a bignumber', async () => {
      const result = await cairo1Contract.test_u256(2n ** 256n - 2n);
      expect(result).toBe(2n ** 256n - 1n);
    });

    test('Cairo 1 Contract Interaction - bool', async () => {
      const tx = await cairo1Contract.test_bool();
      expect(tx).toBe(true);
    });
  });
});

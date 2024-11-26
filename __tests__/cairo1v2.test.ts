import fs from 'node:fs';
import path from 'node:path';

import {
  Account,
  BigNumberish,
  CairoCustomEnum,
  CairoOption,
  CairoOptionVariant,
  CairoResult,
  CairoResultVariant,
  CallData,
  Calldata,
  CompiledSierra,
  Contract,
  DeclareDeployUDCResponse,
  RawArgsArray,
  RawArgsObject,
  cairo,
  ec,
  events,
  hash,
  json,
  num,
  selector,
  shortString,
  stark,
  types,
} from '../src';
import { TEST_TX_VERSION, contracts, getTestAccount, getTestProvider } from './config/fixtures';
import { initializeMatcher } from './config/schema';

const { uint256, tuple, isCairo1Abi } = cairo;
const { toHex } = num;
const { starknetKeccak } = selector;

describe('Cairo 1', () => {
  const provider = getTestProvider();
  const account = getTestAccount(provider);
  describe('API &  Contract interactions', () => {
    let dd: DeclareDeployUDCResponse;
    let cairo1Contract: Contract;
    let dd2: DeclareDeployUDCResponse;
    let cairo210Contract: Contract;
    initializeMatcher(expect);

    beforeAll(async () => {
      dd = await account.declareAndDeploy({
        contract: contracts.C1v2.sierra,
        casm: contracts.C1v2.casm,
      });
      cairo1Contract = new Contract(contracts.C1v2.sierra.abi, dd.deploy.contract_address, account);

      dd2 = await account.declareAndDeploy({
        contract: contracts.C210.sierra,
        casm: contracts.C210.casm,
      });
      cairo210Contract = new Contract(
        contracts.C210.sierra.abi,
        dd2.deploy.contract_address,
        account
      );
    });

    test('Declare & deploy v2 - Hello Cairo 1 contract', async () => {
      expect(dd.declare).toMatchSchemaRef('DeclareContractResponse');
      expect(dd.deploy).toMatchSchemaRef('DeployContractUDCResponse');
      expect(cairo1Contract).toBeInstanceOf(Contract);
      expect(cairo210Contract).toBeInstanceOf(Contract);
    });

    test('getCairoVersion', async () => {
      const version1 = await cairo1Contract.getVersion();
      expect(version1).toEqual({ cairo: '1', compiler: '2' });

      const version210 = await cairo210Contract.getVersion();
      expect(version210).toEqual({ cairo: '1', compiler: '2' });
    });

    xtest('validate TS for redeclare - skip testing', async () => {
      const cc0 = await account.getClassAt(dd.deploy.address);
      const cc0_1 = await account.getClassByHash(toHex(dd.declare.class_hash));

      await account.declare({
        contract: cc0 as CompiledSierra,
        casm: contracts.C1v2.casm,
      });

      await account.declare({
        contract: cc0_1 as CompiledSierra,
        casm: contracts.C1v2.casm,
      });
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

      const balance = await cairo1Contract
        .withOptions({
          parseResponse: false,
        })
        .get_balance();

      expect(num.toBigInt(balance[0])).toBe(100n);
    });

    test('Cairo 1 Contract Interaction - felt252', async () => {
      const tx = await cairo1Contract.increase_balance(100);
      await account.waitForTransaction(tx.transaction_hash);
      const balance = await cairo1Contract.get_balance();
      expect(balance).toBe(200n);
    });

    test('Cairo 1 Contract Interaction - uint 8, 16, 32, 64, 128, literals', async () => {
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
      const result1 = await cairo1Contract.test_u256(uint256(2n ** 256n - 2n));
      expect(result1).toBe(2n ** 256n - 1n);

      // using Contract.populate result in meta-class
      const functionParameters: RawArgsObject = { p1: cairo.uint256(15) };
      const myCall0 = cairo1Contract.populate('test_u256', functionParameters);
      const res0 = await cairo1Contract.test_u256(myCall0.calldata);
      expect(res0).toBe(16n);
      const myCall0a = cairo1Contract.populate('test_u256', { p1: 15 });
      const res0a = await cairo1Contract.test_u256(myCall0a.calldata);
      expect(res0a).toBe(16n);
      // using myCallData.compile result in meta-class
      const contractCallData: CallData = new CallData(cairo1Contract.abi);
      const myCalldata: Calldata = contractCallData.compile('test_u256', functionParameters);
      const res1 = await cairo1Contract.test_u256(myCalldata);
      expect(res1).toBe(16n);

      // using CallData.compile result in meta-class
      const contractCallData2: Calldata = CallData.compile(functionParameters);
      const res2 = await cairo1Contract.test_u256(contractCallData2);
      expect(res2).toBe(16n);
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

    test('Cairo 1 Contract Interaction - ContractAddress, ClassHash, EthAddress', async () => {
      const tx = await cairo1Contract.set_ca('123');
      await account.waitForTransaction(tx.transaction_hash);
      const status = await cairo1Contract.get_ca();
      expect(status).toBe(123n);

      // new types Cairo v2.0.0
      const compiled = cairo1Contract.populate('new_types', {
        ch: 123456789n,
        eth_addr: 987654321n,
        contr_address: 657563474357n,
      });
      const result = await cairo1Contract.call('new_types', compiled.calldata as Calldata);
      expect(result).toStrictEqual({ '0': 123456789n, '1': 987654321n, '2': 657563474357n });

      const myCalldata = new CallData(contracts.C1v2.sierra.abi); // test arrays
      const compiled2 = myCalldata.compile('array_new_types', {
        tup: cairo.tuple(256, '0x1234567890', '0xe3456'),
        tupa: cairo.tuple(
          ['0x1234567890', '0xe3456'], // ContractAddress
          ['0x1234567891', '0xe3457'], // EthAddress
          ['0x1234567892', '0xe3458'] // ClassHash
        ),
      });
      const res1 = await cairo1Contract.call('array_new_types', compiled2);
      expect(res1).toStrictEqual({
        '0': [78187493520n, 930902n],
        '1': [78187493521n, 930903n],
        '2': [78187493522n, 930904n],
      });
      const res2 = await cairo1Contract.call('array_contract_addr', [['0x1234567892', '0xe3458']]);
      expect(res2).toStrictEqual([78187493522n, 930904n]);
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
      const status = await cairo1Contract.echo_un_tuple(tuple(77, 123));
      expect(Object.values(status)).toEqual([77n, 123n]);
    });

    test('Cairo 1 Contract Interaction - echo flat un-nested Array u8, uint256, bool', async () => {
      const status = await cairo1Contract.echo_array([123, 55, 77, 255]);
      expect(status).toEqual([123n, 55n, 77n, 255n]);

      // uint256 defined as number
      const status1 = await cairo1Contract.echo_array_u256([123, 55, 77, 255]);
      expect(status1).toEqual([123n, 55n, 77n, 255n]);

      // uint256 defined as struct
      const status11 = await cairo1Contract.echo_array_u256([
        uint256(123),
        uint256(55),
        uint256(77),
        uint256(255),
      ]);
      expect(status11).toEqual([123n, 55n, 77n, 255n]);

      const status2 = await cairo1Contract.echo_array_bool([true, true, false, false]);
      expect(status2).toEqual([true, true, false, false]);

      // Span type
      const comp = cairo1Contract.populate('new_span', { my_span: [1, 2, 3] });
      const resp = await cairo1Contract.call('new_span', comp.calldata as Calldata);
      expect(resp).toEqual([1n, 2n, 3n]);
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
      const status = await cairo1Contract
        .withOptions({
          formatResponse: { name: 'string', description: 'string' },
        })
        .get_bet(1);

      const expected = {
        name: 'test',
        description: 'dec',
        expire_date: 1n,
        creation_time: 1n,
        creator: BigInt(account.address),
        is_cancelled: false,
        is_voted: false,
        bettor: {
          address: BigInt(account.address),
          is_claimed: false,
        },
        counter_bettor: {
          address: BigInt(account.address),
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
      await account.waitForTransaction(tx.transaction_hash);
      const tx1 = await cairo1Contract.array2d_ex(cd);
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

      const res1 = await cairo1Contract.tuple_echo(tuple([1, 2, 3], [4, 5, 6]));
      expect(res1).toEqual({
        0: [1n, 2n, 3n],
        1: [4n, 5n, 6n],
      });
    });

    test('CairoEnums', async () => {
      type Order = {
        p1: BigNumberish;
        p2: BigNumberish;
      };
      // return a Cairo Custom Enum
      const myCairoEnum: CairoCustomEnum = await cairo1Contract.my_enum_output(50);
      expect(myCairoEnum.unwrap()).toEqual(3n);
      expect(myCairoEnum.activeVariant()).toEqual('Error');

      const myCairoEnum2: CairoCustomEnum = await cairo1Contract.my_enum_output(100);
      expect(myCairoEnum2.unwrap()).toEqual(BigInt(shortString.encodeShortString('attention:100')));
      expect(myCairoEnum2.activeVariant()).toEqual('Warning');

      const myCairoEnum3: CairoCustomEnum = await cairo1Contract.my_enum_output(150);
      const res: Order = myCairoEnum3.unwrap();
      expect(res).toEqual({ p1: 1n, p2: 150n });
      expect(myCairoEnum3.activeVariant()).toEqual('Response');

      // Send a Cairo Custom Enum
      const res2 = (await cairo1Contract.call('my_enum_input', [
        new CairoCustomEnum({ Error: 100 }),
      ])) as bigint;
      const myOrder: Order = { p1: 100, p2: 200 };
      const res3 = (await cairo1Contract.my_enum_input(
        new CairoCustomEnum({ Response: myOrder })
      )) as bigint;
      expect(res2).toEqual(100n);
      expect(res3).toEqual(200n);

      const comp2 = CallData.compile([
        new CairoCustomEnum({
          Response: undefined,
          Warning: undefined,
          Error: 100,
        }),
      ]);
      const res2a = (await cairo1Contract.call('my_enum_input', comp2)) as bigint;
      const comp3 = CallData.compile([
        new CairoCustomEnum({
          Response: myOrder,
          Warning: undefined,
          Error: undefined,
        }),
      ]);
      const res3a = (await cairo1Contract.my_enum_input(comp3)) as bigint;
      expect(res2a).toEqual(100n);
      expect(res3a).toEqual(200n);

      const comp2b = cairo1Contract.populate('my_enum_input', {
        customEnum: new CairoCustomEnum({ Error: 100 }),
      });
      const res2b = (await cairo1Contract.call(
        'my_enum_input',
        comp2b.calldata as Calldata
      )) as bigint;
      const comp3b = cairo1Contract.populate('my_enum_input', {
        customEnum: new CairoCustomEnum({ Response: myOrder }),
      });
      const res3b = (await cairo1Contract.my_enum_input(comp3b.calldata)) as bigint;
      expect(res2b).toEqual(100n);
      expect(res3b).toEqual(200n);

      // return a Cairo Option
      const myCairoOption: CairoOption<Order> = await cairo1Contract.option_order_output(50);
      expect(myCairoOption.unwrap()).toEqual(undefined);
      expect(myCairoOption.isNone()).toEqual(true);
      expect(myCairoOption.isSome()).toEqual(false);

      const myCairoOption2: CairoOption<Order> = await cairo1Contract.option_order_output(150);
      expect(myCairoOption2.unwrap()).toEqual({ p1: 18n, p2: 150n });
      expect(myCairoOption2.isNone()).toEqual(false);
      expect(myCairoOption2.isSome()).toEqual(true);

      // send a Cairo Option
      const cairoOption1 = new CairoOption<Order>(CairoOptionVariant.None);
      const res4 = (await cairo1Contract.call('option_order_input', [cairoOption1])) as bigint;
      const comp4a = CallData.compile([cairoOption1]);
      const res4a = (await cairo1Contract.call('option_order_input', comp4a)) as bigint;
      const res5 = (await cairo1Contract.option_order_input(
        new CairoOption<Order>(CairoOptionVariant.Some, myOrder)
      )) as bigint;
      const res5a = (await cairo1Contract.option_order_input(
        CallData.compile([new CairoOption<Order>(CairoOptionVariant.Some, myOrder)])
      )) as bigint;
      expect(res4).toEqual(17n);
      expect(res4a).toEqual(17n);
      expect(res5).toEqual(200n);
      expect(res5a).toEqual(200n);

      // return a Cairo Result
      const myCairoResult: CairoResult<Order, BigNumberish> =
        await cairo1Contract.enum_result_output(50);
      expect(myCairoResult.unwrap()).toEqual(14n);
      expect(myCairoResult.isErr()).toEqual(true);
      expect(myCairoResult.isOk()).toEqual(false);

      const myCairoResult2: CairoResult<Order, BigNumberish> =
        await cairo1Contract.enum_result_output(150);
      expect(myCairoResult2.unwrap()).toEqual({ p1: 8n, p2: 150n });
      expect(myCairoResult2.isErr()).toEqual(false);
      expect(myCairoResult2.isOk()).toEqual(true);

      // send a Cairo Result
      const cairoResult1 = new CairoResult<Order, BigNumberish>(CairoResultVariant.Err, 18n);
      const res6 = (await cairo1Contract.call('enum_result_input', [cairoResult1])) as bigint;
      const comp6a = CallData.compile([cairoResult1]);
      const res6a = (await cairo1Contract.call('enum_result_input', comp6a)) as bigint;
      const res7 = (await cairo1Contract.enum_result_input(
        new CairoResult<Order, BigNumberish>(CairoResultVariant.Ok, myOrder)
      )) as bigint;
      const res7a = (await cairo1Contract.enum_result_input(
        CallData.compile([new CairoResult<Order, BigNumberish>(CairoResultVariant.Ok, myOrder)])
      )) as bigint;
      expect(res6).toEqual(18n);
      expect(res6a).toEqual(18n);
      expect(res7).toEqual(200n);
      expect(res7a).toEqual(200n);
    });

    test('Cairo 2.1.0 simple contract', async () => {
      const res = await cairo210Contract.test_felt(1, 100, 3);
      expect(res).toEqual(101n);

      const call1 = cairo210Contract.populate('test_len', { p1: 100, string_len: 200 });
      expect(call1.calldata).toEqual(['100', '200']);
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
        tupoftup: tuple(tuple(34, '0x5e'), myFalseUint256),
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
        tuple1: tuple(40000n, myOrder2bis, [54, 55n, '0xae'], 'texte'),
        name: 'niceToken',
        array5: [tuple(251, 40000n), tuple(252, 40001n)],
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

      const contractCallData: CallData = new CallData(contracts.ComplexSierra.abi);
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

    test('myCallData.decodeParameters for Cairo 1', async () => {
      const Cairo1HelloAbi = contracts.HelloSierra.sierra;
      const Cairo1Abi = contracts.C1v2.sierra;
      const helloCallData = new CallData(Cairo1HelloAbi.abi);
      const c1v2CallData = new CallData(Cairo1Abi.abi);

      const res2 = helloCallData.decodeParameters('hello::hello::UserData', ['0x123456', '0x1']);
      expect(res2).toEqual({ address: 1193046n, is_claimed: true });
      const res3 = helloCallData.decodeParameters(
        ['hello::hello::UserData', 'hello::hello::UserData'],
        ['0x123456', '0x1', '0x98765', '0x0']
      );
      expect(res3).toEqual([
        { address: 1193046n, is_claimed: true },
        { address: 624485n, is_claimed: false },
      ]);
      const res4 = helloCallData.decodeParameters('core::integer::u8', ['0x123456']);
      expect(res4).toBe(1193046n);
      const res5 = helloCallData.decodeParameters('core::bool', ['0x1']);
      expect(res5).toBe(true);
      const res6 = helloCallData.decodeParameters('core::felt252', ['0x123456']);
      expect(res6).toBe(1193046n);
      const res7 = helloCallData.decodeParameters('core::integer::u256', ['0x123456', '0x789']);
      expect(num.toHex(res7.toString())).toBe('0x78900000000000000000000000000123456');
      const res8 = helloCallData.decodeParameters('core::array::Array::<core::integer::u16>', [
        '2',
        '0x123456',
        '0x789',
      ]);
      expect(res8).toEqual([1193046n, 1929n]);
      const res9 = helloCallData.decodeParameters('core::array::Span::<core::integer::u16>', [
        '2',
        '0x123456',
        '0x789',
      ]);
      expect(res9).toEqual([1193046n, 1929n]);
      const res10 = helloCallData.decodeParameters('(core::felt252, core::integer::u16)', [
        '0x123456',
        '0x789',
      ]);
      expect(res10).toEqual({ '0': 1193046n, '1': 1929n });
      const res11 = helloCallData.decodeParameters('core::starknet::eth_address::EthAddress', [
        '0x123456',
      ]);
      expect(res11).toBe(1193046n);
      const res12 = helloCallData.decodeParameters(
        'core::starknet::contract_address::ContractAddress',
        ['0x123456']
      );
      expect(res12).toBe(1193046n);
      const res13 = helloCallData.decodeParameters('core::starknet::class_hash::ClassHash', [
        '0x123456',
      ]);
      expect(res13).toBe(1193046n);
      const res14 = c1v2CallData.decodeParameters('core::option::Option::<core::integer::u8>', [
        '0',
        '0x12',
      ]);
      expect(res14).toEqual({ Some: 18n, None: undefined });
      const res15 = c1v2CallData.decodeParameters(
        'core::result::Result::<hello_res_events_newTypes::hello_res_events_newTypes::Order, core::integer::u16>',
        ['0', '0x12', '0x345']
      );
      expect(res15).toEqual({ Ok: { p1: 18n, p2: 837n }, Err: undefined });
      const res16 = c1v2CallData.decodeParameters(
        'hello_res_events_newTypes::hello_res_events_newTypes::MyEnum',
        ['0', '0x12', '0x5678']
      );
      expect(res16).toEqual({
        variant: {
          Response: { p1: 18n, p2: 22136n },
          Warning: undefined,
          Error: undefined,
        },
      });
    });
  });

  describe('Cairo1 Account contract', () => {
    let accountC1: Account;

    beforeAll(async () => {
      // Deploy Cairo 1 Account
      const priKey = stark.randomAddress();
      const pubKey = ec.starkCurve.getStarkKey(priKey);

      const calldata = { publicKey: pubKey };

      // declare account
      const declareAccount = await account.declareIfNot({
        contract: contracts.C1Account.sierra,
        casm: contracts.C1Account.casm,
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
          amount: uint256(5 * 10 ** 15),
        },
      });
      await account.waitForTransaction(transaction_hash);

      // deploy account
      accountC1 = new Account(provider, toBeAccountAddress, priKey, '1', TEST_TX_VERSION);
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

  describe('Event Parsing', () => {
    let eventContract: Contract;
    const simpleKeyVariable = 0n;
    const simpleKeyStruct = {
      first: 1n,
      second: 2n,
    };
    const simpleKeyArray = [3n, 4n, 5n];
    const simpleDataVariable = 6n;
    const simpleDataStruct = {
      first: 7n,
      second: 8n,
    };
    const simpleDataArray = [9n, 10n, 11n];
    const nestedKeyStruct = {
      simpleStruct: {
        first: 0n,
        second: 1n,
      },
      simpleArray: [2n, 3n, 4n, 5n],
    };
    const nestedDataStruct = {
      simpleStruct: {
        first: 6n,
        second: 7n,
      },
      simpleArray: [8n, 9n, 10n, 11n],
    };
    beforeAll(async () => {
      const { deploy } = await account.declareAndDeploy({
        contract: contracts.C1v2.sierra,
        casm: contracts.C1v2.casm,
      });

      eventContract = new Contract(contracts.C1v2.sierra.abi, deploy.contract_address!, account);
    });

    test('parse event returning a regular struct', async () => {
      const { transaction_hash } = await eventContract.emitEventRegular(
        simpleKeyVariable,
        simpleKeyStruct,
        simpleKeyArray,
        simpleDataVariable,
        simpleDataStruct,
        simpleDataArray
      );
      const shouldBe: types.ParsedEvents = [
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventRegular': {
            simpleKeyVariable,
            simpleKeyStruct,
            simpleKeyArray,
            simpleDataVariable,
            simpleDataStruct,
            simpleDataArray,
          },
        },
      ];
      const tx = await provider.waitForTransaction(transaction_hash);
      const myEvents = eventContract.parseEvents(tx);
      return expect(myEvents).toStrictEqual(shouldBe);
    });

    test('parse event returning a nested struct', async () => {
      const { transaction_hash } = await eventContract.emitEventNested(
        nestedKeyStruct,
        nestedDataStruct
      );
      const shouldBe: types.ParsedEvents = [
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventNested': {
            nestedKeyStruct,
            nestedDataStruct,
          },
        },
      ];
      const tx = await provider.waitForTransaction(transaction_hash);
      const myEvents = eventContract.parseEvents(tx);
      return expect(myEvents).toStrictEqual(shouldBe);
    });

    test('parse tx returning multiple similar events', async () => {
      const anotherKeyVariable = 100n;
      const shouldBe: types.ParsedEvents = [
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventRegular': {
            simpleKeyVariable,
            simpleKeyStruct,
            simpleKeyArray,
            simpleDataVariable,
            simpleDataStruct,
            simpleDataArray,
          },
        },
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventRegular': {
            simpleKeyVariable: anotherKeyVariable,
            simpleKeyStruct,
            simpleKeyArray,
            simpleDataVariable,
            simpleDataStruct,
            simpleDataArray,
          },
        },
      ];
      const callData1 = eventContract.populate('emitEventRegular', [
        simpleKeyVariable,
        simpleKeyStruct,
        simpleKeyArray,
        simpleDataVariable,
        simpleDataStruct,
        simpleDataArray,
      ]);
      const callData2 = eventContract.populate('emitEventRegular', [
        anotherKeyVariable,
        simpleKeyStruct,
        simpleKeyArray,
        simpleDataVariable,
        simpleDataStruct,
        simpleDataArray,
      ]);
      const { transaction_hash } = await account.execute([callData1, callData2]);
      const tx = await provider.waitForTransaction(transaction_hash);
      const myEvents = eventContract.parseEvents(tx);
      return expect(myEvents).toStrictEqual(shouldBe);
    });
    test('parse tx returning multiple different events', async () => {
      const shouldBe: types.ParsedEvents = [
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventRegular': {
            simpleKeyVariable,
            simpleKeyStruct,
            simpleKeyArray,
            simpleDataVariable,
            simpleDataStruct,
            simpleDataArray,
          },
        },
        {
          'hello_res_events_newTypes::hello_res_events_newTypes::HelloStarknet::EventNested': {
            nestedKeyStruct,
            nestedDataStruct,
          },
        },
      ];
      const callData1 = eventContract.populate('emitEventRegular', [
        simpleKeyVariable,
        simpleKeyStruct,
        simpleKeyArray,
        simpleDataVariable,
        simpleDataStruct,
        simpleDataArray,
      ]);
      const callData2 = eventContract.populate('emitEventNested', [
        nestedKeyStruct,
        nestedDataStruct,
      ]);
      const { transaction_hash } = await account.execute([callData1, callData2]);
      const tx = await provider.waitForTransaction(transaction_hash);
      const myEvents = eventContract.parseEvents(tx);
      return expect(myEvents).toStrictEqual(shouldBe);
    });

    test('parsing nested events from Cairo components', () => {
      // this abi is from Sepolia contract 0x07981ea76ca241100a3e1cd4083a15a73a068b6d6a946d36042cbfc9b531baa2
      // with the end from OpenZeppelin ERC20 contract (for `flat` event test)
      const { abi } = json.parse(
        fs
          .readFileSync(
            path.resolve(__dirname, `../__mocks__/cairo/cairo260/nestedEvents.abi.json`)
          )
          .toString('ascii')
      );
      const abiEvents = events.getAbiEvents(abi);
      const abiStructs = CallData.getAbiStruct(abi);
      const abiEnums = CallData.getAbiEnum(abi);
      const rawEventNested = {
        block_hash: '0x39f27ab4cd508ab99e818512b261a7e4ae01072eb4ec8bb86aeb64755f99f2c',
        block_number: 69198,
        data: [
          '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          '0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
          '0x0',
          '0x0',
          '0x8bb2c97000',
          '0x0',
          '0x425615c73f000',
          '0x0',
          '0x0',
          '0x0',
          '0x0',
          '0x2bfc41e4bcfdbe82d0bafe3f935dadb18b6e90be3d22ccccea1f5b10986ed53',
          '0x7aab02decaf82af6fa798fe8d23de042695846ab9dae9f18331fffc518d3d36',
          '0x616b697261',
          '0x616b697261',
        ],
        from_address: '0x7981ea76ca241100a3e1cd4083a15a73a068b6d6a946d36042cbfc9b531baa2',
        keys: [
          '0x22ea134d4126804c60797e633195f8c9aa5fd6d1567e299f4961d0e96f373ee',
          '0x2e0a012a863e6b614014d113e7285b06e30d2999e42e6e03ba2ef6158b0a8f1',
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
        ],
        transaction_hash: '0x4e38fcce79c115b6fe2c486e3514efc1bd4da386b91c104e97230177d0bf181',
      };
      const parsedEvent = events.parseEvents([rawEventNested], abiEvents, abiStructs, abiEnums);
      expect(parsedEvent).toEqual([
        {
          'kurosawa_akira::ExchangeBalanceComponent::exchange_balance_logic_component::Trade': {
            maker: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            taker: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            ticker: {
              '0': 2087021424722619777119509474943472645767659996348769578120564519014510906823n,
              '1': 2009894490435840142178314390393166646092438090257831307886760648929397478285n,
            },
            router_maker: 0n,
            router_taker: 0n,
            amount_base: 600000000000n,
            amount_quote: 1167000000000000n,
            is_sell_side: false,
            is_failed: false,
            is_ecosystem_book: false,
            maker_hash:
              1243447045605505261525562127352132336915826038411731622093247599150671261011n,
            taker_hash:
              3467769886575726876986429904727435956490031836678599158998056330580017888566n,
            maker_source: 418413900385n,
            taker_source: 418413900385n,
          },
        },
      ]);
      // From component `DepositComponent`, event `Deposit` (same event name than next)
      const rawEventNestedDeposit1 = {
        block_hash: '0x31afd649a5042cb1855ce820708a555eab62fe6ea07a2a538fa9100cdc80383',
        block_number: 69198,
        data: [
          '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
          '0x119b74ab81c000',
          '0x0',
        ],
        from_address: '0x7981ea76ca241100a3e1cd4083a15a73a068b6d6a946d36042cbfc9b531baa2',
        keys: [
          '0xa1db419bdf20c7726cf74c30394c4300e5645db4e3cacaf897da05faabae03',
          '0x9149d2123147c5f43d258257fef0b7b969db78269369ebcf5ebb9eef8592f2',
          '0x033e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
        ],
        transaction_hash: '0x7768860d79bfb4c8463d215abea3c267899e373407c6882077f7447051c50de',
      };
      // From component `RouterComponent`, event `Deposit` (same event name than previous)
      const rawEventNestedDeposit2 = {
        block_hash: '0x39f27ab4cd508ab99e818512b261a7e4ae01072eb4ec8bb86aeb64755f99f2c',
        block_number: 69198,
        data: [
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
          '0x119b74ab81c000',
          '0x0',
        ],
        from_address: '0x7981ea76ca241100a3e1cd4083a15a73a068b6d6a946d36042cbfc9b531baa2',
        keys: [
          '0x1352a17d221f274db15a49e35cc827e5106495ba85330b210632597411d5a46',
          '0x9149d2123147c5f43d258257fef0b7b969db78269369ebcf5ebb9eef8592f2',
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
          '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        ],
        transaction_hash: '0x2d5210e5334a83306abe6f7f5e7e65cd1feed72ad3b8e359a2f4614fa948e1d',
      };
      const parsedEventNestedDeposit1 = events.parseEvents(
        [rawEventNestedDeposit1],
        abiEvents,
        abiStructs,
        abiEnums
      );
      expect(parsedEventNestedDeposit1).toEqual([
        {
          'kurosawa_akira::DepositComponent::deposit_component::Deposit': {
            receiver: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            token: 2087021424722619777119509474943472645767659996348769578120564519014510906823n,
            funder: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            amount: 4956000000000000n,
          },
        },
      ]);
      const parsedEventNestedDeposit2 = events.parseEvents(
        [rawEventNestedDeposit2],
        abiEvents,
        abiStructs,
        abiEnums
      );
      expect(parsedEventNestedDeposit2).toEqual([
        {
          'kurosawa_akira::RouterComponent::router_component::Deposit': {
            router: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            token: 2087021424722619777119509474943472645767659996348769578120564519014510906823n,
            funder: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            amount: 4956000000000000n,
          },
        },
      ]);

      // parsing nested event with #[flat] attribute, from a Cairo component
      const rawEventFlat = {
        block_hash: '0x39f27ab4cd508ab99e818512b261a7e4ae01072eb4ec8bb86aeb64755f99f2c',
        block_number: 69198,
        data: ['0x119b74ab81c000', '0x0'],
        from_address: '0x7981ea76ca241100a3e1cd4083a15a73a068b6d6a946d36042cbfc9b531baa2',
        keys: [
          '0x99cd8bde557814842a3121e8ddfd433a539b8c9f14bf31ebf108d12e6196e9',
          '0x33e29bc9b537bae4e370559331e2bf35b434b566f41a64601b37f410f46a580',
          '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        ],
        transaction_hash: '0x2da31a929a9848e9630906275a75a531e1718d4830501e10b0bccacd55f6fe0',
      };
      const parsedEventFlat = events.parseEvents([rawEventFlat], abiEvents, abiStructs, abiEnums);
      expect(parsedEventFlat).toEqual([
        {
          'openzeppelin::token::erc20::erc20::ERC20Component::Transfer': {
            from: 1466771120193999006693452314154095230636738457276435850562375218974960297344n,
            to: 2087021424722619777119509474943472645767659996348769578120564519014510906823n,
            value: 4956000000000000n,
          },
        },
      ]);
    });
  });
});

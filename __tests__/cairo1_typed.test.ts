import { tAbi } from '../__mocks__/hello';
import {
  BigNumberish,
  CallData,
  Calldata,
  CompiledSierra,
  Contract,
  ContractFactory,
  DeclareDeployUDCResponse,
  RawArgsArray,
  RawArgsObject,
  SequencerProvider,
  TypedContract,
  cairo,
  num,
  selector,
  shortString,
} from '../src';
import {
  compiledComplexSierra,
  compiledHelloSierra,
  compiledHelloSierraCasm,
  getTestAccount,
  getTestProvider,
} from './fixtures';
import { initializeMatcher } from './schema';

const { uint256, tuple, isCairo1Abi } = cairo;
const { toHex } = num;
const { starknetKeccak } = selector;

describe('TS validation for API &  Contract interactions - tests skipped', () => {
  const provider = getTestProvider();
  const account = getTestAccount(provider);
  let dd: DeclareDeployUDCResponse;
  let cairo1Contract: TypedContract<typeof tAbi>;
  initializeMatcher(expect);

  xtest('Declare & deploy v2 - Hello Cairo 1 contract', async () => {
    expect(dd.declare).toMatchSchemaRef('DeclareContractResponse');
    expect(dd.deploy).toMatchSchemaRef('DeployContractUDCResponse');
    expect(cairo1Contract).toBeInstanceOf(Contract);
  });

  xtest('ContractFactory on Cairo1', async () => {
    const c1CFactory = new ContractFactory({
      compiledContract: compiledHelloSierra,
      casm: compiledHelloSierraCasm,
      account,
    });
    const cfContract = await c1CFactory.deploy();
    expect(cfContract).toBeInstanceOf(Contract);
  });

  xtest('validate TS for redeclare - skip testing', async () => {
    const cc0 = await account.getClassAt(dd.deploy.address);
    const cc0_1 = await account.getClassByHash(toHex(dd.declare.class_hash));

    await account.declare({
      contract: cc0 as CompiledSierra,
      casm: compiledHelloSierraCasm,
    });

    await account.declare({
      contract: cc0_1 as CompiledSierra,
      casm: compiledHelloSierraCasm,
    });
  });

  xtest('deployContract Cairo1', async () => {
    const deploy = await account.deployContract({
      classHash: dd.deploy.classHash,
    });
    expect(deploy).toHaveProperty('address');
  });

  xtest('GetClassByHash', async () => {
    const classResponse = await provider.getClassByHash(dd.deploy.classHash);
    expect(classResponse).toMatchSchemaRef('SierraContractClass');
  });

  xtest('GetClassAt', async () => {
    const classResponse = await provider.getClassAt(dd.deploy.contract_address);
    expect(classResponse).toMatchSchemaRef('SierraContractClass');
  });

  xtest('isCairo1', async () => {
    const isContractCairo1 = cairo1Contract.isCairo1();
    expect(isContractCairo1).toBe(true);
    const isAbiCairo1 = isCairo1Abi(cairo1Contract.abi);
    expect(isAbiCairo1).toBe(true);
  });

  xtest('Cairo 1 Contract Interaction - skip invoke validation & call parsing', async () => {
    const tx = await cairo1Contract.increase_balance(
      CallData.compile({
        amount: 100,
      })
    );
    await account.waitForTransaction(tx.transaction_hash);

    // const balance = await cairo1Contract.get_balance({
    //   parseResponse: false,
    // });

    // expect(num.toBigInt(balance[0])).toBe(100n);
  });

  xtest('Cairo 1 Contract Interaction - felt252', async () => {
    const tx = await cairo1Contract.increase_balance(100);
    await account.waitForTransaction(tx.transaction_hash);
    const balance = await cairo1Contract.get_balance();
    expect(balance).toBe(200n);
  });

  xtest('Cairo 1 Contract Interaction - uint 8, 16, 32, 64, 128', async () => {
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

  xtest('Cairo 1 - uint256', async () => {
    // defined as number
    const result = await cairo1Contract.test_u256(2n ** 256n - 2n);
    expect(result).toBe(2n ** 256n - 1n);

    // defined as struct
    const result1 = await cairo1Contract.test_u256(uint256(2n ** 256n - 2n));
    expect(result1).toBe(2n ** 256n - 1n);
  });

  xtest('Cairo 1 Contract Interaction - bool', async () => {
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

  xtest('Cairo 1 Contract Interaction - ContractAddress', async () => {
    const tx = await cairo1Contract.set_ca('123');
    await account.waitForTransaction(tx.transaction_hash);
    const status = await cairo1Contract.get_ca();

    expect(status).toBe(123n);
  });

  xtest('Cairo1 simple getStorageAt variables retrieval', async () => {
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

  xtest('Cairo 1 Contract Interaction - echo flat un-named un-nested tuple', async () => {
    const status = await cairo1Contract.echo_un_tuple([77, 123]);
    expect(Object.values(status)).toEqual([77n, 123n]);
  });

  xtest('Cairo 1 Contract Interaction - echo flat un-nested Array u8, uint256, bool', async () => {
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
  });

  xtest('Cairo 1 Contract Interaction - echo flat un-nested Struct', async () => {
    const status = await cairo1Contract.echo_struct({
      val: 'simple',
    });
    expect(shortString.decodeShortString(status.val as string)).toBe('simple');
  });

  xtest('Cairo 1 more complex structs', async () => {
    const tx = await cairo1Contract.set_bet();
    await account.waitForTransaction(tx.transaction_hash);
    const status = await cairo1Contract.get_bet(
      {
        formatResponse: { name: 'string', description: 'string' },
      },
      1
    );

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

  xtest('C1 Array 2D', async () => {
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

  xtest('mix tuples', async () => {
    const res = await cairo1Contract.array_bool_tuple([1, 2, 3], true);
    expect(res).toEqual({
      0: [1n, 2n, 3n, 1n, 2n],
      1: true,
    });

    const res1 = await cairo1Contract.tuple_echo([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(res1).toEqual({
      0: [1n, 2n, 3n],
      1: [4n, 5n, 6n],
    });
  });

  xtest('myCallData.compile for Cairo 1', async () => {
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

  xtest('getCompiledClassByClassHash', async () => {
    const compiledClass = await (provider as SequencerProvider).getCompiledClassByClassHash(
      dd.deploy.classHash
    );
    expect(compiledClass).toMatchSchemaRef('CompiledClass');
  });
});

describe('TS validation for Sequencer API - C1 T2 C:0x771bbe2ba64f... - tests skipped', () => {
  const provider = getTestProvider() as SequencerProvider;
  const classHash: any = '0x028b6f2ee9ae00d55a32072d939a55a6eb522974a283880f3c73a64c2f9fd6d6';
  const contractAddress: any = '0x771bbe2ba64fa5ab52f0c142b4296fc67460a3a2372b4cdce752c620e3e8194';
  let cairo1Contract: TypedContract<typeof tAbi>;
  initializeMatcher(expect);

  xtest('getCompiledClassByClassHash', async () => {
    const compiledClass = await provider.getCompiledClassByClassHash(classHash);
    expect(compiledClass).toMatchSchemaRef('CompiledClass');
  });

  xtest('GetClassByHash', async () => {
    const classResponse = await provider.getClassByHash(classHash);
    expect(classResponse).toMatchSchemaRef('SierraContractClass');
  });

  xtest('GetClassAt', async () => {
    const classResponse = await provider.getClassAt(contractAddress);
    expect(classResponse).toMatchSchemaRef('SierraContractClass');
  });

  xtest('Cairo 1 Contract Interaction - felt252', async () => {
    const result = await cairo1Contract.test_felt252(100);
    expect(result).toBe(101n);
  });

  xtest('Cairo 1 Contract Interaction - uint 8, 16, 32, 64, 128', async () => {
    const r1 = await cairo1Contract.test_u8(100n);
    expect(r1).toBe(107n);
    const r2 = await cairo1Contract.test_u16(100n);
    expect(r2).toBe(106n);
    const r3 = await cairo1Contract.test_u32(100n);
    expect(r3).toBe(104n);
    const r4 = await cairo1Contract.test_u64(255n);
    expect(r4).toBe(258n);
    const r5 = await cairo1Contract.test_u128(255n);
    expect(r5).toBe(257n);
  });

  xtest('Cairo 1 - uint256 struct', async () => {
    const myUint256 = uint256(2n ** 256n - 2n);
    const result = await cairo1Contract.test_u256(myUint256);
    expect(result).toBe(2n ** 256n - 1n);
  });

  xtest('Cairo 1 - uint256 by a bignumber', async () => {
    const result = await cairo1Contract.test_u256(2n ** 256n - 2n);
    expect(result).toBe(2n ** 256n - 1n);
  });

  xtest('Cairo 1 Contract Interaction - bool', async () => {
    const tx = await cairo1Contract.test_bool();
    expect(tx).toBe(true);
  });
});

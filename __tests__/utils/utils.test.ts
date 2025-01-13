import * as starkCurve from '@scure/starknet';

import { constants, ec, hash, num, stark, units } from '../../src';

const { IS_BROWSER } = constants;

test('units', () => {
  expect(units(1n, 'fri')).toEqual('0.000000000000000001');
  expect(units(1000n, 'fri')).toEqual('0.000000000000001');
  expect(units(123123123n, 'fri')).toEqual('0.000000000123123123');
  expect(units('123123123', 'fri')).toEqual('0.000000000123123123');
  expect(units(10n ** 18n, 'fri')).toEqual('1');
  expect(units(30n * 10n ** 16n, 'fri')).toEqual('0.3');
  expect(units(30n * 10n ** 22n, 'fri')).toEqual('300000');
  expect(units('0x40ff', 'fri')).toEqual('0.000000000000016639');

  expect(units('0.3', 'strk')).toEqual('300000000000000000');
  expect(units('1', 'strk')).toEqual('1000000000000000000');
  expect(units('1000', 'strk')).toEqual('1000000000000000000000');
  expect(units('123123123.123', 'strk')).toEqual('123123123123000000000000000');
  expect(units('0x40ff', 'strk')).toEqual('16639000000000000000000');

  const toTest = ['0.333', '123123123.123', '1000.1', '123123123.123123', '0.0000003'];
  toTest.forEach((element) => {
    expect(units(units(element, 'strk'), 'fri')).toEqual(element);
  });
});

test('isNode', () => {
  expect(IS_BROWSER).toBe(false);
});

describe('hexToDecimalString()', () => {
  test('parse 0xa23', () => {
    expect(num.hexToDecimalString('0xa23')).toBe('2595');
  });
});

describe('cleanHex()', () => {
  test('parse 0xa23', () => {
    expect(num.cleanHex('0x023Ab')).toBe('0x23ab');
    expect(num.cleanHex('0x000023Ab')).toBe('0x23ab');
    expect(num.cleanHex('0x23Ab')).toBe('0x23ab');
  });
});

describe('makeAddress()', () => {
  test('test on eth address', () => {
    const ethAddress = '0xdFD0F27FCe99b50909de0bDD328Aed6eAbe76BC5';

    const starkAddress = stark.makeAddress(ethAddress);

    expect(starkAddress).toBe('0xdfd0f27fce99b50909de0bdd328aed6eabe76bc5');
  });
});

describe('getSelectorFromName()', () => {
  test('hash works for value="test"', () => {
    expect(hash.getSelectorFromName('test')).toBe(
      '0x22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658'
    );
  });
  test('hash works for value="initialize"', () => {
    expect(hash.getSelectorFromName('initialize')).toBe(
      '0x79dc0da7c54b95f10aa182ad0a46400db63156920adb65eca2654c0945a463'
    );
  });
  test('hash works for value="mint"', () => {
    expect(hash.getSelectorFromName('mint')).toBe(
      '0x2f0b3c5710379609eb5495f1ecd348cb28167711b73609fe565a72734550354'
    );
  });
});

describe('computeHashOnElements()', () => {
  test('should return valid hash for empty array', () => {
    const res = hash.computeHashOnElements([]);
    expect(res).toMatchInlineSnapshot(
      `"0x49ee3eba8c1600700ee1b87eb599f16716b0b1022947733551fde4050ca6804"`
    );
  });
  test('should return valid hash for valid array', () => {
    const res = hash.computeHashOnElements([
      num.toBigInt(123782376),
      num.toBigInt(213984),
      num.toBigInt(128763521321),
    ]);
    expect(res).toMatchInlineSnapshot(
      `"0x7b422405da6571242dfc245a43de3b0fe695e7021c148b918cd9cdb462cac59"`
    );
  });
});

describe('estimatedFeeToMaxFee()', () => {
  test('should return maxFee for 0', () => {
    const res = stark.estimatedFeeToMaxFee(0, 15);
    expect(res).toBe(0n);
  });
  test('should return maxFee for 10_000', () => {
    const res = stark.estimatedFeeToMaxFee(10_000, 15);
    expect(res).toBe(11500n);
  });
});

describe('calculateContractAddressFromHash()', () => {
  const ethAddress = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
  const daiAddress = '0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9';
  const factoryAddress = '0x249827618A01858A72B7D04339C47195A324D20D6037033DFE2829F98AFF4FC';
  const classHash = '0x55187E68C60664A947048E0C9E5322F9BF55F7D435ECDCF17ED75724E77368F';
  // Any type of salt can be used. It depends on the dApp what kind of salt it wants to use.
  const salt = ec.starkCurve.pedersen(ethAddress, daiAddress);

  // This test just shows how to use calculateContractAddressFromHash for new devs
  test('calculated contract address should match the snapshot', () => {
    const res = hash.calculateContractAddressFromHash(
      salt,
      classHash,
      [ethAddress, daiAddress, factoryAddress],
      factoryAddress
    );

    expect(res).toMatchInlineSnapshot(
      `"0x36dc8dcb3440596472ddde11facacc45d0cd250df764ae7c3d1a360c853c324"`
    );
  });

  test('output should be bound', () => {
    const starkCurveSpy = jest.spyOn(starkCurve, 'pedersen');
    starkCurveSpy.mockReturnValue(num.toHex(constants.ADDR_BOUND + 1n));
    const res = hash.calculateContractAddressFromHash(
      salt,
      classHash,
      [ethAddress, daiAddress, factoryAddress],
      factoryAddress
    );
    expect(starkCurveSpy).toHaveBeenCalled();
    expect(BigInt(res)).toBeLessThan(constants.ADDR_BOUND);
    starkCurveSpy.mockRestore();
  });
});

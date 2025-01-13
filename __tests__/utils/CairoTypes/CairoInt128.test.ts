/* eslint-disable no-new */
import { CairoInt128, INT_128_MAX, INT_128_MIN } from '../../../src/utils/cairoDataTypes/int128';

describe('CairoInt128 class test', () => {
  test('constructor 1 should throw on < INT_128_MIN', () => {
    expect(() => {
      new CairoInt128(INT_128_MIN - 1n);
    }).toThrow('bigNumberish is smaller than the int minimum');
  });

  test('constructor should throw on > INT_128_MAX', () => {
    expect(() => {
      new CairoInt128(INT_128_MAX + 1n);
    }).toThrow('bigNumberish is bigger than the int maximum');
  });

  test('should convert INT_128_MAX to API Request', () => {
    const i128 = new CairoInt128(INT_128_MAX);
    expect(i128.toApiRequest()).toEqual('170141183460469231731687303715884105727');
  });

  test('should serialize negative number to felt252', () => {
    const i128 = new CairoInt128(INT_128_MIN);
    expect(i128.toApiRequest()).toEqual(
      '3618502788666131213697322783095070105452966031871127468241404752419987914754'
    );
  });

  test('should convert negative serialized number to BigInt', () => {
    const i128 = new CairoInt128(INT_128_MIN);
    expect(i128.negativeFelt252ToBigInt()).toEqual(-170141183460469231731687303715884105727n);
  });

  test('validate should throw on < INT_128_MIN', () => {
    expect(() => {
      CairoInt128.validate(INT_128_MIN - 1n);
    }).toThrow('bigNumberish is smaller than INT_128_MIN');
  });

  test('validate should throw on > INT_128_MAX', () => {
    expect(() => {
      CairoInt128.validate(INT_128_MAX + 1n);
    }).toThrow('bigNumberish is bigger than INT_128_MAX');
  });

  test('validate should pass and return bigint', () => {
    const validate = CairoInt128.validate(INT_128_MAX);
    expect(typeof validate).toBe('bigint');
  });

  test('is should return true', () => {
    const is = CairoInt128.is(INT_128_MAX);
    expect(is).toBe(true);
  });

  test('is should return false', () => {
    const is = CairoInt128.is(INT_128_MAX + 1n);
    expect(is).toBe(false);
  });

  test('constructor should support BigNumberish', () => {
    const case1 = new CairoInt128(10n);
    const case2 = new CairoInt128(10);
    const case3 = new CairoInt128('10');
    const case4 = new CairoInt128('0xA');

    expect(case1).toEqual(case2);
    expect(case3).toEqual(case4);
    expect(case1).toEqual(case4);
  });

  test('should convert INT_128_MAX to Int128 dec struct', () => {
    const i128 = new CairoInt128(INT_128_MAX);
    const i128Decimal = i128.toIntDecimalString().int;
    expect(i128Decimal).toEqual('170141183460469231731687303715884105727');
  });

  test('should convert INT_128_MAX to Int128 hex struct', () => {
    const i128 = new CairoInt128(INT_128_MAX);
    const i128Hex = i128.toIntHexString();
    expect(i128Hex).toEqual('0x7fffffffffffffffffffffffffffffff');
  });

  test('isAbiType should return true', () => {
    const isAbiType = CairoInt128.isAbiType('core::integer::i128');
    expect(isAbiType).toBe(true);
  });

  test('should convert INT_128_MAX to BigInt', () => {
    const i128 = new CairoInt128(INT_128_MAX);
    expect(i128.toBigInt()).toEqual(INT_128_MAX);
  });
});

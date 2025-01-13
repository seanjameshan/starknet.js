/* eslint-disable no-new */
import { CairoInt64, INT_64_MAX, INT_64_MIN } from '../../../src/utils/cairoDataTypes/int64';

describe('CairoInt64 class test', () => {
  test('constructor 1 should throw on < INT_64_MIN', () => {
    expect(() => {
      new CairoInt64(INT_64_MIN - 1n);
    }).toThrow('bigNumberish is smaller than the int minimum');
  });

  test('constructor should throw on > INT_64_MAX', () => {
    expect(() => {
      new CairoInt64(INT_64_MAX + 1n);
    }).toThrow('bigNumberish is bigger than the int maximum');
  });

  test('should convert INT_64_MAX to API Request', () => {
    const i64 = new CairoInt64(INT_64_MAX);
    expect(i64.toApiRequest()).toEqual('9223372036854775807');
  });

  test('should serialize negative number to felt252', () => {
    const i64 = new CairoInt64(INT_64_MIN);
    expect(i64.toApiRequest()).toEqual(
      '3618502788666131213697322783095070105623107215331596699963868684099017244674'
    );
  });

  test('should convert negative serialized number to BigInt', () => {
    const i64 = new CairoInt64(INT_64_MIN);
    expect(i64.negativeFelt252ToBigInt()).toEqual(-9223372036854775807n);
  });

  test('validate should throw on < INT_64_MIN', () => {
    expect(() => {
      CairoInt64.validate(INT_64_MIN - 1n);
    }).toThrow('bigNumberish is smaller than INT_64_MIN');
  });

  test('validate should throw on > INT_64_MAX', () => {
    expect(() => {
      CairoInt64.validate(INT_64_MAX + 1n);
    }).toThrow('bigNumberish is bigger than INT_64_MAX');
  });

  test('validate should pass and return bigint', () => {
    const validate = CairoInt64.validate(INT_64_MAX);
    expect(typeof validate).toBe('bigint');
  });

  test('is should return true', () => {
    const is = CairoInt64.is(INT_64_MAX);
    expect(is).toBe(true);
  });

  test('is should return false', () => {
    const is = CairoInt64.is(INT_64_MAX + 1n);
    expect(is).toBe(false);
  });

  test('constructor should support BigNumberish', () => {
    const case1 = new CairoInt64(10n);
    const case2 = new CairoInt64(10);
    const case3 = new CairoInt64('10');
    const case4 = new CairoInt64('0xA');

    expect(case1).toEqual(case2);
    expect(case3).toEqual(case4);
    expect(case1).toEqual(case4);
  });

  test('should convert INT_64_MAX to Int64 dec struct', () => {
    const i64 = new CairoInt64(INT_64_MAX);
    const i64Decimal = i64.toIntDecimalString().int;
    expect(i64Decimal).toEqual('9223372036854775807');
  });

  test('should convert INT_64_MAX to Int64 hex struct', () => {
    const i64 = new CairoInt64(INT_64_MAX);
    const i64Hex = i64.toIntHexString();
    expect(i64Hex).toEqual('0x7fffffffffffffff');
  });

  test('isAbiType should return true', () => {
    const isAbiType = CairoInt64.isAbiType('core::integer::i64');
    expect(isAbiType).toBe(true);
  });

  test('should convert INT_64_MAX to BigInt', () => {
    const i64 = new CairoInt64(INT_64_MAX);
    expect(i64.toBigInt()).toEqual(INT_64_MAX);
  });
});

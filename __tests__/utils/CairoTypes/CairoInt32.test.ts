/* eslint-disable no-new */
import { CairoInt32, INT_32_MAX, INT_32_MIN } from '../../../src/utils/cairoDataTypes/int32';

describe('CairoInt32 class test', () => {
  test('constructor 1 should throw on < INT_32_MIN', () => {
    expect(() => {
      new CairoInt32(INT_32_MIN - 1n);
    }).toThrow('bigNumberish is smaller than the int minimum');
  });

  test('constructor should throw on > INT_32_MAX', () => {
    expect(() => {
      new CairoInt32(INT_32_MAX + 1n);
    }).toThrow('bigNumberish is bigger than the int maximum');
  });

  test('should convert INT_32_MAX to API Request', () => {
    const i32 = new CairoInt32(INT_32_MAX);
    expect(i32.toApiRequest()).toEqual('2147483647');
  });

  test('should serialize negative number to felt252', () => {
    const i32 = new CairoInt32(INT_32_MIN);
    expect(i32.toApiRequest()).toEqual(
      '3618502788666131213697322783095070105623107215331596699973092056133724536834'
    );
  });

  test('should convert negative serialized number to BigInt', () => {
    const i32 = new CairoInt32(INT_32_MIN);
    expect(i32.negativeFelt252ToBigInt()).toEqual(-2147483647n);
  });

  test('validate should throw on < INT_32_MIN', () => {
    expect(() => {
      CairoInt32.validate(INT_32_MIN - 1n);
    }).toThrow('bigNumberish is smaller than INT_32_MIN');
  });

  test('validate should throw on > INT_32_MAX', () => {
    expect(() => {
      CairoInt32.validate(INT_32_MAX + 1n);
    }).toThrow('bigNumberish is bigger than INT_32_MAX');
  });

  test('validate should pass and return bigint', () => {
    const validate = CairoInt32.validate(INT_32_MAX);
    expect(typeof validate).toBe('bigint');
  });

  test('is should return true', () => {
    const is = CairoInt32.is(INT_32_MAX);
    expect(is).toBe(true);
  });

  test('is should return false', () => {
    const is = CairoInt32.is(INT_32_MAX + 1n);
    expect(is).toBe(false);
  });

  test('constructor should support BigNumberish', () => {
    const case1 = new CairoInt32(10n);
    const case2 = new CairoInt32(10);
    const case3 = new CairoInt32('10');
    const case4 = new CairoInt32('0xA');

    expect(case1).toEqual(case2);
    expect(case3).toEqual(case4);
    expect(case1).toEqual(case4);
  });

  test('should convert INT_32_MAX to Int32 dec struct', () => {
    const i32 = new CairoInt32(INT_32_MAX);
    const i32Decimal = i32.toIntDecimalString().int;
    expect(i32Decimal).toEqual('2147483647');
  });

  test('should convert INT_32_MAX to Int32 hex struct', () => {
    const i32 = new CairoInt32(INT_32_MAX);
    const i32Hex = i32.toIntHexString();
    expect(i32Hex).toEqual('0x7fffffff');
  });

  test('isAbiType should return true', () => {
    const isAbiType = CairoInt32.isAbiType('core::integer::i32');
    expect(isAbiType).toBe(true);
  });

  test('should convert INT_32_MAX to BigInt', () => {
    const i32 = new CairoInt32(INT_32_MAX);
    expect(i32.toBigInt()).toEqual(INT_32_MAX);
  });
});

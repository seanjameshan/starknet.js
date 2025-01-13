/* eslint-disable no-new */
import { CairoInt8, INT_8_MAX, INT_8_MIN } from '../../../src/utils/cairoDataTypes/int8';

describe('CairoInt8 class test', () => {
  test('constructor 1 should throw on < INT_8_MIN', () => {
    expect(() => {
      new CairoInt8(INT_8_MIN - 1n);
    }).toThrow('bigNumberish is smaller than the int minimum');
  });

  test('constructor should throw on > INT_8_MAX', () => {
    expect(() => {
      new CairoInt8(INT_8_MAX + 1n);
    }).toThrow('bigNumberish is bigger than the int maximum');
  });

  test('should convert INT_8_MAX to API Request', () => {
    const i8 = new CairoInt8(INT_8_MAX);
    expect(i8.toApiRequest()).toEqual('127');
  });

  test('should serialize negative number to felt252', () => {
    const i8 = new CairoInt8(INT_8_MIN);
    expect(i8.toApiRequest()).toEqual(
      '3618502788666131213697322783095070105623107215331596699973092056135872020354'
    );
  });

  test('should convert negative serialized number to BigInt', () => {
    const i8 = new CairoInt8(-5);
    expect(i8.negativeFelt252ToBigInt()).toEqual(-5n);
  });

  test('validate should throw on < INT_8_MIN', () => {
    expect(() => {
      CairoInt8.validate(INT_8_MIN - 1n);
    }).toThrow('bigNumberish is smaller than INT_8_MIN');
  });

  test('validate should throw on > INT_8_MAX', () => {
    expect(() => {
      CairoInt8.validate(INT_8_MAX + 1n);
    }).toThrow('bigNumberish is bigger than INT_8_MAX');
  });

  test('validate should pass and return bigint', () => {
    const validate = CairoInt8.validate(INT_8_MAX);
    expect(typeof validate).toBe('bigint');
  });

  test('is should return true', () => {
    const is = CairoInt8.is(INT_8_MAX);
    expect(is).toBe(true);
  });

  test('is should return false', () => {
    const is = CairoInt8.is(INT_8_MAX + 1n);
    expect(is).toBe(false);
  });

  test('constructor should support BigNumberish', () => {
    const case1 = new CairoInt8(10n);
    const case2 = new CairoInt8(10);
    const case3 = new CairoInt8('10');
    const case4 = new CairoInt8('0xA');

    expect(case1).toEqual(case2);
    expect(case3).toEqual(case4);
    expect(case1).toEqual(case4);
  });

  test('should convert INT_8_MAX to Int8 dec struct', () => {
    const i8 = new CairoInt8(INT_8_MAX);
    const i8Decimal = i8.toIntDecimalString().int;
    expect(i8Decimal).toEqual('127');
  });

  test('should convert INT_8_MAX to Int8 hex struct', () => {
    const i8 = new CairoInt8(INT_8_MAX);
    const i8Hex = i8.toIntHexString();
    expect(i8Hex).toEqual('0x7f');
  });

  test('isAbiType should return true', () => {
    const isAbiType = CairoInt8.isAbiType('core::integer::i8');
    expect(isAbiType).toBe(true);
  });

  test('should convert INT_8_MAX to BigInt', () => {
    const i8 = new CairoInt8(INT_8_MAX);
    expect(i8.toBigInt()).toEqual(INT_8_MAX);
  });
});

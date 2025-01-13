/* eslint-disable no-new */
import { CairoInt16, INT_16_MAX, INT_16_MIN } from '../../../src/utils/cairoDataTypes/int16';

describe('CairoInt16 class test', () => {
  test('constructor 1 should throw on < INT_16_MIN', () => {
    expect(() => {
      new CairoInt16(INT_16_MIN - 1n);
    }).toThrow('bigNumberish is smaller than the int minimum');
  });

  test('constructor should throw on > INT_16_MAX', () => {
    expect(() => {
      new CairoInt16(INT_16_MAX + 1n);
    }).toThrow('bigNumberish is bigger than the int maximum');
  });

  test('should convert INT_16_MAX to API Request', () => {
    const i16 = new CairoInt16(INT_16_MAX);
    expect(i16.toApiRequest()).toEqual('32767');
  });

  test('should serialize negative number to felt252', () => {
    const i16 = new CairoInt16(INT_16_MIN);
    expect(i16.toApiRequest()).toEqual(
      '3618502788666131213697322783095070105623107215331596699973092056135871987714'
    );
  });

  test('should convert negative serialized number to BigInt', () => {
    const i16 = new CairoInt16(INT_16_MIN);
    expect(i16.negativeFelt252ToBigInt()).toEqual(-32767n);
  });

  test('validate should throw on < INT_16_MIN', () => {
    expect(() => {
      CairoInt16.validate(INT_16_MIN - 1n);
    }).toThrow('bigNumberish is smaller than INT_16_MIN');
  });

  test('validate should throw on > INT_16_MAX', () => {
    expect(() => {
      CairoInt16.validate(INT_16_MAX + 1n);
    }).toThrow('bigNumberish is bigger than INT_16_MAX');
  });

  test('validate should pass and return bigint', () => {
    const validate = CairoInt16.validate(INT_16_MAX);
    expect(typeof validate).toBe('bigint');
  });

  test('is should return true', () => {
    const is = CairoInt16.is(INT_16_MAX);
    expect(is).toBe(true);
  });

  test('is should return false', () => {
    const is = CairoInt16.is(INT_16_MAX + 1n);
    expect(is).toBe(false);
  });

  test('constructor should support BigNumberish', () => {
    const case1 = new CairoInt16(10n);
    const case2 = new CairoInt16(10);
    const case3 = new CairoInt16('10');
    const case4 = new CairoInt16('0xA');

    expect(case1).toEqual(case2);
    expect(case3).toEqual(case4);
    expect(case1).toEqual(case4);
  });

  test('should convert INT_16_MAX to Int16 dec struct', () => {
    const i16 = new CairoInt16(INT_16_MAX);
    const i16Decimal = i16.toIntDecimalString().int;
    expect(i16Decimal).toEqual('32767');
  });

  test('should convert INT_16_MAX to Int16 hex struct', () => {
    const i16 = new CairoInt16(INT_16_MAX);
    const i16Hex = i16.toIntHexString();
    expect(i16Hex).toEqual('0x7fff');
  });

  test('isAbiType should return true', () => {
    const isAbiType = CairoInt16.isAbiType('core::integer::i16');
    expect(isAbiType).toBe(true);
  });

  test('should convert INT_16_MAX to BigInt', () => {
    const i16 = new CairoInt16(INT_16_MAX);
    expect(i16.toBigInt()).toEqual(INT_16_MAX);
  });
});

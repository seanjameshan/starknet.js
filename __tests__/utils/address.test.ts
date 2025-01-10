import { constants, num } from '../../src';
import {
  addAddressPadding,
  getChecksumAddress,
  validateAndParseAddress,
  validateChecksumAddress,
} from '../../src/utils/address';

describe('addAddressPadding', () => {
  test('should correctly add padding', () => {
    const addr = '0x6eff1d71';
    const padded = '0x000000000000000000000000000000000000000000000000000000006eff1d71';

    return expect(addAddressPadding(addr)).toBe(padded);
  });

  test('should add hex prefix', () => {
    const addr = 'a7ee790591d9fa3efc87067d95a643f8455e0b8190eb8cb7bfd39e4fb7571fdf';
    const padded = '0xa7ee790591d9fa3efc87067d95a643f8455e0b8190eb8cb7bfd39e4fb7571fdf';

    return expect(addAddressPadding(addr)).toBe(padded);
  });

  test('should pad a number value', () => {
    const addr1 = 31;
    const addr2 = 0x1f;
    const padded = '0x000000000000000000000000000000000000000000000000000000000000001f';

    expect(addAddressPadding(addr1)).toBe(padded);
    expect(addAddressPadding(addr2)).toBe(padded);
  });

  test('should pad a bigint value', () => {
    const addr = constants.ADDR_BOUND;
    const padded = '0x07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00';

    expect(addAddressPadding(addr)).toBe(padded);
  });
});

describe('validateAndParseAddress', () => {
  test('should pass when correct starknet address is passed', () => {
    const addr = '0x7ee790591d9fa3efc87067d95a643f8455e0b8190eb8cb7bfd39e4fb7571fdf';

    return expect(validateAndParseAddress(addr)).toEqual(`${addAddressPadding(addr)}`);
  });

  test('should add 0x prefix if not provided', () => {
    const addr = '6eff1d71068df8e6677f59a556151c56ed13e14ad431a9bef6fcb3fc5e6fa7';

    return expect(validateAndParseAddress(addr)).toEqual(`${addAddressPadding(addr)}`);
  });

  test('should fail for invalid address', () => {
    const addr = 'test';
    expect(() => validateAndParseAddress(addr)).toThrow('Cannot convert 0xtest to a BigInt');
  });

  test('should fail for out of bound address', () => {
    const addr = num.toHex(constants.ADDR_BOUND + 1n);
    expect(() => validateAndParseAddress(addr)).toThrow(/^Message not signable/);
  });
});

describe('address checksums', () => {
  test('should be able to calculate checksum address', () => {
    const checksumAddress = getChecksumAddress(
      '0x2fd23d9182193775423497fc0c472e156c57c69e4089a1967fb288a2d84e914'
    );
    expect(checksumAddress).toEqual(
      '0x02Fd23d9182193775423497fc0c472E156C57C69E4089A1967fb288A2d84e914'
    );
  });
  test('should be able to verify checksum address', () => {
    const isValid = validateChecksumAddress(
      '0x02Fd23d9182193775423497fc0c472E156C57C69E4089A1967fb288A2d84e914'
    );
    expect(isValid).toEqual(true);
  });
  test('calculated checksum address should validate', () => {
    const checksumAddress = getChecksumAddress(
      '0x26cb0b500d175111341fabb53bf7fa4f5a0b8c5cbb31896cec1e8383a5edda8'
    );
    const isValid = validateChecksumAddress(checksumAddress);
    expect(isValid).toEqual(true);
  });
});

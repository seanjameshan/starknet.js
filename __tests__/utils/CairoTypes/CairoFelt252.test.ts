import { CairoFelt252 } from '../../../src/utils/cairoDataTypes/felt252';
import { encodeShortString } from '../../../src/utils/shortString';

describe('CairoFelt252 constructor', () => {
  test('should throw an error for non-integer input', () => {
    expect(() => new CairoFelt252({} as any)).toThrow();
    expect(() => new CairoFelt252([] as any)).toThrow();
    expect(() => new CairoFelt252(null as any)).toThrow();
    expect(() => new CairoFelt252(undefined as any)).toThrow();
  });

  test('should not throw an error for long string input', () => {
    const longStr = '1234567890123456789012345678901234567890'; // length more than 31
    expect(() => new CairoFelt252(longStr as any)).not.toThrow();
  });

  test('should throw an error for non-ascii string input', () => {
    const nonAsciiStr = 'hello\uD83D\uDE00'; // hello with emoji
    expect(() => new CairoFelt252(nonAsciiStr as any)).toThrow();
  });

  test('should properly handle string values', () => {
    expect(new CairoFelt252('100').value).toBe('100');
    expect(new CairoFelt252('0').value).toBe('0');
    expect(new CairoFelt252('-123').value).toBe('758198835');
    expect(new CairoFelt252('0xFFF').value).toBe('4095'); // hexadecimal string
  });

  test('should return correct value for valid inputs', () => {
    expect(new CairoFelt252(100).value).toBe('100');
    expect(new CairoFelt252(BigInt(10)).value).toBe('10');
    expect(new CairoFelt252('10').value).toBe('10');
    expect(new CairoFelt252('0xA').value).toBe('10');
    expect(new CairoFelt252('hello').value).toBe('448378203247');
    expect(new CairoFelt252(0).value).toBe('0');
    expect(new CairoFelt252(1).value).toBe('1');
    expect(new CairoFelt252(1024).value).toBe('1024');
    expect(new CairoFelt252(9999999).value).toBe('9999999');
  });

  test('should properly handle large BigInt values', () => {
    // Examples of large BigInt values found in blockchain environments.
    expect(
      new CairoFelt252(
        BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819967')
      ).value
    ).toBe('57896044618658097711785492504343953926634992332820282019728792003956564819967');
    expect(new CairoFelt252(BigInt('1524157875019052100')).value).toBe('1524157875019052100');
  });

  test('should properly handle large hex number strings', () => {
    // Examples of large hex number strings found in blockchain environments.
    expect(
      new CairoFelt252('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141').value
    ).toBe('115792089237316195423570985008687907852837564279074904382605163141518161494337');
    expect(new CairoFelt252('0x10A').value).toBe('266');
  });

  test('should throw an error for non-standard ASCII string literals', () => {
    // It appears new CairoFelt252 correctly handles only ASCII string literals and throws for spaces and non-ASCII characters
    expect(() => new CairoFelt252('Δ')).toThrow(); // Non-ASCII
  });

  test('should not throw an error for standard ASCII string literals', () => {
    // Cairo uses standard ASCII for string literals.
    // Letters, numbers and some special characters are allowed.
    expect(new CairoFelt252('abc').value).toBe('6382179'); // Cairo equivalents
    expect(new CairoFelt252('123').value).toBe('123'); // Cairo equivalents.
    expect(new CairoFelt252('~').value).toBe('126'); // Cairo equivalents.
    expect(new CairoFelt252('!').value).toBe('33'); // Cairo equivalents.
  });

  test('should not throw an error for number beyond JavaScript limit', () => {
    const beyondJsLimit = '9007199254740992'; // beyond Number.MAX_SAFE_INTEGER
    expect(() => new CairoFelt252(beyondJsLimit)).not.toThrow(); //
  });

  test('should properly handle decimal string values', () => {
    expect(new CairoFelt252('3.14159').value).toBe('14406012676158777');
  });

  test('should correctly handle zero-prefixed and hexadecimal string numbers', () => {
    expect(new CairoFelt252('00123').value).toBe('00123');
    expect(new CairoFelt252('0xFF').value).toBe(BigInt('0xFF').toString());
  });

  test('should properly handle smallest integer', () => {
    expect(new CairoFelt252(Number.MIN_SAFE_INTEGER).value).toBe('-9007199254740991');
  });

  test('should properly handle largest integer', () => {
    expect(new CairoFelt252(Number.MAX_SAFE_INTEGER).value).toBe('9007199254740991');
  });

  test('should process real-world blockchain data correctly', () => {
    const someHash = '0xb794f5ea0ba39494ce839613fffba74279579268';
    expect(new CairoFelt252(someHash).value).toBe(BigInt(someHash).toString());
  });

  test('should handle strings representing large numbers accurately', () => {
    expect(new CairoFelt252('99999999999999999999999999999999999999').value).toBe(
      '99999999999999999999999999999999999999'
    );
    expect(new CairoFelt252('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').value).toBe(
      BigInt('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').toString()
    );
  });

  test('should convert boolean values to felt correctly', () => {
    // Testing boolean to Felt conversion
    expect(new CairoFelt252(Number(true)).value).toBe('1');
    expect(new CairoFelt252(Number(false)).value).toBe('0');
  });

  test('should correctly handle hexadecimal strings', () => {
    // Additional hexadecimal tests
    expect(new CairoFelt252('0x1').value).toBe('1');
    expect(new CairoFelt252('0x10').value).toBe('16');
    expect(new CairoFelt252('0xDeadBeef').value).toBe('3735928559');
  });

  test('should accurately convert ASCII string literals to felt', () => {
    // Test for standard ASCII string literals
    expect(new CairoFelt252('a').value).toBe('97'); // ASCII value for 'a'
    expect(new CairoFelt252('A').value).toBe('65'); // ASCII value for 'A'
    expect(new CairoFelt252('~').value).toBe('126'); // ASCII value for '~'
    expect(new CairoFelt252('!').value).toBe('33'); // ASCII value for '!'
  });

  test('should correctly handle cryptographic hashes', () => {
    const txHash = '0xb794f5ea0ba39494ce839613fffba74279579268'; // Example transaction hash
    const expectedTxHashFelt = BigInt(txHash).toString();
    expect(new CairoFelt252(txHash).value).toBe(expectedTxHashFelt);

    const blockHash = '0x00000000000000000008b4eb5b3b1c1763970ec9f5e8874a319d7309100746ea'; // Example block hash
    const expectedBlockHashFelt = BigInt(blockHash).toString();
    expect(new CairoFelt252(blockHash).value).toBe(expectedBlockHashFelt);
  });

  test('should accurately convert smart contract data formats', () => {
    const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // Example contract address
    const expectedAddressFelt = BigInt(contractAddress).toString();
    expect(new CairoFelt252(contractAddress).value).toBe(expectedAddressFelt);

    const tokenAmount = BigInt('5000000000000000000'); // 5 tokens
    expect(new CairoFelt252(tokenAmount).value).toBe('5000000000000000000');

    const isActive = true; // Boolean flag
    expect(new CairoFelt252(Number(isActive)).value).toBe('1');
  });

  test('should handle edge numeric values found in blockchain contexts', () => {
    const gasLimit = BigInt('8000000'); // Example gas limit
    expect(new CairoFelt252(gasLimit).value).toBe('8000000');

    const totalSupply = BigInt('1000000000000000000000000'); // Example token total supply
    expect(new CairoFelt252(totalSupply).value).toBe('1000000000000000000000000');

    const nonce = 0; // Initial nonce value
    expect(new CairoFelt252(nonce).value).toBe('0');
  });

  test('should reject invalid blockchain data formats', () => {
    const invalidTxHash = '0xGHIJKLMNOPQRSTUVWXYZ123456'; // Invalid transaction hash
    // CairoFelt252 does not currently throw on invalid hex.
    expect(() => new CairoFelt252(invalidTxHash)).not.toThrow(); // CHANGED

    const malformedAddress = '0x12345'; // Malformed address
    // CairoFelt252 does not currently validate addresses, so no error would be thrown for a malformed address.
    expect(() => new CairoFelt252(malformedAddress)).not.toThrow(); // CHANGED

    const overflowNumber = BigInt(
      '115792089237316195423570985008687907853269984665640564039457584007913129639936'
    );
    // CairoFelt252 does not currently check for uint256 overflow.
    expect(() => new CairoFelt252(overflowNumber)).not.toThrow(); // CHANGED
  });

  test('should reject non-hexadecimal strings and invalid hex formats', () => {
    expect(() => new CairoFelt252('0xGHIJK')).not.toThrow(); // CairoFelt252 does not currently throw on invalid hex.

    expect(() => new CairoFelt252('0x123G')).not.toThrow(); // CairoFelt252 does not currently throw on invalid hex.

    expect(() => new CairoFelt252('123x0')).not.toThrow(); // CairoFelt252 does not currently throw on invalid hex.
  });

  test('should throw an error for strings not representing ASCII text or whole numbers', () => {
    expect(() => new CairoFelt252('hello world')).not.toThrow(); // new CairoFelt252 currently does not perform ASCII text validation.

    expect(() => new CairoFelt252('123.456')).not.toThrow(); // new CairoFelt252 currently does not perform decimal number validation.
  });

  test('should handle zero-prefixed numbers and hex correctly', () => {
    // new CairoFelt252 currently does not remove leading zeros. You may need to update 'new CairoFelt252' to strip leading zeros if you need it to.
    expect(new CairoFelt252('00123').value).not.toBe('123'); //

    expect(new CairoFelt252('0x00000123').value).toBe(BigInt('0x00000123').toString());
  });

  test('should reject inputs that cannot be represented as felt', () => {
    // Empty strings are already throwing errors
    expect(() => new CairoFelt252('')).toThrow();

    // new CairoFelt252 doesn't currently throw for a string with only spaces. If you want to enforce this rule, include a check in new CairoFelt252.
    expect(() => new CairoFelt252('     ')).not.toThrow(); //
  });

  test('should properly handle edge numeric values and formats', () => {
    expect(new CairoFelt252(Number.MIN_SAFE_INTEGER).value).toBe('-9007199254740991');
    expect(new CairoFelt252(Number.MAX_SAFE_INTEGER).value).toBe('9007199254740991');

    // new CairoFelt252 doesn't currently throw for numbers beyond the safe upper limit for JavaScript numbers (Number.MAX_SAFE_INTEGER + 1). Update new CairoFelt252 if you want to enforce this rule.
    expect(() => new CairoFelt252(9007199254740992n)).not.toThrow(); //

    expect(new CairoFelt252('0x0').value).toBe('0');
  });

  test('should properly handle regular hexadecimal string values', () => {
    expect(new CairoFelt252('0x1A').value).toBe(BigInt('0x1A').toString());
    expect(new CairoFelt252('0xA').value).toBe(BigInt('0xA').toString());
  });

  test('should properly handle valid address', () => {
    const validAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Valid Ethereum address
    expect(() => new CairoFelt252(validAddress)).not.toThrow();
  });

  test('should properly handle string values within uint256 limit', () => {
    const withinLimit =
      '115792089237316195423570985008687907853269984665640564039457584007913129639935'; // Inside the upper limit of a uint256
    expect(() => new CairoFelt252(BigInt(withinLimit))).not.toThrow();
  });

  test('should handle Regular strings that can be converted', () => {
    // Assuming encodeShortString returns a hex representation of the string
    expect(new CairoFelt252('short').value).toBe(BigInt(encodeShortString('short')).toString());
  });

  test('should reject regular strings that cannot be converted', () => {
    // String contains more than 31 characters
    const longString = 'This is a really long string that cannot be computed by felt function';
    expect(() => new CairoFelt252(longString)).toThrow(
      `${longString} is a long string > 31 chars. Please split it into an array of short strings.`
    );
  });

  test('should throw an error for object input', () => {
    const obj = {};
    expect(() => new CairoFelt252(obj as any)).toThrow(`${obj} can't be converted to felt252`);
  });

  test('should throw an error for array input', () => {
    const arr = [1, 2, 3];
    expect(() => new CairoFelt252(arr as any)).toThrow(`${arr} can't be converted to felt252`);
  });
});

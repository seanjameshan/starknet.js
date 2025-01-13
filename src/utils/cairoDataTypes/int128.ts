/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo i128 data type
 */

import { BigNumberish } from '../../types';
import { CairoInt } from './cairoInt';

export const INT_128_MAX = (1n << 127n) - 1n;
export const INT_128_MIN = -(1n << 127n) + 1n;
const abiSelector = 'core::integer::i128';

export class CairoInt128 extends CairoInt {
  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i128
   */

  public constructor(int128: BigNumberish) {
    super(int128, INT_128_MAX, INT_128_MIN);
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === abiSelector;
  }

  /*
   * Check if BigNumberish can be represented as 128 bits integer
   */
  static is(bigNumberish: BigNumberish) {
    try {
      CairoInt128.validate(bigNumberish);
    } catch (error) {
      return false;
    }
    return true;
  }

  static validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < INT_128_MIN) throw new Error('bigNumberish is smaller than INT_128_MIN');
    if (bigInt > INT_128_MAX) throw new Error('bigNumberish is bigger than INT_128_MAX');
    return bigInt;
  }

  static validate252Bits(bigNumberish: BigNumberish) {
    const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
    const MAX_FELT_128BITS = P;
    const MIN_FELT_128BITS = P + INT_128_MIN;
    const bigInt = BigInt(bigNumberish);
    if (bigInt > MAX_FELT_128BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < MIN_FELT_128BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }
}

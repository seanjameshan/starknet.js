/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo i16 data type
 */

import { BigNumberish } from '../../types';
import { CairoInt } from './cairoInt';

export const INT_16_MAX = (1n << 15n) - 1n;
export const INT_16_MIN = -(1n << 15n) + 1n;
const abiSelector = 'core::integer::i16';

export class CairoInt16 extends CairoInt {
  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i16
   */

  public constructor(int16: BigNumberish) {
    super(int16, INT_16_MAX, INT_16_MIN);
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === abiSelector;
  }

  /*
   * Check if BigNumberish can be represented as 16 bits integer
   */
  static is(bigNumberish: BigNumberish) {
    try {
      CairoInt16.validate(bigNumberish);
    } catch (error) {
      return false;
    }
    return true;
  }

  static validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < INT_16_MIN) throw new Error('bigNumberish is smaller than INT_16_MIN');
    if (bigInt > INT_16_MAX) throw new Error('bigNumberish is bigger than INT_16_MAX');
    return bigInt;
  }

  static validate252Bits(bigNumberish: BigNumberish) {
    const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
    const MAX_FELT_16BITS = P;
    const MIN_FELT_16BITS = P + INT_16_MIN;
    const bigInt = BigInt(bigNumberish);
    if (bigInt > MAX_FELT_16BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < MIN_FELT_16BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }
}

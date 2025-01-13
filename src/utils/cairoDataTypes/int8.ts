/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo i8 data type
 */

import { BigNumberish } from '../../types';
import { CairoInt } from './cairoInt';

export const INT_8_MAX = (1n << 7n) - 1n;
export const INT_8_MIN = -(1n << 7n) + 1n;
const abiSelector = 'core::integer::i8';

export class CairoInt8 extends CairoInt {
  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i8
   */

  public constructor(bigNumberish: BigNumberish);

  public constructor(int8: any) {
    super(int8, INT_8_MAX, INT_8_MIN);
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === abiSelector;
  }

  /*
   * Check if BigNumberish can be represented as 8 bits integer
   */
  static is(bigNumberish: BigNumberish) {
    try {
      CairoInt8.validate(bigNumberish);
    } catch (error) {
      return false;
    }
    return true;
  }

  static validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < INT_8_MIN) throw new Error('bigNumberish is smaller than INT_8_MIN');
    if (bigInt > INT_8_MAX) throw new Error('bigNumberish is bigger than INT_8_MAX');
    return bigInt;
  }

  static validate252Bits(bigNumberish: BigNumberish) {
    const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
    const MAX_FELT_8BITS = P;
    const MIN_FELT_8BITS = P + INT_8_MIN;
    const bigInt = BigInt(bigNumberish);
    if (bigInt > MAX_FELT_8BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < MIN_FELT_8BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }
}

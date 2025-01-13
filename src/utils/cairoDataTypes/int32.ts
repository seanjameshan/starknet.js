/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo i32 data type
 */

import { BigNumberish } from '../../types';
import { CairoInt } from './cairoInt';

export const INT_32_MAX = (1n << 31n) - 1n;
export const INT_32_MIN = -(1n << 31n) + 1n;
const abiSelector = 'core::integer::i32';

export class CairoInt32 extends CairoInt {
  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i32
   */

  public constructor(int32: BigNumberish) {
    super(int32, INT_32_MAX, INT_32_MIN);
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === abiSelector;
  }

  /*
   * Check if BigNumberish can be represented as 32 bits integer
   */
  static is(bigNumberish: BigNumberish) {
    try {
      CairoInt32.validate(bigNumberish);
    } catch (error) {
      return false;
    }
    return true;
  }

  static validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < INT_32_MIN) throw new Error('bigNumberish is smaller than INT_32_MIN');
    if (bigInt > INT_32_MAX) throw new Error('bigNumberish is bigger than INT_32_MAX');
    return bigInt;
  }

  static validate252Bits(bigNumberish: BigNumberish) {
    const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
    const MAX_FELT_32BITS = P;
    const MIN_FELT_32BITS = P + INT_32_MIN;
    const bigInt = BigInt(bigNumberish);
    if (bigInt > MAX_FELT_32BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < MIN_FELT_32BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }
}

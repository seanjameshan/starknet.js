/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo i64 data type
 */

import { BigNumberish } from '../../types';
import { CairoInt } from './cairoInt';

export const INT_64_MAX = (1n << 63n) - 1n;
export const INT_64_MIN = -(1n << 63n) + 1n;
const abiSelector = 'core::integer::i64';

export class CairoInt64 extends CairoInt {
  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i64
   */

  public constructor(int64: BigNumberish) {
    super(int64, INT_64_MAX, INT_64_MIN);
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === abiSelector;
  }

  /*
   * Check if BigNumberish can be represented as 64 bits integer
   */
  static is(bigNumberish: BigNumberish) {
    try {
      CairoInt64.validate(bigNumberish);
    } catch (error) {
      return false;
    }
    return true;
  }

  static validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < INT_64_MIN) throw new Error('bigNumberish is smaller than INT_64_MIN');
    if (bigInt > INT_64_MAX) throw new Error('bigNumberish is bigger than INT_64_MAX');
    return bigInt;
  }

  static validate252Bits(bigNumberish: BigNumberish) {
    const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
    const MAX_FELT_64BITS = P;
    const MIN_FELT_64BITS = P + INT_64_MIN;
    const bigInt = BigInt(bigNumberish);
    if (bigInt > MAX_FELT_64BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < MIN_FELT_64BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }
}

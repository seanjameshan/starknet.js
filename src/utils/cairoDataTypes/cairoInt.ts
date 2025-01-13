/* eslint-disable no-bitwise */
/**
 * Singular class handling cairo integer data type
 */

import { BigNumberish } from '../../types';
import { addHexPrefix } from '../encode';
import { CairoFelt } from './felt';

export const P: bigint = 2n ** 251n + 17n * 2n ** 192n + 1n;
// export const INT_8_MAX = (1n << 7n) - 1n;
// export const INT_8_MIN = -(1n << 7n) + 1n;
// export const MIN_252_BITS = P + INT_8_MIN;
// export const MAX_252_BITS = P;

export class CairoInt {
  public felt252: bigint;

  public INT_MAX: bigint = 0n;

  public INT_MIN: bigint = 0n;

  public MAX_FELT_8BITS = P;

  public MIN_FELT_8BITS: bigint = 0n;

  /**
   * Default constructor (Lib usage)
   * @param bigNumberish BigNumberish value representing i8
   */

  public constructor(int: BigNumberish, INT_MAX: bigint, INT_MIN: bigint) {
    this.INT_MAX = INT_MAX;
    this.INT_MIN = INT_MIN;
    this.MIN_FELT_8BITS = P + this.INT_MIN;
    const bigInt = this.validate(int);

    if (bigInt > 0 && bigInt <= this.INT_MAX) {
      this.felt252 = bigInt;
    } else {
      this.felt252 = P + bigInt;
    }
  }

  /**
   * Validate if BigNumberish can be represented as i8
   */
  validate(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt < this.INT_MIN) throw new Error('bigNumberish is smaller than the int minimum');
    if (bigInt > this.INT_MAX) throw new Error('bigNumberish is bigger than the int maximum');
    return bigInt;
  }

  /**
   * Validate if BigNumberish is a 8 bits felt252
   */
  validate252Bits(bigNumberish: BigNumberish) {
    const bigInt = BigInt(bigNumberish);
    if (bigInt > this.MAX_FELT_8BITS) throw new Error('bigNumberish is bigger than MAX_252_BITS');
    if (bigInt < this.MIN_FELT_8BITS) throw new Error('bigNumberish is smaller than MIN_252_BITS');
    return bigInt;
  }

  /*
   * Return a negative number (felt252) back to bigint
   */
  negativeFelt252ToBigInt() {
    const bigInt = this.validate252Bits(this.felt252);
    return BigInt(bigInt - P);
  }

  /**
   * Return bigint representation
   */
  toBigInt() {
    return this.felt252;
  }

  /**
   * Return i8 structure with HexString
   */
  toIntHexString() {
    return addHexPrefix(this.felt252.toString(16));
  }

  /**
   * Return i8 structure with DecimalString
   */
  toIntDecimalString() {
    return {
      int: this.felt252.toString(10),
    };
  }

  /**
   * Return api requests representation witch is felt
   */
  toApiRequest() {
    if (this.felt252 > 0) {
      return CairoFelt(this.felt252);
    }
    return this.felt252.toString();
  }
}

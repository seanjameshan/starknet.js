/* eslint-disable max-classes-per-file */

import { BigNumberish, isBigInt, isBoolean, isHex, isStringWholeNumber } from '../num';
import { encodeShortString, isLongText, isShortText, isString } from '../shortString';

type ParsableTypes = BigNumberish | boolean;
type Numberish = bigint | number;

export class FeltParseError extends Error {
  constructor(val: ParsableTypes, msg?: string) {
    const message = msg ?? `${val} can't be converted to felt252`;
    super(message);
  }
}

export class CairoFelt252 {
  private felt: string;

  static abiSelector = 'core::felt252';

  constructor(val: ParsableTypes) {
    if (isBigInt(val) || Number.isInteger(val)) {
      this.felt = this.parseNumberish(val as Numberish);
    } else if (isString(val)) {
      this.felt = this.parseString(val);
    } else if (isBoolean(val)) {
      this.felt = this.parseBoolean(val);
    } else {
      throw new FeltParseError(val);
    }
  }

  get value() {
    return this.felt;
  }

  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(abiType: string) {
    return abiType === 'felt' || abiType === CairoFelt252.abiSelector;
  }

  public static toFeltArray(...vals: ParsableTypes[]) {
    return vals.map((it) => new CairoFelt252(it).value);
  }

  private parseNumberish(val: Numberish) {
    return val.toString();
  }

  private parseString(val: string) {
    if (isHex(val)) {
      return BigInt(val).toString();
    }
    if (isShortText(val)) {
      return BigInt(encodeShortString(val)).toString();
    }
    if (isStringWholeNumber(val)) {
      return val;
    }
    if (isLongText(val)) {
      throw new FeltParseError(
        `${val} is a long string > 31 chars. Please split it into an array of short strings.`
      );
    }
    throw new FeltParseError(val);
  }

  private parseBoolean(val: boolean) {
    return `${+val}`;
  }
}

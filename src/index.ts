/**
 * Main
 */
export * from './wallet';
export * from './account';
export * from './contract';
export * from './provider';
export * from './signer';
export * from './channel';
export * from './account/instance';

// TODO: decide on final export style
export * from './types';
export * as types from './types';

/**
 * Utils
 */
export * as constants from './constants';
export * as encode from './utils/encode';
export * as hash from './utils/hash';
export * as v3hash from './utils/hash/transactionHash/v3';
export * as v2hash from './utils/hash/transactionHash/v2';
export * as json from './utils/json';
export * as num from './utils/num';
export * as transaction from './utils/transaction';
export * as stark from './utils/stark';
export * as eth from './utils/eth';
export * as merkle from './utils/merkle';
export * as uint256 from './utils/uint256';
export * as shortString from './utils/shortString';
export * as typedData from './utils/typedData';
export * as ec from './utils/ec';
export * as starknetId from './utils/starknetId';
export * as provider from './utils/provider';
export * as selector from './utils/selector';
export * as events from './utils/events/index';
export * from './utils/address';
export * from './utils/url';
export * from './utils/calldata';
export * from './utils/calldata/enum';
export * from './utils/contract';
export * from './utils/events';

/**
 * Deprecated
 */
/* eslint-disable import/first */
import * as num from './utils/num';

/** @deprecated prefer the 'num' naming */
export const number = num;

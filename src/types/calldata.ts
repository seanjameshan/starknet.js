import { ValuesType } from './helpers/valuesType';

export const ValidateType = {
  DEPLOY: 'DEPLOY',
  CALL: 'CALL',
  INVOKE: 'INVOKE',
} as const;

export type ValidateType = ValuesType<typeof ValidateType>;

export const Uint = {
  u8: 'core::integer::u8',
  u16: 'core::integer::u16',
  u32: 'core::integer::u32',
  u64: 'core::integer::u64',
  u128: 'core::integer::u128',
  u256: 'core::integer::u256', // This one is struct
  u512: 'core::integer::u512', // This one is struct
} as const;

export const IntVal = {
  i8: 'core::integer::i8',
  i16: 'core::integer::i16',
  i32: 'core::integer::i32',
  i64: 'core::integer::i64',
  i128: 'core::integer::i128',
} as const;

export type Uint = ValuesType<typeof Uint>;

export type IntVal = ValuesType<typeof IntVal>;

export const Literal = {
  ClassHash: 'core::starknet::class_hash::ClassHash',
  ContractAddress: 'core::starknet::contract_address::ContractAddress',
  Secp256k1Point: 'core::starknet::secp256k1::Secp256k1Point',
  U96: 'core::internal::bounded_int::BoundedInt::<0, 79228162514264337593543950335>',
} as const;

export type Literal = ValuesType<typeof Literal>;

export const ETH_ADDRESS = 'core::starknet::eth_address::EthAddress';
export const NON_ZERO_PREFIX = 'core::zeroable::NonZero::';

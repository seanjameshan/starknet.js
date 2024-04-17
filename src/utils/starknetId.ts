import { StarknetChainId, ZERO } from '../constants';
import { BigNumberish } from '../types';
import { tuple } from './calldata/cairo';
import { CairoCustomEnum } from './calldata/enum/CairoCustomEnum';
/* eslint-disable no-param-reassign */

const basicAlphabet = 'abcdefghijklmnopqrstuvwxyz0123456789-';
const basicSizePlusOne = BigInt(basicAlphabet.length + 1);
const bigAlphabet = '这来';
const basicAlphabetSize = BigInt(basicAlphabet.length);
const bigAlphabetSize = BigInt(bigAlphabet.length);
const bigAlphabetSizePlusOne = BigInt(bigAlphabet.length + 1);

function extractStars(str: string): [string, number] {
  let k = 0;
  while (str.endsWith(bigAlphabet[bigAlphabet.length - 1])) {
    str = str.substring(0, str.length - 1);
    k += 1;
  }
  return [str, k];
}

export function useDecoded(encoded: bigint[]): string {
  let decoded = '';

  encoded.forEach((subdomain) => {
    while (subdomain !== ZERO) {
      const code = subdomain % basicSizePlusOne;
      subdomain /= basicSizePlusOne;
      if (code === BigInt(basicAlphabet.length)) {
        const nextSubdomain = subdomain / bigAlphabetSizePlusOne;
        if (nextSubdomain === ZERO) {
          const code2 = subdomain % bigAlphabetSizePlusOne;
          subdomain = nextSubdomain;
          if (code2 === ZERO) decoded += basicAlphabet[0];
          else decoded += bigAlphabet[Number(code2) - 1];
        } else {
          const code2 = subdomain % bigAlphabetSize;
          decoded += bigAlphabet[Number(code2)];
          subdomain /= bigAlphabetSize;
        }
      } else decoded += basicAlphabet[Number(code)];
    }

    const [str, k] = extractStars(decoded);
    if (k)
      decoded =
        str +
        (k % 2 === 0
          ? bigAlphabet[bigAlphabet.length - 1].repeat(k / 2 - 1) +
            bigAlphabet[0] +
            basicAlphabet[1]
          : bigAlphabet[bigAlphabet.length - 1].repeat((k - 1) / 2 + 1));
    decoded += '.';
  });

  if (!decoded) {
    return decoded;
  }

  return decoded.concat('stark');
}

export function useEncoded(decoded: string): bigint {
  let encoded = BigInt(0);
  let multiplier = BigInt(1);

  if (decoded.endsWith(bigAlphabet[0] + basicAlphabet[1])) {
    const [str, k] = extractStars(decoded.substring(0, decoded.length - 2));
    decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(2 * (k + 1));
  } else {
    const [str, k] = extractStars(decoded);
    if (k) decoded = str + bigAlphabet[bigAlphabet.length - 1].repeat(1 + 2 * (k - 1));
  }

  for (let i = 0; i < decoded.length; i += 1) {
    const char = decoded[i];
    const index = basicAlphabet.indexOf(char);
    const bnIndex = BigInt(basicAlphabet.indexOf(char));

    if (index !== -1) {
      // add encoded + multiplier * index
      if (i === decoded.length - 1 && decoded[i] === basicAlphabet[0]) {
        encoded += multiplier * basicAlphabetSize;
        multiplier *= basicSizePlusOne;
        // add 0
        multiplier *= basicSizePlusOne;
      } else {
        encoded += multiplier * bnIndex;
        multiplier *= basicSizePlusOne;
      }
    } else if (bigAlphabet.indexOf(char) !== -1) {
      // add encoded + multiplier * (basicAlphabetSize)
      encoded += multiplier * basicAlphabetSize;
      multiplier *= basicSizePlusOne;
      // add encoded + multiplier * index
      const newid = (i === decoded.length - 1 ? 1 : 0) + bigAlphabet.indexOf(char);
      encoded += multiplier * BigInt(newid);
      multiplier *= bigAlphabetSize;
    }
  }

  return encoded;
}

export const StarknetIdContract = {
  MAINNET: '0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678',
  TESTNET: '0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce',
  TESTNET_SEPOLIA: '0x0707f09bc576bd7cfee59694846291047e965f4184fe13dac62c56759b3b6fa7',
} as const;

export function getStarknetIdContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdContract.MAINNET;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdContract.TESTNET;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdContract.TESTNET_SEPOLIA;

    default:
      throw new Error('Starknet.id is not yet deployed on this network');
  }
}

export const StarknetIdIdentityContract = {
  MAINNET: '0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af',
  TESTNET: '0x783a9097b26eae0586373b2ce0ed3529ddc44069d1e0fbc4f66d42b69d6850d',
  TESTNET_SEPOLIA: '0x070DF8B4F5cb2879f8592849fA8f3134da39d25326B8558cc9C8FE8D47EA3A90',
} as const;

export function getStarknetIdIdentityContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdIdentityContract.MAINNET;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdIdentityContract.TESTNET;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdIdentityContract.TESTNET_SEPOLIA;

    default:
      throw new Error('Starknet.id verifier contract is not yet deployed on this network');
  }
}

export const StarknetIdMulticallContract =
  '0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970';

export function getStarknetIdMulticallContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdMulticallContract;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdMulticallContract;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdMulticallContract;

    default:
      throw new Error('Starknet.id multicall contract is not yet deployed on this network');
  }
}

export const StarknetIdVerifierContract = {
  MAINNET: '0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf',
  TESTNET: '0x057c942544063c3aea6ea6c37009cc9d1beacd750cb6801549a129c7265f0f11',
  TESTNET_SEPOLIA: '0x0182EcE8173C216A395f4828e1523541b7e3600bf190CB252E1a1A0cE219d184',
} as const;

export function getStarknetIdVerifierContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdVerifierContract.MAINNET;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdVerifierContract.TESTNET;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdVerifierContract.TESTNET_SEPOLIA;

    default:
      throw new Error('Starknet.id verifier contract is not yet deployed on this network');
  }
}

export const StarknetIdPfpContract = {
  MAINNET: '0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7',
  TESTNET: '0x03cac3228b434259734ee0e4ff445f642206ea11adace7e4f45edd2596748698',
  TESTNET_SEPOLIA: '0x058061bb6bdc501eE215172c9f87d557C1E0f466dC498cA81b18f998Bf1362b2',
} as const;

export function getStarknetIdPfpContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdPfpContract.MAINNET;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdPfpContract.TESTNET;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdPfpContract.TESTNET_SEPOLIA;

    default:
      throw new Error(
        'Starknet.id profile picture verifier contract is not yet deployed on this network'
      );
  }
}

export const StarknetIdPopContract = {
  MAINNET: '0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4',
  TESTNET: '0x03528caf090179e337931ee669a5b0214041e1bae30d460ff07d2cea2c7a9106',
  TESTNET_SEPOLIA: '0x0023FE3b845ed5665a9eb3792bbB17347B490EE4090f855C1298d03BB5F49B49',
} as const;

export function getStarknetIdPopContract(chainId: StarknetChainId): string {
  switch (chainId) {
    case StarknetChainId.SN_MAIN:
      return StarknetIdPopContract.MAINNET;

    case StarknetChainId.SN_GOERLI:
      return StarknetIdPopContract.TESTNET;

    case StarknetChainId.SN_SEPOLIA:
      return StarknetIdPopContract.TESTNET_SEPOLIA;

    default:
      throw new Error(
        'Starknet.id proof of personhood verifier contract is not yet deployed on this network'
      );
  }
}

// Functions to build CairoCustomEnum for multicall contracts
export function execution(
  staticEx: {} | undefined,
  ifEqual: number[] | undefined = undefined,
  ifNotEqual: number[] | undefined = undefined
): CairoCustomEnum {
  return new CairoCustomEnum({
    Static: staticEx,
    IfEqual: ifEqual ? tuple(ifEqual[0], ifEqual[1], ifEqual[2]) : undefined,
    IfNotEqual: ifNotEqual ? tuple(ifNotEqual[0], ifNotEqual[1], ifNotEqual[2]) : undefined,
  });
}

export function dynamicFelt(
  hardcoded: BigNumberish | undefined,
  reference: number[] | undefined = undefined
): CairoCustomEnum {
  return new CairoCustomEnum({
    Hardcoded: hardcoded,
    Reference: reference ? tuple(reference[0], reference[1]) : undefined,
  });
}

export function dynamicCallData(
  hardcoded: BigNumberish | undefined,
  reference: BigNumberish[] | undefined = undefined,
  arrayReference: BigNumberish[] | undefined = undefined
): CairoCustomEnum {
  return new CairoCustomEnum({
    Hardcoded: hardcoded,
    Reference: reference ? tuple(reference[0], reference[1]) : undefined,
    ArrayReference: arrayReference ? tuple(arrayReference[0], arrayReference[1]) : undefined,
  });
}

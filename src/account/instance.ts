import { DEFAULT_TRANSACTION_VERSION } from '../constants';
import { ProviderInterface } from '../provider/interface';
import { SignerInterface } from '../signer/interface';
import { CairoVersion, ETransactionVersion, ProviderOptions } from '../types';
import { Account } from '.';

export class AccountInstance extends Account {
  constructor(
    providerOrOptions: ProviderOptions | ProviderInterface,
    address: string,
    pkOrSigner: Uint8Array | string | SignerInterface,
    cairoVersion?: CairoVersion,
    transactionVersion:
      | ETransactionVersion.V2
      | ETransactionVersion.V3 = DEFAULT_TRANSACTION_VERSION
  ) {
    super(providerOrOptions, address, pkOrSigner, cairoVersion, transactionVersion, true);
  }
}

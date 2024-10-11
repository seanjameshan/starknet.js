/* eslint-disable no-await-in-loop */
/* eslint-disable no-bitwise */
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
import type {
  InvocationsSignerDetails,
  V2InvocationsSignerDetails,
  Call,
  Signature,
  Calldata,
  BigNumberish,
  V3InvocationsSignerDetails,
  LedgerPathCalculation,
} from '../types';
import assert from '../utils/assert';
import { CallData } from '../utils/calldata';
import type { SignerInterface } from './interface';
import { HARDENING_4BYTES, HARDENING_BYTE } from '../constants';
import { ETransactionVersion2 } from '../types/api/rpcspec_0_6';
import { getExecuteCalldata } from '../utils/transaction';
import { calculateInvokeTransactionHash, getSelector } from '../utils/hash';
import { intDAM } from '../utils/stark';
import { addHexPrefix, buf2hex, concatenateArrayBuffer, removeHexPrefix } from '../utils/encode';
import { hexToBytes, stringToSha256ToArrayBuff4, toBigInt, toHex } from '../utils/num';
import { starkCurve } from '../utils/ec';
import { EDAMode, EDataAvailabilityMode, ETransactionVersion3 } from '../types/api';
import { addAddressPadding } from '../utils/address';
import {
  encodeResourceBoundsL1,
  encodeResourceBoundsL2,
  hashDAMode,
} from '../utils/hash/transactionHash/v3';
import { LedgerSigner111 } from './ledgerSigner111';

/**
 * Signer for accounts using a Ledger Nano S+/X signature (Starknet Ledger APP version 2.1.0).
 *
 * The Ledger has to be connected, unlocked and the Starknet APP has to be selected prior of use of this class.
 */
export class LedgerSigner211<Transport extends Record<any, any> = any>
  extends LedgerSigner111
  implements SignerInterface
{
  /**
   * constructor of the LedgerSigner class.
   * @param {Transport} transport 5 transports are available to handle USB, bluetooth, Node, Web, Mobile.
   * See Guides for more details.
   * @param {number} accountID ID of Ledger Nano (can handle 2**31 accounts).
   * @param {string} [eip2645application='LedgerW'] A wallet is defined by an ERC2645 derivation path (6 items),
   * and one item is the `application` and can be customized.
   * Default value is `LedgerW`.
   * @param {LedgerPathCalculation} [pathFunction=getLedgerPathBuffer21]
   * defines the function that will calculate the path. By default `getLedgerPathBuffer211` is selected.
   *
   * If you are using APP v2.1.0 with an account created with the v1.1.1, you need to use :
   * ```typescript
   * const myLedgerSigner = new LedgerSigner211(myNodeTransport, 0, undefined, getLedgerPathBuffer111);
   * ```
   * @example
   * ```typescript
   * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
   * const myNodeTransport = await TransportNodeHid.create();
   * const myLedgerSigner = new LedgerSigner211(myNodeTransport, 0);
   * ```
   */
  constructor(
    transport: Transport,
    accountID: number,
    eip2645application: string = 'LedgerW',
    pathFunction: LedgerPathCalculation = getLedgerPathBuffer211
  ) {
    super(transport, accountID, eip2645application, pathFunction);
  }

  /**
   * Sign in a Ledger a V1 or a V3 transaction. The details are displayed on the Ledger screen.
   * @param {Call[]} transactions An array of `Call` transactions (generated for example by `myContract.populate()`).
   * @param {InvocationsSignerDetails} transactionsDetail An object that includes all the necessary inputs to hash the transaction. Can be `V2InvocationsSignerDetails` or `V3InvocationsSignerDetails` type.
   * @returns {Signature} The signed transaction.
   * @example
   * ```typescript
   * const txDetailsV3: V3InvocationsSignerDetails = {
   * chainId: constants.StarknetChainId.SN_MAIN,
   * nonce: "28",
   * accountDeploymentData: [],
   * paymasterData: [],
   * cairoVersion: "1",
   * feeDataAvailabilityMode: "L1",
   * nonceDataAvailabilityMode: "L1",
   * resourceBounds: {
   *   l1_gas: {
   *     max_amount: "0x2a00",
   *     max_price_per_unit: "0x5c00000"
   *   },
   *   l2_gas: {
   *     max_amount: "0x00",
   *     max_price_per_unit: "0x00"
   *   },
   * },
   * tip: 0,
   * version: "0x3",
   * walletAddress: account0.address
   * }
   * const result = myLedgerSigner.signTransaction([call0, call1], txDetailsV3);
   * // result = Signature { r: 611475243393396148729326917410546146405234155928298353899191529090923298688n,
   * // s: 798839819213540985856952481651392652149797817551686626114697493101433761982n,
   * // recovery: 0}
   * ```
   */
  public async signTransaction(
    transactions: Call[],
    transactionsDetail: InvocationsSignerDetails
  ): Promise<Signature> {
    const compiledCalldata = getExecuteCalldata(transactions, transactionsDetail.cairoVersion);
    // TODO: How to do generic union discriminator for all like this
    if (Object.values(ETransactionVersion2).includes(transactionsDetail.version as any)) {
      const det = transactionsDetail as V2InvocationsSignerDetails;
      const msgHash = calculateInvokeTransactionHash({
        ...det,
        senderAddress: det.walletAddress,
        compiledCalldata,
        version: det.version,
      });
      const ledgerResponse = await this.signTxV1(det, transactions);
      assert(
        toBigInt(msgHash) === ledgerResponse.hash,
        'The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.'
      ); // probably non compatibility with Cairo 0
      return ledgerResponse.signature;
    }
    if (Object.values(ETransactionVersion3).includes(transactionsDetail.version as any)) {
      const det = transactionsDetail as V3InvocationsSignerDetails;
      const msgHash = calculateInvokeTransactionHash({
        ...det,
        senderAddress: det.walletAddress,
        compiledCalldata,
        version: det.version,
        nonceDataAvailabilityMode: intDAM(det.nonceDataAvailabilityMode),
        feeDataAvailabilityMode: intDAM(det.feeDataAvailabilityMode),
      });
      const ledgerResponse = await this.signTxV3(det, transactions);
      assert(
        toBigInt(msgHash) === ledgerResponse.hash,
        'The transaction hash calculated by Starknet.js is different from the one calculated by the Ledger.'
      ); // probably non compatibility with Cairo 0
      return ledgerResponse.signature;
    }
    throw Error('unsupported signTransaction version');
  }

  /**
   * Internal function to convert a bigNumberish to an Uint8array of 256 bits
   * @param {BigNumberish} input input value
   * @returns {Uint8Array} a Uint8Array containing 32 bytes.
   */
  protected convertBnToLedger(input: BigNumberish): Uint8Array {
    return hexToBytes(addAddressPadding(toHex(input)));
  }

  /**
   * Internal function to decode the response of the Ledger signature
   * @param {Uint8Array} respSign the Buffer response of the Ledger
   * @returns { hash: bigint; signature: Signature } transaction hash & signature
   */
  protected decodeSignatureLedger(respSign: Uint8Array): { hash: bigint; signature: Signature } {
    const h = BigInt(addHexPrefix(buf2hex(respSign.subarray(0, 32))));
    const r = BigInt(addHexPrefix(buf2hex(respSign.subarray(33, 65))));
    const s = BigInt(addHexPrefix(buf2hex(respSign.subarray(65, 97))));
    const v = respSign[97];
    const sign0 = new starkCurve.Signature(r, s);
    const sign1 = sign0.addRecoveryBit(v);
    return { hash: h, signature: sign1 };
  }

  /** Internal function to convert a Call to an array of Uint8Array.
   * @param {Call} call A Call to convert.
   * @return {Uint8Array[]} Call encoded in an array of Uint8Array (each containing 7 u256).
   */
  protected encodeCall(call: Call): Uint8Array[] {
    const toBuf: Uint8Array = this.convertBnToLedger(call.contractAddress);
    const selectorBuf: Uint8Array = hexToBytes(addAddressPadding(getSelector(call.entrypoint)));
    let calldataBuf: Uint8Array = new Uint8Array([]);
    if (call.calldata) {
      const compiledCalldata: Calldata = CallData.compile(call.calldata);

      calldataBuf = concatenateArrayBuffer(
        compiledCalldata.map((parameter: string): Uint8Array => {
          const a = this.convertBnToLedger(parameter);
          // console.log({ a });
          return a;
        })
      );
    }
    // console.log({ calldataBuf });

    const callBuf: Uint8Array = concatenateArrayBuffer([
      // startBuf,
      toBuf,
      selectorBuf,
      calldataBuf,
    ]);
    // console.log({ callBuf }, '\n', callBuf.subarray(100));
    // slice data into chunks of 7 * 32 bytes
    const calldatas: Uint8Array[] = [];
    const chunkSize = 7 * 32; // 224 bytes
    for (let i = 0; i < callBuf.length; i += chunkSize)
      calldatas.push(callBuf.subarray(i, i + chunkSize));
    return calldatas;
  }

  /**
   * Ask to the Ledger Nano to display and sign a Starknet V1 transaction.
   * @param {V2InvocationsSignerDetails} txDetails All the details needed for a txV1.
   * @param {Call[]} calls array of Starknet invocations
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const calls: Call[] = [{contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
   *      entrypoint: "transfer",
   *      calldata:["0x11f5fc2a92ac03434a7937fe982f5e5293b65ad438a989c5b78fb8f04a12016",
   *        "0x9184e72a000", "0x0"]}];
   * const txDet: V2InvocationsSignerDetails = {
   *    walletAddress: txDetails.accountAddress,
   *    chainId: constants.StarknetChainId.SN_MAIN,
   *    cairoVersion: "1", maxFee: txDetails.max_fee,
   *    nonce: txDetails.nonce, version: "0x1"
   *  };
   * const res = await myLedgerSigner.signTxV1(txDet, calls);
   * // res = {hash:
   * //  signature:
   * }
   * ```
   */
  async signTxV1(
    txDetails: V2InvocationsSignerDetails,
    calls: Call[]
  ): Promise<{ hash: bigint; signature: Signature }> {
    // APDU 0 for path
    await this._transporter.send(Number('0x5a'), 4, 0, 0, Buffer.from(this.pathBuffer));
    /* APDU 1 =
      accountAddress (32 bytes) +
      max_fee (32 bytes) +
      chain_id (32 bytes) +
      nonce (32 bytes) 
    */
    const accountAddressBuf: Uint8Array = this.convertBnToLedger(txDetails.walletAddress);
    const maxFeeBuf: Uint8Array = this.convertBnToLedger(txDetails.maxFee);
    const chainIdBuf: Uint8Array = this.convertBnToLedger(txDetails.chainId);
    const nonceBuf: Uint8Array = this.convertBnToLedger(txDetails.nonce);
    const dataBuf: Uint8Array = concatenateArrayBuffer([
      accountAddressBuf,
      maxFeeBuf,
      chainIdBuf,
      nonceBuf,
    ]);
    await this._transporter.send(Number('0x5a'), 4, 1, 0, Buffer.from(dataBuf));
    // APDU 2 = Nb of calls
    const nbCallsBuf: Uint8Array = this.convertBnToLedger(calls.length);
    await this._transporter.send(Number('0x5a'), 4, 2, 0, Buffer.from(nbCallsBuf));
    // APDU 3 = Calls
    let respSign: Uint8Array = new Uint8Array(0);
    // eslint-disable-next-line no-restricted-syntax
    for (const call of calls) {
      const calldatas: Uint8Array[] = this.encodeCall(call);
      await this._transporter.send(Number('0x5a'), 4, 3, 0, Buffer.from(calldatas[0]));
      if (calldatas.length > 1) {
        calldatas.slice(1).forEach(async (part: Uint8Array) => {
          await this._transporter.send(Number('0x5a'), 4, 3, 1, Buffer.from(part));
        });
      }
      respSign = await this._transporter.send(Number('0x5a'), 4, 3, 2);
    }
    return this.decodeSignatureLedger(respSign);
  }

  /**
   * Ask to the Ledger Nano to display and sign a Starknet V3 transaction.
   * @param {V3InvocationsSignerDetails} txDetails All the details needed for a txV3.
   * @param {Call[]} calls array of Starknet invocations
   * @returns an object including the transaction Hash and the signature
   * @example
   * ```typescript
   * const calls: Call[] = [{contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
   *      entrypoint: "transfer",
   *      calldata:["0x11f5fc2a92ac03434a7937fe982f5e5293b65ad438a989c5b78fb8f04a12016",
   *        "0x9184e72a000", "0x0"]}];
   * const txDetailsV3: V3InvocationsSignerDetails = {
   *   chainId: constants.StarknetChainId.SN_MAIN,
   *   nonce: "28", accountDeploymentData: [],
   *   paymasterData: [], cairoVersion: "1",
   *   feeDataAvailabilityMode: "L1", nonceDataAvailabilityMode: "L1",
   *   resourceBounds: {
   *     l1_gas: { max_amount: "0x2a00", max_price_per_unit: "0x5c00000"
   *     },
   *     l2_gas: { max_amount: "0x00", max_price_per_unit: "0x00"},
   *   }, tip: 0, version: "0x3", walletAddress: account0.address
   *  };
   * const res = await myLedgerSigner.signTxV3(txDetailsV3, calls);
   * // res = {hash:
   * //  signature:
   * }
   * ```
   */
  async signTxV3(
    txDetails: V3InvocationsSignerDetails,
    calls: Call[]
  ): Promise<{ hash: bigint; signature: Signature }> {
    assert(txDetails.paymasterData.length <= 7, 'Paymaster data includes more than 7 items.');
    assert(
      txDetails.accountDeploymentData.length <= 7,
      'accountDeploymentData includes more than 7 items'
    );
    // APDU 0 for path
    await this._transporter.send(Number('0x5a'), 3, 0, 0, Buffer.from(this.pathBuffer));
    /* APDU 1 =
      accountAddress (32 bytes) +
      tip (32 bytes) +
      l1_gas_bounds (32 bytes) +
      l2_gas_bounds (32 bytes) +
      chain_id (32 bytes) +
      nonce (32 bytes) +
      data_availability_mode (32 bytes)
    */
    const accountAddressBuf = this.convertBnToLedger(txDetails.walletAddress);
    const tipBuf = this.convertBnToLedger(txDetails.tip);
    const chainIdBuf = this.convertBnToLedger(txDetails.chainId);
    const nonceBuf = this.convertBnToLedger(txDetails.nonce);
    const dAModeHashBuf = this.convertBnToLedger(
      hashDAMode(
        txDetails.nonceDataAvailabilityMode === EDataAvailabilityMode.L1 ? EDAMode.L1 : EDAMode.L2,
        txDetails.feeDataAvailabilityMode === EDataAvailabilityMode.L1 ? EDAMode.L1 : EDAMode.L2
      )
    );
    const l1_gasBuf = this.convertBnToLedger(encodeResourceBoundsL1(txDetails.resourceBounds));
    const l2_gasBuf = this.convertBnToLedger(encodeResourceBoundsL2(txDetails.resourceBounds));
    const dataBuf: Uint8Array = concatenateArrayBuffer([
      accountAddressBuf,
      tipBuf,
      l1_gasBuf,
      l2_gasBuf,
      chainIdBuf,
      nonceBuf,
      dAModeHashBuf,
    ]);
    await this._transporter.send(Number('0x5a'), 3, 1, 0, Buffer.from(dataBuf));
    // APDU 2 = paymaster data
    const paymasterBuf = concatenateArrayBuffer(
      txDetails.paymasterData.map((value: BigNumberish): Uint8Array => {
        const a = this.convertBnToLedger(value);
        return a;
      })
    );
    await this._transporter.send(Number('0x5a'), 3, 2, 0, Buffer.from(paymasterBuf));
    //  APDU 3 = account deployment data
    const accountDeployDataBuf = concatenateArrayBuffer(
      txDetails.paymasterData.map((value: BigNumberish): Uint8Array => {
        const a = this.convertBnToLedger(value);
        return a;
      })
    );
    await this._transporter.send(Number('0x5a'), 3, 3, 0, Buffer.from(accountDeployDataBuf));
    // APDU 4 = Nb of calls
    const nbCallsBuf: Uint8Array = this.convertBnToLedger(calls.length);
    await this._transporter.send(Number('0x5a'), 3, 4, 0, Buffer.from(nbCallsBuf));
    // APDU 5 = Calls
    let respSign: Uint8Array = new Uint8Array(0);
    // eslint-disable-next-line no-restricted-syntax
    for (const call of calls) {
      const calldatas: Uint8Array[] = this.encodeCall(call);
      await this._transporter.send(Number('0x5a'), 3, 5, 0, Buffer.from(calldatas[0]));
      if (calldatas.length > 1) {
        calldatas.slice(1).forEach(async (part: Uint8Array) => {
          await this._transporter.send(Number('0x5a'), 3, 5, 1, Buffer.from(part));
        });
      }
      respSign = await this._transporter.send(Number('0x5a'), 3, 5, 2);
    }
    return this.decodeSignatureLedger(respSign);
  }
}

/**
 * Format the Ledger wallet path to an Uint8Array.
 * for a Ledger Starknet DAPP v2.1.0
 * EIP2645 path = 2645'/starknet'/application'/0'/accountId'/0
 * @param {number} accountId Id of account. < 2**31.
 * @param {string} [applicationName='LedgerW'] utf8 string of application name.
 * @returns an Uint8array of 24 bytes.
 * @example
 * ```typescript
 * const result = getLedgerPathBuffer211(0);
 * // result = Uint8Array(24) [
 *   128,   0,  10,  85, 199, 65, 233, 201,
 *   171, 206, 231, 219, 128,  0,   0,   0,
 *   128,   0,   0,   0,   0,  0,   0,   0
 * ]
 * ```
 */
export function getLedgerPathBuffer211(
  accountId: number,
  applicationName: string = 'LedgerW'
): Uint8Array {
  const path0buff = new Uint8Array([HARDENING_BYTE, 0, 10, 85]); // "0x80000A55" EIP2645;
  const path1buff = new Uint8Array([71 | HARDENING_BYTE, 65, 233, 201]); // "starknet'"
  const path2Base =
    applicationName === 'LedgerW'
      ? new Uint8Array([43, 206, 231, 219])
      : stringToSha256ToArrayBuff4(applicationName);
  const path2buff = concatenateArrayBuffer([
    new Uint8Array([path2Base[0] | HARDENING_BYTE]),
    path2Base.subarray(1),
  ]);
  const path3buff = new Uint8Array([HARDENING_BYTE, 0, 0, 0]);
  const hex = toHex(BigInt(accountId) | HARDENING_4BYTES);
  const padded = addHexPrefix(removeHexPrefix(hex).padStart(8, '0'));
  const path4buff = hexToBytes(padded);
  const path5buff = new Uint8Array([0, 0, 0, 0]);
  const pathBuff = concatenateArrayBuffer([
    path0buff,
    path1buff,
    path2buff,
    path3buff,
    path4buff,
    path5buff,
  ]);
  return pathBuff;
}
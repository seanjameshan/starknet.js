import { Account, AccountInstance, LibraryError, RpcProvider } from '../src';

describe('Account instantiated from provider instance', () => {
  const rpc = new RpcProvider();
  const getNonceMock = jest.fn().mockResolvedValue('mock');
  rpc.getNonceForAddress = getNonceMock;

  test('Account to throw on extended custom methods for using re-instantiation on provider', () => {
    const acc = new Account(rpc, '0x0', '0x1');

    return expect(acc.getNonceForAddress('0x0')).rejects.toThrow(LibraryError);
  });

  test('AccountInstance to pass on extending', async () => {
    const acc = new AccountInstance(rpc, '0x0', '0x1');
    expect(await acc.getNonceForAddress('0x1')).toBe('mock');
    expect(getNonceMock).toHaveBeenLastCalledWith('0x1');
  });

  test('Account to pass on extended custom methods for using instance on provider', async () => {
    const acc = new Account(rpc, '0x0', '0x1', undefined, undefined, true);
    expect(await acc.getNonceForAddress('0x2')).toBe('mock');
    expect(getNonceMock).toHaveBeenLastCalledWith('0x2');
  });
});

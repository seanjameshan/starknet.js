import * as starkCurve from '@scure/starknet';

import typedDataExample from '../../__mocks__/typedData/baseExample.json';
import exampleBaseTypes from '../../__mocks__/typedData/example_baseTypes.json';
import exampleEnum from '../../__mocks__/typedData/example_enum.json';
import exampleEnumNested from '../../__mocks__/typedData/example_enumNested.json';
import examplePresetTypes from '../../__mocks__/typedData/example_presetTypes.json';
import typedDataStructArrayExample from '../../__mocks__/typedData/mail_StructArray.json';
import typedDataSessionExample from '../../__mocks__/typedData/session_MerkleTree.json';
import v1NestedExample from '../../__mocks__/typedData/v1Nested.json';
import {
  Account,
  BigNumberish,
  StarknetDomain,
  num,
  stark,
  typedData,
  type ArraySignatureType,
  type Signature,
} from '../../src';
import { PRIME } from '../../src/constants';
import { getSelectorFromName } from '../../src/utils/hash';
import { MerkleTree } from '../../src/utils/merkle';
import {
  TypedDataRevision,
  encodeType,
  encodeValue,
  getMessageHash,
  getStructHash,
  getTypeHash,
  prepareSelector,
  isMerkleTreeType,
} from '../../src/utils/typedData';

const exampleAddress = '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826';

describe('typedData', () => {
  test('should get right type encoding', () => {
    let encoded: string;
    encoded = encodeType(typedDataExample.types, 'Mail');
    expect(encoded).toMatchInlineSnapshot(
      `"Mail(from:Person,to:Person,contents:felt)Person(name:felt,wallet:felt)"`
    );
    encoded = encodeType(typedDataStructArrayExample.types, 'Mail');
    expect(encoded).toMatchInlineSnapshot(
      `"Mail(from:Person,to:Person,posts_len:felt,posts:Post*)Person(name:felt,wallet:felt)Post(title:felt,content:felt)"`
    );
    encoded = encodeType(typedDataExample.types, 'Mail', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      JSON.stringify(
        '"Mail"("from":"Person","to":"Person","contents":"felt")"Person"("name":"felt","wallet":"felt")'
      )
    );
    encoded = encodeType(typedDataStructArrayExample.types, 'Mail', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      `"\\"Mail\\"(\\"from\\":\\"Person\\",\\"to\\":\\"Person\\",\\"posts_len\\":\\"felt\\",\\"posts\\":\\"Post*\\")\\"Person\\"(\\"name\\":\\"felt\\",\\"wallet\\":\\"felt\\")\\"Post\\"(\\"title\\":\\"felt\\",\\"content\\":\\"felt\\")"`
    );
    encoded = encodeType(exampleBaseTypes.types, 'Example', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      `"\\"Example\\"(\\"n0\\":\\"felt\\",\\"n1\\":\\"bool\\",\\"n2\\":\\"string\\",\\"n3\\":\\"selector\\",\\"n4\\":\\"u128\\",\\"n5\\":\\"i128\\",\\"n6\\":\\"ContractAddress\\",\\"n7\\":\\"ClassHash\\",\\"n8\\":\\"timestamp\\",\\"n9\\":\\"shortstring\\")"`
    );
    encoded = encodeType(examplePresetTypes.types, 'Example', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      `"\\"Example\\"(\\"n0\\":\\"TokenAmount\\",\\"n1\\":\\"NftId\\")\\"NftId\\"(\\"collection_address\\":\\"ContractAddress\\",\\"token_id\\":\\"u256\\")\\"TokenAmount\\"(\\"token_address\\":\\"ContractAddress\\",\\"amount\\":\\"u256\\")\\"u256\\"(\\"low\\":\\"u128\\",\\"high\\":\\"u128\\")"`
    );
    encoded = encodeType(exampleEnum.types, 'Example', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      `"\\"Example\\"(\\"someEnum1\\":\\"EnumA\\",\\"someEnum2\\":\\"EnumB\\")\\"EnumA\\"(\\"Variant 1\\"(),\\"Variant 2\\"(\\"u128\\",\\"u128*\\"),\\"Variant 3\\"(\\"u128\\"))\\"EnumB\\"(\\"Variant 1\\"(),\\"Variant 2\\"(\\"u128\\"))"`
    );
    encoded = encodeType(exampleEnumNested.types, 'Example', TypedDataRevision.ACTIVE);
    expect(encoded).toMatchInlineSnapshot(
      `"\\"Example\\"(\\"someEnum\\":\\"EnumA\\")\\"EnumA\\"(\\"Variant 1\\"(),\\"Variant 2\\"(\\"u128\\",\\"StructA\\"))\\"EnumB\\"(\\"Variant A\\"(),\\"Variant B\\"(\\"StructB*\\"))\\"StructA\\"(\\"nestedEnum\\":\\"EnumB\\")\\"StructB\\"(\\"flag\\":\\"bool\\")"`
    );
  });

  test('should get right type hash', () => {
    let typeHash: string;
    typeHash = getTypeHash(typedDataExample.types, 'StarkNetDomain');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x1bfc207425a47a5dfa1a50a4f5241203f50624ca5fdf5e18755765416b8e288"`
    );
    typeHash = getTypeHash(typedDataExample.types, 'Person');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x2896dbe4b96a67110f454c01e5336edc5bbc3635537efd690f122f4809cc855"`
    );
    typeHash = getTypeHash(typedDataExample.types, 'Mail');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x13d89452df9512bf750f539ba3001b945576243288137ddb6c788457d4b2f79"`
    );
    typeHash = getTypeHash(typedDataStructArrayExample.types, 'Post');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x1d71e69bf476486b43cdcfaf5a85c00bb2d954c042b281040e513080388356d"`
    );
    typeHash = getTypeHash(typedDataStructArrayExample.types, 'Mail');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x873b878e35e258fc99e3085d5aaad3a81a0c821f189c08b30def2cde55ff27"`
    );
    typeHash = getTypeHash({}, 'selector');
    expect(typeHash).toMatchInlineSnapshot(
      `"0x1d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"`
    );
    typeHash = getTypeHash(exampleBaseTypes.types, 'Example', TypedDataRevision.ACTIVE);
    expect(typeHash).toMatchInlineSnapshot(
      `"0x1f94cd0be8b4097a41486170fdf09a4cd23aefbc74bb2344718562994c2c111"`
    );
    typeHash = getTypeHash(examplePresetTypes.types, 'Example', TypedDataRevision.ACTIVE);
    expect(typeHash).toMatchInlineSnapshot(
      `"0x1a25a8bb84b761090b1fadaebe762c4b679b0d8883d2bedda695ea340839a55"`
    );
    typeHash = getTypeHash(exampleEnum.types, 'Example', TypedDataRevision.ACTIVE);
    expect(typeHash).toMatchInlineSnapshot(
      `"0x393bf83422ca8626a2932696cfa0acb19dcad6de2fe84a2dd2ca7607ea5329a"`
    );
    typeHash = getTypeHash(exampleEnumNested.types, 'Example', TypedDataRevision.ACTIVE);
    expect(typeHash).toMatchInlineSnapshot(
      `"0x267f739fd83d30528a0fafb23df33b6c35ca0a5adbcfb32152721478fa9d0ce"`
    );
  });

  test('should transform type selector', () => {
    const selector = 'transfer';
    const selectorHash = getSelectorFromName(selector);
    const rawSelectorValueHash = encodeValue({}, 'felt', selectorHash);
    const selectorValueHash = encodeValue({}, 'selector', selector);
    expect(selectorValueHash).toEqual(rawSelectorValueHash);
    expect(selectorValueHash).toMatchInlineSnapshot(`
      Array [
        "felt",
        "0x83afd3f4caedc6eebf44246fe54e38c95e3179a5ec9ea81740eca5b482d12e",
      ]
    `);
  });

  test('should prepare selector', () => {
    const res1 = prepareSelector('myFunction');
    expect(res1).toEqual('0xc14cfe23f3fa7ce7b1f8db7d7682305b1692293f71a61cc06637f0d8d8b6c8');

    const res2 = prepareSelector(
      '0xc14cfe23f3fa7ce7b1f8db7d7682305b1692293f71a61cc06637f0d8d8b6c8'
    );
    expect(res2).toEqual('0xc14cfe23f3fa7ce7b1f8db7d7682305b1692293f71a61cc06637f0d8d8b6c8');

    const res3 = prepareSelector(
      '0xc14cfe23f3fa7ce7b1f8db7d7682305b1692293f71a61cc06637f0d8d8b6c8'
    );
    expect(res3).not.toEqual('0xc14cfe23f3fa7ce7b1f8db7d76');
  });

  test('should transform merkle tree', () => {
    const tree = new MerkleTree(['0x1', '0x2', '0x3']);
    const [, merkleTreeHash] = encodeValue({}, 'merkletree', tree.leaves);
    expect(merkleTreeHash).toBe(tree.root);
    expect(merkleTreeHash).toMatchInlineSnapshot(
      `"0x15ac9e457789ef0c56e5d559809e7336a909c14ee2511503fa7af69be1ba639"`
    );
  });

  test('should check merkle tree type', () => {
    const type = {
      name: 'test',
      type: 'merkletree',
    };
    expect(isMerkleTreeType(type)).toBe(true);

    const type2 = {
      name: 'test',
      type: 'non-merkletree',
    };
    expect(isMerkleTreeType(type2)).toBe(false);
  });

  test('should transform merkle tree with custom types', () => {
    const leaves = [
      {
        contractAddress: '0x1',
        selector: 'transfer',
      },
      {
        contractAddress: '0x2',
        selector: 'transfer',
      },
      {
        contractAddress: '0x3',
        selector: 'transfer',
      },
    ];
    const hashedLeaves = leaves.map(
      (leaf) =>
        encodeValue(
          {
            Policy: [
              { name: 'contractAddress', type: 'felt' },
              { name: 'selector', type: 'selector' },
            ],
          },
          'Policy',
          leaf
        )[1]
    );
    const tree = new MerkleTree(hashedLeaves);
    const [, merkleTreeHash] = encodeValue(
      {
        Parent: [{ name: 'root', type: 'merkletree', contains: 'Policy' }],
        Policy: [
          { name: 'contractAddress', type: 'felt' },
          { name: 'selector', type: 'selector' },
        ],
      },
      'merkletree',
      leaves,
      { key: 'root', parent: 'Parent' }
    );
    expect(merkleTreeHash).toBe(tree.root);
    expect(merkleTreeHash).toMatchInlineSnapshot(
      `"0x12354b159e3799dc0ebe86d62dde4ce7b300538d471e5a7fef23dcbac076011"`
    );
  });

  test('should get right hash for StarkNetDomain', () => {
    const hash = getStructHash(
      typedDataExample.types,
      'StarkNetDomain',
      typedDataExample.domain as StarknetDomain
    );
    expect(hash).toMatchInlineSnapshot(
      `"0x54833b121883a3e3aebff48ec08a962f5742e5f7b973469c1f8f4f55d470b07"`
    );
  });

  test('should get right hash for StarknetDomain', () => {
    const hash = getStructHash(
      exampleBaseTypes.types,
      'StarknetDomain',
      exampleBaseTypes.domain as StarknetDomain,
      TypedDataRevision.ACTIVE
    );
    expect(hash).toMatchInlineSnapshot(
      `"0x555f72e550b308e50c1a4f8611483a174026c982a9893a05c185eeb85399657"`
    );
  });

  test('should get right hash for entire message', () => {
    const hash = getMessageHash(typedDataExample, exampleAddress);
    expect(hash).toMatchInlineSnapshot(
      `"0x6fcff244f63e38b9d88b9e3378d44757710d1b244282b435cb472053c8d78d0"`
    );

    const hashStructArr = getMessageHash(typedDataStructArrayExample, exampleAddress);
    expect(hashStructArr).toMatchInlineSnapshot(
      `"0x5914ed2764eca2e6a41eb037feefd3d2e33d9af6225a9e7fe31ac943ff712c"`
    );
  });

  interface StringStruct {
    len: BigNumberish;
    data: BigNumberish[];
  }
  function stringToStringStruct(str: string): StringStruct {
    const len = str.length;
    const data = str.split('').map((char) => num.toHex(char.charCodeAt(0)));
    return { len, data };
  }

  const typedDataStringExample = {
    types: {
      StarkNetDomain: [
        { name: 'name', type: 'felt' },
        { name: 'version', type: 'felt' },
        { name: 'chainId', type: 'felt' },
      ],
      Person: [
        { name: 'name', type: 'felt' },
        { name: 'wallet', type: 'felt' },
      ],
      String: [
        { name: 'len', type: 'felt' },
        { name: 'data', type: 'felt*' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'String' },
      ],
    },
    primaryType: 'Mail',
    domain: {
      name: 'StarkNet Mail',
      version: '1',
      chainId: 1,
    },
    message: {
      from: {
        name: 'Cow',
        wallet: exampleAddress,
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: stringToStringStruct(
        'this is way longer than just 32 characters, to test if that is possible within a typedData struct.'
      ),
    },
  };

  test('should transform strings correctly', () => {
    const hash = getMessageHash(typedDataStringExample, exampleAddress);
    expect(hash).toMatchInlineSnapshot(
      `"0x70338fb11b8f70b68b261de8a322bcb004bd85e88ac47d9147982c7f5ac66fd"`
    );
  });

  test('should transform session message correctly', () => {
    const hash = getMessageHash(typedDataSessionExample, exampleAddress);
    expect(hash).toMatchInlineSnapshot(
      `"0x751fb7d98545f7649d0d0eadc80d770fcd88d8cfaa55590b284f4e1b701ef0a"`
    );
  });

  test('should hash messages with revision 1 types', () => {
    // necessary to spy dependecy since function spies (hash.computePedersenHash; hash.computePoseidonHash) won't work
    const spyPedersen = jest.spyOn(starkCurve, 'pedersen');
    const spyPoseidon = jest.spyOn(starkCurve, 'poseidonHashMany');

    let messageHash: string;
    messageHash = getMessageHash(exampleBaseTypes, exampleAddress);
    expect(messageHash).toMatchInlineSnapshot(
      `"0xdb7829db8909c0c5496f5952bcfc4fc894341ce01842537fc4f448743480b6"`
    );

    messageHash = getMessageHash(examplePresetTypes, exampleAddress);
    expect(messageHash).toMatchInlineSnapshot(
      `"0x185b339d5c566a883561a88fb36da301051e2c0225deb325c91bb7aa2f3473a"`
    );

    messageHash = getMessageHash(exampleEnum, exampleAddress);
    expect(messageHash).toMatchInlineSnapshot(
      `"0x150a589bb56a4fbf4ee01f52e44fd5adde6af94c02b37e383413fed185321a2"`
    );

    messageHash = getMessageHash(exampleEnumNested, exampleAddress);
    expect(messageHash).toMatchInlineSnapshot(
      `"0x6e70eb4ef625dda451094716eee7f31fa81ca0ba99d390885e9c7b0d64cd22"`
    );

    expect(spyPedersen).not.toHaveBeenCalled();
    expect(spyPoseidon).toHaveBeenCalled();
    spyPedersen.mockRestore();
    spyPoseidon.mockRestore();
  });

  describe('should fail validation', () => {
    const baseTypes = (type: string, value: any = PRIME) => {
      const copy = JSON.parse(JSON.stringify(exampleBaseTypes)) as typeof exampleBaseTypes;
      const property = copy.types.Example.find((e) => e.type === type)!.name;
      (copy.message as any)[property] = value;
      return copy;
    };

    test.each([
      { type: 'felt' },
      { type: 'bool' },
      { type: 'u128' },
      { type: 'i128' },
      { type: 'ContractAddress' },
      { type: 'ClassHash' },
      { type: 'timestamp' },
      { type: 'shortstring' },
    ])('out of bounds - $type', ({ type }) => {
      expect(() => getMessageHash(baseTypes(type), exampleAddress)).toThrow(RegExp(type));
    });
  });

  describe('verifyMessage', () => {
    const addr = '0x64b48806902a367c8598f4f95c305e8c1a1acba5f082d294a43793113115691';
    const privK = '0x71d7bb07b9a64f6f78ac4c816aff4da9';
    const fullPubK = stark.getFullPublicKey(privK);
    const myAccount = new Account({ nodeUrl: 'fake' }, addr, privK);
    let signedMessage: Signature;
    let hashedMessage: string;
    let arraySign: ArraySignatureType;

    beforeAll(async () => {
      signedMessage = await myAccount.signMessage(v1NestedExample);
      hashedMessage = await myAccount.hashMessage(v1NestedExample);
      arraySign = stark.formatSignature(signedMessage);
    });

    test('with TypedMessage', () => {
      expect(
        typedData.verifyMessage(v1NestedExample, signedMessage, fullPubK, myAccount.address)
      ).toBe(true);
      expect(typedData.verifyMessage(v1NestedExample, arraySign, fullPubK, myAccount.address)).toBe(
        true
      );
    });

    test('with messageHash', () => {
      expect(typedData.verifyMessage(hashedMessage, signedMessage, fullPubK)).toBe(true);
      expect(typedData.verifyMessage(hashedMessage, arraySign, fullPubK)).toBe(true);
    });

    test('failure cases', () => {
      expect(() => typedData.verifyMessage('zero', signedMessage, fullPubK)).toThrow(
        'message has a wrong format.'
      );

      expect(() =>
        typedData.verifyMessage(v1NestedExample as any, signedMessage, fullPubK)
      ).toThrow(/^When providing a TypedData .* the accountAddress parameter has to be provided/);

      expect(() =>
        typedData.verifyMessage(v1NestedExample, signedMessage, fullPubK, 'wrong')
      ).toThrow('accountAddress shall be a BigNumberish');
    });
  });
});

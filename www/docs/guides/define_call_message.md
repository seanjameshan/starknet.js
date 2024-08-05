---
sidebar_position: 10
---

# Data transformation

This guide is the most important of all this documentation. Take your time, and read it carefully...

Cairo contracts and JavaScript/TypeScript languages do not have the same types of data. To exchange data with Starknet, the data have to be transformed and formatted in a list of numbers.

So, it's necessary to prepare the data before sending them to a contract.
On the other side, when a contract sends data to your DAPP (the result of a call), you also have to transform them before using them in your code.

In Starknet.js, you can perform these transformations manually, but you can take advantage of methods that perform these transformations.

## Types of data

### Cairo

Cairo has 2 versions, involving 2 types of data:

- **Cairo 0**: here, everything is felt, an integer on 251 bits.  
  Available: array, struct, tuple, named tuple, or a mix of these elements.
- **Cairo 1**: with plethora of literal types: u8, u16, u32, usize, u64, u128, felt252, u256, bool, address, eth address, classHash.  
  Available: array, struct, tuple, bytes31, byteArray, enums or a mix of these elements.

Starknet.js is compatible with both versions.

### Starknet

Starknet is waiting for a list of felts, and answers with the same format.

### JavaScript / TypeScript

These types do not exist in JS/TS - you have Number, bigInt, string, array, objects... and types defined in libraries.

In Starknet.js, it's a bit ... complicated: you have the BigNumberish type and it can include:

- String (representing a number): "123", "0xabc2"
- Number (max 53 bits): 123
- BigInt (max 255 bits): 12345612345n

```typescript
import { BigNumberish } from 'starknet';
const decimals: BigNumberish = 18;
```

## Preparation of data before delivery

If your Cairo smart contract is waiting for a:

### felt, u8, u16, u32, usize, u64, u128, felt252, ContractAddress, EthAddress, ClassHash

Starknet is waiting for a felt.  
You can send to Starknet.js methods: bigNumberish.

```typescript
await myContract.my_function(12, '13', '0xe', 15n);
```

> `EthAddress` is limited to 160 bits.
> `felt, felt252, ClassHash` and `ContractAddress` are limited to 252 bits.

### bool

Starknet is waiting for a felt, containing 0 or 1.  
You can send to Starknet.js methods: boolean, bigNumberish.

```typescript
await myContract.my_function(true, 1);
```

### u256

Starknet is waiting for 2 felts, the first including the lowest 128 bits, the second including the 128 highest bits.  
You can send to Starknet.js methods: bigNumberish (Cairo 1 only), Uint256 object (both Cairo 0 & 1).

```typescript
await myContract0.my_function({ low: 100, high: 0 }); // Cairo 0 & 1 contract
await myContract1.my_function(cairo.uint256(100)); // Cairo 0 & 1 contract
await myContract2.my_function(12345678, '13456789765', '0xe23a40b543f', 1534566734334n); // Cairo 1 contract
```

In specific cases that we will see hereunder, you can use an object, with the following format:

```typescript
const a1: Uint256 = cairo.uint256(
  '0x05f7cd1fd465baff2ba9d2d1501ad0a2eb5337d9a885be319366b5205a414fdd'
);
const a2: Uint256 = {
  low: '0xeb5337d9a885be319366b5205a414fdd',
  high: '0x05f7cd1fd465baff2ba9d2d1501ad0a2',
};
const a3: Uint256 = { low: a1.low, high: a1.high };
```

### u512

Starknet is waiting for 4 u128, the first one has the lowest weight.  
You can send to Starknet.js methods: bigNumberish or Uint512 object.

```typescript
await myContract0.my_function(553844998243714947043252949842317834769n);
await myContract1.my_function(
  cairo.uint512(
    '0xa9d2d1501ad0a2eb5337a9d2d1501ad0a2eb5337a9d2d1501ad0a2eb5337a9d2d1501ad0a2eb5337a9d2d1501ad0a2eb5337'
  )
);
await myContract2.my_function(12345678, '13456789765', '0xe23a40b543f', 1534566734334n);
```

In specific cases, you can use an object, with the following format:

```typescript
const a2: Uint512 = {
  limb0: '0xeb5337d9a885be310x9365205a414fdd',
  limb1: '0x1fd465baff2ba9d2d1501ad0a2eb5337',
  limb2: '0x05f7cd1fd465baff2ba9d2d1501ad0a2',
  limb3: '0x2eb5337d9a885be319366b5205a414fd',
};
```

### shortString or bytes31

For a shortString, Starknet is waiting for a felt, including 31 ASCII characters max.  
You can send to Starknet.js methods: string, bigNumberish.

bytes31 is similar to shortString.  
You can send to Starknet.js methods: string.

```typescript
await myContract.my_function('Token', '0x0x534e5f4d41494e'); // send 2 shortStrings
```

To encode yourself a string:

```typescript
const encStr: string = shortString.encodeShortString('Stark');
```

To decode yourself a string:

```typescript
const decStr: string = shortString.decodeShortString('0x7572692f706963742f7433382e6a7067');
```

The result is: "uri/pict/t38.jpg"

### longString or ByteArray

longString is a string that may contain more than 31 characters.  
Starknet is waiting for an array of felt: string_len, string1, string2, ...  
You can send to Starknet.js methods: string, bigNumberish[].

ByteArray is similar to longString.  
Starknet is waiting for a specific struct.  
You can send to Starknet.js methods: string.

```typescript
await myContract.my_function('http://addressOfMyERC721pictures/image1.jpg');
```

To force to send a shortString as a ByteArray with `CallData.compile()`:

```typescript
const myCalldata = Calldata.compile([byteArray.byteArrayFromString('Take care.')]);
```

If you want to split yourself your longString in 31 chars substrings:

```typescript
const splitted: string[] = shortString.splitLongString(
  'http://addressOfMyERC721pictures/image1.jpg'
);
```

If you want to split your longString in an array of felts:

```typescript
const longString: string[] = shortString
  .splitLongString('http://addressOfMyERC721pictures/image1.jpg')
  .map((str) => shortString.encodeShortString(str));
```

### tuple

Starknet is waiting for a list of felts.  
You can send it to Starknet.js methods: `cairo.tuple()`, object.

```typescript
const myTpl = cairo.tuple('0x0a', 200);
await myContract.my_function(myTpl);
```

To construct your tuple:

```typescript
const myTpl = { '0': '0x0a', '1': 200 };
```

### Named tuple

:::warning Only for Cairo 0
:::

Starknet is waiting for a list of felts.  
You can send to Starknet.js methods: an object, `cairo.tuple()`, list of bigNumberish.  
From this ABI:

```json
{
  "name": "data2",
  "type": "(min: felt, max: felt)"
}
```

You can create this code:

```typescript
const namedTup = { min: '0x4e65ac6', max: 296735486n };
await myContract.my_function(namedTup);
```

:::tip
It's not mandatory to create manually an object conform to the Cairo 0 named tuple ; you can just use the `cairo.tuple()` function.
:::

### Ethereum public key

If your abi is requesting this type : `core::starknet::secp256k1::Secp256k1Point`, it means that you have probably to send an Ethereum full public key. Example :

```json
{
  "type": "constructor",
  "name": "constructor",
  "inputs": [
    {
      "name": "public_key",
      "type": "core::starknet::secp256k1::Secp256k1Point"
    }
  ]
}
```

- If you are using a calldata construction method using the Abi, you have just to use a 512 bits number (so, without parity) :

```typescript
const privateKeyETH = '0x45397ee6ca34cb49060f1c303c6cb7ee2d6123e617601ef3e31ccf7bf5bef1f9';
const ethSigner = new EthSigner(privateKeyETH);
const ethFullPublicKey = await ethSigner.getPubKey(); // 512 bits number
const myCallData = new CallData(ethAccountAbi);
const accountETHconstructorCalldata = myCallData.compile('constructor', {
  public_key: ethFullPublicKey,
});
```

- If you are using a calldata construction method without the Abi, you have to send a tuple of 2 u256 :

```typescript
const ethFullPublicKey =
  '0x0178bb97615b49070eefad71cb2f159392274404e41db748d9397147cb25cf597ebfcf2f399e635b72b99b8f76e9080763c65a42c842869815039d912150ddfe'; // 512 bits number
const pubKeyETH = encode.addHexPrefix(encode.removeHexPrefix(ethFullPublicKey).padStart(128, '0'));
const pubKeyETHx = cairo.uint256(addAddressPadding(encode.addHexPrefix(pubKeyETH.slice(2, -64))));
const pubKeyETHy = cairo.uint256(addAddressPadding(encode.addHexPrefix(pubKeyETH.slice(-64))));
const accountETHconstructorCalldata = CallData.compile([cairo.tuple(pubKeyETHx, pubKeyETHy)]);
```

### struct

Starknet is waiting for a list of felts.  
You can send to Starknet.js methods: an object.

```typescript
const myStruct = { type: 'TR1POST', tries: 8, isBridged: true };
await myContract.my_function(myStruct);
```

### array, span

Starknet is waiting for an array of felts: array_len, array1, array2, ...  
You can send it to Starknet.js methods: bigNumberish[].

```typescript
Const myArray = [10, "0xaa", 567n];
await myContract.my_function(myArray);
```

:::danger important
Do not add the `array_len` parameter before your array. Starknet.js will manage this element automatically.
:::

> It's also applicable for Cairo `Span` type.

### Complex types

You can mix and nest literals, arrays, structs, and tuples.

Starknet is waiting for a list of felts.  
All these examples are valid:

```typescript
type Order2 = {
  p1: BigNumberish;
  p2: BigNumberish[];
}; // struct
const myOrder2: Order2 = {
  p1: 17,
  p2: [234, 467456745457n, '0x56ec'],
};
const param1 = cairo.tuple(cairo.tuple(34, '0x5e'), 234n);
const param2 = [
  [200, 201],
  [202, 203],
  [204, 205],
];
const param3 = [myOrder2, myOrder2];
const param4 = [cairo.tuple(251, 40000n), cairo.tuple(252, 40001n)];
await myContract.my_function(param1, param2, param3, param4);
```

## Authorized types for Starknet.js methods

There are 12 methods using contract parameters. Some types are authorized for each method:

### List of parameters

Only meta-class methods are using a list of parameters (as illustrated in the previous chapter).  
A Meta-Class is a Class that has any of its properties determined at run-time. The Contract object uses a Contract's ABI to determine what methods are available.

```typescript
await myContract.my_function('TOKEN', '13', [10, 11, 12], 135438734812n);
// or
const functionName = 'my_function';
await myContract[functionName]('TOKEN', '13', [10, 11, 12], 135438734812n);
```

### Array of parameters

An array of parameters can be used as input:

```typescript
const myParams = [{ x: 100, y: 200 }, 13, [10, 11, 12], cairo.uint256('0x295fa652e32b')];
const txResp = await account0.execute({
  contractAddress: testAddress,
  entrypoint: 'change_activity',
  calldata: myParams,
});
```

All Starknet.js methods accept this type of input, except meta-class, which needs 3 dots prefix:

```typescript
const myParams = ['TOKEN', '13', [10, 11, 12], 135438734812n];
await myContract.my_function(...myParams);
// or
const functionName = 'my_function';
await myContract[functionName](...myParams);
```

:::warning important
Objects properties have to be ordered in accordance with the ABI.
:::

### Object (without ABI conformity check)

The use of objects allows a clear representation of the list of parameters:

```typescript
const myParams = {
  name: 'TOKEN',
  decimals: '13',
  amount: 135438734812n,
};
const deployResponse = await myAccount.deployContract({
  classHash: contractClassHash,
  constructorCalldata: myParams,
});
```

This type is available for: `CallData.compile(), hash.calculateContractAddressFromHash, account.deployContract, account.deployAccount, account.execute`

:::warning important
Objects properties have to be ordered in accordance with the ABI.
:::

### Object (with ABI conformity check)

This is the recommended type of input to use, especially for complex ABI.

```typescript
const myFalseUint256 = { high: 1, low: 23456 }; // wrong order; should be low first
type Order2 = {
  p1: BigNumberish;
  p2: BigNumberish[];
};
const myOrder2bis: Order2 = {
  // wrong order; p1 should be first
  p2: [234, 467456745457n, '0x56ec'],
  p1: '17',
};
const functionParameters: RawArgsObject = {
  //wrong order; all properties are mixed
  active: true,
  symbol: 'NIT',
  initial_supply: myFalseUint256,
  recipient: account0.address,
  decimals: 18,
  tupOfTup: cairo.tuple(cairo.tuple(34, '0x5e'), myFalseUint256),
  card: myOrder2bis,
  longText: 'Zorg is back, for ever, here and everywhere',
  array1: [100, 101, 102],
  array2: [
    [200, 201],
    [202, 203],
    [204, 205],
  ],
  array3: [myOrder2bis, myOrder2bis],
  array4: [myFalseUint256, myFalseUint256],
  tuple1: cairo.tuple(40000n, myOrder2bis, [54, 55n, '0xae'], 'texte'),
  name: 'niceToken',
  array5: [cairo.tuple(251, 40000n), cairo.tuple(252, 40001n)],
};
const contractCallData: CallData = new CallData(compiledContractSierra.abi);
const myCalldata: Calldata = contractCallData.compile('constructor', functionParameters);
const deployResponse = await account0.deployContract({
  classHash: contractClassHash,
  constructorCalldata: myCalldata,
});
// or
const myCall: Call = myContract.populate('setup_elements', functionParameters);
const tx = await account0.execute(myCall);
// or
const myCall: Call = myContract.populate('get_elements', functionParameters);
const res = await myContract.get_elements(myCall.calldata);
```

It can be used only with methods that know the abi: `Contract.populate, myCallData.compile`.  
Starknet.js will perform a full check of conformity with the ABI of the contract, reorder the object's properties if necessary, stop if something is wrong or missing, remove not requested properties, and convert everything to Starknet format.  
Starknet.js will alert you earlier of errors in your parameters (with human comprehensible words), before the call to Starknet. So, no more incomprehensible Starknet messages due to parameters construction.

If a property `array_len` has been added before an array, this property is ignored as it's automatically managed by Starknet.js.

### Call, or Call[]

A Call is an object with this format:

```typescript
type Call = {
  contractAddress: string;
  entrypoint: string;
  calldata?: RawArgs;
};
```

...and is only authorized with `Account.execute `. It can be generated manually or by `Contract.populate()`:

```typescript
const myCall: Call = myContract.populate('get_component', [100, recipient]);
// or
const myCall: Call = {
  contractAddress: tokenContract.address,
  entrypoint: 'get_component',
  calldata: CallData.compile([100, recipient]),
};

const tx = await account0.execute(myCall);
```

It's particularly interesting when you want to invoke a function several times in the same transaction:

```typescript
const myCall1: Call = myContract.populate('mint', { type: 7, qty: 10 });
const myCall2: Call = myContract.populate('mint', { type: 21, qty: 3 });
const myCall3: Call = myContract.populate('mint', { type: 2, qty: 1 });
const tx = await account0.execute([myCall1, myCall2, myCall3]);
```

### Array of strings (representing numbers)

This type is particularly useful when you need the maximum performance and speed in your code; You have no automatic transformation, no checks with ABI, and no parsing.

You provide to starknet.js the low-level data expected by Starknet:

```typescript
const specialParameters: Calldata = [
  '2036735872918048433518',
  '5130580',
  '18',
  '23456',
  '1',
  '17',
  '3',
  '234',
  '467456745457',
  '22252',
];
const getResponse = await myAccount.get_bal(specialParameters, { parseRequest: false });
```

To use with `parseRequest: false` (see hereunder).

### Summary table for arguments

These types of arguments can't be used at your convenience everywhere. Here is a table showing which types can be used in which function:

|                                                    Function | array of parameters | ordered object  | non ordered object |       Call & MultiCall       | list of parameters | array of strings (\*) | array of strings (\*\*) |
| ----------------------------------------------------------: | :-----------------: | :-------------: | :----------------: | :--------------------------: | :----------------: | :-------------------: | :---------------------: |
|                                         **TypeScript type** |         N/A         | {} RawArgsArray |  {} RawArgsObject  |        Call & Call[]         |       ...[]        |       string[]        |        string[]         |
|                 contract.metaClass() contract\[metaclass]() |                     |                 |                    |                              |         ✔️         |          ✔️           |           ✔️            |
|                             contract.call / contract.invoke |         ✔️          |                 |                    |                              |                    |          ✔️           |           ✔️            |
| account.execute <br /><br />(with 3 params, incl. calldata) |   <br /><br /> ✔️   | <br /><br /> ✔️ |                    | ✔️ <br /><br /><br /> <br /> |                    |                       |     <br /><br /> ✔️     |
|                            account.deployContract / Account |         ✔️          |       ✔️        |                    |                              |                    |                       |           ✔️            |
|                                    account.declareAndDeploy |         ✔️          |       ✔️        |                    |                              |                    |                       |           ✔️            |
|                                            CallData.compile |         ✔️          |       ✔️        |                    |                              |                    |                       |           ✔️            |
|                                          myCallData.compile |         ✔️          |       ✔️        |         ✔️         |                              |                    |                       |           ✔️            |
|                                           Contract.populate |         ✔️          |       ✔️        |         ✔️         |                              |                    |                       |           ✔️            |
|                     hash. calculateContract AddressFromHash |         ✔️          |       ✔️        |                    |                              |                    |                       |           ✔️            |

> (\*) = with `parseRequest: false`  
> (\*\*) = result of `Calldata.compile, myCallData.compile, myContract.populate().calldata`

## Receive data from a Cairo contract

When you perform a call, the result depends on the contract language:

- In Cairo 0, the answer is an object, with keys using the Cairo variable's names.

Example:

```typescript
const res=myContract.call(...);
const amount = res.amount;
```

- In Cairo 1, the result is a variable:

```typescript
const amount = myContract.call(...);
```

| Type in Cairo 1                                           | Cairo 1 code                       | Type expected in JS/TS                          | JS/TS function to recover data                                                                                                                                       |
| --------------------------------------------------------- | ---------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| u8, u16, u32, usize, u64, u128, felt252, address          | `func get_v()->u128`               | `bigint`                                        | `const res: bigint = myContract.call(...`                                                                                                                            |
|                                                           |                                    | `string representing an hex number`             | `const res=myContract.call(...`<br /> `const address: string = num.toHex(res);`                                                                                      |
| u8, u16, u32, usize                                       | `func get_v() -> u16`              | `number (53 bits max)`                          | `const res=myContract.call(...`<br /> `const total: number = Number(res)`                                                                                            |
| u256 (255 bits max)                                       | `func get_v() -> u256`             | `bigint`                                        | `const res: bigint = myContract.call(...`                                                                                                                            |
| u512 (512 bits max)                                       | `func get_v() -> u512`             | `bigint`                                        | `const res: bigint = myContract.call(...`                                                                                                                            |
| array of u8, u16, u32, usize, u64, u128, felt252, address | `func get_v() -> Array<u64>`       | `bigint[]`                                      | `const res: bigint[] = myContract.call(...`                                                                                                                          |
| bytes31 (31 ASCII characters max)                         | `func get_v() -> bytes31`          | `string`                                        | `const res: string = myContract.call(...`                                                                                                                            |
| felt252 (31 ASCII characters max)                         | `func get_v() -> felt252`          | `string`                                        | `const res = myContract.call(...`<br /> `const title:string = shortString.decodeShortstring(res);`                                                                   |
| longString                                                | `func get_v() -> Array<felt252>`   | `string`                                        | `const res=myContract.call(...`<br /> `const longString = res.map( (shortStr: bigint) => { return shortString.decodeShortString( num.toHex( shortStr)) }).join("");` |
| ByteArray                                                 | `func get_v() -> ByteArray`        | `string`                                        | `const res: string = myContract.call(...`                                                                                                                            |
| Tuple                                                     | `func get_v() -> (felt252, u8)`    | `Object {"0": bigint, "1": bigint}`             | `const res = myContract.call(...` <br /> `const res0: bigint = res["0"];` <br /> `const results: bigint[] = Object.values(res)`                                      |
| Struct                                                    | `func get_v() -> MyStruct`         | `MyStruct = { account: bigint, amount: bigint}` | `const res: MyStruct = myContract.call(...`                                                                                                                          |
| complex array                                             | `func get_v() -> Array<fMyStruct>` | `MyStruct[]`                                    | `const res: MyStruct[] = myContract.call(...`                                                                                                                        |

If you don't know if your Contract object is interacting with a Cairo 0 or a Cairo 1 contract, you have these methods:

```typescript
import { cairo } from 'starknet';
const isCairo1: boolean = myContract.isCairo1();
const isAbiCairo1: boolean = cairo.isCairo1Abi(myAbi);
```

## Parse configuration

### parseRequest

If for any reason (mainly for speed of processing), you want to define yourself the low-level parameters to send to Starknet, you can use the `parseRequest` option.  
Parameters are an array of strings (representing numbers).

```typescript
const txH = await myContract.send_tk(['2036735872918048433518', '5130580', '18'], {
  parseRequest: false,
});
```

### parseResponse

If for any reason, you want to receive a low-level answer from Starknet, you can use the parseResponse option.

```typescript
const result = await myContract.call('get_bals', 100n, { parseResponse: false });
```

The answer is an array of strings (representing numbers).

### formatResponse

As seen above, the strings returned by Starknet are not automatically parsed, because ABI does not inform when a contract returns a string.  
But there is a way to have automatic parsing of a string.

For example, if a contract returns a struct containing a shortString and a longString:

```typescript
{ name: felt252, description: Array<felt252> }
```

You can automate the string parsing with:

```typescript
const formatAnswer = { name: 'string', description: 'string' };
const result = await myContract.get_text(calldata, {
  parseRequest: true,
  parseResponse: true,
  formatResponse: formatAnswer,
});
```

The result will be an object, with 2 strings:

```typescript
{ name: "Organic", description: "The best way to read a long string!!!" }
```

## Tool to learn how to encode/decode

A DAPP has been created to learn how to encode/decode with Starknet.js : **Startnet-encode-decode**.  
It's also a convenient tool for the exploration of any contract ABI.
![](./pictures/encodeFn2.png)

Follow these links :  
DAPP : https://starknet-encode-decode.vercel.app/  
Tuto : https://github.com/PhilippeR26/starknet-encode-decode/blob/main/tuto.md

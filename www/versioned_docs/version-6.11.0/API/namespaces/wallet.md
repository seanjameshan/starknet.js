---
id: 'wallet'
title: 'Namespace: wallet'
sidebar_label: 'wallet'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### requestAccounts

▸ **requestAccounts**(`swo`, `silent_mode?`): `Promise`\<`string`[]\>

Request Permission for wallet account, return addresses that are allowed by user

#### Parameters

| Name           | Type                                                                                           | Default value | Description                                                              |
| :------------- | :--------------------------------------------------------------------------------------------- | :------------ | :----------------------------------------------------------------------- |
| `swo`          | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | `undefined`   | -                                                                        |
| `silent_mode?` | `boolean`                                                                                      | `false`       | false: request user interaction allowance. true: return only pre-allowed |

#### Returns

`Promise`\<`string`[]\>

allowed accounts addresses

#### Defined in

[src/wallet/connect.ts:20](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L20)

---

### getPermissions

▸ **getPermissions**(`swo`): `Promise`\<[] \| `"accounts"`[]\>

Request Permission for wallet account

#### Parameters

| Name  | Type                                                                                           |
| :---- | :--------------------------------------------------------------------------------------------- |
| `swo` | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) |

#### Returns

`Promise`\<[] \| `"accounts"`[]\>

allowed accounts addresses

#### Defined in

[src/wallet/connect.ts:33](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L33)

---

### watchAsset

▸ **watchAsset**(`swo`, `asset`): `Promise`\<`boolean`\>

Request adding ERC20 Token to Wallet List

#### Parameters

| Name    | Type                                                                                           | Description          |
| :------ | :--------------------------------------------------------------------------------------------- | :------------------- |
| `swo`   | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | -                    |
| `asset` | [`WatchAssetParameters`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.WatchAssetParameters.md) | WatchAssetParameters |

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/wallet/connect.ts:42](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L42)

---

### addStarknetChain

▸ **addStarknetChain**(`swo`, `chain`): `Promise`\<`boolean`\>

Request adding custom Starknet chain

#### Parameters

| Name    | Type                                                                                                       | Description                |
| :------ | :--------------------------------------------------------------------------------------------------------- | :------------------------- |
| `swo`   | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md)             | -                          |
| `chain` | [`AddStarknetChainParameters`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddStarknetChainParameters.md) | AddStarknetChainParameters |

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/wallet/connect.ts:54](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L54)

---

### switchStarknetChain

▸ **switchStarknetChain**(`swo`, `chainId`): `Promise`\<`boolean`\>

Request Wallet Network change

#### Parameters

| Name      | Type                                                                                           | Description     |
| :-------- | :--------------------------------------------------------------------------------------------- | :-------------- |
| `swo`     | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | -               |
| `chainId` | `string`                                                                                       | StarknetChainId |

#### Returns

`Promise`\<`boolean`\>

boolean

#### Defined in

[src/wallet/connect.ts:67](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L67)

---

### requestChainId

▸ **requestChainId**(`swo`): `Promise`\<`string`\>

Request the current chain ID from the wallet.

#### Parameters

| Name  | Type                                                                                           |
| :---- | :--------------------------------------------------------------------------------------------- |
| `swo` | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) |

#### Returns

`Promise`\<`string`\>

The current Starknet chain ID.

#### Defined in

[src/wallet/connect.ts:80](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L80)

---

### deploymentData

▸ **deploymentData**(`swo`): `Promise`\<[`AccountDeploymentData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AccountDeploymentData.md)\>

Get deployment data for a contract.

#### Parameters

| Name  | Type                                                                                           |
| :---- | :--------------------------------------------------------------------------------------------- |
| `swo` | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) |

#### Returns

`Promise`\<[`AccountDeploymentData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AccountDeploymentData.md)\>

The deployment data result.

#### Defined in

[src/wallet/connect.ts:88](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L88)

---

### addInvokeTransaction

▸ **addInvokeTransaction**(`swo`, `params`): `Promise`\<[`AddInvokeTransactionResult`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddInvokeTransactionResult.md)\>

Add an invoke transaction to the wallet.

#### Parameters

| Name     | Type                                                                                                               | Description                                         |
| :------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| `swo`    | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md)                     | -                                                   |
| `params` | [`AddInvokeTransactionParameters`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddInvokeTransactionParameters.md) | The parameters required for the invoke transaction. |

#### Returns

`Promise`\<[`AddInvokeTransactionResult`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddInvokeTransactionResult.md)\>

The result of adding the invoke transaction.

#### Defined in

[src/wallet/connect.ts:97](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L97)

---

### addDeclareTransaction

▸ **addDeclareTransaction**(`swo`, `params`): `Promise`\<[`AddDeclareTransactionResult`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddDeclareTransactionResult.md)\>

Add a declare transaction to the wallet.

#### Parameters

| Name     | Type                                                                                                                 | Description                                          |
| :------- | :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| `swo`    | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md)                       | -                                                    |
| `params` | [`AddDeclareTransactionParameters`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddDeclareTransactionParameters.md) | The parameters required for the declare transaction. |

#### Returns

`Promise`\<[`AddDeclareTransactionResult`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.AddDeclareTransactionResult.md)\>

The result of adding the declare transaction.

#### Defined in

[src/wallet/connect.ts:112](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L112)

---

### signMessage

▸ **signMessage**(`swo`, `typedData`): `Promise`\<[`SIGNATURE`](types.RPC.RPCSPEC07.API.SPEC.md#signature)\>

Sign typed data using the wallet.

#### Parameters

| Name        | Type                                                                                           | Description                                                   |
| :---------- | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| `swo`       | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | the starknet (wallet) window object to request the signature. |
| `typedData` | [`TypedData`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.TypedData.md)                       | The typed data to sign.                                       |

#### Returns

`Promise`\<[`SIGNATURE`](types.RPC.RPCSPEC07.API.SPEC.md#signature)\>

An array of signatures as strings.

#### Defined in

[src/wallet/connect.ts:128](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L128)

---

### supportedSpecs

▸ **supportedSpecs**(`swo`): `Promise`\<`string`[]\>

Get the list of supported specifications.

#### Parameters

| Name  | Type                                                                                           |
| :---- | :--------------------------------------------------------------------------------------------- |
| `swo` | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) |

#### Returns

`Promise`\<`string`[]\>

An array of supported specification strings.

#### Defined in

[src/wallet/connect.ts:139](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L139)

---

### onAccountChange

▸ **onAccountChange**(`swo`, `callback`): `void`

Attaches an event handler function to the "accountsChanged" event of a StarknetWindowObject.
When the accounts are changed, the specified callback function will be called.

#### Parameters

| Name       | Type                                                                                           | Description                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| `swo`      | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | The StarknetWindowObject to attach the event handler to.                                                      |
| `callback` | [`AccountChangeEventHandler`](types.RPC.RPCSPEC07.WALLET_API.md#accountchangeeventhandler)     | The function to be called when the accounts are changed. It will receive the changed accounts as a parameter. |

#### Returns

`void`

#### Defined in

[src/wallet/connect.ts:152](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L152)

---

### onNetworkChanged

▸ **onNetworkChanged**(`swo`, `callback`): `void`

Register a callback function to be called when the network is changed.

#### Parameters

| Name       | Type                                                                                           | Description                                                     |
| :--------- | :--------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| `swo`      | [`StarknetWindowObject`](../interfaces/types.RPC.RPCSPEC07.WALLET_API.StarknetWindowObject.md) | The StarknetWindowObject instance.                              |
| `callback` | [`NetworkChangeEventHandler`](types.RPC.RPCSPEC07.WALLET_API.md#networkchangeeventhandler)     | The callback function to be called when the network is changed. |

#### Returns

`void`

#### Defined in

[src/wallet/connect.ts:166](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/wallet/connect.ts#L166)

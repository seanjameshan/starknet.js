---
id: 'byteArray'
title: 'Namespace: byteArray'
sidebar_label: 'byteArray'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### stringFromByteArray

▸ **stringFromByteArray**(`myByteArray`): `string`

convert a Cairo ByteArray to a JS string

#### Parameters

| Name          | Type                              | Description                          |
| :------------ | :-------------------------------- | :----------------------------------- |
| `myByteArray` | [`ByteArray`](types.md#bytearray) | Cairo representation of a LongString |

#### Returns

`string`

a JS string

**`Example`**

```typescript
const myByteArray = {
  data: [],
  pending_word: '0x414243444546474849',
  pending_word_len: 9,
};
const result: String = stringFromByteArray(myByteArray); // ABCDEFGHI
```

#### Defined in

[src/utils/calldata/byteArray.ts:19](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/byteArray.ts#L19)

---

### byteArrayFromString

▸ **byteArrayFromString**(`targetString`): [`ByteArray`](types.md#bytearray)

convert a JS string to a Cairo ByteArray

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `targetString` | `string` | a JS string |

#### Returns

[`ByteArray`](types.md#bytearray)

Cairo representation of a LongString

**`Example`**

```typescript
const myByteArray: ByteArray = byteArrayFromString('ABCDEFGHI');
```

```typescript
// Result is:
{
  data: [],
  pending_word: '0x414243444546474849',
  pending_word_len: 9
}
```

#### Defined in

[src/utils/calldata/byteArray.ts:48](https://github.com/starknet-io/starknet.js/blob/v6.11.0/src/utils/calldata/byteArray.ts#L48)

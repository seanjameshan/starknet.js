/**
 * @jest-environment jsdom
 */
import { TextEncoder } from 'util';

import * as constants from '../../src/constants';
import * as json from '../../src/utils/json';

const { IS_BROWSER } = constants;

// isows has faulty module resolution in the browser emulation environment which prevents test execution
// it is not required for these tests so removing it with a mock circumvents the issue
jest.mock('isows', () => jest.fn());

test('isBrowser', () => {
  expect(IS_BROWSER).toBe(true);
});

describe('compressProgram()', () => {
  // the @noble/curves dependency that is included in this file through utils/stark executes precomputations
  // that rely on TextEncoder. The jsdom environment does not expose TextEncoder and it also overrides
  // Uint8Array causing underlying "instanceof Uint8Array" checks to yield unexpected results
  window.TextEncoder = class extends TextEncoder {
    public encoder: TextEncoder = new TextEncoder();

    public override encode(input?: string | undefined): Uint8Array {
      return new Uint8Array(this.encoder.encode(input));
    }
  };
  // loaded dynamically to allow the TextEncoder initialization to take effect
  const { stark } = require('../../src'); // eslint-disable-line global-require

  // eslint-disable-next-line global-require
  const { contracts } = require('../config/fixtures');
  const compiledAccount = contracts.OpenZeppelinAccount;

  test('compresses a contract program', () => {
    const compressed = stark.compressProgram(compiledAccount.program);

    expect(compressed).toMatchSnapshot();
  });
  test('works with strings', () => {
    const inputProgram = json.stringify(compiledAccount.program);

    const compressed = stark.compressProgram(inputProgram);

    expect(compressed).toMatchSnapshot();
  });
});

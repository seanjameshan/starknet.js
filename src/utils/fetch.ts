// the ts-ignore suppresses an esm to cjs import error that is resolved with entry point resolution
// @ts-ignore
import makeFetchCookie from 'fetch-cookie';
import { LibraryError } from '../provider/errors';

// use built-in fetch in browser if available
export default (typeof window !== 'undefined' && window.fetch) ||
  // use built-in fetch in node, react-native and service worker if available
  (typeof global !== 'undefined' && makeFetchCookie(global.fetch)) ||
  // throw with instructions when no fetch is detected
  ((() => {
    throw new LibraryError(
      "'fetch()' not detected, use the 'baseFetch' constructor parameter to set it"
    );
  }) as WindowOrWorkerGlobalScope['fetch']);

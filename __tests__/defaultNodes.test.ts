import { Provider, constants } from '../src';

describe('Default RPC Nodes', () => {
  test('Default lib configured version', async () => {
    const result = await Promise.all(
      Object.keys(constants.RPC_NODES).map(async (network: any) => {
        return Promise.all(
          constants.RPC_NODES[network as keyof typeof constants.RPC_NODES].map(async (it: any) => {
            const provider = new Provider({ nodeUrl: it });
            return {
              network,
              nodeUrl: provider.channel.nodeUrl,
              version: await provider.getSpecVersion(),
            };
          })
        );
      })
    );

    console.table(result.flat());
  });
  test('Default RPC configured version on base route', async () => {
    function getBaseUrl(url: string) {
      const pathArray = url.split('/');
      // Hotfix for juno but not generic
      const net = pathArray[3].includes('juno') ? `${pathArray[3]}` : '';
      return `${pathArray[0]}//${pathArray[2]}/${net}`;
    }
    const result = await Promise.all(
      Object.keys(constants.RPC_NODES).map(async (network: any) => {
        return Promise.all(
          constants.RPC_NODES[network as keyof typeof constants.RPC_NODES].map(async (it: any) => {
            const provider = new Provider({ nodeUrl: getBaseUrl(it) });
            return {
              network,
              nodeUrl: provider.channel.nodeUrl,
              version: await provider.getSpecVersion(),
            };
          })
        );
      })
    );

    console.table(result.flat());
  });
});

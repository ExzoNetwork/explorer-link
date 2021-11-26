export const getExplorerName = (networkId: string): string | null => {
  // eslint-disable-next-line radix
  const net = parseInt(networkId);
  let explorerName;

  switch (net) {
    case 1: // main net
      explorerName = "Etherscan";
      break;
    case 3: // ropsten test net
      explorerName = "Etherscan";
      break;
    case 4: // rinkeby test net
      explorerName = "Etherscan";
      break;
    case 5: // goerli test net
      explorerName = "Etherscan";
      break;
    case 10: // optimism main net
      explorerName = "Etherscan";
      break;
    case 42: // kovan test net
      explorerName = "Etherscan";
      break;
    case 56: // bsc main net
      explorerName = "Bscscan";
      break;
    case 97: // bsc test net
      explorerName = "Bscscan";
      break;
    case 137: // polygon main net
      explorerName = "Polygonscan";
      break;
    case 42161: // arbitrum main net
      explorerName = "Arbiscan";
      break;
    default:
      explorerName = null;
  }
  return explorerName;
};

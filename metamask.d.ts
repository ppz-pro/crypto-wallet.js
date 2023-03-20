import { BrowserWallet, Network } from './index'

export class MetamaskBrowserWallet extends BrowserWallet {
  getAccount(): void
  getChainId(): void
  checkChainId(chainId: number): boolean
  addNetwork(network: Network): void
  switchNetwork(network: Network): void
}

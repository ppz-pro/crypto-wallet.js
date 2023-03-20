import { BrowserWallet, Network } from './index'

export class MetamaskBrowserWallet extends BrowserWallet {
  connect(): void
  getChainId(): void
  addNetwork(network: Network): void
  switchNetwork(network: Network): void
}

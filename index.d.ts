/** 网络，即区块链，如以太链、币安链 */
export class Network {
  chainId: string
  chainName: string
  rpcUrls: string[]
  constructor(chainId: string, chainName: string, rpcUrls: string[])
}

/** 移除刚加入的监听器 */
type removeListener = () => void

/** 简化标准 provider 操作 */
export class ProviderWrapper {
  /** 钱包插入到浏览器的 provider，如 Metamask 插入的 window.ethereum 对象 */
  provider: any
  constructor(provider: any)
  
  /** 获取当前账户 */
  getAccounts(): Promise<string[]>
  /** 获取当前账户（一个） */
  getAccount(): Promise<string | undefined>
  /** 获取当前连接的链的 id */
  getChainId(): Promise<string>
  /** 检查当前链 id 是否是目标 id */
  checkChainId(chainId: string): Promise<boolean>

  /** 切换网络（链） */
  switchNetwork(network: Network): Promise<void>
  /** 添加网络（链） */
  addNetwork(network: Network): Promise<void>

  /** 监听账户变化 */
  onAccountsChanged(listener: (accounts: string[]) => void): removeListener
  /** 监听账户（一个）变化 */
  onAccountChanged(listener: (account: string | undefined) => void): removeListener
  /** 监听链变化 */
  onChainChanged(listener: (chainId: string) => void): removeListener
}

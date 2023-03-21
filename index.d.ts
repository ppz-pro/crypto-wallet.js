import Event from '@ppzp/utils/event'

/** 代币 */
export class NativeCurrency {
  name: string
  decimal: number
  symbol: string
  constructor(name: string, decimal: number, symbol: string)
}

/** 网络，即区块链，如以太链、币安链 */
export class Network {
  id: string
  name: string
  nativeCurrency: NativeCurrency
  RPCs: string[]
  constructor(id: string, name: string, nativeCurrency: NativeCurrency, RPCs: string[])
}

/** 钱包：作为一个浏览器的插件 */
export class BrowserWallet {
  /** 钱包插入到浏览器的原始 provider，如 Metamask 插入的 window.ethereum 对象 */
  provider: any
  /** 账户变化事件 */
  accountChangeEvent: Event
  /** 链（网络）变化事件 */
  chainChangeEvent: Event

  constructor(provider: any)
  
  /** 获取当前账户（一个） */
  getAccount(): Promise<string | undefined>
  /** 获取当前连接的链的 id */
  getChainId(): Promise<string>
  /** 检查当前链 id 是否是目标 id */
  checkChainId(chainId: string): Promise<boolean>
  /** 添加网络（链） */
  addNetwork(network: Network): Promise<void>
  /** 切换网络（链） */
  switchNetwork(network: Network): Promise<void>
}

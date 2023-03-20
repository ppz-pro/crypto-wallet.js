export class NativeCurrency {
  name: string
  decimal: number
  symbol: string
  constructor(name: string, decimal: number, symbol: string) {}
}

export class Network {
  id: string
  name: string
  nativeCurrency: NativeCurrency
  RPCs: string[]
  constructor(id: string, name: string, nativeCurrency: NativeCurrency, RPCs: string[]) {}
}

export class BrowserWallet {
  provider: any
  constructor(provider: any) {}
}

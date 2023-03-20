import { Network, NativeCurrency } from '../'

export
const bscChain = new Network(
  '0x38',
  'Binance Smart Chain Mainnet',
  new NativeCurrency('BNB', 18, 'BNB'),
  [
    'https://bsc-dataseed.binance.org/'
  ]
)

export
const bscTestChain = new Network(
  '0x61',
  'BSC Testnet',
  new NativeCurrency('BNB', 18, 'tBNB'),
  [
    'https://data-seed-prebsc-1-s1.binance.org:8545/',
    'https://data-seed-prebsc-2-s1.binance.org:8545/'
  ]
)

import { Network } from '../index.js'

export
const bsc = new Network(
  '0x38',
  'Binance Smart Chain Mainnet',
  [
    'https://bsc-dataseed.binance.org/'
  ]
)

export
const bscTest = new Network(
  '0x61',
  'BSC Testnet',
  [
    'https://data-seed-prebsc-1-s1.binance.org:8545/',
    'https://data-seed-prebsc-2-s1.binance.org:8545/'
  ]
)

export
const ethc = new Network(
  '0x1',
  'Ethereum Mainnet',
  [
    'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
  ]
)

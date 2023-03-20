import { BrowserWallet } from './index'

export class MetamaskBrowserWallet extends BrowserWallet
  constructor: () ->
    super(window.ethereum)

  connect: () ->

  getChainId: () ->
    @provider.request({ method: 'eth_chainId' })

  addNetwork: (network) ->
    @provider.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: network.id
        chainName: network.name
        rpcUrls: network.RPCs
      }]
    })

  switchNetwork: (network) ->
    try
      await @_switchNetwork(network.id)
    catch err
      if err.code == 4902 # https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
        await @addNetwork(network)
      else
        throw err

  _switchNetwork: (chainId) ->
    @provider.request({
      method: 'wallet_switchEthereumChain'
      params: [{ chainId }]
    })

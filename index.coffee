# https://chainid.network/
export class Network
  constructor: (@chainId, @chainName, @rpcUrls) ->

export class ProviderWrapper
  constructor: (@provider) ->

  send: (method, params) ->
    @provider.request({ method, params })

  getAccounts: () ->
    @send('eth_requestAccounts')
  getAccount: () ->
    (await @getAccounts())[0]

  getChainId: () ->
    @send('eth_chainId')
  checkChainId: (chainId) ->
    chainId == await @getChainId()

  addNetwork: (network) ->
    @send('wallet_addEthereumChain', [network])

  switchNetwork: (network) ->
    try
      await @_switchNetwork(network.chainId)
    catch err
      if err.code == 4902 # https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
        await @addNetwork(network)
      else
        throw err

  _switchNetwork: (chainId) ->
    @send('wallet_switchEthereumChain', [{ chainId }])

  onAccountsChanged: (listener) ->
    @provider.on('accountsChanged', listener)
    return -> @provider.off('accountsChanged', listener)
  
  onAccountChanged: (listener) ->
    listener2 = ([account]) -> listener(account)
    @onAccountsChanged(listener2)
  
  onChainChanged: (listener) ->
    @provider.on('chainChanged', listener)
    return -> @provider.off('chainChanged', listener)

export getProviderWrapper = do ->
  map = new Map()
  return (standardProvider) ->
    wrapper = map.get(standardProvider)
    unless wrapper
      wrapper = new ProviderWrapper(standardProvider)
      map.set(standardProvider, wrapper)
    return wrapper

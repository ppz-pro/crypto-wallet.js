import getProviderWrapper from '../get-provider-wrapper.js'
import { bsc, bscTest, ethc } from './chains.js'

getProviderWrapper.set(ethereum)
const provider = getProviderWrapper()
const el = selector => document.getElementById(selector)

// test get account
el('getAccount').onclick = async function() {
  const account = await provider.getAccount()
  el('account').innerText = account
}
provider.onAccountChanged((account) => {
  console.log('account changed', account)
  el('account').innerText = account
})

// test get chainId
el('getChainId').onclick = async function() {
  const chainId = await provider.getChainId()
  el('chainId').innerText = chainId
}
provider.onChainChanged((chainId) => {
  el('chainId').innerText = chainId
})

// test add network
el('addBSC').onclick = async function() {
  console.log({ bsc })
  provider.addNetwork(bsc)
}
el('addBSCTest').onclick = async function() {
  provider.addNetwork(bscTest)
}
el('addETH').onclick = async function() {
  provider.addNetwork(ethc)
}

// test switch network
el('switchBSC').onclick = async function() {
  await provider.switchNetwork(bsc)
}
el('switchBSCTest').onclick = async function() {
  await provider.switchNetwork(bscTest)
}
el('switchETH').onclick = async function() {
  await provider.switchNetwork(ethc)
}

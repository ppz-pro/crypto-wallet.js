import { MetamaskBrowserWallet } from '../metamask'
import { bscChain, bscTestChain } from './chains'

const wallet = new MetamaskBrowserWallet()

function addBtn(network) {
  const button = document.createElement('button')
  button.innerHTML = 'connect ' + network.name
  button.onclick = async function() {
    console.log('connecting ' + network.name)
    const chainId = await wallet.getChainId()
    if(chainId == network.id) {
      console.log('already on ' + network.name)
      return
    }
    try {
      await wallet.switchNetwork(network)
    } catch(err) {
      console.log({ err })
    }
  }
  const body = document.querySelector('body')
  body.appendChild(button)
}

addBtn(bscChain)
addBtn(bscTestChain)
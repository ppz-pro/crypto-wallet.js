import { MetamaskBrowserWallet } from 'crypto-wallet/metamask'
import { bscChain, bscTestChain } from './chains'

const wallet = new MetamaskBrowserWallet()
const body = document.querySelector('body')

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
  body.appendChild(button)
}
addBtn(bscChain)
addBtn(bscTestChain)

// accounts
;(async function() {
  const button = document.createElement('button')
  const accountDiv = document.createElement('div')

  button.innerHTML = 'connect account'
  button.onclick = async function() {
    accountDiv.innerHTML = (await wallet.getAccount()) || 'no account'
  }
  wallet.accountChangeEvent.listen(account => {
    accountDiv.innerHTML = account || 'no account'
  })

  body.appendChild(button)
  body.appendChild(accountDiv)
})()
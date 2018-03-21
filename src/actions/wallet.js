export function setWallets(wallets) {
  return {
    type: "SET_WALLETS",
    wallets
  }
}

export function addWallet(wallet) {
  return {
    type: "ADD_WALLET",
    wallet
  }
}
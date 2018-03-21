const defaultState = {
  wallets: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_WALLET':
      return Object.assign({}, state, { wallets: state.wallets.concat(action.wallet) });
    case 'SET_WALLETS':
      return Object.assign({}, state, { wallets: action.wallets });
    default:
      return state;
  }
}
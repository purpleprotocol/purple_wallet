const defaultState = {
  publicKey: null
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'SET_PUBLIC_KEY':
      return Object.assign({}, state, { publicKey: action.publicKey });
    default:
      return state;
  }
}
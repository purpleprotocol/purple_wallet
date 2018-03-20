import { combineReducers, createStore } from 'redux';
import walletReducer from './wallet';

export default createStore(
  combineReducers({
    wallet: walletReducer
  })
)
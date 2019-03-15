import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './reducers/root';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
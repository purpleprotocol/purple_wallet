import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './reducers/root';


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export default App;

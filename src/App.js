/* Import React */
import React, { Component } from 'react';

/* Import Styling */
import './semantic.min.css'
import './styles/custom/App.css';
import './styles/custom/Miscellaneous.css';

/* Import Redux */
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
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main';
import Login from '../components/Login';

class MainPage extends Component {
  render() {
    const { publicKey } = this.props;

    return publicKey ? <Main /> : <Login />;
  }
}

const mapStateToProps = state => ({
  publicKey: state.wallet.publicKey
})

export default connect(mapStateToProps, null)(MainPage);
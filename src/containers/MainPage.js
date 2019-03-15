import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginOrCreate from '../components/authentication/LoginOrCreate'

import Main from '../components/Main';
import Login from '../components/authentication/Login';
import { setWallets } from '../actions/wallet';
import App from '../App';
import Create from '../components/authentication/Create';
import BackupSeed from '../components/authentication/BackupSeed';
import MainDashboard from '../components/dashboard/MainDashboard';


class MainPage extends Component {
  componentWillMount() {
    fetch("http://localhost:4000/api/fetch-sessions", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.props.setWallets(JSON.parse(data.sessions));
      });
  }

  render() {
    const { wallets } = this.props;

    return <MainDashboard />
    //return <BackupSeed />
    //return <Create />
    //return <LoginOrCreate />


    return wallets.length ? <Main /> : <Login />;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet.wallets
})

const mapDispatchToProps = dispatch => ({
  setWallets: w => dispatch(setWallets(w))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
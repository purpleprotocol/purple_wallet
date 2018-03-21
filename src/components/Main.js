import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container
} from 'semantic-ui-react';

class Main extends Component {
  render() {
    return (
      <Container>
        Wallets: { this.props.wallets.map(w => <div>{w}</div>) }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet.wallets
})

export default connect(mapStateToProps, null)(Main);
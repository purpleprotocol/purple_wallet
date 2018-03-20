import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container
} from 'semantic-ui-react';

class Main extends Component {
  render() {
    return (
      <Container>
        Pub key: { this.props.publicKey }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  publicKey: state.wallet.publicKey
})

export default connect(mapStateToProps, null)(Main);
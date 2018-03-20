import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Form,
  Container,
  Button
} from 'semantic-ui-react';

import { setPublicKey } from '../actions/wallet';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <Input placeholder="Username" onChange={(e, data) => this.setState({ username: data.value })} />
          </Form.Field>

          <Form.Field>
            <input className="ui input" type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
          </Form.Field>

          <Form.Field>
            <Button as='a' onClick={this._handleClick}>Log in</Button>
          </Form.Field>
        </Form>
      </Container>
    );
  }

  _handleClick = () => {
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => {
      if (Object.keys(data).includes("errors")) {
        //
      } else {
        this.props.setPublicKey(data.public_key);
      }
    });
  }
}

export default connect(null, dispatch => ({
  setPublicKey: p => dispatch(setPublicKey(p))
}))(Login);
import React, { Component } from 'react';
import {
  Input,
  Form,
  Container,
  Button
} from 'semantic-ui-react';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <Input placeholder="Username" />
          </Form.Field>

          <Form.Field>
            <Input placeholder="Password" />
          </Form.Field>

          <Form.Field>
            <Button as='a'>Log in</Button>
          </Form.Field>
        </Form>
      </Container>
    );
  }
}
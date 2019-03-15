import strings from '../../resources/strings'
import React, { Component } from 'react';
import Logo from '../../logo.png'
import { connect } from 'react-redux';
import { Container, Button, Form, Checkbox, Input, Image } from 'semantic-ui-react'
import './../../styles/LoginOrCreate.css'
import './../../styles/Create.css'

class Create extends Component {
    render() {
        return (<Container>
            <div id='main-wrapper'>
                <Image className='image-circle' src={Logo} size='small' circular />

                <Form>
                    {strings.fields.username}:
                    <Form.Field >
                        <Input ></Input>
                    </Form.Field>
                    {strings.fields.password}:
                    <Form.Field >
                        <input className="ui input" type="password" />
                    </Form.Field>
                    {strings.fields.confirmPassword}:
                    <Form.Field>
                        <input className="ui input" type="password" />
                    </Form.Field>
                    <div className='form-inputs'>
                        <Form.Field>
                            <Checkbox label={strings.messages.saveAccount}></Checkbox>
                        </Form.Field>

                        <Form.Field>
                            <Button id='create-account' className='purple-button'>{strings.buttons.next}</Button>
                        </Form.Field>
                    </div>
                </Form>
            </div>
        </Container>
        );
    }
}

export default connect(null, null)(Create);
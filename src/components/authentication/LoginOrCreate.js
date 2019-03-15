import strings from '../../resources/strings'
import colors from '../../resources/colors'
import Logo from '../../logo.png'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Divider, Image } from 'semantic-ui-react'
import './../../styles/LoginOrCreate.css'

class LoginOrCreate extends Component {
    render() {
        return (<Container>
            <div id='main-wrapper'>
                <Image className='image-circle' src={Logo} size='small' circular />

                <Button id='create-account' className='purple-button'>{strings.buttons.createAccount}</Button>

                <Divider horizontal>{strings.missceleneous.or}</Divider>

                <Button color='basic'>{strings.buttons.login}</Button>
            </div>
        </Container>
        );
    }
}

export default connect(null, null)(LoginOrCreate);
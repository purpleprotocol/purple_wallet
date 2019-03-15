import strings from '../../resources/strings'
import Logo from '../../logo.png'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Image, Form, TextArea } from 'semantic-ui-react'

class BackupSeed extends Component {
    componentWillMount() {
        // TODO: This should be automatically set when changing state
        this.setState({
            title: strings.titles.backupSeed,
            inputProperties: {
                // In case of Backup Seed (readonly, with value set)
                readOnly: true,
                value: "thunder novel claim foster fit magnet scissors energy volume loan garment shop bunker final oblige"
            },
            // inputProperties: {
            //     // In case of Input Backup Seed
            // }
        });
    }

    render() {
        return (<Container>
            <div id='main-wrapper'>
                <Image className='image-circle' src={Logo} size='small' circular />
                <h2 className='bold'>{this.state.title}</h2>
                <div className='medium-size center-text'><span>{strings.informations.inputBackupInfo}</span></div>

                <Form>
                    <div className='form-inputs large-size'>
                        <Form.Field>
                            <TextArea {...this.state.inputProperties} className='purple-input large-size' autoHeight rows={5} />
                        </Form.Field>

                        <Form.Field>
                            <Button className='purple-button'>{strings.buttons.next}</Button>
                        </Form.Field>
                    </div>
                </Form>
            </div>
        </Container>
        );
    }
}

export default connect(null, null)(BackupSeed);
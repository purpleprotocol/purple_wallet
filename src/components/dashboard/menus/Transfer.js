import strings from '../../../resources/strings'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Form, Dropdown, Input, Icon } from 'semantic-ui-react'

const fakeAccounts = [{ text: "XeZRRZ50jbYEd0hpaIv2", value: "XeZRRZ50jbYEd0hpaIv2" },
{ text: " mYTZRyAQHsXyE85pfvAT ", value: " mYTZRyAQHsXyE85pfvAT " },
{ text: " tlpef8k2y2snPD8snQoA ", value: " tlpef8k2y2snPD8snQoA " },
{ text: " k5cQTW6LVukXWz8LQdoO ", value: " k5cQTW6LVukXWz8LQdoO " },
{ text: " wm0rG7jnPEl5Q7pJhIbw ", value: " wm0rG7jnPEl5Q7pJhIbw " },
{ text: " oDRHyIbW1nhLVNSIr9Ww ", value: " oDRHyIbW1nhLVNSIr9Ww " },
{ text: " RVauuUIWi1wu5JitunG2", value: " RVauuUIWi1wu5JitunG2" },
{ text: " oqyXdU13y625kMUN6Wpl ", value: " oqyXdU13y625kMUN6Wpl " },
{ text: "9nzjjhzp2WWFQEsT5ZR6", value: "9nzjjhzp2WWFQEsT5ZR6" },
{ text: " h0nnskrikd3hVXQmmUAR ", value: " h0nnskrikd3hVXQmmUAR " }]
const fakeCurrencies = [{ text: " Bitcoin ", value: " Bitcoin " }, { text: " Ethereum ", value: " Ethereum " }];
const fakeFee = "0.0000002BTC";

class Transfer extends Component {
    componentWillMount() {

        this.setState({ fakeAccounts: fakeAccounts, fakeCurrencies: fakeCurrencies, fakeFee: fakeFee });
    }

    render() {
        return (<Container>
            <div className='dashboard-transfer center-content'>
                <Form>
                    <div className='dashboard-transfer-inputs'>
                        <div>
                            <h2>{strings.missceleneous.from}</h2>
                            {strings.fields.account}:
                            <Form.Field >
                                <Dropdown fluid selection options={this.state.fakeAccounts} />
                            </Form.Field>
                            {strings.fields.currency}:
                            <Form.Field >
                                <Dropdown fluid selection options={this.state.fakeCurrencies} />
                            </Form.Field>
                            {strings.fields.amount}:
                            <Form.Field >
                                <Input />
                            </Form.Field>
                            {strings.fields.feeCurrency}:
                            <Form.Field >
                                <Dropdown fluid selection options={this.state.fakeCurrencies} />
                            </Form.Field>
                            <div className='fee'>{strings.messages.createCurrencyFee}<b>{this.state.fakeFee}</b></div>
                        </div>
                        <div className='icon-with-space'><Icon name='exchange' size='large' /></div>
                        <div>
                            <h2>{strings.missceleneous.to}</h2>
                            {strings.fields.account}:
                            <Form.Field >
                                <Dropdown fluid selection options={this.state.fakeAccounts} />
                            </Form.Field>
                        </div>
                    </div>
                    <div className='form-inputs'>
                        <Form.Field>
                            <Button className='purple-button'>{strings.buttons.transfer}</Button>
                        </Form.Field>
                    </div>
                </Form>
            </div>
        </Container>
        );
    }
}

export default connect(null, null)(Transfer);
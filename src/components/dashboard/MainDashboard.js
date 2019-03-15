import strings from '../../resources/strings'
import Logo from '../../logo.png'
import Logo1 from '../../test_logo_1.png'
import Logo2 from '../../test_logo_2.png'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Image, Menu } from 'semantic-ui-react'
import Transfer from './menus/Transfer.js'
import Exchange from './menus/Exchange.js'
import Dashboard from './menus/Dashboard.js'
import ExploreBlockchain from './menus/ExploreBlockchain.js'

class MainDashboard extends Component {
    componentWillMount() {

        this.setState({ wallets: [{ icon: Logo1, key: '1' }, { icon: Logo2, key: '2' }], activeMenuItem: strings.menu.transfer });
    }

    handleItemClick = (e, { name }) => this.setState({ activeMenuItem: name })

    render() {
        return (<Container>
            <div id='dashboard-wrapper'>
                <div id='dashboard-left'>
                    <div>
                        <Image className='main-logo' src={Logo} size='tiny' circular />
                        <div className='dashboard-wallets'>
                            {this.state.wallets.map(w => <Image className='wallet-logo' src={w.icon} key={w.key} size='tiny' circular />)}
                        </div>
                    </div>
                    <Button circular icon='setting' size='massive' basic />
                </div>
                <div id='dashboard-right'>
                    <Menu pointing secondary>
                        <Menu.Item name={strings.menu.dashboard} active={this.state.activeMenuItem === strings.menu.dashboard} onClick={this.handleItemClick} />
                        <Menu.Item name={strings.menu.transfer} active={this.state.activeMenuItem === strings.menu.transfer} onClick={this.handleItemClick} />
                        <Menu.Item name={strings.menu.exchange} active={this.state.activeMenuItem === strings.menu.exchange} onClick={this.handleItemClick} />
                        <Menu.Item name={strings.menu.exploreBlockchain} active={this.state.activeMenuItem === strings.menu.exploreBlockchain} onClick={this.handleItemClick} />
                    </Menu>
                    {this.state.activeMenuItem === strings.menu.dashboard && (<Dashboard />)}
                    {this.state.activeMenuItem === strings.menu.transfer && (<Transfer />)}
                    {this.state.activeMenuItem === strings.menu.exchange && (<Exchange />)}
                    {this.state.activeMenuItem === strings.menu.exploreBlockchain && (<ExploreBlockchain />)}
                </div>
            </div>
        </Container>
        );
    }
}

export default connect(null, null)(MainDashboard);
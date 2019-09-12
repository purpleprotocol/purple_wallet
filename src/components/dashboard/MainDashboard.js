import strings from '../../resources/strings'
import Logo from '../../logo.png'
import Logo1 from '../../test_logo_1.png'
import Logo2 from '../../test_logo_2.png'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Image, Menu } from 'semantic-ui-react'
import './../../styles/custom/Dashboard.css'
import Transfer from './menus/Transfer.js'
import Exchange from './menus/Exchange.js'
import Dashboard from './menus/Dashboard.js'
import ExploreBlockchain from './menus/ExploreBlockchain.js'
import Badge from './../../controls/Badge.js'

class MainDashboard extends Component {
    componentWillMount() {

        this.setState({ wallets: [{ icon: Logo1, key: '1' }, { icon: Logo2, key: '2' }], activeMenuItem: strings.menu.transfer, activeMenu: 'main' });
    }

    getBadgeProperties = (key, icon) => {
        return {
            key,
            id: 'badge_' + key,
            clickHandler: this.handleBadgeClick,
            icon: icon
        }
    }

    handleBadgeClick = (e) => {
        const targetId = e.target.id;
        if (targetId === 'badge_main') {
            this.setState({ activeMenu: 'main' });
        } else if (targetId === 'badge_settings') {
            this.setState({ activeMenu: 'settings' });
        } else {
            this.setState({ activeMenu: 'wallet' });
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeMenuItem: name })

    render() {
        return (<Container>
            <div id='dashboard-wrapper' className='fit-screen'>
                <div id='dashboard-left'>
                    <div>
                        <Badge {...this.getBadgeProperties('main', Logo)} />
                        <div className='dashboard-wallets'>
                            {this.state.wallets.map(w => <Badge {...this.getBadgeProperties(w.key, w.icon)} />)}
                        </div>
                    </div>
                    <Badge {...this.getBadgeProperties('settings', Logo)} />
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
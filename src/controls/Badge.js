import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react'

/**
 * Creates a Badge type Component
 * props: clickHandler(function), icon (image), key (string)
 */
export default class Badge extends Component {
    render() {
        return (<Image id={this.props.id} className="badge-circle" rounded={true} src={this.props.icon} onClick={this.props.clickHandler} />);
    }
}
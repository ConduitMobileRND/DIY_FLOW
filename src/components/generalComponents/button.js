import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        let className = "btnWrap "+this.props.foundationClasses;
        let btnClassName = "button " + this.props.buttonSize;
        return (
        <div className={className}>
            <button className={btnClassName} onClick={this.props.onClick ? this.props.onClick.bind(null, this) : ""}>{this.props.btnText}</button>
        </div>
        );
    }
}

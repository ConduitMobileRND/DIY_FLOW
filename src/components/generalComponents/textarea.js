import React, { Component } from 'react';

export default class Textarea extends Component {
    _setLabelText(){
        if(this.props.labelText){
            return(
                <span>{this.props.labelText}</span>
            )
        }
    }
    render() {
        let className = "inputWrap " + this.props.foundationClasses;
        if(!this.props.isValid){
            className += " error";
        }

        return (
            <div className={className}>
                <label>
                    {this._setLabelText()}
                    <textarea className={this.props.className} name={this.props.name} isRequired={this.props.isRequired} validType={this.props.validType} stateId = {this.props.stateId} type={this.props.type} placeholder={this.props.placeholder} ref={this.props.ref} onChange = {this.props.onChange.bind(null,this.props.stateId)} onBlur = {this.props.onBlur.bind(null, this.props)} onKeyUp = {this.props.onKeyUp ? this.props.onKeyUp.bind(null, this.props) : ""} value={this.props.value}>

                    </textarea>
                    <div className="errorMessage">{this.props.errorMsg}</div>
                </label>
            </div>
        );
    }
}

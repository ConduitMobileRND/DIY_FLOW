import React, { Component } from 'react';

export default class Select extends Component {
    _setLabelText(){
        if(this.props.labelText){
            return(
                <span>{this.props.labelText}</span>
            )
        }
    }

    _createOptionRow(option){
        return(
            <option key={option.id}>
                {(option.text) ? option.text : option.value}
            </option>
        );
    }
    _toArray(data){
        if(Array.isArray(data)){
            return data;
        }
        var _Array = new Array();
        for(var name in data){
            _Array[name] = data[name];
        }
        return _Array;
    }
    render(){
        let className = "inputWrap " + this.props.foundationClasses;
        if(!this.props.isValid){
            className += " error";
        }
        return(
            <div className={className}>
                <label>
                        {this._setLabelText()}
                    <select defaultValue = {this.props.defaultValue} value = {this.props.defaultValue} className={this.props.className} name={this.props.name} isRequired={this.props.isRequired} stateId = {this.props.stateId} ref={this.props.ref} onChange = {this.props.onChange ? this.props.onChange.bind(null,this.props.stateId): ""} onBlur = {this.props.onBlur ? this.props.onBlur.bind(null, this.props) : ""} onKeyUp = {this.props.onKeyUp ? this.props.onKeyUp.bind(null, this.props) : ""}>
                        {this._toArray(this.props.options).map(this._createOptionRow, this)}
                    </select>
                    <div className="errorMessage">{this.props.errorMsg}</div>
                </label>
            </div>
        )
    }
}
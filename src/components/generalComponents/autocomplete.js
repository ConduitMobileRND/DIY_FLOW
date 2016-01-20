import React, { Component } from 'react';

export default class AutoComplete extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    _createOptionRow(option){
        return(
            <li key={option.id} onClick = {this.props.onClick.bind(null,option)}>
                <span className="imageWrap">
                    <img src={option.picture.data.url} alt={option.name}/>
                </span>
                <span className="optionDetailsWrap">
                    <span className="optionName">{option.name}</span>
                    <span className="optionCategory">{option.category}</span>
                </span>
            </li>
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
        return(
            <div className="autoCompleteList columns large-10 large-offset-1">
                <ul>
                 {this._toArray(this.props.options).map(this._createOptionRow, this)}
                </ul>
            </div>
        )
    }
}
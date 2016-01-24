import React, { Component } from 'react';
//import style from './step3.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import Isvg from 'react-inlinesvg';

export default class Step2 extends Component {
    constructor(props) {
        super();
        this.state =
        {
            data: {
                id: 3,
                stored: JSON.parse(localStorage.state)
            }
        }
        //debugger;
    }
    _createImageItem(item){
        return(
            <div className='imageWrap' key={item.image_id}>
                <img src={item.url} />
            </div>
        )
    }
    render(){
        return (
            <div id="step3" className="pageWrap">
                {this.state.data.stored.response.data.map(this._createImageItem, this)}
            </div>
        )
    }
}

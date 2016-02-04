import React, { Component } from 'react';
import ValidateMe from '../../utils/validateMe/validateMe';
import { Router, Link } from 'react-router';
import style from './style.scss';
import Handler from '../../api/handler';
import { FormBase } from 'react-serial-forms';
import Input from '../generalComponents/input';
import Button from '../generalComponents/button';


import image1 from './images/hpBg1.jpg';
import image2 from './images/hpBg2.jpg';
import image3 from './images/hpBg3.jpg';
import image4 from './images/hpBg4.jpg';
import Isvg from 'react-inlinesvg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: 0,
                to:"",
                backgrounds:{
                    currentKey: 0,
                    all:  [
                        image1,
                        image2,
                        image3,
                        image4
                    ]
                },
                payload: {
                    store: {value: "", isValid: true},
                    email: {value: "", isValid: true}
                },
                bgInterval: ""
            }
        };
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._setData = this._setData.bind(this);
        this._handleValidation = this._handleValidation.bind(this);
        this._changeBg = this._changeBg.bind(this);
        this._stopBgAnimation = this._stopBgAnimation.bind(this);
    }
    _stopBgAnimation(){
        clearInterval(this.state.data.interval);
    }
    _setData(stateId, e){
        this.state.data.payload[stateId].value = e.target.value;
        this.setState({data: this.state.data});
    }
    _handleBtnClick(elem,event) {
        event.preventDefault();
        let formValid = true;
        let obj = this.refs;
        for (var key in obj) {
            this._handleValidation(obj[key].props);
        }
        let stateObj = this.state.data.payload;
        for (var key in stateObj) {
            if (!stateObj[key].isValid) {
                formValid = false;
            }
        }
        //console.log(formValid);
        if (!formValid) {
            formValid = true;
            return;
        }
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    _handleValidation(props, e){
        let validateTask = new ValidateMe();
        let isValid = validateTask.validateMe(props, e);
        if(typeof e != "undefined" && e.nativeEvent.type == "keyup" && isValid == false){
            return;
        }
        this.state.data.payload[props.stateId].isValid = isValid;
        this.setState({data: this.state.data});
    }
    _changeBg(){
        let allBgs = this.state.data.backgrounds.all;
        this.state.data.backgrounds.currentKey = this.state.data.backgrounds.currentKey == allBgs.length-1 ? 0 :this.state.data.backgrounds.currentKey + 1;
        this.setState({data:this.state.data});
    }
    componentDidMount(){
        this.state.data.interval = setInterval(this._changeBg, 8000);
    }
    componentWillUnmount(){
        clearInterval(this.state.data.interval);
    }
    render() {
        let bgImage = {backgroundImage: "url(" + this.state.data.backgrounds.all[this.state.data.backgrounds.currentKey] + ")"};
        return(
            <div className="pageWrap home" style = {bgImage}>
               <div className="darkened">
                  <div className="logo">
                      <img src="images/como_logo_white.png" alt="Como Logo"/>
                  </div>
                   <div className="row text-center">
                       <div className="columns large-12">
                           <h1>Your Customer Loyalty Management Mobile App.</h1>
                           <p className="description">Branded mobile app with built-in engagement and rewards features.<br/> We provide the tips and guidance. You take control.</p>
                           <form>
                               <div className="row collapse">
                                   <Input className="borderLeft" foundationClasses="large-5 medium-5 columns" ref= "store" name="store" stateId="store" placeholder="Store name" isValid={this.state.data.payload.store.isValid} type="text" value={this.state.data.payload.store.value} onChange={this._setData} onFocus={this._stopBgAnimation} onBlur={this._handleValidation} onKeyUp={this._handleValidation} errorMsg='Please provide a valid store name' isRequired='true' validType='text'/>
                                   <Input className="borderNone" foundationClasses="large-5 medium-5 columns" name="email" ref="email" stateId="email" placeholder = "Email" type="email" isValid={this.state.data.payload.email.isValid} value={this.state.data.payload.email.value} onChange={this._setData} onFocus={this._stopBgAnimation} onKeyUp={this._handleValidation} onBlur={this._handleValidation} errorMsg='Please provide a valid email address' isRequired='true' validType='email'/>
                                   <Button className="borderRight postfix" foundationClasses="columns medium-2 large-2" buttonSize="large" btnText="Start" onClick={this._handleBtnClick}/>
                               </div>
                           </form>
                           <p className="grey">By clicking Start you agree to the <a className="terms" href="" target="_blank">terms &amp; conditions</a> of use</p>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}
export default Home;
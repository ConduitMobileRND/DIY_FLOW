import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import style from './style.scss';
import Handler from '../../api/handler';
import { FormBase } from 'react-serial-forms';
import Input from '../generalComponents/input';
import Button from '../generalComponents/button';
import Validator from 'validator';
import image1 from './images/hpBg1.jpg';
import image2 from './images/hpBg2.jpg';
import image3 from './images/hpBg3.jpg';
import image4 from './images/hpBg4.jpg';




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
        let cpTask = new Handler(this.state.data.id, "cp", {
            store: this.state.data.payload.store.value,
            email: this.state.data.payload.email.value
        });
        let cpReturnData = cpTask.handleData();
        let engineTask = new Handler(this.state.data.id, "engine");
        let engineReturnData = engineTask.handleData();
        if (engineReturnData.error || !engineReturnData.data.nextStepUri) {
            alert("OOPS... We didn't get a next page, fallback needed here");
            return;
        }
        this.state.data.to = engineReturnData.data.nextStepUri;
        localStorage.state = JSON.stringify(this.state.data.payload);
        this.props.history.pushState(null, this.state.data.to);
    }
    _handleValidation(props, e){
        console.log(props);
        //debugger;
        let isValid = true;
        let theValue = typeof e != "undefined" ? e.target.value.trim() : props.value.trim();
        if(props.isRequired && theValue == ""){
            isValid = false;
        }else {
            switch (props.validType) {
                case 'text':
                    isValid = true;
                    break;
                case 'email':
                    isValid = Validator.isEmail(theValue);
                    break;
            }
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
                   <img src="images/logo_como.svg" alt="Como Logo"/>
                  </div>
                   <div className="row text-center">
                       <div className="columns large-12">
                           <h1>Your customer Loyalty Management Mobile App.</h1>
                           <p className="description">Branded mobile app with built-in engagement and rewards features.<br/> We provide the tips and guidance. You take control.</p>
                           <form>
                               <div className="row collapse">
                                   <Input className="borderLeft" foundationClasses="large-5 columns" ref= "store" name="store" stateId="store" placeholder="Store name" isValid={this.state.data.payload.store.isValid} type="text" value={this.state.data.payload.store.value} onChange={this._setData} onBlur={this._handleValidation} errorMsg='Please provide a valid store name' isRequired='true' validType='text'/>
                                   <Input className="borderNone" foundationClasses="large-5 columns" name="email" ref="email" stateId="email" placeholder = "Email" type="email" isValid={this.state.data.payload.email.isValid} value={this.state.data.payload.email.value} onChange={this._setData} onBlur={this._handleValidation} errorMsg='Please provide a valid email address' isRequired='true' validType='email'/>
                                   <Button className="borderRight" foundationClasses="columns large-2" buttonSize="large" btnText="Start" onClick={this._handleBtnClick}/>
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
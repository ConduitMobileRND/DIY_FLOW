import React, { Component } from 'react';
import jQuery from 'jquery';
import ReactJQueryUI from 'react-jqueryui';
import Validator from 'validator';
import ValidateMe from '../utils/validateMe/validateMe';
import lodash from 'lodash';

import Home from "./home";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Finish from "./finish";
import AutoComplete from './generalComponents/autocomplete';
import animate from '../styles/animate.min.css';

import Constants from "./constants";

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

class Father extends Component {
    constructor(props) {
        super(props);
        let defaultColor = "white";
        this.state = {
            data: {
                HPBackgrounds:{
                    currentKey: 0,
                    all:  Constants.bgimages
                },
                form:{
                    email: {value: "", isValid: true},
                    store: {value:"", isValid: true},
                    facebook: {value: "", isValid: true},
                    areaCode: {value:this._getLocalCode(),isValid: true},
                    phoneLocal:{value:"", isValid:true},
                    website:{value:"",isValid:true},
                    category:{value:"", isValid:true},
                    businessAddress:{value:"", isValid:true},
                    info:{value:"", isValid:true},
                    addressDetails:{value:{
                        placeId:"",
                        lat:"",lng:""
                    }, isValid:true},
                    errorMessages:{
                        email:Constants.errorMessages.email.default,
                        store:Constants.errorMessages.store.default
                    },
                    options:{},
                    showFBOptions:true,
                    chosenFromFbOptions : false
                },
                unresolvedFbPage: false,
                fbData:{
                    about: "",
                    category: "",
                    id:"",
                    link:"",
                    location: {},
                    name:"",
                    picture:{},
                    website:""
                },
                fbUiThemes:[],
                schemes:[],
                phoneColors:{
                    upperColor: {defaultColor},
                    iconsColor: {defaultColor},
                    bgColor:{defaultColor},
                    brightness:"dark"
                },
                upperColorsSrc:"",
                iconsColorSrc:"",
                selectedScheme:"",
                paletteSelected: false,
                CPData:{
                    userId: "",
                    locationId: "",
                    token: "",
                    groupId: "",
                    branchId:"",
                    publishCode: "",
                    publishId: ""
                },
                defaultImages: [
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122611/DIY_default_chinesefood.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122615/DIY_default_deli.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122618/DIY_default_food.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122622/DIY_default_gift.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122629/DIY_default_offer.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122625/DIY_default_newage.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122632/DIY_default_optics.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122635/DIY_default_shopping.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122639/DIY_default_sport.png"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-content.como.com/comowebsite/2016/02/24122642/DIY_default_wine.png"}
                ],
                fbImages:[],
                allImages:[],
                selectedImages:[],
                imageOnScreen:"",
                selectedFromGalleryImageId:0,
                thumbGoTo:0,
                action: "initial",
                bgInterval: "",
                progressBarInterval: "",
                publishInterval:"",
                progressPercent:0,
                activePages:{
                    home: true,
                    step1: false,
                    step2: false,
                    step3:false
                },
                currentPage: "home"
            }
        };

        this._handleRegisterValidation = this._handleRegisterValidation.bind(this);
        this._handleFieldsValidation = this._handleFieldsValidation.bind(this);
        this._setData = this._setData.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._changeBg = this._changeBg.bind(this);
        this._stopBgAnimation = this._stopBgAnimation.bind(this);
        this._getLocalCode = this._getLocalCode.bind(this);
        this._handleGeoValidation = this._handleGeoValidation.bind(this);
        this._getLocationData = this._getLocationData.bind(this);
        this._isFBPageValid = this._isFBPageValid.bind(this);
        this._getUrl = this._getUrl.bind(this);
        this._setImages = this._setImages.bind(this);
       // this._moveProgressBar = this._moveProgressBar(this);
        this._postData = this._postData.bind(this);
        this._getData = this._getData.bind(this);
    }

    _moveProgressBar(_self){
        _self.state.data.progressPercent = _self.state.data.progressPercent+1;
        _self.setState({data:_self.state.data});
        if(_self.state.data.progressPercent == 96){
            clearInterval(_self.state.data.progressBarInterval);
        }

    }
    _getUISchemes(){
        let themeSchemes = [];
        let selectedThemeId= "";
        for(let i = 0; i < 3; i ++){
            if(this.state.data.fbUiThemes.length > 0){
                if(typeof this.state.data.fbUiThemes[i] != "undefined"){
                    themeSchemes.push(this.state.data.fbUiThemes[i]);
                    if(i == 0){
                        selectedThemeId = this.state.data.fbUiThemes[i].uipack_id;
                    }
                }else{
                    let ind = Math.floor(Math.random() * (Constants.defaultThemes.data.length + 1));
                    themeSchemes.push(Constants.defaultThemes.data[ind]);
                }
            }else{

                themeSchemes.push(Constants.defaultThemes.data[i]);

            }
        }
        return themeSchemes;
    }
    _getLocalCode(){
        /*TBD*/
        return "1";
    }
    _stopBgAnimation(){
        clearInterval(this.state.data.bgInterval);
    }

    _changeBg(){
        let animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
       /* let allBgs = this.state.data.HPBackgrounds.all;
        this.state.data.HPBackgrounds.currentKey = this.state.data.HPBackgrounds.currentKey == allBgs.length-1 ? 0 :this.state.data.HPBackgrounds.currentKey + 1;
        this.setState({data:this.state.data});*/
        let allBgs = this.state.data.HPBackgrounds.all;
        this.state.data.HPBackgrounds.currentKey = this.state.data.HPBackgrounds.currentKey == allBgs.length-1 ? 0 :this.state.data.HPBackgrounds.currentKey + 1;
       // this.state.data.HPBackgrounds.currentKey = this.state.data.HPBackgrounds.currentKey == allBgs.length-1 ? 0 :this.state.data.HPBackgrounds.currentKey + 1;
        let cur = this.state.data.HPBackgrounds.currentKey;
        let prevCurrent = this.state.data.HPBackgrounds.currentKey == 0 ? allBgs.length - 1 : this.state.data.HPBackgrounds.currentKey - 1;

        jQuery(".bgImage_"+cur).addClass("fadeIn").one(animationEnd, function(){
            jQuery(".bgImage_"+prevCurrent).removeClass("fadeIn");
        });

    }

    _handleRegisterValidation(obj, props, e){
        if(props.name == "email" && props.errorMsg == Constants.errorMessages.email.duplicate) {
            this.state.data.form.email.isValid = true;
            this.state.data.form.errorMessages.email = Constants.errorMessages.email.default;
            this._setData({data: this.state.data});
            return;
        }
        let validateTask = new ValidateMe();
        let isValid = validateTask.validateMe(props, e);
        if(typeof e != "undefined" && e.nativeEvent.type == "keyup" && isValid == false){
        //    jQuery(".home .btnWrap button").removeClass("loading");
            return;
        }
        this.state.data.form[props.stateId].isValid = isValid;
        this.setState({data: this.state.data});
    }
    _handleFieldsValidation(props, e){
         let isValid = true;
         let theValue = typeof e != "undefined" ? e.target.value.trim() : props.value.trim();
         if(!props.isRequired && theValue==""){
            isValid = true;
         }else if(props.isRequired && theValue == ""){
            isValid = false;
         }else {
            switch (props.validType) {
             case 'text':
                 isValid = true;
                break;
             case 'email':
                isValid = Validator.isEmail(theValue);
                break;
             case 'phone':
             case 'number':
                isValid = Validator.isNumeric(theValue);
                break;
             case 'url':
                isValid = Validator.isURL(theValue);
                break;
             case 'fb':
                return;
                break;
            }
        }
        if(props.validType != 'fb') {
            this.state.data.form[props.stateId].isValid = isValid;
            this.setState({data: this.state.data});
        }
    }
    _setData(obj, stateId, e){
        if(typeof e != "undefined") {
            let elem = e.target;
            if(elem.tagName == "SELECT"){
                if(jQuery(elem).val() != "")
                {
                    jQuery(elem).addClass("optionChosen");
                    this.state.data.form[stateId].isValid = true;
                }else{
                    jQuery(elem).removeClass("optionChosen");
                }
            }
            this.state.data.form[stateId].value = e.target.value;
            this.setState({data: this.state.data});
        }
    }
     _getValidationResults(obj){
         let formValid = true;
         if(this.state.data.action == "initial" || this.state.data.action == "register" || this.state.data.action == "sendForm") {

             for (var key in obj) {
                 if (this.state.data.action == "register") {
                     this._handleRegisterValidation(null, obj[key].props);
                 } else {
                     this._handleFieldsValidation(obj[key].props);
                 }
             }
             if (this.state.data.action == "sendForm") {
                 this._handleGeoValidation();
                 if (!this.state.data.form.businessAddress.isValid) {
                     formValid = false;
                 }
             }
             let stateObj = this.state.data.form;
             for (var key in obj) {
                 if (!stateObj[key].isValid) {
                     formValid = false;
                 }
             }
         }
         return formValid;
     }
    _handleBtnClick(obj, action, event){
        this.state.data.action = action;
        event.preventDefault();

        //forms validation
        let formValid = this._getValidationResults(obj);
        if (!formValid) {
            if (this.state.data.action == "register") {
                this.state.data.action = "initial";
            }
            formValid = true;
            return;
        }

        //communication with server - unique for each action (step)
        let sendData = {};
        switch(this.state.data.action){
            case "register":
                //set "loading" view
                jQuery("input[name='email']").parents(".inputWrap").removeClass("error");
                jQuery(".home form .btnWrap button").html("<img src='images/spinner_1.gif'/>").addClass("loading");
                //prepare data format for send
                sendData = {server: 3, displayName: this.state.data.form.store.value, email: this.state.data.form.email.value, app_lang: 1, phone_prefix: 1, timezone:'', ref:'diy'}
                this._sendData("POST", Constants.registerUrl, sendData);
                break;

            case "sendForm":
                //set "loading" view
                jQuery("#step1 form .btnWrap button").html("<img src='images/spinner_1.gif'/>").addClass("loading");
                //facebook flow - get data from server
                if(this.state.data.form.facebook.value != ""){
                    //get ui themes from server
                    sendData = {
                        fburl: this.state.data.fbData.link,
                        auth_location_id: this.state.data.CPData.locationId,
                        auth_location_version: 0,
                        token: this.state.data.CPData.token
                    }
                    this._sendData("GET", Constants.getUiThemesLink, sendData);
                    //get images from server
                    sendData = {
                        fburl: this.state.data.fbData.link,
                        auth_location_id: this.state.data.CPData.locationId,
                        auth_location_version: 0,
                        token: this.state.data.CPData.token,
                        skip_thumbs: "true"
                    }
                    this._sendData("GET", Constants.getFBImagesLink, sendData);
                //no-facebook flow - use default data
                }else{
                    this.state.data.fbUiThemes = [];
                    this._setUIDefaults(this);
                    this.state.data.currentPage = "step2";
                    this._getPage();
                }
                //send location data (step1 form data)
                let date = new Date();
                let thisMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
                let thisDate = date.getDate() < 10 ? "0"+(date.getDate()) : date.getDate();
                let thisHour = date.getHours() < 10 ? "0" + (date.getHours()) : date.getHours();
                let thisMinute = date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes();
                let thisSecond = date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds();
                let createDate = date.getFullYear()+"-"+ thisMonth + "-" + thisDate + " " + thisHour + ":" + thisMinute + ":" + thisSecond;

                sendData =  {data: {status:"success",code:200, codeStatus:"OK",
                    facebookPage:this.state.data.fbData.link,website:this.state.data.form.website.value, displayName:this.state.data.form.store.value,
                    generalInfo:this.state.data.form.info.value,colorscheme_id: "33855", phone:this.state.data.form.phoneLocal.value,phone_prefix:this.state.data.form.areaCode.value,
                    category:this.state.data.form.category.value, longDisplayName:this.state.data.form.store.value,addressName:this.state.data.form.businessAddress.value,
                    auth_location_id:this.state.data.CPData.locationId,auth_location_version:0,token:this.state.data.CPData.token,
                    data:  {data_id: 78654, timezone: 247, update_time: createDate, create_time: createDate, location_id:this.state.data.CPData.locationId, version: 0,zap_id : 12,
                    displayName: this.state.data.form.store.value, longDisplayName:this.state.data.form.store.value, email:this.state.data.form.email.value,category:this.state.data.form.category,
                    phone:this.state.data.form.phoneLocal.value,generalInfo_text_alignment:"",phone_prefix:this.state.data.form.areaCode.value, joinClubOptions: "JoinClubQuestion",
                    uipacks_font:1, app_lang:1,decimals_amount:2, decimals_amount_view_points:0, branchesRangeLimit:0}
                    },token:this.state.data.CPData.token,auth_location_id:this.state.data.CPData.locationId,auth_location_version:0};
                this._sendData("POST", Constants.updateLocationUrl, sendData);

                /*send branches update data*/
                sendData = {};
                if(this.state.data.CPData.branchId != "") {
                    sendData = {
                        data: {
                            addressName: this.state.data.form.businessAddress.value,
                            positionLong: this.state.data.form.addressDetails.value.lng,
                            positionLong: this.state.data.form.addressDetails.value.lat,
                            positionLat: this.state.data.form.addressDetails.value.lat,
                            address: this.state.data.form.businessAddress.value,
                            group_id: this.state.data.CPData.groupId,
                            branch_id: this.state.data.CPData.branchId
                        },
                        auth_location_id: this.state.data.CPData.locationId,
                        location_id: this.state.data.CPData.locationId,
                        auth_location_version: 0,
                        token: this.state.data.CPData.token
                    }
                }else {
                    //if there is no branch_id do not send it at all (sending an empty branch_id will cause an error)
                    sendData = {
                        data: {
                            addressName: this.state.data.form.businessAddress.value,
                            positionLong: this.state.data.form.addressDetails.value.lng,
                            positionLat: this.state.data.form.addressDetails.value.lat,
                            address: this.state.data.form.businessAddress.value,
                            group_id: this.state.data.CPData.groupId
                        },
                        auth_location_id: this.state.data.CPData.locationId,
                        location_id: this.state.data.CPData.locationId,
                        auth_location_version: 0,
                        token: this.state.data.CPData.token
                    }
                }
                this._sendData("POST",Constants.updateBranchUrl, sendData);
                break;
            case "getImages":
                let _self = this;
                /*send UI theme data*/
                let selectedKey=_.findIndex(this.state.data.schemes, function(o) { return o.constant_id == _self.state.data.selectedScheme; });
                let scheme = this.state.data.schemes[selectedKey];
                sendData = {data:scheme, auth_location_id:this.state.data.CPData.locationId, auth_location_version:0, token:this.state.data.CPData.token}
                this._sendData("POST",Constants.updateThemeUrl,sendData);
                this.state.data.currentPage = "step3";
                this._getPage();
                break;
            case "sendImages":
                let images = this.state.data.selectedImages;
                sendData = {data:[
                    {text:images[0].imageText, "order": 0, "targetName":images[0].image.image_id, "needToValidate":"N", "status":"published", "image_id": images[0].image.image_id},
                    {text:images[1].imageText, order: 1, targetName:images[1].image.image_id, needToValidate:"N", status:"published", image_id: images[1].image.image_id},
                    {text:images[2].imageText, order: 2, targetName:images[2].image.image_id, needToValidate:"N", status:"published", image_id: images[2].image.image_id},
                    {text:images[3].imageText, order: 3, targetName:images[3].image.image_id, needToValidate:"N", status:"published", image_id: images[3].image.image_id}],
                    token:this.state.data.CPData.token,auth_location_id:this.state.data.CPData.locationId, auth_location_version:0
                }
                this._sendData("POST", Constants.updateImagesUrl, sendData);
                this.state.data.currentPage = "step4";
                this._getPage();
                break;
            case "getPublished":
                this.state.data.currentPage = "finish";
                sendData = {
                    auth_location_id: this.state.data.CPData.locationId,
                    auth_location_version: 0,
                    token: this.state.data.CPData.token
                }
                this._sendData("GET", Constants.publishApp, sendData);
                this._getPage();
        }
        //this._sendData(sendMethod, sendURL, sendData);
    }
    _getColorSrc(palette){

        //get upper color (replace if white)
        let theUpperColorSrc = "pageHeaderBackgroundColorFrom";
        let upperColor = palette.pageHeaderBackgroundColorFrom;
        if(_.startsWith(upperColor,"rgba(255,255,255,")){
            theUpperColorSrc = "pageHeaderBackgroundColorTo"
        }
        //get icons color (replace if white)
        let theIconsColorSrc = "tileBackgroundColorFrom";
        let iconsColor = palette.tileBackgroundColorFrom;
        if(_.startsWith(iconsColor,"rgba(255,255,255,")){
            theIconsColorSrc = "locationColor"
        }
        return [theUpperColorSrc,theIconsColorSrc]
    }
    _toggleSelectedPalette(paletteId){

        this.state.data.paletteSelected = true;
        this.state.data.selectedScheme = paletteId;
        let index = this._getIndexByPaletteId(paletteId);
        this.state.data.phoneColors.upperColor = this.state.data.schemes[index][this.state.data.upperColorsSrc];
        this.state.data.phoneColors.iconsColor = this.state.data.schemes[index][this.state.data.iconsColorSrc];
        this.state.data.phoneColors.bgColor = this.state.data.schemes[index].backgroundImageOverlayColor;
        this.state.data.phoneColors.brightness = this.state.data.schemes[index].brightness;
        this.setState({data: this.state.data});
    }
    _getSelectedSchemeIndex(){
        var index = 0 ;
        for (let i in this.state.data.schemes){
            if(this.state.data.schemes[i].uipack_id == this.state.selectedScheme){
                index = i;
            }
        }
        return index;
    }
    _getIndexByPaletteId(paletteId){

        let index = 0;
        if(this.state.data.schemes.length == 0){
            return 0;
        }
        for(let i in this.state.data.schemes){
            if(typeof this.state.data.schemes[i] != "undefined" && this.state.data.schemes[i].uipack_id == paletteId){
                index = i;
            }
        }
        return index;
    }
    _postData(sendURL, data){
        let _self = this;
        jQuery.ajax({
            type: "POST",
            url: sendURL,
            data: data,
            success: function(response){
                switch(sendURL){
                    case Constants.registerUrl:
                        //user not created - reason for this is duplicate email
                        if (response.statusCode != "user_created") {
                            _self.state.data.form.errorMessages.email = Constants.errorMessages.email.duplicate;
                            _self.state.data.form.email.isValid = false;
                            _self.setState({data:_self.state.data});
                            jQuery(".home .btnWrap button").html("Start").removeClass("loading");
                            return;
                            //user created!
                        } else {
                            _self.state.data.CPData.userId = response.user_id;
                            _self.state.data.CPData.locationId = response.location_id;
                            _self.state.data.CPData.token = response.token;
                            _self.state.data.CPData.groupId = response.group_id;
                            //set the received location_id for default images objects
                            for(let i in _self.state.data.defaultImages){
                                _self.state.data.defaultImages[i].location_id = response.location_id
                            }
                            _self.state.data.currentPage = "step1";
                            _self._getPage();
                        }
                        break;
                    case Constants.updateLocationUrl:
                        if(typeof response.data != "undefined" && typeof response.data.branches_id != "undefined") {
                            _self.state.data.CPData.branchId = response.data.branch_id;
                        }
                        break;

                }
            },
            fail:function(response){
                alert("An error occurred. Please try again later");
            },
            dataType: "json"
        });
    }
    _formatQueryStr(data){
        let dataStr = "";
        for(let i in data){
            let partial = i + "=" + data[i] + "&";
            dataStr += partial;
        }
        return dataStr.slice(0, -1);
    }
    _setUIDefaults(_self){
        let schemes = _self._getUISchemes();
        let colorsSrc = _self._getColorSrc(schemes[0]);
        let upperColorsSrc = colorsSrc[0];
        let iconsColorSrc = colorsSrc[1];
        _self.state.data.schemes = schemes;
        _self.state.data.phoneColors.bgColor = schemes[0].backgroundImageOverlayColor;
        _self.state.data.phoneColors.upperColor = schemes[0][upperColorsSrc];
        _self.state.data.phoneColors.iconsColor = schemes[0][iconsColorSrc];
        _self.state.data.phoneColors.brightness = schemes[0].brightness;
        _self.state.data.upperColorsSrc = upperColorsSrc;
        _self.state.data.iconsColorSrc = iconsColorSrc;
        _self.setState({data:_self.state.data});
    }
    _getData(sendURL, data){
        let _self = this;
        let dataStr = this._formatQueryStr(data);
        return jQuery.get(sendURL+"?"+dataStr, function(response){
            if(sendURL == Constants.getUiThemesLink){

                if(typeof response.data != "undefined"  && response.data.length > 0){
                    _self.state.data.fbUiThemes = response.data;
                }
                _self._setUIDefaults(_self);
                _self.state.data.currentPage = "step2";
                _self._getPage();
            }else if(sendURL == Constants.getFBImagesLink){
                if(typeof response.data != "undefined" && response.data.length > 0){
                    _self.state.data.fbImages = response.data;
                }
                _self._setImages();
            }else if(sendURL = Constants.publishApp){
                if(typeof response.data != "undefined"){
                    _self.state.data.CPData.publishCode = response.data.appname;
                    _self.state.data.CPData.publishId = response.data.id;
                    _self._checkForPublished(_self);

                }


            }
        })
            .fail(function(){
                if(sendURL == Constants.getUiThemesLink){
                    _self._setUIDefaults(_self);
                    _self.state.data.currentPage = "step2";
                    _self._getPage();

                }else if(sendURL == Constants.getFBImagesLink){
                    _self._setImages();
                }
                //    alert("very bad");return;
            });

    }
    _sendData(sendMethod, sendURL,data){
        if(sendMethod == "POST"){
            this._postData(sendURL,data);
        }else{
            this._getData(sendURL, data);
        }
    }
    _setImages(){

        let allImages = [];
        let oddImages = this.state.data.fbImages;
        allImages = oddImages.concat(this.state.data.defaultImages);
        let selectedImages = [{image:allImages[0], imageText:Constants.defaultImgText, selected:false},{image:allImages[1], imageText:Constants.defaultImgText, selected:false},{image:allImages[2], imageText:Constants.defaultImgText, selected:false},{image:allImages[3], imageText:Constants.defaultImgText, selected:false}];
        this.state.data.allImages = allImages;
        this.state.data.selectedImages = selectedImages;
        this.state.data.imageOnScreen = allImages[0].url;
        this.setState({data:this.state.data});
    }
    _getLocationData(obj, suggest){

        if(typeof suggest == "undefined"){
            return;
        }
        if(typeof suggest == "string"){
            this.state.data.form.businessAddress.value = suggest;
        }else {
            this.state.data.form.businessAddress.value = suggest.label;
            this.state.data.form.addressDetails.value.placeId = suggest.placeId;
            this.state.data.form.addressDetails.value.lat = typeof suggest.location.lat != "undefined" ? suggest.location.lat : "0";
            this.state.data.form.addressDetails.value.lng = typeof suggest.location.lng != "undefined" ? suggest.location.lng : "0";
        }
        this._handleGeoValidation();
        this.setState({data:this.state.data});
    }
    _handleGeoValidation(){
        let isValid = true;
        if(jQuery("#geoInput").val() == ""){
            isValid = false;
        }
        this.state.data.form.businessAddress.isValid = isValid;
        this.setState({data: this.state.data});

    }

    _isFBPageValid(value){
        this._cleanAutoComplete(this);
        let _self = this;
        this._getUrl(value, 'page',function(){

            let answer = "";
            //query by name - always resolved
            if(typeof arguments[0].data != "undefined" && arguments[0].data.length > 0){
                answer = arguments[0].data;
                //query by url - resolved
            }else if(typeof arguments[0].id !="undefined" && typeof arguments[0].og_object == "undefined"){
                answer = arguments[0];
                //query by url - unresolved (data returned but it's not relevant)
            }else if(typeof arguments[0].id !="undefined" && typeof arguments[0].og_object != "undefined"){
                answer = {};
                answer.name = value;
            }
            if(answer != ""){
                _self.state.data.form.facebook.value = answer.name ? answer.name : answer.id;
                _self.state.data.form.facebook.isValid = true;
                _self._completeAutoComplete(answer);
            }else{
                _self.state.data.form.facebook.value = value;
            }

            _self.setState({data: _self.state.data});
        }, function(){

           // alert("failed");
        });

    }

    _isUrl(query){
        return Validator.isURL(query);
    }

    _getUrl(query,type,callback){
        let _self = this;
        //_self.state.data.form.facebook.isValid = true;
        _self.setState({data:_self.state.data});
        if(query == ""){
            this.state.data.form.showFBOptions = false;
            this.setState({data:this.state.data});
            return;
        }
       // let access = "257868791009583%7C945af5b9a3f7c8a33f64fcac44710a8a";
        let url="";
        if(!this._isUrl(query)) {
            url = "https://graph.facebook.com/search?"
            url += jQuery.param({
                q: query,
                type: type,
                access_token: Constants.fbAccessToken,
                fields: 'id,name,picture,category,description,link,website,about,hours,phone,location',
                limit: 10
            });
            return jQuery.get(url,callback);
        }else{
           let url = "https://graph.facebook.com/v2.1/?access_token="+Constants.fbAccessToken+"&id="+query;
           return jQuery.get(url, callback)

        }

    }
    _handleDynamicAutoComplete(props, e){
        if(typeof e == "undefined"){
            return;
        }

        this.state.data.form.showFBOptions = true;
        this.state.data.form.chosenFromFbOptions = false;
        this.setState({data:this.state.data});
        let _self = this;
        let fbVal = e.target.value;
        this._getUrl(e.target.value,'page',function(){
            /*for 2 different queries (by name or by url) fb graph returns answer in different ways so need to check what is returned here*/

            let answer = "";
            if(typeof arguments[0].data != "undefined" && arguments[0].data.length > 0){
                answer = arguments[0].data;
            }else if(typeof arguments[0].id !="undefined"){
                answer = arguments[0];
            }
            if(answer != "") {
                _self.state.data.form.options = answer;
            }else{
                _self.state.data.unresolvedFbPage = true;
            }
            _self.setState({data:_self.state.data});
        });

    }
    _completeAutoComplete(option){
        if(typeof option.name == "undefined"){
            return;
        }
        this._cleanAutoComplete(this);
        this.state.data.form.facebook.value = option.name ? option.name : "";
        if(option.about){
            this.state.data.form.info.value = option.about;

        }else if(option.description){
            this.state.data.form.info.value = option.description;
        }

        this.state.data.form.website.value = option.website ? option.website : "";
        if(option.category && _.find(Constants.businessCategories, {value:option.category})) {
            this.state.data.form.category.value = option.category ? option.category : "";
        }

        if(option.phone) {
            let purePhone = option.phone.replace(/\D/g, '');
            this.state.data.form.phoneLocal.value = purePhone;
        }
        let locationStr = "";
        if(option.location){
            locationStr = option.location.street ? option.location.street : "";
            locationStr += option.location.city ? ", "+option.location.city : "";
            locationStr += option.location.state ? ", "+option.location.state : "";
            locationStr += option.location.zip ? ", "+option.location.zip : "";

            this.state.data.form.businessAddress.value = locationStr;
        }
        this.state.data.form.showFBOptions = false;
        this.state.data.form.chosenFromFbOptions = option;
        this.state.data.fbData.about = option.about;
        this.state.data.fbData.category = option.category;
        this.state.data.fbData.id = option.id;
        this.state.data.fbData.link = option.link;
        this.state.data.fbData.location = option.location;
        this.state.data.fbData.name = option.name;
        this.state.data.fbData.picture = option.picture;
        this.state.data.fbData.website = option.website;
        /* addressDetails:{value:{
         placeId:"",
         lat:"",lng:""*/
        this.state.data.form.addressDetails.value.placeId = locationStr;
        if(option.location){
            this.state.data.form.addressDetails.value.lat = option.location.latitude;
            this.state.data.form.addressDetails.value.lng = option.location.longitude;
        }
        if(typeof option.location !="undefined" &&(option.location.latitude == "" || option.location.longitude == "")){
            this.state.data.form.businessAddress.value = "";
        }
        this.setState({data: this.state.data});
    }
    _cleanAutoComplete(_self){


      /*  Object.keys(this.state.data.Object.keys(this.state.data.form).forEach(function(key){
            let obj = _self.state.data.form[key];
            obj.value= "";
            obj.isValid = true;
        });*/
        let fieldsToClean = ["phoneLocal","website","category","businessAddress","info"]
        for(let key in fieldsToClean){
            this.state.data.form[fieldsToClean[key]].value = "";
            this.state.data.form[fieldsToClean[key]].isValid = true;
        }
        this.state.data.form.areaCode.value = this._getLocalCode();
        this.state.data.form.areaCode.isValid = true;
        this.state.data.form.addressDetails.value.placeId = "";
        this.state.data.form.addressDetails.value.lat = "";
        this.state.data.form.addressDetails.value.lng = "";
        this.state.data.form.addressDetails.isValid = true;

        this.setState({data:this.state.data});
    }
    _handleStaticAutoComplete(props, e){
        if(typeof e == "undefined"){
            return;
        }
        let dynamicPart = e.target.value;
        let regex = new RegExp("^" + dynamicPart+ ".*", "g");
        this.props.areaCodeOptions = _filter(props.options, 'value'.match(regex));
        this.setState({data: this.state.data});
    }

    _showAutoComplete(){
        if(this.state.data.form.showFBOptions){
            return(
                <AutoComplete options={this.state.data.form.options} onClick={this._completeAutoComplete.bind(this)}/>
            )
        }
    }
    _onWrapperClick(e){

        if(e.target.name == "facebook" || e.target.className=="autoCompleteList" || this.state.data.form.chosenFromFbOptions || e.target.tagName == "BUTTON"){
            return;
        }
        if(jQuery("input[name='facebook']").val() == ""){
            this._cleanAutoComplete(this);
            return;
        }
        this.state.data.form.showFBOptions = false;
        this.setState({data:this.state.data});
        let fbValid = this._isFBPageValid(jQuery("input[name='facebook']").val());

    }
    _getPage(){
        let _self = this;
        this._centerContent(this);
        //entrance animations are unique per page
        switch (this.state.data.currentPage){
            case "home":
                jQuery("#root").css("overflow-y","hidden");
                jQuery(".home .vAlign").addClass("animated fadeInUp");
                break;
            case "step1":
                jQuery("#root").css("overflow-y","auto");
                jQuery("#step1.pageWrap .vAlign").css("opacity",0);
                jQuery(".pageWrap.home").animate({left:"-100%"}, "easeOutCubic");
                jQuery("#step1.pageWrap").animate({left:"0"},"easeOutCubic", function(){
                    jQuery("#step1.pageWrap .vAlign").css("right","-15%");
                    jQuery("#step1.pageWrap .vAlign").animate({right:0,opacity:1},Constants.wrapAnimateTime, "easeOutCubic");
                    jQuery("#root").css("background-color","#08b9e4");
                    jQuery("#step1 .pagination").css("display","block").addClass("animated fadeIn");
                    jQuery("#step1 .bottomLeftImg").css("display","block").addClass("animated fadeIn");
                });
                break;
            case "step2":
                jQuery("#step2 .phone").css("opacity",0);
                jQuery(".paletteWrap").each(function(){
                    jQuery(this).css("opacity",0);
                });
                jQuery("#step2 .vAlign").css("opacity",0);
                jQuery(".pageWrap#step1").animate({left:"-100%"},"easeOutCubic");
                jQuery("#step1 .pagination").css("display","none").addClass("animated fadeOut");
                jQuery("#step1 .bottomLeftImg").css("display","none").addClass("animated fadeOut");
                jQuery(".pageWrap#step2").animate({left:"0"}, "easeOutCubic", function(){
                    jQuery("#step2.pageWrap .vAlign").css("right","-15%");
                    jQuery("#step2.pageWrap .vAlign").animate({right:0,opacity:1}, Constants.itemAnimateTime, "easeOutCubic");
                    setTimeout(function(){
                        jQuery("#step2 .phone").addClass("animated fadeInRight").one(Constants.animationEnd, function(){
                            jQuery("#step2 .phone").css("opacity",1);
                            jQuery(".paletteWrap:nth-child(1)").animate({opacity:1}, Constants.itemAnimateTime, "easeOutCubic");
                            setTimeout(function(){
                                jQuery(".paletteWrap:nth-child(2)").animate({opacity:1},Constants.itemAnimateTime, "easeOutCubic");
                            },180);
                            setTimeout(function() {
                                jQuery(".paletteWrap:nth-child(3)").animate({opacity:1},Constants.itemAnimateTime, "easeOutCubic");
                            },380);

                        });
                    },200);
                    jQuery("#root").css("background-color","#ffffff");
                    jQuery("#step2 .pagination").css("display","block").addClass("animated fadeIn");
                    jQuery("#step2 .bottomLeftImg").css("display","block").addClass("animated fadeIn");
                });
                break;
            case "step3":
                var imagePageInterval = setInterval(function(){
                    /*if I received images already or have no facebook filled or didn't get themes from facebook (cannot get data from facebook for this name)*/
                    if(_self.state.data.fbImages.length > 0 || _self.state.data.form.facebook.value == "" || _self.state.data.fbUiThemes.length == 0){
                        if(_self.state.data.form.facebook.value == ""){
                            _self._setImages();
                        }
                        clearInterval(imagePageInterval);

                        jQuery("#step3 .vAlign").css("opacity",0);
                        jQuery(".imageWrap").each(function(){
                            jQuery(this).css("opacity",0);
                        });
                        jQuery("#step2 .pagination").css("display","none").addClass("animated fadeOut");
                        jQuery("#step2 .bottomLeftImg").css("display","none").addClass("animated fadeOut");
                        jQuery("#step2.pageWrap").animate({left:"-100%"},"easeOutCubic");
                        jQuery("#step2 .vAlign").animate({opacity:0});
                        jQuery(".pageWrap#step3").animate({left:"0"},"easeOutCubic", function(){
                            jQuery("#step3.pageWrap .vAlign").css("right","-15%");
                            jQuery("#step3.pageWrap .vAlign").animate({right:0,opacity:1}, 300, "easeOutCubic",function(){
                                jQuery("#step3 .phone").css("opacity",1);
                                jQuery("#step3 .imageWrap:nth-child(1)").animate({"opacity":1}, 1200,"easeOutCubic");
                                setTimeout(function(){
                                    jQuery("#step3 .imageWrap:nth-child(2)").animate({"opacity":1}, 1200,"easeOutCubic");
                                },400);
                                setTimeout(function(){
                                    jQuery("#step3 .imageWrap:nth-child(3)").animate({"opacity":1}, 1200, "easeOutCubic");
                                },600);
                                setTimeout(function(){
                                    jQuery("#step3 .imageWrap:nth-child(4)").animate({"opacity":1}, 1200,"easeOutCubic");
                                },800);
                            });

                            jQuery("#step3 .pagination").addClass("visible");
                            jQuery("#root").css("background-color", "#f1f1f1");
                        });

                    }else{
                        console.log("no images yet");
                    }
                },1000);

                break;
            case "step4":
                jQuery(".slider").removeClass("show");
                jQuery("#step4.pageWrap .vAlign").css("opacity",0);
                jQuery("#step3 .pagination").css("display","none").addClass("animated fadeOut");
                jQuery("#step3.pageWrap").animate({left:"-100%"}, "easeOutCubic");
                jQuery("#step4.pageWrap").animate({left:"0"}, "easeOutCubic",function(){
                    jQuery("#step4.pageWrap .vAlign").css("right","-15%");
                    jQuery("#step4.pageWrap .vAlign").animate({right:0,opacity:1}, Constants.wrapAnimateTime, "easeOutCubic",function(){
                        jQuery("#step4 .phoneWrap:nth-child(1)").children(".device").css({"right":"-50%px","opacity":"0"}).animate({opacity: 1, "right": 0},1200,"easeOutCubic");
                        setTimeout(function(){
                            jQuery("#step4 .phoneWrap:nth-child(2)").children(".device").css({"right":"-50%px","opacity":"0"}).animate({opacity: 1, "right": 0},1200,"easeOutCubic");
                        },400);
                        setTimeout(function(){
                            jQuery("#step4 .phoneWrap:nth-child(3)").children(".device").css({"right":"-50%px","opacity":"0"}).animate({opacity: 1, "right": 0},1200,"easeOutCubic");
                        },600);
                        setTimeout(function(){
                            jQuery("#step4 .phoneWrap:nth-child(4)").children(".device").css({"right":"-50%px","opacity":"0"}).animate({opacity: 1, "right": 0},1200,"easeOutCubic");
                        },800);
                    });
                });
                jQuery("#root").css("background-color","#f1f1f1");
                jQuery("#step4 .pagination").css("display","block").addClass("animated fadeIn");
                jQuery("#step4 .bottomLeftImg").css("display","block").addClass("animated fadeIn");

                break;
            case "finish":
                jQuery("#step4 .pagination").css("display","none").addClass("animated fadeOut");
                jQuery("#finish .vAlign").css("opacity",1);
                jQuery("#finish .animationWrap").css("opacity",0);
                jQuery("#step4.pageWrap").animate({left:"-100%"}, "easeOutCubic");
                jQuery("#finish.pageWrap").animate({left:"0"}, "easeOutCubic",function(){
                    jQuery("#finish .animationWrap").css("max-width","100px").css("top","95px").animate({opacity: 1, "max-width": 270, top:0}, 1000,"easeOutBack",function() {
                        setTimeout(function () {
                            _self.state.data.progressBarInterval = setInterval(function () {
                                _self._moveProgressBar(_self);
                                jQuery("#finish .animatedImg").animate({opacity:1},Constants.itemAnimateTime,"easeOutCubic");
                            }, 500);
                        });
                    },500);
                });
                break;

        }
    }
    _checkForPublished(_self){

        _self.state.data.publishInterval = setInterval(function(){
            jQuery.get(Constants.getPublishStatus + _self.state.data.CPData.publishId+"?auth_location_id="+_self.state.data.CPData.locationId+"&auth_location_version=0&token="+_self.state.data.CPData.token, function(response){

                if(typeof response.data != "undefined" && response.data.stored_request != "undefined" && response.data.stored_request.status == "done"){
                    clearInterval(_self.state.data.publishInterval);
                    _self._getLastFrame();
                }else{
                    console.log("not published yet");
                }
            })
        },2000);
    }
    _centerContent(){
        let _self = this;
        //get window height and width
        let windowH = jQuery(window).height();
        let windowW = jQuery(window).width();
        jQuery("#root").css("width", windowW);
        //get current page
        let pageId = _self.state.data.currentPage;
        //center page vertically
        let targetElem = jQuery("#" + pageId + " .vAlign");
        let vTop = 0;
        let targetElemHeight = parseInt(targetElem.css("height"));
        vTop = (windowH - targetElemHeight)/2 > 20 ? (windowH - targetElemHeight)/2 : 20; //minimum margin top 20 px
        if(_self.state.data.currentPage == "home"){
            vTop = vTop - 74;
        }
        targetElem.css("top", vTop + "px");
    }


    _toggleSlider(event){
        let elemObj = jQuery(event.target);
        if(elemObj.hasClass("blanket") || elemObj.hasClass("thumb") || elemObj.hasClass("slick-next") || elemObj.hasClass("slick-prev")){
            return;
        }else{
            jQuery(".slider").removeClass("show");
        }
    }
    _onClickThumb(obj,item, event){
        jQuery(".thumbWrap").removeClass("selectedThumb");
        jQuery(event.target).parents(".thumbWrap").addClass("selectedThumb");
        let selectedText = jQuery(".imageWrap.selected").find("input.imageDescription").val();

        let images = this.state.data.allImages;
        let theEnteringImageObj = {};
        for (let i in images){
            if(images[i].image_id == item.id){
                theEnteringImageObj = {image: images[i], imageText: selectedText, selected: true};
            }
        }
        for(let i in this.state.data.selectedImages){
            if(this.state.data.selectedImages[i].selected == true){
                this.state.data.selectedImages[i] = theEnteringImageObj;
            }
        }
        this.state.data.imageOnScreen = theEnteringImageObj.image.url;
        let thumbIndex = jQuery(event.target).attr("id").split("_")[1];
        this.state.data.thumbGoTo = thumbIndex;
        this.setState({data:this.state.data});
        return;
    }
    _selectImage(index,imageId,event){

        if(this.state.data.selectedImages[index].selected == true){
            if(jQuery(".slider").hasClass("show")){
                jQuery(".slider").removeClass("show");
            }else{
                this._showSlider();
            }
            return;
        }
        /*remove selected from all images*/
        for(let i in this.state.data.selectedImages){
            this.state.data.selectedImages[i].selected = false;
        }

        if(!jQuery(".thumbWrap.selectedThumb").hasClass("thumbId_"+imageId)) {
            jQuery(".thumbWrap").removeClass("selectedThumb");
        }
        /*add selected to the current image*/

        this.state.data.selectedImages[index].selected = true;
        this.state.data.imageOnScreen = this.state.data.selectedImages[index].image.url;

        this.state.data.selectedFromGalleryImageId = imageId;
        this.setState({data:this.state.data});
        this._showSlider();

    }
    _showSlider(){

        jQuery(".slider").addClass("show");
        /*check if slider is in view, if not scroll down to it*/
        let visibleSliderHeight = 127;
        let offset = jQuery(".slider").offset().top + visibleSliderHeight - jQuery(window).scrollTop();
        if(offset > window.innerHeight){
            jQuery("html,body").animate({scrollTop:offset},1000,function(){
                jQuery(".pageWrap").css("min-height",jQuery(document).height());
            });
        }
    }
    _toggleClass(options){
        if(options.action == "add"){
            jQuery("."+options.className).addClass(options.toggleClass);
        }else{
            jQuery("."+options.className).removeClass(options.toggleClass);
        }
    }
    _onTextInputBlur(index, classParams, event){
        index = index.index;
        this._toggleClass(classParams);
        this.state.data.selectedImages[index].imageText = event.target.value;
        this.setState({data:this.state.data});
    }

    _getLastFrame(){
        let _self = this;
        clearInterval( this.state.data.progressBarInterval);
        this.state.data.progressBarInterval = setInterval(function(){
            _self.state.data.progressPercent = 100;
            _self.setState({data:_self.state.data});
            if(_self.state.data.progressPercent > 99){
                clearInterval(_self.state.data.progressBarInterval);
                jQuery(".animatedImg").addClass("animated fadeOut").one(Constants.animationEnd, function(){
                    jQuery("#finish .animationWrap").css("max-width","270px").css("top","0").animate({opacity: 0, "max-width": 100, top:0}, 1000,"easeOutBack",function() {
                        _self._showPublished();
                    });
                })


            }
        },1);
    }
    _showPublished(){
        jQuery("#finishContentWrap1").addClass("animated fadeOut").one(Constants.animationEnd, function(){
            jQuery("#finishContentWrap1").css("display","none");
        });
        jQuery("#finishContentWrap2").css("display","block").addClass("animated fadeIn");
        jQuery("#finish h1").text("Great! You're done!")
        jQuery("#finish .titleWrap p").text("Download Como Preview App and use your email and password");
    }
    componentDidMount(){
        this._centerContent = this._centerContent.bind(this);
        //load first page (home)
        if(this.state.data.currentPage == "home") {
            this.state.data.bgInterval = setInterval(this._changeBg, 8000);
        }
        this._getPage();

        window.addEventListener("resize", this._centerContent.bind(this));
    }
    _switchPageDev(step){
        this.state.data.currentPage = step;
        if(step == "step2"){
            this._setUIDefaults(this);
        }
        this._getPage();
    }
    render(){
        return(
            <div className="allPagesWrap">
                <div style={{display:"none",position:"fixed", top: "20px", left: "2px",backgroundColor:"pink", width:"100px", height:"75px",zIndex:"9"}}>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step1")}>Go to Step 1</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step2")}>Go to Step 2</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step3")}>Go to Step 3</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step4")}>Go to Step 4</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "finish")}>Go to Publish</div>
                </div>
                <Home
                    backgrounds={this.state.data.HPBackgrounds}
                    handleValidation = {this._handleRegisterValidation}
                    form = {this.state.data.form}
                    setData = {this._setData}
                    handleBtnClick = {this._handleBtnClick}
                    show = {this.state.data.activePages.home}
                    onFocus = {this._stopBgAnimation}
                />
                <Step1
                    handleValidation = {this._handleFieldsValidation}
                    form = {this.state.data.form}
                    setData = {this._setData}
                    handleBtnClick = {this._handleBtnClick}
                    areaCodeOptions = {Constants.areaCodeOptions}
                    handleGeoValidation = {this._handleGeoValidation}
                    getLocationData = {this._getLocationData}
                    businessCategories = {Constants.businessCategories}
                    handleDynamicAutoComplete = {this._handleDynamicAutoComplete.bind(this)}
                    handleStaticAutoComplete = {this._handleStaticAutoComplete.bind(this)}
                    showAutoComplete = {this._showAutoComplete.bind(this)}
                    onWrapperClick = {this._onWrapperClick.bind(this)}
                    show = {this.state.data.activePages.step1}
                />
                <Step2
                    show = {this.state.data.activePages.step2}
                    schemes = {this.state.data.schemes}
                    handleBtnClick = {this._handleBtnClick}
                    phoneColors = {this.state.data.phoneColors}
                    iconsColorSrc = {this.state.data.iconsColorSrc}
                    upperColorsSrc = {this.state.data.upperColorsSrc}
                    selectedScheme = {this.state.data.selectedScheme}
                    onPaletteClick = {this._toggleSelectedPalette.bind(this)}
                    getIndexByPaletteId = {this._getIndexByPaletteId.bind(this)}
                    paletteSelected = {this.state.data.paletteSelected}
                />
                <Step3
                    phoneColors = {this.state.data.phoneColors}
                    onPageClick = {this._toggleSlider}
                    imageOnScreen = {this.state.data.imageOnScreen}
                    selectedImages = {this.state.data.selectedImages}
                    selectedFromGalleryImageId = {this.state.data.selectedFromGalleryImageId}
                    allImages = {this.state.data.allImages}
                    thumbGoTo = {this.state.data.thumbGoTo}
                    onClickThumb = {this._onClickThumb.bind(this)}
                    selectImage = {this._selectImage.bind(this)}
                    toggleClass = {this._toggleClass}
                    onTextInputBlur = {this._onTextInputBlur.bind(this)}
                    handleBtnClick = {this._handleBtnClick}
                />
                <Step4  phoneColors = {this.state.data.phoneColors} handleBtnClick = {this._handleBtnClick}/>
                <Finish handleBtnClick = {this._handleBtnClick} progressPercent={this.state.data.progressPercent} code={this.state.data.CPData.publishCode} email = {this.state.data.form.email.value}/>
            </div>
        )
    }
}
export default Father;
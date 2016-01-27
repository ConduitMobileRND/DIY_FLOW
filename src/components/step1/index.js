import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './step1.scss';
import AutoComplete from '../generalComponents/autocomplete';
import Input from '../generalComponents/input';
import Select from '../generalComponents/select';
import Textarea from '../generalComponents/textarea';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Validator from 'validator';
import Handler from '../../api/handler';
import Isvg from 'react-inlinesvg';

const areaCodeOptions = [{"id":"Israel","value":"972","code":"IL"},{"id":"Afghanistan","value":"93","code":"AF"},{"id":"Albania","value":"355","code":"AL"},{"id":"Algeria","value":"213","code":"DZ"},{"id":"AmericanSamoa","value":"1684","code":"AS"},{"id":"Andorra","value":"376","code":"AD"},{"id":"Angola","value":"244","code":"AO"},{"id":"Anguilla","value":"1264","code":"AI"},{"id":"Antigua and Barbuda","value":"1268","code":"AG"},{"id":"Argentina","value":"54","code":"AR"},{"id":"Armenia","value":"374","code":"AM"},{"id":"Aruba","value":"297","code":"AW"},{"id":"Australia","value":"61","code":"AU"},{"id":"Austria","value":"43","code":"AT"},{"id":"Azerbaijan","value":"994","code":"AZ"},{"id":"Bahamas","value":"1242","code":"BS"},{"id":"Bahrain","value":"973","code":"BH"},{"id":"Bangladesh","value":"880","code":"BD"},{"id":"Barbados","value":"1246","code":"BB"},{"id":"Belarus","value":"375","code":"BY"},{"id":"Belgium","value":"32","code":"BE"},{"id":"Belize","value":"501","code":"BZ"},{"id":"Benin","value":"229","code":"BJ"},{"id":"Bermuda","value":"1441","code":"BM"},{"id":"Bhutan","value":"975","code":"BT"},{"id":"Bosnia and Herzegovina","value":"387","code":"BA"},{"id":"Botswana","value":"267","code":"BW"},{"id":"Brazil","value":"55","code":"BR"},{"id":"British Indian Ocean Territory","value":"246","code":"IO"},{"id":"Bulgaria","value":"359","code":"BG"},{"id":"Burkina Faso","value":"226","code":"BF"},{"id":"Burundi","value":"257","code":"BI"},{"id":"Cambodia","value":"855","code":"KH"},{"id":"Cameroon","value":"237","code":"CM"},{"id":"Canada","value":"1","code":"CA"},{"id":"Cape Verde","value":"238","code":"CV"},{"id":"Cayman Islands","value":" 345","code":"KY"},{"id":"Central African Republic","value":"236","code":"CF"},{"id":"Chad","value":"235","code":"TD"},{"id":"Chile","value":"56","code":"CL"},{"id":"China","value":"86","code":"CN"},{"id":"Christmas Island","value":"61","code":"CX"},{"id":"Colombia","value":"57","code":"CO"},{"id":"Comoros","value":"269","code":"KM"},{"id":"Congo","value":"242","code":"CG"},{"id":"Cook Islands","value":"682","code":"CK"},{"id":"Costa Rica","value":"506","code":"CR"},{"id":"Croatia","value":"385","code":"HR"},{"id":"Cuba","value":"53","code":"CU"},{"id":"Cyprus","value":"537","code":"CY"},{"id":"Czech Republic","value":"420","code":"CZ"},{"id":"Denmark","value":"45","code":"DK"},{"id":"Djibouti","value":"253","code":"DJ"},{"id":"Dominica","value":"1767","code":"DM"},{"id":"Dominican Republic","value":"1849","code":"DO"},{"id":"Ecuador","value":"593","code":"EC"},{"id":"Egypt","value":"20","code":"EG"},{"id":"El Salvador","value":"503","code":"SV"},{"id":"Equatorial Guinea","value":"240","code":"GQ"},{"id":"Eritrea","value":"291","code":"ER"},{"id":"Estonia","value":"372","code":"EE"},{"id":"Ethiopia","value":"251","code":"ET"},{"id":"Faroe Islands","value":"298","code":"FO"},{"id":"Fiji","value":"679","code":"FJ"},{"id":"Finland","value":"358","code":"FI"},{"id":"France","value":"33","code":"FR"},{"id":"French Guiana","value":"594","code":"GF"},{"id":"French Polynesia","value":"689","code":"PF"},{"id":"Gabon","value":"241","code":"GA"},{"id":"Gambia","value":"220","code":"GM"},{"id":"Georgia","value":"995","code":"GE"},{"id":"Germany","value":"49","code":"DE"},{"id":"Ghana","value":"233","code":"GH"},{"id":"Gibraltar","value":"350","code":"GI"},{"id":"Greece","value":"30","code":"GR"},{"id":"Greenland","value":"299","code":"GL"},{"id":"Grenada","value":"1473","code":"GD"},{"id":"Guadeloupe","value":"590","code":"GP"},{"id":"Guam","value":"1671","code":"GU"},{"id":"Guatemala","value":"502","code":"GT"},{"id":"Guinea","value":"224","code":"GN"},{"id":"Guinea-Bissau","value":"245","code":"GW"},{"id":"Guyana","value":"595","code":"GY"},{"id":"Haiti","value":"509","code":"HT"},{"id":"Honduras","value":"504","code":"HN"},{"id":"Hungary","value":"36","code":"HU"},{"id":"Iceland","value":"354","code":"IS"},{"id":"India","value":"91","code":"IN"},{"id":"Indonesia","value":"62","code":"ID"},{"id":"Iraq","value":"964","code":"IQ"},{"id":"Ireland","value":"353","code":"IE"},{"id":"Italy","value":"39","code":"IT"},{"id":"Jamaica","value":"1876","code":"JM"},{"id":"Japan","value":"81","code":"JP"},{"id":"Jordan","value":"962","code":"JO"},{"id":"Kazakhstan","value":"7 7","code":"KZ"},{"id":"Kenya","value":"254","code":"KE"},{"id":"Kiribati","value":"686","code":"KI"},{"id":"Kuwait","value":"965","code":"KW"},{"id":"Kyrgyzstan","value":"996","code":"KG"},{"id":"Latvia","value":"371","code":"LV"},{"id":"Lebanon","value":"961","code":"LB"},{"id":"Lesotho","value":"266","code":"LS"},{"id":"Liberia","value":"231","code":"LR"},{"id":"Liechtenstein","value":"423","code":"LI"},{"id":"Lithuania","value":"370","code":"LT"},{"id":"Luxembourg","value":"352","code":"LU"},{"id":"Madagascar","value":"261","code":"MG"},{"id":"Malawi","value":"265","code":"MW"},{"id":"Malaysia","value":"60","code":"MY"},{"id":"Maldives","value":"960","code":"MV"},{"id":"Mali","value":"223","code":"ML"},{"id":"Malta","value":"356","code":"MT"},{"id":"Marshall Islands","value":"692","code":"MH"},{"id":"Martinique","value":"596","code":"MQ"},{"id":"Mauritania","value":"222","code":"MR"},{"id":"Mauritius","value":"230","code":"MU"},{"id":"Mayotte","value":"262","code":"YT"},{"id":"Mexico","value":"52","code":"MX"},{"id":"Monaco","value":"377","code":"MC"},{"id":"Mongolia","value":"976","code":"MN"},{"id":"Montenegro","value":"382","code":"ME"},{"id":"Montserrat","value":"1664","code":"MS"},{"id":"Morocco","value":"212","code":"MA"},{"id":"Myanmar","value":"95","code":"MM"},{"id":"Namibia","value":"264","code":"NA"},{"id":"Nauru","value":"674","code":"NR"},{"id":"Nepal","value":"977","code":"NP"},{"id":"Netherlands","value":"31","code":"NL"},{"id":"Netherlands Antilles","value":"599","code":"AN"},{"id":"New Caledonia","value":"687","code":"NC"},{"id":"New Zealand","value":"64","code":"NZ"},{"id":"Nicaragua","value":"505","code":"NI"},{"id":"Niger","value":"227","code":"NE"},{"id":"Nigeria","value":"234","code":"NG"},{"id":"Niue","value":"683","code":"NU"},{"id":"Norfolk Island","value":"672","code":"NF"},{"id":"Northern Mariana Islands","value":"1670","code":"MP"},{"id":"Norway","value":"47","code":"NO"},{"id":"Oman","value":"968","code":"OM"},{"id":"Pakistan","value":"92","code":"PK"},{"id":"Palau","value":"680","code":"PW"},{"id":"Panama","value":"507","code":"PA"},{"id":"Papua New Guinea","value":"675","code":"PG"},{"id":"Paraguay","value":"595","code":"PY"},{"id":"Peru","value":"51","code":"PE"},{"id":"Philippines","value":"63","code":"PH"},{"id":"Poland","value":"48","code":"PL"},{"id":"Portugal","value":"351","code":"PT"},{"id":"Puerto Rico","value":"1939","code":"PR"},{"id":"Qatar","value":"974","code":"QA"},{"id":"Romania","value":"40","code":"RO"},{"id":"Rwanda","value":"250","code":"RW"},{"id":"Samoa","value":"685","code":"WS"},{"id":"San Marino","value":"378","code":"SM"},{"id":"Saudi Arabia","value":"966","code":"SA"},{"id":"Senegal","value":"221","code":"SN"},{"id":"Serbia","value":"381","code":"RS"},{"id":"Seychelles","value":"248","code":"SC"},{"id":"Sierra Leone","value":"232","code":"SL"},{"id":"Singapore","value":"65","code":"SG"},{"id":"Slovakia","value":"421","code":"SK"},{"id":"Slovenia","value":"386","code":"SI"},{"id":"Solomon Islands","value":"677","code":"SB"},{"id":"South Africa","value":"27","code":"ZA"},{"id":"South Georgia and the South Sandwich Islands","value":"500","code":"GS"},{"id":"Spain","value":"34","code":"ES"},{"id":"Sri Lanka","value":"94","code":"LK"},{"id":"Sudan","value":"249","code":"SD"},{"id":"Suriname","value":"597","code":"SR"},{"id":"Swaziland","value":"268","code":"SZ"},{"id":"Sweden","value":"46","code":"SE"},{"id":"Switzerland","value":"41","code":"CH"},{"id":"Tajikistan","value":"992","code":"TJ"},{"id":"Thailand","value":"66","code":"TH"},{"id":"Togo","value":"228","code":"TG"},{"id":"Tokelau","value":"690","code":"TK"},{"id":"Tonga","value":"676","code":"TO"},{"id":"Trinidad and Tobago","value":"1868","code":"TT"},{"id":"Tunisia","value":"216","code":"TN"},{"id":"Turkey","value":"90","code":"TR"},{"id":"Turkmenistan","value":"993","code":"TM"},{"id":"Turks and Caicos Islands","value":"1649","code":"TC"},{"id":"Tuvalu","value":"688","code":"TV"},{"id":"Uganda","value":"256","code":"UG"},{"id":"Ukraine","value":"380","code":"UA"},{"id":"United Arab Emirates","value":"971","code":"AE"},{"id":"United Kingdom","value":"44","code":"GB"},{"id":"United States","value":"1","code":"US"},{"id":"Uruguay","value":"598","code":"UY"},{"id":"Uzbekistan","value":"998","code":"UZ"},{"id":"Vanuatu","value":"678","code":"VU"},{"id":"Wallis and Futuna","value":"681","code":"WF"},{"id":"Yemen","value":"967","code":"YE"},{"id":"Zambia","value":"260","code":"ZM"},{"id":"Zimbabwe","value":"263","code":"ZW"},{"id":"land Islands","value":"","code":"AX"},{"id":"Antarctica","value":null,"code":"AQ"},{"id":"Bolivia, Plurinational State of","value":"591","code":"BO"},{"id":"Brunei Darussalam","value":"673","code":"BN"},{"id":"Cocos (Keeling) Islands","value":"61","code":"CC"},{"id":"Congo, The Democratic Republic of the","value":"243","code":"CD"},{"id":"Cote d'Ivoire","value":"225","code":"CI"},{"id":"Falkland Islands (Malvinas)","value":"500","code":"FK"},{"id":"Guernsey","value":"44","code":"GG"},{"id":"Holy See (Vatican City State)","value":"379","code":"VA"},{"id":"Hong Kong","value":"852","code":"HK"},{"id":"Iran, Islamic Republic of","value":"98","code":"IR"},{"id":"Isle of Man","value":"44","code":"IM"},{"id":"Jersey","value":"44","code":"JE"},{"id":"Korea, Democratic People's Republic of","value":"850","code":"KP"},{"id":"Korea, Republic of","value":"82","code":"KR"},{"id":"Lao People's Democratic Republic","value":"856","code":"LA"},{"id":"Libyan Arab Jamahiriya","value":"218","code":"LY"},{"id":"Macao","value":"853","code":"MO"},{"id":"Macedonia, The Former Yugoslav Republic of","value":"389","code":"MK"},{"id":"Micronesia, Federated States of","value":"691","code":"FM"},{"id":"Moldova, Republic of","value":"373","code":"MD"},{"id":"Mozambique","value":"258","code":"MZ"},{"id":"Palestinian Territory, Occupied","value":"970","code":"PS"},{"id":"Pitcairn","value":"872","code":"PN"},{"id":"Réunion","value":"262","code":"RE"},{"id":"Russia","value":"7","code":"RU"},{"id":"Saint Barthélemy","value":"590","code":"BL"},{"id":"Saint Helena, Ascension and Tristan Da Cunha","value":"290","code":"SH"},{"id":"Saint Kitts and Nevis","value":"1869","code":"KN"},{"id":"Saint Lucia","value":"1758","code":"LC"},{"id":"Saint Martin","value":"590","code":"MF"},{"id":"Saint Pierre and Miquelon","value":"508","code":"PM"},{"id":"Saint Vincent and the Grenadines","value":"1784","code":"VC"},{"id":"Sao Tome and Principe","value":"239","code":"ST"},{"id":"Somalia","value":"252","code":"SO"},{"id":"Svalbard and Jan Mayen","value":"47","code":"SJ"},{"id":"Syrian Arab Republic","value":"963","code":"SY"},{"id":"Taiwan, Province of China","value":"886","code":"TW"},{"id":"Tanzania, United Republic of","value":"255","code":"TZ"},{"id":"Timor-Leste","value":"670","code":"TL"},{"id":"Venezuela, Bolivarian Republic of","value":"58","code":"VE"},{"id":"Viet Nam","value":"84","code":"VN"},{"id":"Virgin Islands, British","value":"1284","code":"VG"},{"id":"Virgin Islands, U.S.","value":"1340","code":"VI"}];
const businessCategories = [{id:"Select",value:"",text:"Select type"}, {id:"Accessories",value:"Accessories",text:"Accessories"},{id:"Bar & Alcohol",value:"Bar & Alcohol",text:"Bar & Alcohol"},{id:"Chinese Food",value:"Chinese Food",text:"Chinese Food"},{id:"Fashion",value:"Fashion",text:"Fashion"},{id:"Convenience Store",value:"Convenience Store",text:"Convenience Store"},{id:"Restaurant",value:"Restaurant",text:"Restaurant"},{id:"Wine",value:"Wine",text:"Wine"},{id:"Pharma",value:"Pharma",text:"Pharma"},{id:"Beauty & Cosmetics",value:"Beauty & Cosmetics",text:"Beauty & Cosmetics"},{id:"Coffee",value:"Coffee",text:"Coffee"},{id:"Fast Food",value:"Fast Food",text:"Fast Food"},{id:"Optics",value:"Optics",text:"Optics"},{id:"Stores",value:"Stores",text:"Stores"},{id:"Bakery",value:"Bakery",text:"Bakery"},{id:"Deli",value:"Deli",text:"Deli"},{id:"Family",value:"Family",text:"Family"},{id:"Sports",value:"Sports",text:"Sports"},{id:"Electronics",value:"Electronics",text:"Electronics"},{id:"Other",value:"Other",text:"Other"}];



export default class Step1 extends Component {
    constructor(props) {
        super();
        let stored = JSON.parse(localStorage.state);
        let storedPage0 = JSON.parse(stored.page_0);
        let store = storedPage0.store;
        this.state = {
            data: {
                id: 1,
                to: "",
                stored:stored,
                payload: {
                    facebook: {value: "", isValid: true},
                    areaCode: {value:this._getLocalCode(),isValid: true},
                    phoneLocal:{value:"", isValid:true},
                    website:{value:"",isValid:true},
                    category:{value:"", isValid:true},
                    businessName:{value:store, isValid:true},
                    businessAddress:{value:"", isValid:true},
                    info:{value:"", isValid:true}
                },
                options:{},
                showFBOptions:true,
                chosenFromFbOptions : false,
                areaCodeOptions:areaCodeOptions,
                businessCategories:businessCategories
            }
        }
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._setData = this._setData.bind(this);
        this._handleValidation = this._handleValidation.bind(this);
        this._handleDynamicAutoComplete = this._handleDynamicAutoComplete.bind(this);
        this._completeAutoComplete = this._completeAutoComplete.bind(this);
        this._handleStaticAutoComplete = this._handleStaticAutoComplete.bind(this);
        this._getLocalCode = this._getLocalCode.bind(this);
        this._onWrapperClick = this._onWrapperClick.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);

    }
    _setData(stateId, e){
        this.state.data.payload[stateId].value = e.target.value;
        this.setState({data: this.state.data});
    }
    _handleBtnClick(elem,event){
        event.preventDefault();
        let formValid = true;
        let obj = this.refs;
        for (var key in obj) {
            this._handleValidation(obj[key].props);
        }
        let stateObj = this.state.data.payload;
        for(var key in stateObj){
            if(!stateObj[key].isValid){
                formValid = false;
            }
        }
        //console.log(formValid);
        if(!formValid){
            formValid = true;
            return;
        }
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    _handleValidation(props, e){
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
                   /* this.state.data.showFBOptions = false;
                    this.setState({data:this.state.data});
                    this._isFBPageValid(theValue);*/
                    break;
            }
        }
        if(props.validType != 'fb') {
            this.state.data.payload[props.stateId].isValid = isValid;
            this.setState({data: this.state.data});
        }
    }
    _isFBPageValid(value){
        this._cleanAutoComplete();
        let _self = this;
        this._getUrl(value, 'page',function(){
            if(arguments[0].data.length > 0){
                _self.state.data.payload.facebook.value = arguments[0].data[0].name;
                _self.state.data.payload.facebook.isValid = true;
                _self._completeAutoComplete(arguments[0].data[0]);
            }else{
                _self.state.data.payload.facebook.isValid = false;
            }
            _self.setState({data: _self.state.data});
        });
    }
    _getUrl(query,type,callback){
        if(query == ""){
            this.state.data.showFBOptions = false;
            this.setState({data:this.state.data});
            return;
        }
     let access = "257868791009583%7C945af5b9a3f7c8a33f64fcac44710a8a"
     let url="https://graph.facebook.com/search?"
        url+=jQuery.param({
            q:query,
            type:type,
            access_token: access,
            fields: 'id,name,picture,category,description,link,website,about,hours,phone,location',
            limit: 10
        });
        return jQuery.get(url,callback);
    }
    _handleDynamicAutoComplete(props, e){
        this.state.data.showFBOptions = true;
        this.state.data.chosenFromFbOptions = false;
        this.setState({data:this.state.data});
        let _self = this;
        this._getUrl(e.target.value,'page',function(){
            console.log(arguments);
            if(arguments[0].data.length > 0) {
                _self.state.data.options = arguments[0].data;
                _self.setState({data:_self.state.data});
            }
        });
    }
    _completeAutoComplete(option){
        this.state.data.payload.facebook.value = option.name ? option.name : "";
        if(option.about){
            this.state.data.payload.info.value = option.about;
        }else if(option.description){
            this.state.data.payload.info.value = option.description;
        }
       // this.state.data.payload.info.value = "ha ha ha";
        this.state.data.payload.website.value = option.website ? option.website : "";
        if(option.category && _.find(businessCategories, {value:option.category})) {
            this.state.data.payload.category.value = option.category ? option.category : "";
        }
       // this.state.data.payload.category.value="Accessories"; //for test
        if(option.phone) {
            let purePhone = option.phone.replace(/\D/g, '');
            this.state.data.payload.phoneLocal.value = purePhone;
        }
        if(option.location){
            let locationStr = option.location.street ? option.location.street : "";
            locationStr += option.location.city ? ", "+option.location.city : "";
            locationStr += option.location.state ? ", "+option.location.state : "";
            locationStr += option.location.zip ? ", "+option.location.zip : "";
            this.state.data.payload.businessAddress.value = locationStr;
        }
        this.state.data.showFBOptions = false;
        this.state.data.chosenFromFbOptions = option;
        this.setState({data: this.state.data});
    }
    _cleanAutoComplete(){
        let _self = this;
        Object.keys(this.state.data.payload).forEach(function(key){
            let obj = _self.state.data.payload[key];
            obj.value= "";
            obj.isValid = true;
        });
        this.state.data.payload.areaCode.value = this._getLocalCode();
        this.state.data.payload.businessName.value = this.state.data.stored.store.value;
        this.setState({data:this.state.data});
    }
    _handleStaticAutoComplete(props, e){
        let dynamicPart = e.target.value;
        let regex = new RegExp("^" + dynamicPart+ ".*", "g");
        this.state.data.areaCodeOptions = _filter(props.options, 'value'.match(regex));
        this.setState({data: this.state.data});
    }
    _getLocalCode(){
        /*TBD*/
        return "1";
    }
    _showAutoComplete(){
        if(this.state.data.showFBOptions){
            return(
                <AutoComplete options={this.state.data.options} onClick={this._completeAutoComplete}/>
            )
        }
    }
    _onWrapperClick(e){
        if(e.target.name == "facebook" || e.target.className=="autoCompleteList" || this.state.data.chosenFromFbOptions || e.target.tagName == "BUTTON"){
            return;
        }
        if(jQuery("input[name='facebook']").val() == ""){
            //this._cleanAutoComplete();
            return;
        }
        this.state.data.showFBOptions = false;
        this.setState({data:this.state.data});
        let fbValid = this._isFBPageValid(jQuery("input[name='facebook']").val());

    }
    render(){
        return (
            <div id="step1" className="pageWrap" onClick={this._onWrapperClick}>
                <div className="row">
                    <h1 className="businessTitle columns large-10 large-offset-1">About your business</h1>
                </div>
                    <form>
                        <div className="row fbRow">
                            <Input
                                foundationClasses="columns large-centered large-10"
                                ref= "facebook" name="facebook"
                                stateId="facebook"
                                placeholder="ex. https://www.facebook.com/mybusiness"
                                isValid={this.state.data.payload.facebook.isValid}
                                type="text" value={this.state.data.payload.facebook.value}
                                onChange={this._setData}
                                onBlur={this._handleValidation}
                                onKeyUp={this._handleDynamicAutoComplete}
                                errorMsg='Please provide a valid facebook page name or url'
                                isRequired={false}
                                validType='fb'
                                icon='icon_fb_button.svg'
                                labelText='Facebook page'/>
                            {this._showAutoComplete()}
                        </div>
                        <div className="row">
                            <Select
                                foundationClasses="columns large-offset-1 large-2"
                                ref="areaCode"
                                name="areaCode"
                                stateId="areaCode"
                                options={this.state.data.areaCodeOptions}
                                onChange={this._setData}
                                onKeyUp={this._handleStaticAutoComplete}
                                isValid={true}
                                isRequired={false}
                                labelText="Area code"
                                defaultValue={this.state.data.payload.areaCode.value}
                                value={this.state.data.payload.areaCode.value}
                                validType="number"
                            />
                            <Input
                                foundationClasses="columns large-3"
                                ref="phoneLocal"
                                name="phoneLocal"
                                stateId="phoneLocal"
                                onChange={this._setData}
                                isValid={this.state.data.payload.phoneLocal.isValid}
                                type="tel"
                                isRequired={true}
                                labelText="Phone number"
                                onBlur={this._handleValidation}
                                errorMsg="Please provide a valid phone number"
                                validType='phone'
                                placeholder='e.g. 02036974111'
                                value={this.state.data.payload.phoneLocal.value}/>
                            <Input
                                foundationClasses="columns large-5 end"
                                ref="website"
                                name="website"
                                stateId="website"
                                onChange={this._setData}
                                isValid={this.state.data.payload.website.isValid}
                                type="url"
                                isRequired={false}
                                labelText="Website"
                                onBlur={this._handleValidation}
                                validType="url"
                                errorMsg="Please provide a valid site url"
                                validType="url"
                                placeholder="e.g. http://www.mybusiness.com"
                                value={this.state.data.payload.website.value}/>
                        </div>
                        <div className="row">
                            <Select
                                foundationClasses="columns large-5 large-offset-1"
                                ref="category"
                                name="category"
                                stateId="category"
                                options={this.state.data.businessCategories}
                                onChange={this._setData}
                                isValid={this.state.data.payload.category.isValid}
                                isRequired={true}
                                labelText="Business type"
                                defaultValue={this.state.data.payload.category.value}
                                value={this.state.data.payload.category.value}
                                validType="text"
                                errorMsg='Please choose the type of your business'
                            />
                        </div>
                        <div className="row">
                            <Input
                                foundationClasses="columns large-5 large-offset-1"
                                ref="businessName"
                                name="businessName"
                                stateId="businessName"
                                onChange={this._setData}
                                isValid={this.state.data.payload.businessName.isValid}
                                isRequired={true}
                                type="text"
                                labelText="Business name"
                                onBlur={this._handleValidation}
                                validType="text"
                                errorMsg="Please provide your business name"
                                placeholder="e.g. Maya Boutique"
                                value={this.state.data.payload.businessName.value}/>
                            <Input
                                foundationClasses="columns large-5 end"
                                ref="businessAddress"
                                name="businessAddress"
                                stateId="businessAddress"
                                onChange={this._setData}
                                isValid={this.state.data.payload.businessAddress.isValid}
                                isRequired={true}
                                type="text"
                                labelText="Business address"
                                onBlur={this._handleValidation}
                                validType="text"
                                errorMsg="Please provide your business address"
                                placeholder="e.g. 223 S Walker Blvd, Chicago"
                                value={this.state.data.payload.businessAddress.value}/>
                        </div>
                        <div className="row">
                            <Textarea
                                foundationClasses="columns large-10 large-centered"
                                ref="info"
                                name="info"
                                stateId="info"
                                placeholder="e.g. Hand-made wooden toys for all ages, Open Mon-Sat 10am-9pm"
                                onChange={this._setData}
                                isValid={this.state.data.payload.info.isValid}
                                isRequired={true}
                                labelText="General info"
                                onBlur={this._handleValidation}
                                validType="text"
                                errorMsg="Please provide some general information about your business"
                                value={this.state.data.payload.info.value}/>
                        </div>
                        <div className="row">
                            <Button foundationClasses="large-4 columns large-centered" buttonSize="large" btnText="NEXT" onClick={this._handleBtnClick}/>
                        </div>
                    </form>
            </div>
        )
    }
}

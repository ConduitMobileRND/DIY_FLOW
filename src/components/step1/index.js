import React, { Component } from 'react';

import style from './step1.scss';
import Input from '../generalComponents/input';
import Select from '../generalComponents/select';
import Textarea from '../generalComponents/textarea';
import Button from '../generalComponents/button';
import Geosuggest from 'react-geosuggest';

export default class Step1 extends Component {
    constructor(props) {
        super();
        this.state = {
            data: {
                options:{},
                showFBOptions:true,
                chosenFromFbOptions : false
            }
        }
        this._handleBtnClick = this._handleBtnClick.bind(this);

    }

    _handleBtnClick(elem,event){
        this.props.handleBtnClick(this.refs, "sendForm", event);

    }

    render(){
        let geoClassName = "inputWrap columns large-5 large-offset-1";
        if(!this.props.form.businessAddress.isValid){
            geoClassName += " error";
        }
        let showClass = this.props.show ? " show" : "";
        let pageWrapClasses = "pageWrap " + showClass;
                return (
                    <div id="step1" className={pageWrapClasses} onClick={this.props.onWrapperClick}>
                        <div className="absolute pagination"><span className="huge">1</span><span className="tiny">/4</span></div>
                        <div className="vAlign">
                            <div className="row">
                                <h1 className="businessTitle columns large-10 large-offset-1">About your business</h1>
                            </div>
                            <form>
                                <div className="row fbRow">
                                    <Input
                                        autoComplete="false"
                                        foundationClasses="columns large-centered large-10"
                                        ref= "facebook" name="facebook"
                                        stateId="facebook"
                                        placeholder="ex. https://www.facebook.com/mybusiness"
                                        isValid={this.props.form.facebook.isValid}
                                        type="text" value={this.props.form.facebook.value}
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        onBlur={this.props.handleValidation}
                                        onKeyUp={this.props.handleDynamicAutoComplete}
                                        errorMsg='Please provide a valid facebook page name or url'
                                        isRequired={false}
                                        validType='fb'
                                        icon='icon_fb_button.png'
                                        labelText='Facebook page'/>
                                {this.props.showAutoComplete()}
                                </div>
                                <div className="row">
                                    <Select
                                        foundationClasses="columns large-offset-1 large-2"
                                        ref="areaCode"
                                        name="areaCode"
                                        stateId="areaCode"
                                        options={this.props.areaCodeOptions}
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        onKeyUp={this.props.handleStaticAutoComplete}
                                        isValid={true}
                                        isRequired={false}
                                        labelText="Area code"
                                        defaultValue={this.props.form.areaCode.value}
                                        value={this.props.form.areaCode.value}
                                        validType="number"
                                    />
                                    <Input
                                        foundationClasses="columns large-3"
                                        ref="phoneLocal"
                                        name="phoneLocal"
                                        stateId="phoneLocal"
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.phoneLocal.isValid}
                                        type="tel"
                                        isRequired={true}
                                        labelText="Phone number"
                                        onBlur={this.props.handleValidation}
                                        onKeyUp={this.props.handleValidation}
                                        errorMsg="Please provide a valid phone number"
                                        validType='phone'
                                        placeholder='e.g. 02036974111'
                                        value={this.props.form.phoneLocal.value}/>
                                    <Input
                                        foundationClasses="columns large-5 end"
                                        ref="website"
                                        name="website"
                                        stateId="website"
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.website.isValid}
                                        type="url"
                                        isRequired={false}
                                        labelText="Website"
                                        onBlur={this.props.handleValidation}
                                        onKeyUp={this.props.handleValidation}
                                        validType="url"
                                        errorMsg="Please provide a valid site url"
                                        validType="url"
                                        placeholder="e.g. http://www.mybusiness.com"
                                        value={this.props.form.website.value}/>
                                </div>
                                <div className="row">
                                    <div className={geoClassName}>
                                        <label className="geoWrap">
                                            <span>Business address</span>
                                            <Geosuggest
                                                autoComplete="off"
                                                id="geoInput"
                                                placeholder="e.g. 223 S Walker Blvd, Chicago"
                                                name="businessAddress"
                                                onBlur={this.props.handleGeoValidation}
                                                onChange={this.props.getLocationData.bind(null,this)}
                                                onSuggestSelect={this.props.getLocationData.bind(null,this)}
                                                initialValue={this.props.form.businessAddress.value}
                                            />
                                            <div className="errorMessage">Please provide your business address</div>
                                        </label>
                                    </div>
                                    <Select
                                        foundationClasses="columns large-5 end"
                                        ref="category"
                                        name="category"
                                        stateId="category"
                                        options={this.props.businessCategories}
                                        onBlur={this.props.handleValidation}
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.category.isValid}
                                        isRequired={true}
                                        labelText="Business type"
                                        defaultValue={this.props.form.category.value}
                                        value={this.props.form.category.value}
                                        validType="text"
                                        errorMsg='Please choose the type of your business'
                                    />
                                </div>
                                <div className="row">
                                    <Input
                                        foundationClasses="columns large-5 large-offset-1"
                                        ref="pos"
                                        name="pos"
                                        stateId="pos"
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.pos.isValid}
                                        type="text"
                                        isRequired={false}
                                        labelText="POS type"
                                        onBlur={this.props.handleValidation}
                                        onKeyUp={this.props.handleValidation}
                                        validType="text"
                                        errorMsg="Please provide a valid POS type"
                                        placeholder="Your point of sale type"
                                        value={this.props.form.pos.value}/>
                                    <Select
                                        foundationClasses="columns large-5 end"
                                        ref="numberOfLocations"
                                        name="numberOfLocations"
                                        stateId="numberOfLocations"
                                        options={this.props.numberOfLocationsOptions}
                                        onBlur={this.props.handleValidation}
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.numberOfLocations.isValid}
                                        isRequired={false}
                                        labelText="Number of locations"
                                        defaultValue={this.props.form.numberOfLocations.value}
                                        value={this.props.form.numberOfLocations.value}
                                        validType="text"
                                        errorMsg='Please choose your number of locations range'
                                    />
                                </div>
                                <div className="row">
                                    <Textarea
                                        foundationClasses="columns large-10 large-centered"
                                        ref="info"
                                        name="info"
                                        stateId="info"
                                        placeholder="e.g. Hand-made wooden toys for all ages, Open Mon-Sat 10am-9pm"
                                        onChange={this.props.setData.bind(null, this.props.stateId)}
                                        isValid={this.props.form.info.isValid}
                                        isRequired={true}
                                        labelText="General info"
                                        onBlur={this.props.handleValidation}
                                        onKeyUp={this.props.handleValidation}
                                        validType="text"
                                        errorMsg="Please provide some general information about your business"
                                        value={this.props.form.info.value}/>
                                </div>
                                <div className="row">
                                    <Button foundationClasses="large-10 columns large-centered" buttonSize="large" btnText="Next" onClick={this._handleBtnClick}/>

                                </div>

                            </form>
                        </div>
                        <img className="relative bottomLeftImg" src="images/icon_page_about.png" alt=""/>
                    </div>
                )
    }
}
Step1.propTypes = {
    handleValidation: React.PropTypes.func.isRequired,
    form:React.PropTypes.object.isRequired,
    setData: React.PropTypes.func.isRequired,
    handleBtnClick: React.PropTypes.func.isRequired,
    areaCodeOptions: React.PropTypes.array.isRequired,
    handleGeoValidation: React.PropTypes.func.isRequired,
    getLocationData: React.PropTypes.func.isRequired,
    handleDynamicAutoComplete: React.PropTypes.func.isRequired,
    handleStaticAutoComplete: React.PropTypes.func.isRequired,
    showAutoComplete: React.PropTypes.func.isRequired,
    onWrapperClick: React.PropTypes.func.isRequired,
    businessCategories: React.PropTypes.array.isRequired,
    show: React.PropTypes.bool.isRequired
};

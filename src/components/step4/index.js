import React, { Component } from 'react';
import style from './step4.scss';
import Button from '../generalComponents/button';
import Handler from '../../api/handler';
import PhoneColumn from '../generalComponents/phoneColumn';

export default class Step4 extends Component {
    constructor(props) {
        super();
        let stored = JSON.parse(localStorage.state);
        let colorsStored = JSON.parse(stored.page_2);
        let appData = JSON.parse(stored.page_0);
        let themeData = JSON.parse(stored.page_1);
        this.state = {
            data: {
                id: 4,
                token:appData.token,
                locationId:appData.locationId,
                fbData: themeData.fbData,
                phoneColors: colorsStored.phoneColors
            }
        };
        this._handleBtnClick=this._handleBtnClick.bind(this);
    }
    _handleBtnClick(){
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    render(){
        let url = "https://dev-env.keeprz.com/?location_id="+this.state.data.locationId+"&location_version=0&token="+this.state.data.token;

        return (
            <div id="step4" className="pageWrap">
                <div className="row relative topPad">
                    <div className="absolute pagination"><span className="huge">4</span><span className="tiny">/4</span></div>
                </div>
                <div className="row">
                    <div className="columns large-10 large-offset-1 titleWrap">
                        <h1 className="businessTitle">Publish your app</h1>
                        <p className="subtitle">Explanation text about these images.</p>
                    </div>
                </div>
                <div className="row">
                    <PhoneColumn wrapClasses="columns large-3 text-center" feature="Info" deviceImageSrc="images/device_info.png" iconName="infoIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3 text-center" feature="Rewards" deviceImageSrc="images/device_rewards.png" iconName="rewardsIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3 text-center" feature="Favourites" deviceImageSrc="images/device_favourites.png" iconName="favouritesIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3 text-center" feature="Facebook" deviceImageSrc="images/device_fb.png" iconName="fbIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                </div>
                <div className="nextBtn">
                    <div className="row" style={{textAlign:"center", padding:"30px 0"}}>
                        <a href={url} className="large-4 button columns large-centered large">PUBLISH</a>
                    </div>
                </div>
            </div>
        )
    }
}

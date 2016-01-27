import React, { Component } from 'react';
//import style from './step4.scss';
import Button from '../generalComponents/button';
import Handler from '../../api/handler';
import PhoneColumn from '../generalComponents/phoneColumn';

export default class Step4 extends Component {
    constructor(props) {
        super();
        let stored = JSON.parse(localStorage.state);
        let colorsStored = JSON.parse(stored.page_2);
        this.state = {
            data: {
                id: 4,
                phoneColors: colorsStored.phoneColors
            }
        };
    }

    render(){
        return (
            <div id="step4" className="pageWrap">
                <div className="row">
                    <div className="columns large-10 large-offset-1 titleWrap">
                        <h1 className="businessTitle">Welcome messages</h1>
                        <p>Edit your welcom messages to attract and engage users, showcasing your delicious food, great products, happy customers etc.</p>
                    </div>
                </div>
                <div className="row">
                    <PhoneColumn wrapClasses="columns large-3" deviceImageSrc="images/device_info.png" iconName="infoIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3" deviceImageSrc="images/device_rewards.png" iconName="rewardsIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3" deviceImageSrc="images/device_favourites.png" iconName="favouritesIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                    <PhoneColumn wrapClasses="columns large-3" deviceImageSrc="images/device_fb.png" iconName="fbIcon" iconBgColor={this.state.data.phoneColors.iconsColor} text="Providing Information"/>
                </div>
            </div>
        )
    }
}

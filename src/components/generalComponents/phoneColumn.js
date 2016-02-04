import React, { Component } from 'react';
import InfoIcon from './icons/infoIcon';
import RewardsIcon from './icons/rewardsIcon';
import FavouritesIcon from './icons/favouritesIcon';
import FbIcon from './icons/fbIcon';

export default class PhoneColumn extends Component {
    constructor(props) {
        super();
    }
    _getTheIcon(iconName){
        switch(iconName){
            case "infoIcon":
                return(
                    <InfoIcon fillColor={this.props.iconBgColor}/>
                );
            break;
            case "rewardsIcon":
                return(
                    <RewardsIcon fillColor={this.props.iconBgColor}/>
                );
            break;
            case "favouritesIcon":
                return(
                    <FavouritesIcon fillColor={this.props.iconBgColor}/>
                );
            break;
            case "fbIcon":
                return(
                    <FbIcon fillColor={this.props.iconBgColor}/>
                );
                break;
        }
    }
    render(){
        return(
            <div className={this.props.wrapClasses}>
                <img src={this.props.deviceImageSrc} alt={this.props.text}/>
                {this._getTheIcon(this.props.iconName)}
                <p className="feature">{this.props.feature}</p>
                <p className="description">{this.props.text}</p>
                <img src="images/icon_okey.png"/>
            </div>
        )

    }
}
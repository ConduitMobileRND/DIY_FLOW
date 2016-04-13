import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './step5.scss';
import Button from '../generalComponents/button';
import PhoneColumn from '../generalComponents/phoneColumn';


export default class Step5 extends Component {
    constructor(props) {
        super();

        this.state = {
            data: {

            }
        };
        this._handleBtnClick=this._handleBtnClick.bind(this);
    }
    _handleBtnClick(){

     this.props.handleBtnClick(this.refs, "getPublished", event);
    }


    render(){
        let url = "https://qa.keeprz.com/?location_id="+this.state.data.locationId+"&location_version=0&token="+this.state.data.token;

        return (
            <div id="step5" className="pageWrap">
              <div className="absolute pagination"><span className="huge">5</span><span className="tiny">/5</span></div>
              <div className="vAlign">
                    <div className="row">
                        <div className="columns large-10 large-offset-1 titleWrap">
                            <h1 className="businessTitle">Your app will also include these great features</h1>

                        </div><div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Info" deviceImageSrc="images/imge_device_info.png" iconName="infoIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Provide useful information on your business"/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Rewards" deviceImageSrc="images/imge_device_rewards.png" iconName="rewardsIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Reward your loyal customers"/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Favourites" deviceImageSrc="images/imge_device_favourites.png" iconName="favouritesIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Update customers on special events, discounts, and more."/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Facebook" deviceImageSrc="images/imge_device_fb.png" iconName="fbIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Stay connect to customers with social media"/>
                        <div className="clearfix"/>
                    </div>
                    <div className="nextBtn">
                        <div className="row" style={{textAlign:"center", padding:"20px 0 0", display:"none"}}>
                            <a href={url} className="large-4 button columns large-centered large">PUBLISH</a>
                        </div>
                    </div>
                    <div className="nextBtn">
                        <div className="row">
                            <Button foundationClasses="large-4 columns large-offset-4" buttonSize="large" btnText="Make my app!" onClick={this._handleBtnClick}/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
              </div>
            </div>
        )
    }
}

Step5.propTypes = {
    phoneColors: React.PropTypes.object.isRequired,
    handleBtnClick: React.PropTypes.func.isRequired
}

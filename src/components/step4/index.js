import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './step4.scss';
import Button from '../generalComponents/button';
import PhoneColumn from '../generalComponents/phoneColumn';


export default class Step4 extends Component {
    constructor(props) {
        super();

        this.state = {
            data: {

            }
        };
        this._handleBtnClick=this._handleBtnClick.bind(this);
    }
    _handleBtnClick(){
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    componentDidMount(){
        setTimeout(function() {

            let animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            jQuery("#step4 .vAlign").addClass("fadeIn animated").one(animationEnd, function(){
                jQuery(".phoneWrap:nth-child(1)").children(".device").addClass("animated fadeInRight").one(animationEnd, function(){
                    jQuery(".phoneWrap:nth-child(2)").children(".device").addClass("animated fadeInRight").one(animationEnd, function() {
                        jQuery(".phoneWrap:nth-child(3)").children(".device").addClass("animated fadeInRight").one(animationEnd, function() {
                            jQuery(".phoneWrap:nth-child(4)").children(".device").addClass("animated fadeInRight");

                        })
                    })
                });
            });
           /* jQuery(".vAlign").css("right","-100px");
            jQuery(".vAlign").animate({right:"10px",opacity:1},"slow",function(){
                jQuery(".vAlign").animate({right:"0px"},"fast");
            });*/
            jQuery(".pagination").addClass("visible");
            jQuery(".bottomLeftImg").addClass("visible");
        },200);

    }
    render(){
        let url = "https://qa.keeprz.com/?location_id="+this.state.data.locationId+"&location_version=0&token="+this.state.data.token;

        return (
            <div id="step4" className="pageWrap">
              <div className="absolute pagination"><span className="huge">4</span><span className="tiny">/4</span></div>
              <div className="vAlign">
                    <div className="row">
                        <div className="columns large-10 large-offset-1 titleWrap">
                            <h1 className="businessTitle">Publish your app</h1>
                            <p className="subtitle">Explanation text about these images.</p>
                        </div><div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Info" deviceImageSrc="images/device_info.png" iconName="infoIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Providing Information"/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Rewards" deviceImageSrc="images/device_rewards.png" iconName="rewardsIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Providing Information"/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Favourites" deviceImageSrc="images/device_favourites.png" iconName="favouritesIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Providing Information"/>
                        <PhoneColumn wrapClasses="phoneWrap columns large-3 text-center" feature="Facebook" deviceImageSrc="images/device_fb.png" iconName="fbIcon" iconBgColor={this.props.phoneColors.iconsColor} text="Providing Information"/>
                        <div className="clearfix"/>
                    </div>
                    <div className="nextBtn">
                        <div className="row" style={{textAlign:"center", padding:"20px 0 0"}}>
                            <a href={url} className="large-4 button columns large-centered large">PUBLISH</a>
                        </div>
                    </div>
                    <div className="nextBtn" style={{position:"fixed", bottom:"100px", right:"100px",display:"none  "}}>
                        <div className="row">
                            <Button foundationClasses="large-4 columns large-offset-7" buttonSize="large" btnText="PUBLISH" onClick={this._handleBtnClick}/>
                        </div>
                    </div>
                    <div className="clearfix"></div>
              </div>
            </div>
        )
    }
}

Step4.propTypes = {
    phoneColors: React.PropTypes.object.isRequired
}

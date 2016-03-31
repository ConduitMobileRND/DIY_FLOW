import React, { Component } from 'react';
import InfoIcon from './icons/infoIcon';
import RewardsIcon from './icons/rewardsIcon';
import FavouritesIcon from './icons/favouritesIcon';
import FbIcon from './icons/fbIcon';

export default class DemoPhoneLayout extends Component {
    constructor(props) {
        super();
    }

    render(){

        function getImgStr(layout, origin, image){
            let bgImage = layout == "MainLocatinoTC-0x4" ? "images/imge_placeholder_long.png" : "images/imge_placeholder.png";
            if(origin == "getImages"){
                bgImage = image;
            }
            let wrapHeight = layout == "MainLocatinoTC-0x4" ? "117%" : "70%";
            return(
                <div className="imageOnScreen" style={{backgroundImage:"url('"+bgImage+"')", paddingBottom: wrapHeight}}></div>
            )
        }

        switch(this.props.layout) {
            case "MainLocatinoTC-2x0x2":
                return (
                        <div className="bgWrap" style={{backgroundColor:this.props.phoneBodyBgColor}}>
                            <div className="iconsRow">
                                <div className="iconColumnWrap" style={{float:"left"}}>
                                    <div className="iconColumn" ref="iconBg">
                                        <InfoIcon fillColor={this.props.iconsColor}/>
                                    </div>
                                    <div className="iconBorder"></div>
                                </div>
                                <div className="iconColumnWrap" style={{float:"right"}}>
                                    <div className="iconColumn">
                                        <RewardsIcon fillColor={this.props.iconsColor}/>
                                    </div>
                                    <div className="iconBorder"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="welcomeImages">
                                {getImgStr(this.props.layout, this.props.origin, this.props.bgImage)}
                            </div>
                            <div className="iconsRow">
                                <div className="iconColumnWrap" style={{float:"left"}}>
                                    <div className="iconColumn">
                                        <FavouritesIcon fillColor={this.props.iconsColor}/>
                                    </div>
                                    <div className="iconBorder"></div>
                                </div>
                                <div className="iconColumnWrap" style={{float:"right"}}>
                                    <div className="iconColumn">
                                        <FbIcon fillColor={this.props.iconsColor}/>
                                    </div>
                                    <div className="iconBorder"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                        </div>
                );
                break;
            case "MainLocatinoTC-0x4":
                return (
                    <div className="bgWrap longImgLayout" style={{backgroundColor:this.props.phoneBodyBgColor}}>
                        <div className="welcomeImages">
                            {getImgStr(this.props.layout, this.props.origin, this.props.bgImage)}
                        </div>
                        <div className="iconsRow">
                            <div className="iconColumnWrap one-4th" style={{float:"left"}}>
                                <div className="iconColumn">
                                    <FavouritesIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-4th" style={{float:"left"}}>
                                <div className="iconColumn">
                                    <FbIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-4th" style={{float:"right"}}>
                                <div className="iconColumn" ref="iconBg">
                                    <InfoIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-4th" style={{float:"right"}}>
                                <div className="iconColumn">
                                    <RewardsIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                );
                break;
            case "MainLocatinoTC-6x0":
                return (
                    <div className="bgWrap" style={{backgroundColor:this.props.phoneBodyBgColor}}>
                        <div className="iconsRow">
                            <div className="iconColumnWrap one-3rd" style={{float:"right"}}>
                                <div className="iconColumn">
                                    <RewardsIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-3rd" style={{float:"left"}}>
                                <div className="iconColumn" ref="iconBg">
                                    <InfoIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-3rd" style={{float:"right"}}>
                                <div className="iconColumn">
                                    <RewardsIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="welcomeImages">
                            {getImgStr(this.props.layout,this.props.origin, this.props.bgImage)}
                        </div>
                        <div className="iconsRow">
                            <div className="iconColumnWrap one-3rd" style={{float:"left"}}>
                                <div className="iconColumn">
                                    <FavouritesIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-3rd" style={{float:"left"}}>
                                <div className="iconColumn">
                                    <RewardsIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="iconColumnWrap one-3rd" style={{float:"right"}}>
                                <div className="iconColumn">
                                    <FbIcon fillColor={this.props.iconsColor}/>
                                </div>
                                <div className="iconBorder"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                    </div>
                );
                break;

        }
    }
}
DemoPhoneLayout.propTypes = {
    iconsColor: React.PropTypes.string.isRequired,
    phoneBodyBgColor: React.PropTypes.string.isRequired,
    layout: React.PropTypes.string.isRequired,
    bgImage: React.PropTypes.string.isRequired,
    origin: React.PropTypes.string.isRequired
}
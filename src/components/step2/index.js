import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './step2.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import jQuery from 'jquery';

import InfoIcon from '../generalComponents/icons/infoIcon';
import RewardsIcon from '../generalComponents/icons/rewardsIcon';
import FavouritesIcon from '../generalComponents/icons/favouritesIcon';
import FbIcon from '../generalComponents/icons/fbIcon';

export default class Step2 extends Component {
    constructor(props) {
        super(props);
       // ;


        this.state=
        {
            data:{

            }
        }


        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._createCompletePaletteRow = this._createCompletePaletteRow(this);

    }

    _handleBtnClick(){
        jQuery("#step2 .btnWrap button").html("<img src='images/spinner_1.gif'/>").addClass("loading");
        this.props.handleBtnClick(this.refs, "getImages", event);
    }

    _createPaletteRow(palette, index){
        if(typeof palette == "undefined"){
            return;
        }
        let selected = palette.uipack_id == this.props.selectedScheme || (index == 0 && !this.props.paletteSelected)? "selected" : "";
        let className = "paletteWrap " + selected;
        let id="uiPack_"+ palette.uipack_id;
       // debugger;
        let index1 = this.props.getIndexByPaletteId(palette.uipack_id);
        return(
            <div className={className} key={palette.uipack_id} onClick={this.props.onPaletteClick.bind(null,palette.uipack_id)}>
                <div className="palette">
                    <div className="color" style={{backgroundColor:this.props.schemes[index1][this.props.upperColorsSrc]}}></div>
                    <div className="color" style={{backgroundColor:this.props.schemes[index1].backgroundImageOverlayColor}}></div>
                    <div className="color" style={{backgroundColor:this.props.schemes[index1][this.props.iconsColorSrc]}}></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
    /*TEMPORARY FOR DESIGNERS NEEDS*/
    _createCompletePaletteRow(){
        let firstPalette = {};
        let defaultColor = "white";
        if(this.props.schemes.length > 0) {
            let firstPalette = this.props.schemes[0];
        }else{
            firstPalette.backgroundImageOverlayColor = defaultColor;
            firstPalette.listBackgroundColor = defaultColor;
            firstPalette.listItemBackgroundColor = defaultColor;
            firstPalette.locationColor = defaultColor;
            firstPalette.negativeLocationColor = defaultColor;
            firstPalette.pageHeaderBackgroundColorFrom = defaultColor;
            firstPalette.pageHeaderBackgroundColorTo = defaultColor;
            firstPalette.pageHeaderTextColor = defaultColor;
            firstPalette.textColor = defaultColor;
            firstPalette.tileBackgroundColor = defaultColor;
            firstPalette.tileBackgroundColorFrom = defaultColor;
            firstPalette.tileBackgroundColorTo = defaultColor;
            firstPalette.tileHeaderTextColor = defaultColor;
            firstPalette.tileInnerBackgroundColor = defaultColor;
        }
        return(
            <div className="row hide" style={{marginTop:"30px"}}>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>backgroundImageOverlayColor</h6>
                    <div style={{backgroundColor: firstPalette.backgroundImageOverlayColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>listBackgroundColor</h6>
                    <div style={{backgroundColor: firstPalette.listBackgroundColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>listItemBackgroundColor</h6>
                    <div style={{backgroundColor: firstPalette.listItemBackgroundColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>locationColor</h6>
                    <div style={{backgroundColor: firstPalette.locationColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>negativeLocationColor</h6>
                    <div style={{backgroundColor: firstPalette.negativeLocationColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>pageHeaderBackgroundColorFrom</h6>
                    <div style={{backgroundColor: firstPalette.pageHeaderBackgroundColorFrom, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>pageHeaderBackgroundColorTo</h6>
                    <div style={{backgroundColor: firstPalette.pageHeaderBackgroundColorTo, minHeight:"40px"}}></div>
                </div>;
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>pageHeaderTextColor</h6>
                    <div style={{backgroundColor: firstPalette.pageHeaderTextColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>textColor</h6>
                    <div style={{backgroundColor: firstPalette.textColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>tileBackgroundColor</h6>
                    <div style={{backgroundColor: firstPalette.tileBackgroundColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>tileBackgroundColorFrom</h6>
                    <div style={{backgroundColor: firstPalette.tileBackgroundColorFrom, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>tileBackgroundColorTo</h6>
                    <div style={{backgroundColor: firstPalette.tileBackgroundColorTo, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4" style={{border:"solid 1px grey"}}>
                    <h6>tileHeaderTextColor</h6>
                    <div style={{backgroundColor: firstPalette.tileHeaderTextColor, minHeight:"40px"}}></div>
                </div>
                <div className="columns large-4 end" style={{border:"solid 1px grey"}}>
                    <h6>tileInnerBackgroundColor</h6>
                    <div style={{backgroundColor: firstPalette.tileInnerBackgroundColor, minHeight:"40px"}}></div>
                </div>
            </div>

        )
    }



    render() {
        let wrapClass = "phone "+this.props.phoneColors.brightness;
        return (
            <div id="step2" className="pageWrap">
                <div className="absolute pagination"><span className="huge">2</span><span className="tiny">/4</span></div>
                <div className="vAlign">
                    <div className="row">
                        <h1 className="businessTitle columns large-10 medium-10 medium-offset-2 large-offset-2">Choose your colors</h1>
                    </div>
                    <div className="row phoneContent">
                        <div className="columns large-2 medium-2 medium-offset-2 large-offset-2 paletteSchemes">
                            {this.props.schemes.map(this._createPaletteRow, this)}
                        </div>
                        <div className="columns large-4 medium-4 end">
                            <div className={wrapClass}>
                                <div className="inner">
                                    <div className="topPas" style={{backgroundColor: this.props.phoneColors.upperColor}}>
                                        <div className="dynamic"></div>
                                    </div>
                                    <div className="bgWrap" style={{backgroundColor:this.props.phoneColors.bgColor}}>
                                        <div className="iconsRow">
                                            <div className="iconColumnWrap" style={{float:"left"}}>
                                                <div className="iconColumn"  ref="iconBg">
                                                    <InfoIcon fillColor={this.props.phoneColors.iconsColor}/>
                                                </div>
                                                <div className="iconBorder"></div>
                                            </div>
                                            <div className="iconColumnWrap" style={{float:"right"}}>
                                                <div className="iconColumn">
                                                    <RewardsIcon fillColor={this.props.phoneColors.iconsColor}/>
                                                </div>
                                                <div className="iconBorder"></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="welcomeImages">
                                            <img src="images/imge_placeholder.png" alt=""/>
                                        </div>
                                        <div className="iconsRow">
                                            <div className="iconColumnWrap" style={{float:"left"}}>
                                                <div className="iconColumn">
                                                    <FavouritesIcon fillColor={this.props.phoneColors.iconsColor}/>
                                                </div>
                                                <div className="iconBorder"></div>
                                            </div>
                                            <div className="iconColumnWrap" style={{float:"right"}}>
                                                <div className="iconColumn">
                                                    <FbIcon fillColor={this.props.phoneColors.iconsColor}/>
                                                </div>
                                                <div className="iconBorder"></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row relative">
                        <Button foundationClasses="large-4 large-offset-4 columns medium-4 medium-offset-4" buttonSize="large" btnText="Next" onClick={this._handleBtnClick}/>

                    </div>
                </div>
                    <img className="absolute bottomLeftImg" src="images/icon_page_selectcolors.png" alt=""/>
                     {this._createCompletePaletteRow}
            </div>
        )
    }
}

Step2.propTypes = {
    schemes: React.PropTypes.array.isRequired,
    phoneColors: React.PropTypes.object.isRequired,
    upperColorsSrc: React.PropTypes.string.isRequired,
    iconsColorSrc: React.PropTypes.string.isRequired,
    selectedScheme: React.PropTypes.string.isRequired,
    getIndexByPaletteId: React.PropTypes.func.isRequired,
    onPaletteClick: React.PropTypes.func.isRequired,
    paletteSelected: React.PropTypes.bool.isRequired
}

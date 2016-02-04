import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './step2.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import Isvg from 'react-inlinesvg';
import jQuery from 'jquery';
import InfoIcon from '../generalComponents/icons/infoIcon';
import RewardsIcon from '../generalComponents/icons/rewardsIcon';
import FavouritesIcon from '../generalComponents/icons/favouritesIcon';
import FbIcon from '../generalComponents/icons/fbIcon';

export default class Step2 extends Component {
    constructor(props) {
        super();

        let stored = JSON.parse(localStorage.state);
        let themeData = JSON.parse(stored.page_1);
        let appData = JSON.parse(stored.page_0);
        let themeSchemes = [];
        let selectedThemeId = "";
        for(let i = 0; i < 3; i ++){
            if(typeof themeData.fbThemes.data[i] != "undefined"){
                themeSchemes.push(themeData.fbThemes.data[i]);
                if(i == 0){
                    selectedThemeId = themeData.fbThemes.data[i].uipack_id;
                }
            }else{
                let ind = Math.floor(Math.random() * (themeData.defaultThemes.data.length + 1));
                console.log("index: " + ind);
                themeSchemes.push(themeData.defaultThemes.data[ind]);
            }
        }

        this.state=
        {
            data:{
                id: 2,
                schemes: themeSchemes,
                selectedScheme: selectedThemeId,
                token:appData.token,
                locationId:appData.locationId,
                fbData:themeData.fbData.data,
                phoneColors:{
                    upperColor: themeSchemes[0].pageHeaderBackgroundColorFrom,
                    iconsColor: themeSchemes[0].tileBackgroundColorFrom,
                    bgColor:themeSchemes[0].backgroundImageOverlayColor,
                    brightness:themeSchemes[0].brightness
                }
            }
        }

        this._toggleSelectedPalette = this._toggleSelectedPalette.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._createCompletePaletteRow = this._createCompletePaletteRow(this);

    }
    _handleBtnClick(){
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    _toggleSelectedPalette(paletteId){
       // debugger;
        this.state.data.selectedScheme = paletteId;
        let index = this._getIndexByPaletteId(paletteId);
        this.state.data.phoneColors.upperColor = this.state.data.schemes[index].pageHeaderBackgroundColorFrom;
        //this.state.data.phoneColors.upperColor = this.state.data.schemes[index].tileBackgroundColorFrom;
        //this.state.data.phoneColors.iconsColor = this.state.data.schemes[index].tileInnerBackgroundColor;
        this.state.data.phoneColors.iconsColor = this.state.data.schemes[index].tileBackgroundColorFrom;
        //this.state.data.phoneColors.bgColor = this.state.data.schemes[index].backgroundImageOverlayColor;
        this.state.data.phoneColors.bgColor = this.state.data.schemes[index].backgroundImageOverlayColor;
        this.state.data.phoneColors.brightness = this.state.data.schemes[index].brightness;
        this.setState({data: this.state.data});
    }
    _createPaletteRow(palette){
        let selected = palette.uipack_id == this.state.data.selectedScheme ? "selected" : "";
        let className = "paletteWrap " + selected;
        let id="uiPack_"+ palette.uipack_id;
        let index = this._getIndexByPaletteId(palette.uipack_id);
        return(
            <div className={className} key={palette.uipack_id} onClick={this._toggleSelectedPalette.bind(null,palette.uipack_id)}>
                <div className="palette">
                    <div className="color" style={{backgroundColor:this.state.data.schemes[index].pageHeaderBackgroundColorFrom}}></div>
                    <div className="color" style={{backgroundColor:this.state.data.schemes[index].backgroundImageOverlayColor}}></div>
                    <div className="color" style={{backgroundColor:this.state.data.schemes[index].tileBackgroundColorFrom}}></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
    /*TEMPORARY FOR DESIGNERS NEEDS*/
    _createCompletePaletteRow(){
        let firstPalette = this.state.data.schemes[0];
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
                </div>
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
        for(let i in this.state.data.schemes){
            if(this.state.data.schemes[i].uipack_id == paletteId){
                index = i;
            }
        }
        return index;
    }

    render() {
        let wrapClass = "phone "+this.state.data.phoneColors.brightness;
        return (
            <div id="step2" className="pageWrap">
                <div className="row relative topPad">
                    <div className="absolute pagination"><span className="huge">2</span><span className="tiny">/4</span></div>
                </div>
                <div className="row">
                    <h1 className="businessTitle columns large-10 large-offset-1">Choose your colors</h1>
                </div>
                <div className="row">
                    <div className="columns large-2 medium-2 medium-offset-1 large-offset-1 paletteSchemes">
                        {this.state.data.schemes.map(this._createPaletteRow, this)}
                    </div>
                    <div className="columns large-6 medium-7 end">
                        <div className={wrapClass}>
                            <div className="inner">
                                <div className="topPas" style={{backgroundColor: this.state.data.phoneColors.upperColor}}>
                                    <div className="dynamic"></div>
                                </div>
                                <div className="bgWrap" style={{backgroundColor:this.state.data.phoneColors.bgColor}}>
                                    <div className="iconsRow">
                                        <div className="iconColumnWrap" style={{float:"left"}}>
                                            <div className="iconColumn"  ref="iconBg">
                                                <InfoIcon fillColor={this.state.data.phoneColors.iconsColor}/>
                                            </div>
                                            <div className="iconBorder"></div>
                                        </div>
                                        <div className="iconColumnWrap" style={{float:"right"}}>
                                            <div className="iconColumn">
                                                <RewardsIcon fillColor={this.state.data.phoneColors.iconsColor}/>
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
                                                <FavouritesIcon fillColor={this.state.data.phoneColors.iconsColor}/>
                                            </div>
                                            <div className="iconBorder"></div>
                                        </div>
                                        <div className="iconColumnWrap" style={{float:"right"}}>
                                            <div className="iconColumn">
                                                <FbIcon fillColor={this.state.data.phoneColors.iconsColor}/>
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
                    <Button foundationClasses="large-4 columns large-centered" buttonSize="large" btnText="NEXT" onClick={this._handleBtnClick}/>
                    <img className="absolute bottomLeftImg" src="images/icon_page_selectcolors.png" alt=""/>
                </div>


                     {this._createCompletePaletteRow}


            </div>
        )
    }
}


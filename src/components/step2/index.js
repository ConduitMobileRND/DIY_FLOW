import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './step2.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import Isvg from 'react-inlinesvg';
import jQuery from 'jquery';

export default class Step2 extends Component {
    constructor(props) {
        super();
        let stored = JSON.parse(localStorage.state);
        this.state=
        {
            data:{
                id: 2,
                themes: JSON.parse(stored.page_1),
                phoneColors:{
                    upperColor: "",
                    iconsColor: "",
                    bgColor:"",
                    brightness:""
                }
            }
        }
        let schemes = [];
        let selectedScheme = "";
        for (let i = 0; i<3; i++){
            schemes.push(this.state.data.themes.data[i]);
            if( i == 0){
                selectedScheme = this.state.data.themes.data[i].uipack_id;
            }
        }
        this.state.data.schemes = schemes;
        this.state.data.selectedScheme = selectedScheme;
        this.state.data.phoneColors.upperColor = this.state.data.schemes[0].pageHeaderBackgroundColorFrom;
        this.state.data.phoneColors.iconsColor = this.state.data.schemes[0].locationColor;
        this.state.data.phoneColors.bgColor = this.state.data.schemes[0].tileBackgroundColor;
        this.state.data.phoneColors.brightness = this.state.data.schemes[0].brightness;
        this._toggleSelectedPalette = this._toggleSelectedPalette.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);

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
        this.state.data.phoneColors.iconsColor = this.state.data.schemes[index].locationColor;
        this.state.data.phoneColors.bgColor = this.state.data.schemes[index].tileBackgroundColor;
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
                    <div className="color" style={{backgroundColor:this.state.data.schemes[index].locationColor}}></div>
                    <div className="color" style={{backgroundColor:this.state.data.schemes[index].tileBackgroundColor}}></div>
                    <div className="clearfix"></div>
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
        let wrapClass = "columns large-6 end phone "+this.state.data.phoneColors.brightness;
        return (
            <div id="step2" className="pageWrap">
                <div className="row">
                    <h1 className="businessTitle columns large-10 large-offset-1">Choose your colors</h1>
                </div>
                <div className="row">
                    <div className="columns large-2 large-offset-1">
                        {this.state.data.schemes.map(this._createPaletteRow, this)}
                    </div>
                    <div className={wrapClass}>
                        <div className="inner">
                            <div className="topPas" style={{backgroundColor: this.state.data.phoneColors.upperColor}}>
                                <div className="dynamic"></div>
                            </div>
                            <div className="bgWrap" style={{backgroundColor:this.state.data.phoneColors.bgColor}}>
                                <div className="iconsRow">
                                    <div className="iconColumnWrap" style={{float:"left"}}>
                                        <div className="iconColumn"  ref="iconBg">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}} >
                                                <path className="st0" d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M36.3,16.4c2.7,0,5.1,2.2,5.1,4.8
                                                                        c0,2.6-2.3,4.8-5.1,4.8c-2.8,0-5.1-2.1-5.1-4.7C31.2,18.6,33.5,16.5,36.3,16.4z M43.1,50.2c-1.8,1.9-3.9,3.1-6.6,3.3
                                                                        c-1.5,0.1-2.9,0.2-4.3-0.2c-2.6-0.7-4.4-3-4-5.7c0.3-2.6,0.8-5.2,1.3-7.8c0.4-2.2,0.8-4.5,1.2-6.7c0.1-0.4,0-0.8,0-1.1
                                                                        c-0.1-0.6-0.5-1-1.1-1.2c-0.4-0.1-0.8,0-1.1-0.1c-0.5-0.1-1.1-0.3-1.5-0.6c-0.7-0.5-0.6-1.5,0.2-1.8c0.4-0.2,0.9-0.2,1.3-0.2
                                                                        c1.7,0,3.3,0,5,0c1.7,0,3.4,0,5.1,0c1.1,0,1.6,0.5,1.9,1.5c0.2,0.9-0.1,1.8-0.2,2.7c-0.7,3.7-1.4,7.4-2.1,11.1
                                                                        c-0.2,1.1-0.4,2.3-0.6,3.4c0,0.2,0,0.4,0,0.6c0,2.3,1.5,2.6,3.2,1.9c0.5-0.2,0.9-0.5,1.3-0.7c0.8-0.4,1.2-0.4,1.5-0.1
                                                                        C43.7,49,43.7,49.6,43.1,50.2z"
                                                    style={{fill:this.state.data.phoneColors.iconsColor}}/>
                                            </svg>
                                        </div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="iconColumnWrap" style={{float:"right"}}>
                                        <div className="iconColumn">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                                                <g>
                                                    <path className="st0" style={{fillRule:"evenodd",clipRule:"evenodd",fill:this.state.data.phoneColors.iconsColor}} d="M45.5,18.8c-0.6-0.6-1.3-0.9-2.1-0.9c-0.8,0-1.5,0.3-2.1,0.9c-0.6,0.6-1.4,2.9-2.3,5.9
		                                                c0.1,0.3,0.2,0.5,0.3,0.8c3-0.9,5.5-1.8,6.1-2.4C46.6,21.9,46.6,20,45.5,18.8z"/>
                                                    <path class="st0"  style={{fillRule:"evenodd",clipRule:"evenodd",fill:this.state.data.phoneColors.iconsColor}} d="M27.5,18c-0.8,0-1.5,0.3-2.1,0.9c-1.1,1.2-1.1,3.1,0,4.3c0.6,0.6,3.1,1.5,6.1,2.4c0.1-0.3,0.2-0.5,0.3-0.8
		                                                c-0.8-2.9-1.7-5.3-2.3-5.9C29,18.3,28.3,18,27.5,18z"/>
                                                    <path class="st0"  style={{fillRule:"evenodd",clipRule:"evenodd",fill:this.state.data.phoneColors.iconsColor}} d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M33,55H20.3c-1.7,0-3.3-1.7-3.3-3.4V40h16
                                                        V55z M53,51.6c0,1.7-1.1,3.4-2.7,3.4H38V40h15V51.6z M54,32.5c0,1.7-1.1,3.5-2.8,3.5H38v-8h-5v8H19.3c-1.7,0-3.3-1.8-3.3-3.5v-2.6
                                                        c0-1.7,1.7-1.9,3.3-1.9h5.8c-0.8-1-1.5-1.4-2-1.8c-2.3-2.4-2.3-6.8,0-9.2c1.2-1.2,2.7-1.8,4.2-1.8c1.5,0,3,0.6,4.2,1.8
                                                        c1,1,1.9,3.5,2.7,6c0.4-0.1,0.7-0.2,1.1-0.2c0.4,0,0.7,0.1,1.1,0.2c0.8-2.5,1.7-4.9,2.6-5.9c1.2-1.2,2.7-1.7,4.2-1.7
                                                        c1.5,0,3,0.7,4.2,1.9c2.3,2.4,2.3,6.5,0,8.9c-0.4,0.4-1,0.8-1.8,1.8h5.6c1.7,0,2.8,0.2,2.8,1.9V32.5z"/>
                                                </g>
                                            </svg>
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
                                            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                                                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M48.4,55.6L35,48.1l-13.4,7.5l3-15L13.4,30.1l15.2-1.8
	                                                    L35,14.4l6.4,13.9l15.2,1.8L45.4,40.5L48.4,55.6z"
                                                    style={{fill:this.state.data.phoneColors.iconsColor}}/>
                                            </svg>
                                        </div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="iconColumnWrap" style={{float:"right"}}>
                                        <div className="iconColumn">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                                                <ellipse cx="97.3" cy="75.8" rx="0.1" ry="0.1"/>
                                                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M44.1,35H38v21h-8V35h-5v-7h5v-5.9
	                                                    c0-5.3,2.5-8.1,8.8-8.1H45v7h-4.9c-1.6,0-2.1,1-2.1,2.7V28h6.7L44.1,35z"
                                                    style={{fill:this.state.data.phoneColors.iconsColor}}/>
                                            </svg>
                                        </div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Button foundationClasses="large-4 columns large-centered" buttonSize="large" btnText="NEXT" onClick={this._handleBtnClick}/>
                </div>
            </div>
        )
    }
}


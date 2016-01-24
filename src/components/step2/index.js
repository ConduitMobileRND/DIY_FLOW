import React, { Component } from 'react';
import style from './step2.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import Isvg from 'react-inlinesvg';

export default class Step2 extends Component {
    constructor(props) {
        super();
        this.state=
        {
            data:{
                id: 2,
                themes: JSON.parse(localStorage.state),
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
        console.log(this.state.data.schemes);
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
                                        <div className="iconColumn" style={{backgroundColor: this.state.data.phoneColors.iconsColor}}>
                                            <Isvg src="images/ic_page_selectcolors_device_info.svg"/>
                                        </div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="iconColumnWrap" style={{float:"right"}}>
                                        <div className="iconColumn" style={{backgroundColor: this.state.data.phoneColors.iconsColor}}></div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="welcomeImages">
                                    <img src="images/imge_placeholder.png" alt=""/>
                                </div>
                                <div className="iconsRow">
                                    <div className="iconColumnWrap" style={{float:"left"}}>
                                        <div className="iconColumn" style={{backgroundColor: this.state.data.phoneColors.iconsColor}}></div>
                                        <div className="iconBorder"></div>
                                    </div>
                                    <div className="iconColumnWrap" style={{float:"right"}}>
                                        <div className="iconColumn" style={{backgroundColor: this.state.data.phoneColors.iconsColor}}></div>
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


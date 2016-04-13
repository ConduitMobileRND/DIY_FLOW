import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './step2.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import jQuery from 'jquery';

import DemoPhoneLayout from "../generalComponents/demoPhoneLayout";

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
        if(typeof palette == "undefined") return;
        let selected = palette.uipack_id == this.props.selectedScheme || (index == 0 && !this.props.paletteSelected)? "selected" : "";
        let specificColumnClass = "";
        if(index == 0) specificColumnClass = " no-pad-left";
        if(index == 2) specificColumnClass = " end";
        let className = "paletteWrapNew columns large-3 " + selected + specificColumnClass;
        let id="uiPack_"+ palette.uipack_id;
        let index1 = this.props.getIndexByPaletteId(palette.uipack_id);
        return(
            <div className={className} key={palette.uipack_id}>
                <div className="palette">
                    <div className="color" style={{backgroundColor:this.props.schemes[index1][this.props.upperColorsSrc]}}></div>
                    <div className="color" style={{backgroundColor:this.props.schemes[index1].backgroundImageOverlayColor}}></div>
                    <div className="color" style={{backgroundColor:this.props.schemes[index1][this.props.iconsColorSrc]}}></div>
                    <div className="clearfix"></div>
                </div>
                <div className="choiceBtn" onClick={this.props.onPaletteClick.bind(null,palette.uipack_id)}></div>
            </div>
        )
    }

    _createLayoutRow(layout, index){
        if (typeof layout == "undefined") return;
        let selected = layout.id == this.props.selectedLayout ? " selected" : "";
        let specificColumnClass = "";
        if(index == 0) specificColumnClass = " no-pad-left";
        if(index == 2) specificColumnClass = " end";
        let className = "columns large-3" + selected + specificColumnClass;
        let imgSrc = "images/imge_layout"+ (index+1) + ".png";
        return(
            <div className={className} key={index} onClick={this.props.onLayoutClick.bind(null,layout)}>
                <img className="cursorPointer" src={imgSrc}/>
                <div className="choiceBtn cursorPointer"></div>
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
        let phoneBodyBgColor = _.endsWith(this.props.phoneColors.bgColor,",0)") ? "white" : this.props.phoneColors.bgColor;

        return (
            <div id="step2" className="pageWrap">
                <div className="absolute pagination"><span className="huge">2</span><span className="tiny">/5</span></div>
                <div className="vAlign">
                    <div className="row">
                        <div className="columns large-8">
                            <div className="row">
                                <h1 className="businessTitle">Choose the colors and design you love</h1>
                            </div>
                            <div className="row layoutsWrap">
                                <p className="h2-text">Design:</p>
                                {this.props.layouts.map(this._createLayoutRow, this)}
                            </div>
                            <div className="row">
                                <p className="h2-text">Colors:</p>
                                {this.props.schemes.map(this._createPaletteRow, this)}
                            </div>
                        </div>
                        <div className="columns large-4 end demoWrap">
                            <div className={wrapClass}>
                                <div className="inner">
                                    <div className="topPas" style={{backgroundColor: this.props.phoneColors.upperColor}}>
                                        <div className="dynamic" style={{color:this.props.phoneColors.pageHeaderTextColor}}>Welcome</div>
                                    </div>
                                    <DemoPhoneLayout origin="getLayout" bgImage = "images/imge_placeholder.png" iconsColor = {this.props.phoneColors.iconsColor} phoneBodyBgColor = {phoneBodyBgColor} layout={this.props.selectedLayout}/>
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
    paletteSelected: React.PropTypes.bool.isRequired,
    onLayoutClick: React.PropTypes.func.isRequired,
    layouts: React.PropTypes.array.isRequired,
    selectedLayout: React.PropTypes.number.isRequired
}

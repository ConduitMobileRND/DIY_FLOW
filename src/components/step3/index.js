import React, { Component } from 'react';
import style from './step3.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import ThumbsSlider from '../generalComponents/slider';
import jQuery from 'jquery';
import InfoIcon from '../generalComponents/icons/infoIcon';
import RewardsIcon from '../generalComponents/icons/rewardsIcon';

const defaultImgText = "Add your image title";

export default class Step3 extends Component {
    constructor(props) {
        super();

        let stored = JSON.parse(localStorage.state);
        let appData = JSON.parse(stored.page_0);
        let prevStored = JSON.parse(stored.page_2);
        console.log(prevStored);
        this.state =
        {
            data: {
                id: 3,
                token: appData.token,
                locationId:appData.locationId,
                storedImages: prevStored.response,
                phoneColors: prevStored.phoneColors,
                payload:{
                    selectedImages:[{image:prevStored.response.data[0], imageText:defaultImgText, selected:false},{image:prevStored.response.data[1], imageText:defaultImgText, selected:false},{image:prevStored.response.data[2], imageText:defaultImgText, selected:false},{image:prevStored.response.data[3], imageText:defaultImgText, selected:false}]
                },
                imageOnScreen: prevStored.response.data[0].url
            }
        }
        this._onClickThumb = this._onClickThumb.bind(this);
        this._createImageItem = this._createImageItem.bind(this);
        this._selectImage = this._selectImage.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._onTextInputBlur = this._onTextInputBlur.bind(this);
        /*create initial pull of selected images*/

    }
    _handleBtnClick(){
        let cpTask = new Handler(this);
        let cpReturnData = cpTask.handleData();
    }
    _toggleClass(options){
       // debugger;
        if(options.action == "add"){
            jQuery("."+options.className).addClass(options.toggleClass);
        }else{
            jQuery("."+options.className).removeClass(options.toggleClass);
        }
    }
    _selectImage(index){
        for(let i in this.state.data.payload.selectedImages){
            this.state.data.payload.selectedImages[i].selected = false;
        }

        this.state.data.payload.selectedImages[index].selected = true;
        this.state.data.imageOnScreen = this.state.data.payload.selectedImages[index].image.url;

        this.setState({data:this.state.data});
        jQuery(".slider").addClass("show");
    }
    _createImageItem(item,index){
        let imageId = "image_"+item.image.image_id;
        let wrapClasses = "imageWrap columns large-3";
        if(item.selected == true){
            wrapClasses += " selected";
        }
        let keyId = item.image.image_id+ Math.floor((Math.random() * 1000) + 1);
        return (
            <div className={wrapClasses} key={keyId} id={imageId}>
                <div className="borderWrap">
                    <div className="innerWrap" style={{backgroundSize:"cover",backgroundImage:"url('"+item.image.url+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}  onClick={this._selectImage.bind(null, index)}>
                        <div className="blanket"></div>
                    </div>
                </div>
                <input className="imageDescription" defaultValue={item.imageText} ref="SelectedText" onFocus={this._toggleClass.bind(null, {className:"blanket",toggleClass:"noHover", action:"add"})} onBlur={this._onTextInputBlur.bind(null,{"index":index},{className:"blanket",toggleClass:"noHover", action:"remove"})}/>
            </div>
        )
    }
    _onTextInputBlur(index, classParams, event){
        this._toggleClass(classParams);
        this.state.data.payload.selectedImages[index.index].imageText = event.target.value;
        this.setState({data:this.state.data});
        console.log(index);
        console.log(classParams);
        console.log(event);
    }
    _onClickThumb(item){
        let selectedText = jQuery(".imageWrap.selected").find("input.imageDescription").val();

        let images = this.state.data.storedImages.data;
        let theEnteringImageObj = {};
        for (let i in images){
            if(images[i].image_id == item.id){
                theEnteringImageObj = {image: images[i], imageText: selectedText, selected: true};
            }
        }
        for(let i in this.state.data.payload.selectedImages){
            if(this.state.data.payload.selectedImages[i].selected == true){
                this.state.data.payload.selectedImages[i] = theEnteringImageObj;
            }
        }
        this.state.data.imageOnScreen = theEnteringImageObj.image.url;
        this.setState({data:this.state.data});
        return;
    }
    render(){
        let wrapClass = "phone "+this.state.data.phoneColors.brightness;
        console.log("inside render");
        console.log(wrapClass);
        console.log(this);
        return (
            <div id="step3" className="pageWrap lightGreyBg">
                <div className="row relative topPad">
                    <div className="absolute pagination"><span className="huge">3</span><span className="tiny">/4</span></div>
                </div>
                <div className="row">
                    <div className="columns large-10 large-offset-1 titleWrap">
                        <h1 className="businessTitle">Welcome messages</h1>
                        <p className="subtitle">Edit your welcom messages to attract and engage users, showcasing your delicious food, great products, happy customers etc.</p>
                    </div>
                </div>
                <div className="topPhone">
                    <div className="row">
                        <div className="columns large-4 large-centered">
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
                                            <div className="imageOnScreen" style={{backgroundImage:"url('"+this.state.data.imageOnScreen+"')"}}></div>

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
                    </div>
                </div>
                <div className="images">
                    <div className="row">
                        {this.state.data.payload.selectedImages.map(this._createImageItem, this)}
                    </div>
                </div>
                <div className="slider">
                    <div className="row">
                        <ThumbsSlider images={this.state.data.storedImages.data} onClickThumb={this._onClickThumb}/>
                    </div>
                </div>
                <div className="nextBtn">
                    <div className="row">
                        <Button foundationClasses="large-4 columns large-centered" buttonSize="large" btnText="NEXT" onClick={this._handleBtnClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

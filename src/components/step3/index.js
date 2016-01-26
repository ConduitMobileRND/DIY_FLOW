import React, { Component } from 'react';
import style from './step3.scss';
import Button from '../generalComponents/button';
import lodash from 'lodash';
import Handler from '../../api/handler';
import Slider from '../generalComponents/slider';

export default class Step3 extends Component {
    constructor(props) {
        super();
        let stored = JSON.parse(localStorage.state);
        let prevStored = JSON.parse(stored.page_2);
        console.log(prevStored);
        this.state =
        {
            data: {
                id: 3,
                storedImages: prevStored.response,
                phoneColors: prevStored.phoneColors
            }
        }
        //debugger;

    }
    _createImageItem(item){
        return(
            <div className='imageWrap' key={item.image_id}>

                <img src={item.url} />
            </div>
        )
    }
    render(){
        let wrapClass = "columns large-4 large-centered phone "+this.state.data.phoneColors.brightness;
        return (
            <div id="step3" className="pageWrap">
                <div className="row">
                    <div className="columns large-10 large-offset-1 titleWrap">
                    <h1 className="businessTitle">Welcome messages</h1>
                    <p>Edit your welcom messages to attract and engage users, showcasing your delicious food, great products, happy customers etc.</p>
                      </div>
                </div>
                <div className="row">
                    <div className={wrapClass}>
                        <div className="inner">
                            <div className="topPas" style={{backgroundColor: this.state.data.phoneColors.upperColor}}>
                                <div className="dynamic"></div>
                            </div>
                            <div className="bgWrap" style={{backgroundColor:this.state.data.phoneColors.bgColor}}>
                                <div className="iconsRow">
                                    <div className="iconColumnWrap" style={{float:"left"}}>
                                        <div className="iconColumn"  ref="iconBg" style={{backgroundColor: this.state.data.phoneColors.iconsColor}}></div>
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
               <ImageGallery images={this.state.data.storedImages.data}/>
                {this.state.data.storedImages.data.map(this._createImageItem, this)}
            </div>
        )
    }
}

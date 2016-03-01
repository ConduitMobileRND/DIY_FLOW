import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './finish.scss';
import QRCode from 'react-qr';
var Circle = require('rc-progress').Circle;

export default class Finish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                code:"37065",
                linkAndroid:"http://www.google.com",
                linkApple:"https://itunes.apple.com/ng/app/keeprz/id713561902?mt=8"

            }
        }
    }



    componentDidMount(){
     //   this._initProgress();
    }

    render(){
        return(
            <div className="pageWrap" id="finish">
                <div className="vAlign" ref="vAlign">
                    <div className="row">
                        <div className="columns large-12 titleWrap">
                            <h1>Great! You're almost done!</h1>
                            <p className="description black">Your newly created app is being published right now! This might take several minutes.</p>
                        </div>
                    </div>
                    <div className="row centered finishPartWrap">
                        <div className="finishPart"  id="finishContentWrap1">
                            <div className="animationWrap">
                                <img className="animatedImg" src="images/AnimationInsideOnly2.gif"/>
                                <Circle percent={this.props.progressPercent} strokeWidth="2" strokeColor="#ffffff" trailColor="#32c6e9"/>
                            </div>
                            <p className="text-center percentage" >{this.props.progressPercent}%</p>
                        </div>


                        <div className="finishPart"  id="finishContentWrap2">
                            <div>
                                <div className="columns large-10 large-centered">
                                    <div className="code">
                                        <p>Email:</p>
                                        <p className="description">{this.props.email}</p>
                                        <br/>
                                        <p>Password:</p>
                                        <p className="description">{this.props.code}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row qrWrap">
                                <div className="large-4 large-offset-2 columns text-center">
                                    <QRCode text={this.state.data.linkApple} />
                                    <img src="images/icon_apple.png" className="deviceIcon" alt="Apple"/>
                                </div>
                                <div className="large-4 end columns text-center">
                                    <QRCode text={this.state.data.linkAndroid}/>
                                    <img src="images/icon_android.png" className="deviceIcon" alt="Android"/>
                                </div>
                            </div>
                            <div className="row text-center">
                                <p>One of our business operation representatives will call you soon.</p>
                                <p className="description black">Need more help? Feel free to contact us at <a className="mailTo" href="mailto:bizsupport@como.com">bizsupport@como.com</a></p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
Finish.propTypes = {

}
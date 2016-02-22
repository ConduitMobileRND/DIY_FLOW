import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './finish.scss';
import QRCode from 'react-qr';

export default class Finish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                code:"37065",
                linkAndroid:"http://www.google.com",
                linkApple:"http://www.google.com"
            }
        }
    }
    componentDidMount(){
        setTimeout(function(){
            let vTop = (jQuery(window).height() - parseInt(jQuery(".vAlign").css("height")))/2;
            console.log(jQuery(".vAlign").css("height"));
            if(vTop > 0) {
                jQuery(".vAlign").css("top", vTop + "px");
            }
        },100);
     /*   let vTop = (jQuery(window).height() - parseInt(jQuery(".vAlign").css("height")))/2;
        console.log(jQuery(".vAlign").css("height"));
        if(vTop > 0) {
            jQuery(".vAlign").css("top", vTop + "px");
        }*/
       // let el = jQuery(this.getDomNode());
        console.log(this.refs.vAlign);
    }
    render(){
        return(
            <div className="pageWrap" id="finish">
                <div className="vAlign" ref="vAlign">
                    <div className="row text-center">
                        <div className="columns large-12">
                            <h1>Great! You're done!</h1>
                            <p className="description">Download Como Preview App and use this code to view your app.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns large-3 large-centered">
                            <div className="code">{this.state.data.code}</div>
                        </div>
                    </div>
                    <div className="row qrWrap">
                        <div className="large-6 columns text-center">
                            <QRCode text={this.state.data.linkApple} />
                            <img src="images/icon_apple.png" className="deviceIcon" alt="Apple"/>
                        </div>
                        <div className="large-6 columns text-center">
                            <QRCode text={this.state.data.linkAndroid}/>
                            <img src="images/icon_android.png" className="deviceIcon" alt="Android"/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <p>One of our business operation representatives will call you soon.</p>
                        <p className="description">Need more help? Feel free to contact us at <a className="mailTo" href="mailto:bizsupport@como.com">bizsupport@como.com</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
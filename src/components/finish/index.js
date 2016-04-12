import React, { Component } from 'react';
import jQuery from 'jquery';
import style from './finish.scss';
import QRCode from 'react-qr';
import Button from '../generalComponents/button';


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
        this._handleBtnClick=this._handleBtnClick.bind(this);
    }

    _handleBtnClick(){
        this.props.handleBtnClick(this.refs, "downloadApp", event);
    }
    render(){
        let barWidth = this.props.progressPercent+"%";
        return(
            <div className="pageWrap" id="finish">
                <div className="downloadAppSection">
                    <div className="row">
                        <p className="notification large-3 columns large-offset-3">Your App is ready</p>
                        <Button foundationClasses="large-3 columns end" buttonSize="large" btnText="DOWNLOAD" onClick={this._handleBtnClick}/>
                        <span></span>
                    </div>
                </div>
                <div className="vAlign" ref="vAlign">
                    <div style={{position:"relative",height:"600px"}}>
                    <div id="part1">
                        <div className="row">
                            <div className="columns large-12 titleWrap">
                                <h1>Whether you've got a single store, several locations, or an expanding chain, we've got the right solution for you</h1>
                            </div>
                        </div>
                        <div className="centered finishPartWrap">
                            <div className="finishPart first animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_1Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Modular Loyalty Platform</p>
                                        <p className="descriptionAnim">Flexible design makes it easy to adjust the platform to your business and manage a wide variety of features in minutes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_2Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Information & Content</p>
                                        <p className="descriptionAnim">Keep all your business's important information at your customers' fingertips:Catalogs, menus,photos, store locator, opening hours, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_3Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Personalized Rewards</p>
                                        <p className="descriptionAnim">Easily target the right customers at the right time with the right offer: points, cash back, coupons, punch cards, and other treats.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_4Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Communication</p>
                                        <p className="descriptionAnim">See your customers' activities, send them relevant deals and rewards, and get their feedback.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_5Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Gamification</p>
                                        <p className="descriptionAnim">Spark up your customers' experience with fun ways earn rewards like scratch cards and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_6Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Social integration</p>
                                        <p className="descriptionAnim">Integration to social networks lets your loyal customers share what they love about your business and take an active part in your community.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_7Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Seamless Management Console</p>
                                        <p className="descriptionAnim">Integration to social networks lets your loyal customers share what they love about your business and take an active part in your community.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_8Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Actionable Analytics & Targeting</p>
                                        <p className="descriptionAnim">Business intelligence that helps you understand your customers' behavior, and use that data to target effectively and increase sales.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_9Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Integration & Connectivity</p>
                                        <p className="descriptionAnim">Seamless connectivity with your POS and other services allows for multiple closing-the-loop options to capture relevant customer data and transactions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-6 columns large-centered progressWrap">
                                <p className="subtitleAnim">{this.props.progressPercent}%</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:barWidth}}></div>
                                </div>
                                <p>Please wait, this can take a few seconds...</p>
                            </div>
                        </div>
                    </div>
                    <div id="part2">
                        <div className="row large-collapse">
                            <div className="large-2 large-offset-2 columns">
                                <QRCode text={this.state.data.linkApple} />
                            </div>
                            <div className="code large-6 end columns">
                                <p>Email:</p>
                                <p className="description codeDescription">{this.props.email}</p>
                                <p>Password:</p>
                                <p className="description codeDescription">{this.props.code}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columns large-10 large-centered">
                                 <p className="scanExplain">Scan the QR code to download Como Preview app.<br/>Open your Como Preview app login using your Email and Password</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="subtitleAnim">One of our business operation persons will contact you soon helping you create the best CLM solution for your business.</p>
                            <p className="description black">Need more help? Feel free to contact us at: &nbsp;<a className="mailTo" href="mailto:bizsupport@como.com">bizsupport@como.com</a></p>
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
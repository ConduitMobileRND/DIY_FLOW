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
                        <p className="notification large-3 columns large-offset-3">Ding! Your extended loyalty solution is ready</p>
                        <Button foundationClasses="large-3 columns end" buttonSize="large" btnText="TRY IT" onClick={this._handleBtnClick}/>
                        <span></span>
                    </div>
                </div>
                <div className="vAlign" ref="vAlign">
                    <div style={{position:"relative",height:"600px"}}>
                    <div id="part1">
                        <div className="row">
                            <div className="columns large-12 titleWrap">
                                <h1>While your app is cooking, learn why you are getting much more than just an app.</h1>
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
                                        <p className="descriptionAnim">Flexible design makes it quick and easy to adjust the platform to your business needs just the way you like it.</p>
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
                                        <p className="descriptionAnim">Keep important information about your business at your customer's fingertips, including business hours, menus, catalogs and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_3Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Personalized Gifts & Rewards</p>
                                        <p className="descriptionAnim">Easily target customers at the perfect time to offer them the best gifts and treats.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_4Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Reach & Connect</p>
                                        <p className="descriptionAnim">Engage with customers on-the-go to  send them updates on special deals. get their feedback, and much more.</p>
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
                                        <p className="descriptionAnim">Spice up customer experience with fun ways to earn points and redeem rewards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_6Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Social Media</p>
                                        <p className="descriptionAnim">Enjoy full integration to multiple social media channels and engage with  customers to grow your business and community.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_7Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Advanced Management Console</p>
                                        <p className="descriptionAnim">Integration to social networks lets your loyal customers share what they love about your business and take an active part in  your community.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_8Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Actionable Data & Targeting</p>
                                        <p className="descriptionAnim">Make the most of your data by understanding customer behavior and trends to increase engagement and drive sales.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="finishPart animated">
                                <div className="row">
                                    <div className="columns large-6">
                                        <img src="/images/imge_9Progress.png" alt=""/>
                                    </div>
                                    <div className="columns large-6 featureExplained">
                                        <p className="subtitleAnim">Connect in Every Way</p>
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
                                <p>Please wait, this may take a few seconds.</p>
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
                                 <p className="scanExplain">Check out your trial branded app by scanning the QR code and login using the Email and Password below.</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <p className="subtitleAnim">One of our champion representatives will contact you shortly to take your loyalty solution to the next level.</p>
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
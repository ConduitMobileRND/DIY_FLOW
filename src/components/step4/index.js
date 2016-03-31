import React, { Component } from 'react';
import style from './step4.scss';

import jQuery from 'jquery';


import Input from '../generalComponents/input';
import Textarea from '../generalComponents/textarea';
import Button from '../generalComponents/button';

export default class Step4 extends Component {
    constructor(props) {
        super();

        this.state = {
            data: {}
        };
        this._handleBtnClick = this._handleBtnClick.bind(this);
    }

    _handleBtnClick() {
        this.props.handleBtnClick(this.refs, "setLoyalty", event);
    }

    render() {
        return(
            <div id="step4" className="pageWrap">
                <div className="absolute pagination"><span className="huge">4</span><span className="tiny">/5</span></div>
                <div className="vAlign">
                    <div className="row">
                        <div className="columns large-12 titleWrap">
                            <h1 className="businessTitle">Configure your loyalty features</h1>
                            <p className="subtitle">Configure these loyalty features to match you business type. Set up the right name, description and image that will appear on your loyalty mobile app.</p>
                        </div><div className="clearfix"></div>
                        <div className="featureBoxesWrap columns large-12">
                            <div className="featureBox show">
                                <div className="featureTopPart"><h2>Joining gift <span className="hint">increase engagement</span></h2><div className="phoneHint"></div><div className="clearfix"></div>
                                    <div className="phoneToolTip arrow_box animated">
                                        <img src="/images/imge_tooltip_gift.png"/>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="featureDetails row">
                                    <div className="featureTexts columns large-9">
                                        <Input
                                            foundationClasses=""
                                            ref="giftName"
                                            name="giftName"
                                            stateId="giftName"
                                            onChange={this.props.setData.bind(null, this.props.stateId)}
                                            isValid={this.props.form.giftName.isValid}
                                            type="url"
                                            isRequired={true}
                                            labelText="Name"
                                            onBlur={this.props.handleValidation}
                                            onKeyUp={this.props.handleValidation}
                                            validType="text"
                                            errorMsg="Please provide a valid name"
                                            placeholder=""
                                            value={this.props.form.giftName.value}/>
                                          <Textarea
                                              foundationClasses=""
                                              ref="giftDescription"
                                              name="giftDescription"
                                              stateId="giftDescription"
                                              placeholder=""
                                              onChange={this.props.setData.bind(null, this.props.stateId)}
                                              isValid={this.props.form.giftDescription.isValid}
                                              isRequired={true}
                                              labelText="Description"
                                              onBlur={this.props.handleValidation}
                                              onKeyUp={this.props.handleValidation}
                                              validType="text"
                                              errorMsg="Please provide a valid description"
                                              value={this.props.form.giftDescription.value}/>
                                    </div>
                                    <img src="/images/giftImg.jpg" className="featureImg columns large-3"/>
                                </div>
                            </div>
                            <div className="featureBox">
                                <div className="featureTopPart"><h2>Punch card <span className="hint">bring customers back</span></h2><div className="phoneHint"></div><div className="clearfix"></div>
                                    <div className="phoneToolTip arrow_box animated">
                                        <img src="/images/imge_tooltip_punchcard.png"/>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="featureDetails row">
                                    <div className="featureTexts columns large-9">
                                        <Input
                                            foundationClasses=""
                                            ref="punchName"
                                            name="punchName"
                                            stateId="punchName"
                                            onChange={this.props.setData.bind(null, this.props.stateId)}
                                            isValid={this.props.form.punchName.isValid}
                                            type="text"
                                            isRequired={true}
                                            labelText="Name"
                                            onBlur={this.props.handleValidation}
                                            onKeyUp={this.props.handleValidation}
                                            validType="text"
                                            errorMsg="Please provide a valid name"
                                            placeholder=""
                                            value={this.props.form.punchName.value}/>
                                          <Textarea
                                              foundationClasses=""
                                              ref="punchDescription"
                                              name="punchDescription"
                                              stateId="punchDescription"
                                              placeholder=""
                                              onChange={this.props.setData.bind(null, this.props.stateId)}
                                              isValid={this.props.form.punchDescription.isValid}
                                              isRequired={true}
                                              labelText="Description"
                                              onBlur={this.props.handleValidation}
                                              onKeyUp={this.props.handleValidation}
                                              validType="text"
                                              errorMsg="Please provide a valid description"
                                              value={this.props.form.punchDescription.value}/>
                                        <Input
                                            foundationClasses=""
                                            ref="punchNumber"
                                            name="punchNumber"
                                            stateId="punchNumber"
                                            onChange={this.props.setData.bind(null, this.props.stateId)}
                                            isValid={this.props.form.punchNumber.isValid}
                                            type="number"
                                            isRequired={true}
                                            labelText="Number of punches"
                                            onBlur={this.props.handleValidation}
                                            onKeyUp={this.props.handleValidation}
                                            validType="positiveInteger"
                                            errorMsg="Please provide a number of punches"
                                            placeholder=""
                                            value={this.props.form.punchNumber.value}/>
                                    </div>
                                    <img src="/images/pointsImg.jpg" className="featureImg columns large-3"/>
                                </div>
                            </div>
                            <div className="featureBox">
                                <div className="featureTopPart"><h2>Show with points <span className="hint">increase customers shopping cart</span></h2><div className="phoneHint"></div><div className="clearfix"></div>
                                    <div className="phoneToolTip arrow_box animated">
                                        <img src="/images/imge_tooltip_points.png"/>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="featureDetails row">
                                    <div className="featureTexts columns large-9">
                                        <Input
                                            foundationClasses=""
                                            ref="pointsName"
                                            name="pointsName"
                                            stateId="pointsName"
                                            onChange={this.props.setData.bind(null, this.props.stateId)}
                                            isValid={this.props.form.pointsName.isValid}
                                            type="text"
                                            isRequired={true}
                                            labelText="Name"
                                            onBlur={this.props.handleValidation}
                                            onKeyUp={this.props.handleValidation}
                                            validType="text"
                                            errorMsg="Please provide a valid name"
                                            placeholder=""
                                            value={this.props.form.pointsName.value}/>
                                          <Textarea
                                              foundationClasses=""
                                              ref="pointsDescription"
                                              name="pointsDescription"
                                              stateId="pointsDescription"
                                              placeholder=""
                                              onChange={this.props.setData.bind(null, this.props.stateId)}
                                              isValid={this.props.form.pointsDescription.isValid}
                                              isRequired={true}
                                              labelText="Description"
                                              onBlur={this.props.handleValidation}
                                              onKeyUp={this.props.handleValidation}
                                              validType="text"
                                              errorMsg="Please provide a valid description"
                                              value={this.props.form.pointsDescription.value}/>
                                        <Input
                                            foundationClasses=""
                                            ref="pointsNumber"
                                            name="pointsNumber"
                                            stateId="pointsNumber"
                                            onChange={this.props.setData.bind(null, this.props.stateId)}
                                            isValid={this.props.form.pointsNumber.isValid}
                                            type="number"
                                            isRequired={true}
                                            labelText="Value in points"
                                            onBlur={this.props.handleValidation}
                                            onKeyUp={this.props.handleValidation}
                                            validType="positiveInteger"
                                            errorMsg="Please provide a value in points"
                                            placeholder=""
                                            value={this.props.form.pointsNumber.value}/>
                                    </div>
                                    <img src="/images/pointsImg.jpg" className="featureImg columns large-3"/>
                                </div>
                            </div>
                        </div>
                        <div className="nextBtn">
                            <div className="row">
                                <Button foundationClasses="large-4 columns large-offset-4" buttonSize="large" btnText="Next" onClick={this._handleBtnClick}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Step4.propTypes = {
    handleValidation: React.PropTypes.func.isRequired,
    form:React.PropTypes.object.isRequired,
    setData: React.PropTypes.func.isRequired,
    handleBtnClick: React.PropTypes.func.isRequired
};
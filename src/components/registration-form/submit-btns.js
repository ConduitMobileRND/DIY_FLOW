import React, { Component } from 'react';
import LanguageApi from '../../api/language-api';

export default class SubmitBtns extends Component {
  constructor(props) {
    super();
    this.submitBtn;

    if (props.canSkip) {
      this.submitBtn = <SubmitBtnWithSkip submitCaption={LanguageApi.translate('app-modules.register.submit_button')}
        skipCaption={LanguageApi.translate('app-modules.register.skip_button')} submitFn={props.submitFn} skipFn={props.skipFn} />;
    } else {
      this.submitBtn = <SubmitBtn caption={LanguageApi.translate('app-modules.register.submit_button')} submitFn={props.submitFn} />;
    }

  }

  render() {
    return(
      <div>
        {this.submitBtn}
      </div>
    );
  }
}

const SubmitBtn = ({caption, submitFn}) => (
  <div className="row">
    <button className="location-color-button text-align-center small-12 columns"
      onClick={submitFn}>
      {caption}
    </button>
  </div>
);

const SubmitBtnWithSkip = ({submitCaption, skipCaption, submitFn, skipFn}) => (
  <div className="row">
    <div className="small-8 columns padding-0">
      <button className="location-color-button text-align-center" onClick={submitFn}>
        {submitCaption}
      </button>
    </div>
    <div className="small-4 columns padding-right-0">
      <button className="location-color-button text-align-center" onClick={skipFn}>
        {skipCaption}
      </button>
    </div>
  </div>
);

import React, { Component } from 'react';
import LanguageApi from '../../api/language-api';

const TermsAndConditions = (props) => {
  let termAndConditionsText = !!props.url
    ? LanguageApi.translate('app-modules.register.tos_notice')
    : LanguageApi.translate('app-modules.register.tos_notice_no_location_tos');

    // This caouses some wrong code injection... should have a better html injection solution
    // <p dangerouslySetInnerHTML={{__html: termAndConditionsText}}></p>
    // <p>Terms and condition palceholder</p>
  return(
    <div>
      <p dangerouslySetInnerHTML={{__html: termAndConditionsText}}></p>
    </div>
  );
}

export default TermsAndConditions;

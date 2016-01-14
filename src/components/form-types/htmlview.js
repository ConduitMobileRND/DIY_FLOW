import React from 'react';
import FormTypes from './form-types';

const HtmlView = ({formField}) => (
    <div dangerouslySetInnerHTML={{__html: formField.value}} />
);

// Init
FormTypes.addItem('html_view', HtmlView);

export default HtmlView;

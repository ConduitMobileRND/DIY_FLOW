import React from 'react';
import FormTypes from './form-types';

const Textarea = ({formField, onChangeFn}) => (
    <div>
      <label>{formField.title}</label>
      <textarea onChange={onChangeFn}></textarea>
    </div>
);

// Init
FormTypes.addItem('textarea', Textarea);

export default Textarea;

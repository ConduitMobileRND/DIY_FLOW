import React from 'react';
import FormTypes from './form-types';

const Options = ({formField, onChangeFn}) => {
  let selectMenu = formField.options.length
    ? (
      <div>
        <label>{formField.title}</label>
        <select onChange={onChangeFn}>
          {formField.options.map((option, index) => {
            return <option key={index} value={option.value}>{option.label}</option>
          })}
        </select>
      </div>
    )
    : '';

  return (
    <div>
      {selectMenu}
    </div>
  )
};

// Init
FormTypes.addItem('options', Options);

export default Options;

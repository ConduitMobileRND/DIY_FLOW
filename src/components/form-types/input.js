import React from 'react';
import FormTypes from './form-types';

const InputField = ({formField, formFieldType, onChangeFn}) => {
  let className = `form-item ${!!formField.required ? 'required': ''} ${!!formField.errorMessage ? 'error': ''}`;
  console.log('InputFieldClass', className);

  return (
    <div className={className}>
      <label htmlFor={formField.name}>{formField.title}</label>
      <input
        type={formFieldType || 'text'}
        name={formField.name}
        onChange={onChangeFn}
        checked={formFieldType === 'checkbox' && !!formField.value ? 'checked' : null}
      />
    <span className='validation-message'>{formField.errorMessage}</span>
    </div>
  );
};

//Init
FormTypes.addItem(['text', 'string', 'number', 'date', 'password', 'checkbox'], InputField);

export default InputField;

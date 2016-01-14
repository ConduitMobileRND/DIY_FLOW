import React, { Component } from 'react';

const FormTypes = {
  items: {},

  /*
  * addItem:
  * adds a new react component that will be used according to the input types
  */
  addItem(types, component) {
    var items = this.items;
    types = Array.isArray(types) ? types : [types];
    types.forEach((formTypeItem) => {
      items[formTypeItem] = component;
    });
  },

  /*
  * getItemComponent:
  * Gets the relevant component according to the formField type
  */
  getItemComponent(formField, onChangeFn) {
    let formFieldType = this.getFormFieldType(formField);

    if (formFieldType && typeof this.items[formFieldType] === 'function') {
      return this.items[formFieldType]({
        formField: formField,
        formFieldType: formFieldType,
        onChangeFn: (event) => { onChangeFn(formField.constant_id, event); }
      });
    } else {
      return <div className="empty"></div>
    }
  },

  /*
  * getFormFieldType:
  * The register form and field types are not straight forward, and not allways
  * the type of the field is representing the actual type(e.g: selectbox type is text, same
  * as regular textbox).
  */
  getFormFieldType(formField) {
    let type = '';
    if (formField.form_fields_field_type.has_options == '1' && formField.options.length > 0) {
      type = 'options';
    } else {
      type = formField.form_fields_field_type.type === 'string'
        ? 'text'
        : formField.form_fields_field_type.type;
    }

    return type;
  }
}

export default FormTypes;

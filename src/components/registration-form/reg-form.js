import React, { Component } from 'react';
import _ from 'lodash';
import RegFormStyle from './reg-form.scss';
import Fetch from '../../utils/fetch/fetch';
import LocationApi from '../../api/location-api';
import LanguageApi from '../../api/language-api';
import FormTypes from '../form-types/form-types';
import InputType from '../form-types/input';
import TextArea from '../form-types/textarea';
import Options from '../form-types/options';
import SubmitBtns from './submit-btns';
import TermsAndConditions from './terms';

export default class RegForm extends Component {
  constructor(props) {
    super();
    this.state = {
      filledFormData: {},
      errorMsg:'',
      isSubmitting: false,
      isValid: true,
      isCompleted: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleFormItemChange = this.handleFormItemChange.bind(this);
    this.initFormData = this.initFormData.bind(this);

    // Init Page
    this.initFormData(props.formData);
  }

  render() {
    let pageHtml = '';
    if (this.state.isCompleted) {
      pageHtml =
        <div className="block animated fadeInDown">
          <h3 className="block-title">{LanguageApi.translate('app-modules.register.completed.title')}</h3>
          <div className="inner-block web-form-element">
            <div translate="app-modules.register.completed.content">{LanguageApi.translate('app-modules.register.completed.content')}</div>
          </div>
        </div>
    } else {
      let errorMsg = !!this.state.errorMsg
        ? <div className="block error">{LanguageApi.translate(`app-modules.register.errors.${this.state.errorMsg}`)}</div>
        : '';

      let formFields = this.props.formData.fields.map(formField => {
        return (
          <div key={formField.id}>
            {FormTypes.getItemComponent(formField, this.handleFormItemChange)}
          </div>
        );
      });

      pageHtml =
        <div className="block">
          <h3 className="block-title">{LanguageApi.translate('app-modules.register.title')}</h3>
          <div className="inner-block web-form-element">
          {formFields}
          <TermsAndConditions url={this.props.formData.location.toc_url} />
          <SubmitBtns canSkip={!!this.props.formData.can_skip} submitFn={this.submitForm} />
          </div>
          {errorMsg}
        </div>
    }

    console.log('form was rendered');
    return(
      <div>
        {pageHtml}
      </div>
    );
  }

  initFormData(formData) {
    formData.fields.forEach((field, index) => {
      let fieldName = _.has(field.form_fields_field_type.name) ? field.form_fields_field_type.name : field.name;
      let fieldType = _.has(field.form_fields_field_type.type) ? field.form_fields_field_type.type : field.type;

      this.state.filledFormData[field.constant_id] = {
        constant_id: field.constant_id,
        name: fieldName,
        type: fieldType,
        value: formData.userinfo[fieldName] || ''
      };
    });
  }

  handleFormItemChange(id, event) {
    let value = (event.target.type === 'date')
      ? generateSplitedDateObject(event.target.value)
      : event.target.value;
    let component = _.find(this.props.formData.fields, {constant_id: id});

    this.validateComponent(component, value)

    this.state.filledFormData[id].value = value;
    this.forceUpdate();
  }

  validateComponent(component, value) {
    if (component) {
      component.errorMessage = '';

      if (!!component.required && _.size(value) === 0) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.required');
      } else if (component.input_maxlength > 0 && _.size(value) > component.input_maxlength) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.maxlength');
      } else if (component.input_minlength > 0 && _.size(value) < component.input_minlength) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.minlength');
      } else if (!!component.input_pattern) {
        let regExp = _.isRegExp(component.input_pattern)
          ? component.input_pattern
          : new RegExp(`^${component.input_pattern}$`);

        if (!regExp.exec(value)) {
          component.errorMessage = LanguageApi.translate('app-modules.validation.pattern');
        }
      }
    }
  }

  submitForm(event) {
    event.stopPropagation();
    event.preventDefault();
    // Run validations

    // Submit the form
    let data = (_.map(_.values(this.state.filledFormData), (item) => {
      return JSON.stringify(item);
    }));

    Fetch.post('appUser/RegistrationVerifyFields', {
      dataType: 'form-urlencoded',
      data: {
        location_id: LocationApi.locationId,
        token: this.props.formData.token,
        data: data
      }
    })
    .then(response => {
      if (response.status === 'error') {
        this.setState({
          errorMsg: response.error
        });
      } else {
        this.setState({
          errorMsg: '',
          isCompleted: true
        });
      }
    })
    .catch(error => {
      console.log('error', error);
    })
  }
};

function generateSplitedDateObject(dateString) {
  let date = new Date(dateString);

  return {
    month: (date.getMonth()+1).toString(),
    day: (date.getDate()).toString(),
    year: (date.getFullYear()).toString()
  };
}

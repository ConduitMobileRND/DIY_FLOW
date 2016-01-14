import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';

import style from './style.scss';

export default class printMaterials extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      id: props.params.id
    };
  }

  componentDidMount() {
    // from the path `/print/:id`
    const id = this.props.params.id
  }

  render() {
    console.log('printMaterials was rendered');
    return(
      <div>
      	Hello world printMaterials
      </div>
    );
  }
}

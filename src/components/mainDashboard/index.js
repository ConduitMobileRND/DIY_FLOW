import React, { Component } from 'react';
import { RaisedButton, Checkbox } from 'material-ui';
import HourBar from './hourBar';
import ShowList from './showList';
import style from './style.scss';

export default class MainDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      slideshows: {}
    };
  }

  render() {
    console.log('DASHBOARD was rendered');
    return(
    <div>
      <HourBar/>
      <br/>
      <ShowList/>
    </div>
    );
  }
}

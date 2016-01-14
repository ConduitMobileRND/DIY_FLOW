import React, { Component } from 'react';
import { RaisedButton, LinearProgress } from 'material-ui';

export default class HourBar extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      hoursLeft: 20
    };
  }

  render() {
    console.log('HourBar was rendered');
    return(
    <div className="row" style={{marginTop:20}}>
	    <div className="large-10 columns">
			<LinearProgress mode="determinate" value={this.state.hoursLeft}  style={{marginTop:32}} />
		</div>
		<div className="large-2 columns get-hours-button-container">
	    	<RaisedButton label="Get more hours" />
	    </div>
    </div>
    );
  }
}

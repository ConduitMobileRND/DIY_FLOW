import React, { Component } from 'react';

export default class FbIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"	 viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M44,21c0,0.6-0.2,1-0.8,1h-3.4c-1.5,0-1.9,0.6-1.9,2.2
	V28h5.2c0.6,0,1,0.5,0.9,1l-0.4,4.9c0,0.6-0.5,1.1-1.1,1.1H38v19c0,0.6-0.4,1-1,1h-6c-0.5,0-1-0.4-1-1V35h-3.2
	c-0.5,0-0.8-0.5-0.8-1.1v-4.8c0-0.6,0.2-1.1,0.8-1.1H30v-5.3c0-5.1,2.7-7.7,8.7-7.7h4.6c0.5,0,0.8,0.4,0.8,1V21z" style={{fill:this.props.fillColor}}/>
            </svg>
        );
    }
}

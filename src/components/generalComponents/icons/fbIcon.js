import React, { Component } from 'react';

export default class FbIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                <ellipse cx="97.3" cy="75.8" rx="0.1" ry="0.1"/>
                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M44.1,35H38v21h-8V35h-5v-7h5v-5.9
	                                                    c0-5.3,2.5-8.1,8.8-8.1H45v7h-4.9c-1.6,0-2.1,1-2.1,2.7V28h6.7L44.1,35z"
                    style={{fill:this.props.fillColor}}/>
            </svg>
        );
    }
}

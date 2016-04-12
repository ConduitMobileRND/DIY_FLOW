import React, { Component } from 'react';

export default class InfoIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(

        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
            <path d="M35.1,0C15.8,0,0,15.7,0,35s15.7,35,35.1,35c19.4,0,35.1-15.7,35.1-35S54.4,0,35.1,0z M40,51c0,1.7-1.3,3-3,3h-3
	c-1.7,0-3-1.3-3-3V32c0-1.7,1.3-3,3-3h3c1.7,0,3,1.3,3,3V51z M35.5,25C33,25,31,23,31,20.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5
	S38,25,35.5,25z" style={{fill:this.props.fillColor}}/>
        </svg>

        );
    }
}

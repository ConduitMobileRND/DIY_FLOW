import React, { Component } from 'react';

export default class favouritesIconIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M48.4,55.6L35,48.1l-13.4,7.5l3-15L13.4,30.1l15.2-1.8
	                                                    L35,14.4l6.4,13.9l15.2,1.8L45.4,40.5L48.4,55.6z"
                    style={{fill:this.props.fillColor}}/>
            </svg>
        );
    }
}

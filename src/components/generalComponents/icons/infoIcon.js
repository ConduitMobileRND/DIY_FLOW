import React, { Component } from 'react';

export default class infoIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}} >
                <path className="st0" d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M36.3,16.4c2.7,0,5.1,2.2,5.1,4.8
                                                                        c0,2.6-2.3,4.8-5.1,4.8c-2.8,0-5.1-2.1-5.1-4.7C31.2,18.6,33.5,16.5,36.3,16.4z M43.1,50.2c-1.8,1.9-3.9,3.1-6.6,3.3
                                                                        c-1.5,0.1-2.9,0.2-4.3-0.2c-2.6-0.7-4.4-3-4-5.7c0.3-2.6,0.8-5.2,1.3-7.8c0.4-2.2,0.8-4.5,1.2-6.7c0.1-0.4,0-0.8,0-1.1
                                                                        c-0.1-0.6-0.5-1-1.1-1.2c-0.4-0.1-0.8,0-1.1-0.1c-0.5-0.1-1.1-0.3-1.5-0.6c-0.7-0.5-0.6-1.5,0.2-1.8c0.4-0.2,0.9-0.2,1.3-0.2
                                                                        c1.7,0,3.3,0,5,0c1.7,0,3.4,0,5.1,0c1.1,0,1.6,0.5,1.9,1.5c0.2,0.9-0.1,1.8-0.2,2.7c-0.7,3.7-1.4,7.4-2.1,11.1
                                                                        c-0.2,1.1-0.4,2.3-0.6,3.4c0,0.2,0,0.4,0,0.6c0,2.3,1.5,2.6,3.2,1.9c0.5-0.2,0.9-0.5,1.3-0.7c0.8-0.4,1.2-0.4,1.5-0.1
                                                                        C43.7,49,43.7,49.6,43.1,50.2z"
                    style={{fill:this.props.fillCOlor}}/>
            </svg>
        );
    }
}
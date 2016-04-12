import React, { Component } from 'react';

export default class favouritesIconIcon extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 70 70" style={{enableBackground:"new 0 0 70 70"}}>
                <path d="M35,0C15.7,0,0,15.7,0,35s15.7,35,35,35s35-15.7,35-35S54.3,0,35,0z M52.4,31.4l-8.9,7.4l4.5,12c0.3,0.7,0.1,1.5-0.5,1.9
        c-0.3,0.2-0.6,0.3-1,0.3s-0.7-0.1-1-0.3L35,45.2l-10.6,7.5c-0.5,0.5-1.3,0.4-1.9,0c-0.5-0.5-0.8-1.2-0.5-1.9l4.5-12l-8.9-7.4
        c-0.5-0.4-0.7-1.2-0.5-1.8c0.2-0.7,0.8-1.1,1.5-1.1h11.9l2.9-10.3c0.2-0.7,0.9-1.2,1.6-1.2s1.4,0.5,1.6,1.2l2.9,10.3h11.9
        c0.6,0,1.3,0.5,1.5,1.1C53.1,30.2,52.9,31,52.4,31.4z" style={{fill:this.props.fillColor}}/>
            </svg>

        );
    }
}

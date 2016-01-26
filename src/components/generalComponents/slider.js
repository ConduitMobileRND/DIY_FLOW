import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

export default class Slider extends Component {
    constructor(props) {
        super();
        this._handleSlide = this._handleSlide.bind(this);
    }
    _handleSlide(index){
        console.log("Slid to " + index);
    }
    render(){
        return (
            <ImageGallery
                items ={this.props.images}
                autoPlay={true}
                slideInterval={4000}
                onSlide={this._handleSlide}/>
                );
    }

}
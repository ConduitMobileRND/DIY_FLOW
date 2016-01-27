import React, {Component} from 'react';
import SlickSlider from 'react-slick';

export default class ThumbsSlider extends Component {
    constructor(props) {
        super();
        this._createThumbRow = this._createThumbRow.bind(this);
    }
    _createThumbRow(item, index) {

            return (
                <div key={item.id} className="thumbWrap" >
                    <div className="thumb" onClick={this.props.onClickThumb.bind(null, item)} style={{
                        backgroundImage: "url('" + item.thumbnail + "')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover", width: "90px", height: "90px"
                    }}></div>
                </div>
            )

    }

    render() {
        let srcImages = this.props.images;
        let thumbs = [];
        for(let i in srcImages) {
            thumbs[i] = {id:srcImages[i].image_id,thumbnail:srcImages[i].url,description:"this text"};
        }
        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows:true,
            autoplay:false


        };
        return (
            <SlickSlider {...settings}>
                  {thumbs.map(this._createThumbRow, this)}
            </SlickSlider>
        );
    }
}

import React, { Component } from 'react';
import Slider from 'react-slick';
import col1 from './col1.JPG';
import col2 from './col2.JPG';
import col3 from './col3.JPG';
import col4 from './col4.JPG';
import './styles.scss';

export default class CarouselSmall extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            cssEase: "linear"
        };

        const photos = [
            col1, col2, col3, col4
        ]

        return (
            <div>
                <Slider {...settings}>
                    {photos.map((photo, index) => (
                            <div className="CarouselSmall" key={index}>
                                <div className="CarouselSmall-content">
                                    <img src={photo} alt="Zdjęcia Marcin Bałaban" />
                                </div>
                            </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
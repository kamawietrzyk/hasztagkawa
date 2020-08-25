import React from 'react';
import Slider from 'react-slick';
import col1 from './col1.JPG';
import col2 from './col2.JPG';
import col3 from './col3.JPG';
import col4 from './col4.JPG';
import MM1 from './MM1.jpg';
import MM2 from './MM2.jpg';
import MM3 from './MM3.jpg';
import MM4 from './MM4.jpg';
import MM5 from './MM5.jpg';
import MM6 from './MM6.jpg';
import MM7 from './MM7.jpg';
import MM8 from './MM8.jpg';
import MM9 from './MM9.jpg';
import MM10 from './MM10.jpg';
import './styles.scss';

const CarouselSmall = () => {
    const settingsMobile = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    const settingsScreen = {
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
        MM1, MM2, MM3, MM4, MM5, MM6, MM7, MM8, MM9, MM10, col1, col2, col3, col4
    ]

    return (
        <>
            <div className="CarouselMobile">
                <Slider {...settingsMobile}>
                    {photos.slice(0, 10).map((photo, index) => (
                        <div className="CarouselSmall" key={index}>
                            <div className="CarouselSmall-content">
                                <img src={photo} alt="Zdjęcia Marcin Bałaban" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="CarouselScreen">
                <Slider {...settingsScreen}>
                    {photos.slice(10).map((photo, index) => (
                        <div className="CarouselSmall" key={index}>
                            <div className="CarouselSmall-content">
                                <img src={photo} alt="Zdjęcia Marcin Bałaban" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default CarouselSmall

import React, { Component } from 'react';
import Slider from 'react-slick';
import kuba from '../Slider/kuba.JPEG';
import mat from '../Slider/mat.JPEG';
import tomek from '../Slider/tomek.JPEG';
import './styles.scss';

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000,
            cssEase: "linear"
        };

        const boys = [
            { pic: kuba, name: "KUBA", text: "Najstarszy, najmądrzejszy i z najdłuższą brodą. Człowiek orkiestra - z wykształcenia muzyk, z zawodu programista, hobbystycznie złota rączka i od niedawna także aktywny miłośnik Enduro. Twórca jednego z najpopularniejszych systemów do fakturowania online w Polsce - nie powinno więc dziwić, że w naszym przedsięwzięciu pilnuje wydatków." },
            { pic: tomek, name: "TOMEK", text: "Średni, ale najważniejszy. Od ponad dekady parzy niesamowitą kawę, ma ogromne doświadczenie i wiedzę. To jego uśmiechniętą gębę będziecie oglądać w Kaczce, stojąc w kolejce po speciality coffee. Mamy nadzieję, że nie zamęczy Was opowieściami o młynkach, ziarnach i maszynach - bo (wierzcie nam!) może o tym gadać godzinami." },
            { pic: mat, name: "MATEUSZ", text: "Najmłodszy - cudowne dziecko, któremu zwykle wszystko się udaje. Ciętą ripostę wyssał z mlekiem matki. Miał być człowiekiem od PR i mediów społecznościowych, ale wkręcił się w stolarstwo. Na co dzień tester oprogramowania, więc jakość i funkcjonalność to dla niego priorytet, a w praktyce oznacza to, że ciągle się do czegoś czepia." }
        ]

        return (
            <div>
                <Slider {...settings}>
                    {boys.map(({ pic, name, text }) => (
                        <div>
                            <div className="Slider-container">
                                <div className="Slider-container__content">
                                    <div className="Slider-container__content-pic">
                                        <img src={pic} alt="#kawa Kuba foto" />
                                    </div>
                                    <div className="Slider-container__content-text">
                                        <h3 className="hasztag mb-0">{name}</h3>
                                        <hr />
                                        <p className="mb-0 mt-2">{text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
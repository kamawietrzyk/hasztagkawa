import React from "react";
import trzyKawy from './trzyKawy.jpg';
import './styles.scss'

const AboutUs = () => (
    <div className="AboutUs" id="about">
        <div className="AboutUs-pic">
            <img src={trzyKawy} alt="#kawa trzy kawy" />
        </div>
        <div className="AboutUs-text">
            <h2 className="hasztag">O NAS</h2>
            <hr />
            <h4>Cześć!</h4>
            <p>Nazywamy się <span className="hasztag">#KAWA</span> i jesteśmy braćmi, którzy wymarzyli sobie wspólny biznes.</p>
            <p>Jest nas 3 - Kuba, Tomek i Mateusz, a do kompletu jedna ONA - Kaczka, która dostała od nas drugie życie i po wielu miesiącach ciężkiej pracy stała się przepięknym, jedynym w swoim rodzaju coffeetruckiem.</p>
        </div>
    </div>
)
export default AboutUs

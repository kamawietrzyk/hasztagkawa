import React from "react";
import trzyKawy from './trzyKawy.jpg';
import kaczka1 from './kaczka1.jpg';
import './styles.scss'
import Carousel from "../Slider";

const AboutUs = () => (
    <>
        <div className="AboutUs" id="about">
            <div className="AboutUs-pic">
                <img src={trzyKawy} alt="#kawa trzy kawy" />
            </div>
            <div className="AboutUs-text">
                <h2 className="hasztag">O NAS</h2>
                <hr />
                <h4>Czołem!</h4>
                <p>Nazywamy się <span className="hasztag">#KAWA</span> i jesteśmy braćmi, którzy wymarzyli sobie wspólny biznes.</p>
                <p>Jest nas 3 - Kuba, Tomek i Mateusz, a do kompletu jedna ONA - Kaczka, która dostała od nas drugie życie i po wielu miesiącach ciężkiej pracy stała się przepięknym, jedynym w swoim rodzaju coffeetruckiem.</p>
            </div>
        </div>
        <Carousel />
        <div className="Kaczka">
            <div className="Kaczka-text">
                <h3 className="hasztag mb-0">KACZKA</h3>
                <hr />
                <p>Przygotowania do otwarcia busa <span className="hasztag">#KAWA </span> trwały około 10 miesięcy, kosztowały nas mnóstwo ciężkiej pracy i hektolitry kawy (głównie cold brew - bo najszybciej się robi i najmocniej kopie). Auto, które kupiliśmy z zamiarem przebudowy, okazało się być w gorszym stanie, niż początkowo zakładaliśmy, dlatego bardzo dużo czasu i energii pochłonęło odrestaurowanie go. Wracaliśmy z pracy, by nocami i weekendami naprawiać, wymieniać części, spawać, szlifować i malować, a gdy auto było już gotowe zaprojektowaliśmy i wykonaliśmy w przydomowym garażu przepiękną, drewnianą zabudowę wnętrza, i oczywiście wyposażyliśmy busa w kawowe sprzęty najwyższej klasy.</p>
            </div>
            <div className="Kaczka-pic">
                <img src={kaczka1} alt="#kaczka zdj.M.Bałaban" />
            </div>
        </div>
        <hr className="divider" />
    </>
)
export default AboutUs

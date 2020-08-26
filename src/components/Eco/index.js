import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faGlobeEurope, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Eco = () => (
    <>
        <div className="Eco" id="eco">
            <h2 className="hasztag text-center">EKOLOGIA</h2>
            <hr />
            <div className="Eco-container">
                <div className="box-one">
                    <span className="icon">
                        <FontAwesomeIcon icon={faGlobeEurope} size="3x" />
                    </span>
                    <p>Kwestia troski o środowisko jest dla nas niezwykle istotna - nie rzucamy sloganami na lewo i prawo, tylko działamy.  Nurt #zerowaste od początku był naszym drogowskazem, także gdy odnawialiśmy busa, dlatego do remontu i zabudowy używaliśmy części z recyklingu oraz drewna, a całość drewnianego wnętrza busa zabezpieczyliśmy naturalnymi woskami i olejami.</p>
                </div>
                <div className="box-two">
                    <span className="icon">
                        <FontAwesomeIcon icon={faChild} size="2x" />
                        <FontAwesomeIcon icon={faChild} size="3x" />
                    </span>
                    <p>Każdy z naszej trójki ma dzieci – nie chcemy pozostawić ich w świecie, w którym przez ludzki egoizm utoną w morzu plastikowych śmieci. Używane przez nas kubki wykonane są z tektury i bio tworzywa PLA (powstałego na bazie skrobi kukurydzianej). Nakładki na wynos są tekturowe, serwetki to niebielony papier z recyklingu, a słomki wykonane są z tektury i powleczone wewnątrz woskiem pszczelim.</p>
                </div>
                <div className="box-three">
                    <span className="icon">
                        <FontAwesomeIcon icon={faLeaf} size="3x" />
                    </span>
                    <p>Czujemy się integralną częścią naszej planety (jak mówią w świecie - <i>Cause there's no PLANet "B"!</i>), dlatego chętnie bierzemy udział we wszelkiego rodzaju akcjach charytatywnych i społecznych, które mają na celu poprawę jakości życia (m.in. zbiórki pieniędzy dla chorych dzieci czy dni otwarte schroniska) oraz ochronę środowiska. A za zgromadzone napiwki regularnie sadzimy drzewka!</p>
                </div>
            </div>
        </div>
        <hr className="divider mt-4" />
    </>
)

export default Eco

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faGlobeEurope, faLeaf } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Eco = () => (
    <div className="Eco" id="eco">
        <h2 className="hasztag text-center">EKOLOGIA</h2>
        <hr />
        <div className="Eco-container">
            <div className="box-one">
                <span className="icon">
                    <FontAwesomeIcon icon={faGlobeEurope} size="3x" />
                </span>
                <p>Kwestia troski o środowisko jest dla nas niezwykle istotna, dlatego używane przez nas kubki wykonane są z tektury i bio tworzywa PLA (powstałego na bazie skrobi kukurydzianej - kompostuje się w około 80 dni). Nakładki na wynos są tekturowe, serwetki to niebielony papier z recyklingu, a słomki zrobione są z tektury i powleczone wewnątrz woskiem pszczelim.</p>
            </div>
            <div className="box-two">
                <span className="icon">
                    <FontAwesomeIcon icon={faChild} size="2x" />
                    <FontAwesomeIcon icon={faChild} size="3x" />
                </span>
                <p>Każdy z naszej trójki ma dzieci – nie chcemy pozostawić ich w świecie, w którym przez ludzki egoizm utoną w morzu plastikowych śmieci. Nurt #zerowaste od początku był naszym drogowskazem, także gdy restaurowaliśmy busa, dlatego do remontu i zabudowy używaliśmy części z recyklingu oraz drewna, a całość zabezpieczyliśmy olejami i substancjami pochodzenia naturalnego.</p>
            </div>
            <div className="box-three">
                <span className="icon">
                    <FontAwesomeIcon icon={faLeaf} size="3x" />
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in nulla pariatur voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
)

export default Eco

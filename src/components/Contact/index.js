import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneAlt, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

const Contact = () => (
    <div className="Contact" id="contact">
        <div className="Contact-content">
            <h2 className="hasztag">KONTAKT</h2>
            <hr />
            <span className="screen">
                <div className="Contact-content__details">
                    <div className="Contact-content__details-email">
                        <FontAwesomeIcon icon={faAt} size="lg" />
                        <h5 className="hasztag ml-2">kontakt@hasztagkawa.pl</h5>
                    </div>
                    <div className="Contact-content__details-phone">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <h5 className="hasztag ml-2">Tomek - 690-005-927</h5>
                    </div>
                    <div className="Contact-content__details-events">
                        <FontAwesomeIcon icon={faGlassCheers} />
                        <h5 className="hasztag ml-2">Kasia (eventy) - 577-900-036</h5>
                    </div>
                </div>
                <div className="Contact-content__socials">
                    <a href="https://www.facebook.com/hasztagkawa" alt="facebook ikona" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /></a>
                    <a href="https://www.instagram.com/hasztagkawa/" alt="instagram ikona" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                    <a href="#contact" alt="instagram ikona"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                </div>
            </span>
        </div>
    </div>
)

export default Contact
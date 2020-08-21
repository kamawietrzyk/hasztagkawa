import React from 'react';
import './styles.scss';
import CarouselSmall from '../CarouselSmall';

const Events = () => (
    <div className="Events" id="events">
        <div className="Events-text">
            <h2 className="hasztag">EVENTY</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <CarouselSmall />
    </div>
)

export default Events
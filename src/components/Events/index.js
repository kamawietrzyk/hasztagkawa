import React from 'react';
import './styles.scss';
import CarouselSmall from '../CarouselPhotos';

const Events = () => (
    <div className="Events" id="events">
        <div className="Events-text">
            <h2 className="hasztag">EVENTY</h2>
            <hr />
            <p>Oprócz tego, że regularnie serwujemy kawę w Małopolsce, równie chętnie uświetniamy swoją obecnością imprezy okolicznościowe, takie jak wesela czy przyjęcia tematyczne. Jeśli chcielibyście, żebyśmy zagościli u Was i oczarowali Waszych gości najlepszą kawą podaną w przepiękny sposób i z uśmiechem na twarzy, odezwijcie się do nas!</p>
            <p>Zdjęcia - <a className="custom-link" href="https://bauaban.com/" alt="Marcin Bałaban website" target="_blank" rel="noopener noreferrer">Marcin Bałaban - Bauaban Wedding Stories</a></p>
        </div>
        <CarouselSmall />
    </div>
)

export default Events
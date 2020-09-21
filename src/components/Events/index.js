import React from 'react';
import './styles.scss';
import CarouselSmall from '../CarouselPhotos';

const Events = () => (
    <div className="Events">
        <div className="Events-text">
            <h2 className="hasztag">EVENTY</h2>
            <hr />
            <p>Oprócz tego, że regularnie serwujemy kawę w Małopolsce, równie chętnie uświetniamy swoją obecnością imprezy okolicznościowe, takie jak wesela czy przyjęcia tematyczne. Jeśli chcielibyście, żebyśmy zagościli u Was i oczarowali Waszych gości najlepszą kawą podaną w przepiękny sposób i z uśmiechem na twarzy, odezwijcie się do nas!</p>
        </div>
        <CarouselSmall />
    </div>
)

export default Events
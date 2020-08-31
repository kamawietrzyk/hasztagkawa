import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Coffee from './components/Coffee';
import Eco from './components/Eco';
import Events from './components/Events';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-box1" id="about">
          <AboutUs />
        </div>
        <Coffee />
        <div className="App-box2" id="eco">
          <Eco />
        </div>
        <div className="App-box3" id="events">
          <Events />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

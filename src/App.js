import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Coffee from './components/Coffee';
import Eco from './components/Eco';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-container">
          <AboutUs />
        </div>
        <Coffee />
        <Eco />
      </div>
    </>
  );
}

export default App;

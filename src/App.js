import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-content">
          <AboutUs />
        </div>
      </div>
    </>
  );
}

export default App;

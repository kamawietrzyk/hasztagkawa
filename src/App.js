import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AboutUs />
      </div>
    </>
  );
}

export default App;

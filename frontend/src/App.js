import React from 'react';
import './global.scss';

import Cautions from './components/cautions/Cautions.js';
import Banner from './components/banner/Banner.js';
import Map from './components/map/Map.js';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/aboutUs/About.js';


function App() {
  return (
    <div className="main-container main-background">
      <Banner></Banner>
      <Map></Map>
      <Cautions></Cautions>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;

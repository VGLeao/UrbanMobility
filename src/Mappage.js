import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import OpenLayersMap from './Components/OpenLayersMap.js';
import NavigationBar from './Components/NavigationBar.js'

function Mappage() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <OpenLayersMap>
        <div id="info"></div>
      </OpenLayersMap>
      <Link to="/">Ir para a página incial</Link>
    </div>
  );
}

export default Mappage;


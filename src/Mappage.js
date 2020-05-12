import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import OpenLayersMap from './Components/OpenLayersMap';

function Mappage() {
  return (
    <div className="App">
      <OpenLayersMap>
        <div id="info"></div>
      </OpenLayersMap>
      <Link to="/">Ir para a página incial</Link>
    </div>
  );
}

export default Mappage;


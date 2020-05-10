import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import OpenLayersMap from './OpenLayersMap';

function Mappage() {
  return (
    <div className="App">
      <OpenLayersMap></OpenLayersMap>
      <Link to="/">Ir para a página incial</Link>
    </div>
  );
}

export default Mappage;


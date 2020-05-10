import React from 'react';
import './css/Mappage.css'
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

class OpenLayersMap extends React.Component {
  
  render () {
    return (
      <div id="map"> </div>
    );
  }
  componentDidMount () {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [-35.7, -9.66],
        zoom: 13
      })
      
    });
  }
}

export default OpenLayersMap
import React from 'react';
import './css/Mappage.css'
import 'ol/ol.css';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import {GeoJSON} from 'ol/format';
import {Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import sidewalks from './sidewalks.js';
import sidewalkStyles from './sidewalkstyles.js';

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: new GeoJSON().readFeatures(sidewalks),
  }),
  style: sidewalkStyles
})


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
        }),
        vectorLayer
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
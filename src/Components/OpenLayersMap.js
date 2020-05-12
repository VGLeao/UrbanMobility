import React from 'react';
import '../css/Mappage.css'
import 'ol/ol.css';
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import { GeoJSON } from 'ol/format';
import { Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import sidewalks from './sidewalks.js';
import sidewalkStyles from './sidewalkstyles.js';
import '../Mappage.js'

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: new GeoJSON().readFeatures(sidewalks),
  }),
  style: sidewalkStyles
})

class OpenLayersMap extends React.Component {
  state = {

  }
  render() {
    
    console.log (`cor: ${this.state.test}`);
    return (
        <div>
          <div id="map"></div>
          <div>{`cor: ${this.state.test}`}</div>
        </div>
    );
  }
  componentDidMount() {
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

    let displayFeatureInfo = (pixel) => {
      let feature = map.forEachFeatureAtPixel(pixel, (feature) => {
        
        let test = feature.get('color')
        
        this.setState({test: test})
        return feature;
      });
    }

    map.on('pointermove', function (evt) {
      displayFeatureInfo(map.getEventPixel(evt.originalEvent));
    });
  }
}

export default OpenLayersMap;
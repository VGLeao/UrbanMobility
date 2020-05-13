import React from 'react';
// import '../css/Mappage.css'
import 'ol/ol.css';
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import { GeoJSON } from 'ol/format';
import { Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import sidewalks from './sidewalks.js';
import sidewalkStyles from './sidewalkstyles.js';
import '../css/OpenLayersMap.css'

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: new GeoJSON().readFeatures(sidewalks),
  }),
  style: sidewalkStyles
})

class OpenLayersMap extends React.Component {
  state = {
    cor: "Clique para visualizar informações",
    nota: "Clique para visualizar informações"
  };
  
  render() {
    console.log (`cor: ${this.state.cor}`);
    return (
        <div className="container" id="map-page-container">          
            <div className="row align-items-center">
              <div id="map" className="col-sm-12 col-lg-6"></div>
              <div className="col-6 text-left">
                <div>{`cor: ${this.state.cor}`}</div>
                <div>{`nota: ${this.state.nota}`}</div>
              </div>
            </div>
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
        center: [-35.74, -9.66],
        zoom: 14
      })

    });

    let displayFeatureInfo = (pixel) => {
      let feature = map.forEachFeatureAtPixel(pixel, (feature) => {
        
        let test = feature.get('color')
        
        this.setState({
          cor: test,
          nota: 4
        })
        return feature;
      });
    }

    map.on('click', function (evt) {
      displayFeatureInfo(map.getEventPixel(evt.originalEvent));
    });
  }
}

export default OpenLayersMap;
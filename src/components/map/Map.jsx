import React, { Component } from 'react';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


import 'ol/ol.css';
import './map.less';

class CustomMap extends Component{
  constructor(props) {
    super(props);
    this.state = {
      center: [0,0],
      zoom: 1
    };

    this.olmap = new Map({
      target: null,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }

  updateMap() {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget('map');

    this.olmap.on('moveend', () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }


  render() {
    this.updateMap();
    return (
      <div id="map" className="map"></div>
    );
  }

}

export default CustomMap;

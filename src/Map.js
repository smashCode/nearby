import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import React, {Component} from 'react';
import './index.css';

let containerStyle = {
    height: "400px",
    width: "85%"
};


class Map extends Component {

  render() {

    let style="mapbox://styles/mapbox/streets-v9"

    let markerUrl = "https://cdn2.iconfinder.com/data/icons/snipicons/500/map-marker-128.png"

    return (
      <ReactMapboxGl
        style={style}
        accessToken='pk.eyJ1Ijoia2ptYWhvbmV5IiwiYSI6ImNpeGNhZTBqdDAwOXkyemtsMnQ1bmc2dmQifQ.nUVp50Ae4EUgDqvvA_C0gA'
        center= {[-77.0369, 38.9072]}
        className="map"
        id="map-editor"
        containerStyle={containerStyle}>

        <Marker
        coordinates={[-77.0369, 38.9072]}
        anchor="bottom">
        <img src={markerUrl}/>
        </Marker>

      </ReactMapboxGl>
    );
  }
}

export default Map;

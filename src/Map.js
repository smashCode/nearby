import ReactMapboxGl, { mapboxgl} from "react-mapbox-gl";
import React, {Component} from 'react';
import './index.css';

let containerStyle = {
    height: "400px",
    width: "85%"
};


class Map extends Component {

  render() {

    console.log("loading map")

    return (
      <ReactMapboxGl
        style='mapbox://styles/mapbox/streets-v9'
        accessToken='pk.eyJ1Ijoia2ptYWhvbmV5IiwiYSI6ImNpeGNhZTBqdDAwOXkyemtsMnQ1bmc2dmQifQ.nUVp50Ae4EUgDqvvA_C0gA'
        className = "map"
        containerStyle = {containerStyle}>
      </ReactMapboxGl>
    );
  }
}


export default Map;

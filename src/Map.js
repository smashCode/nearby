import ReactMapboxGl from "react-mapbox-gl";
import React, {Component} from 'react';
import './index.css';

let containerStyle = {
    height: "400px",
    width: "85%"
};


class Map extends Component {

  render() {

    let style="mapbox://styles/mapbox/streets-v9"

    return (
      <ReactMapboxGl
        style={style}
        accessToken='pk.eyJ1Ijoia2ptYWhvbmV5IiwiYSI6ImNpeGNhZTBqdDAwOXkyemtsMnQ1bmc2dmQifQ.nUVp50Ae4EUgDqvvA_C0gA'
        className="map"
        containerStyle={containerStyle}>
      </ReactMapboxGl>
    );
  }
}

export default Map;

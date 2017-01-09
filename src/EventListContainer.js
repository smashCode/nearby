import React, { Component } from 'react';
import './index.css';
import Axios from 'axios';

class EventListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: 5,
      lat: 38.9072,
      long: -77.0369,
    }
    console.log("hello" + this.state.distance+this.state.lat)
  }

  axios.get('http://api.eventful.com/json/events/search?app_key=VPTzzTTkgzH5nxJZ&where='+this.state.lat+','+this.state.long+'&within='+this.state.distance)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  render() {
    console.log("after render")
    return (
      <div className="container">
        <h1> hello world</h1>
      </div>
    );
  }
}

export default EventListContainer;

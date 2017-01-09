import React, { Component } from 'react';
import './index.css';
import Axios from 'axios';

class EventListContainer extends Component {
  axios.get('http://api.eventful.com/json/events/search?app_key=VPTzzTTkgzH5nxJZ&where=38.9072,-77.0369&within=5')
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

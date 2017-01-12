import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

class EventListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = this.state = { items: [] };
  }

  componentDidMount() {
    axios.get(`http://api.eventful.com/json/events/search?app_key=VPTzzTTkgzH5nxJZ&where=38.9072,-77.0369&within=5`)
        .then(result=> {
            this.setState({items:result.json()});
        });
  }

// makeAPICall(lat, long, distance){
//   return Axios.get(`http://api.eventful.com/json/events/search?app_key=VPTzzTTkgzH5nxJZ&where=${lat},${long}&within=${distance}`)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//
// }

  render() {
    // this.makeAPICall(38.9072, -77.0369, 5)
    console.log("after render")
    return (
      <div className="container">
        <div>Items:</div>
          { this.state.items.map(item=> { return <div>{item.name}</div>}) }
      </div>
    );
  }
}

export default EventListContainer;

import React, { Component } from 'react';
import Map from './Map';
import ButtonContainer from './ButtonContainer';
import { Router, Route, Link } from 'react-router';

class Landing extends Component {

  render() {
    return (
      <div>
        <Map />
        <ButtonContainer />
      </div>
    );
  }
}

export default Landing;

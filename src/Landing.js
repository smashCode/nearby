import React, { Component } from 'react';
import Map from './Map';
import ButtonContainer from './ButtonContainer';

class Landing extends Component {

  render() {
    return (
      <div className="container">
        <Map />
        <ButtonContainer
          btnName="What's Hapn'n"
          arrowName="right arrow"
          pageName="/results"/>
      </div>
    );
  }
}

export default Landing;

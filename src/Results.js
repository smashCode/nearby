import React, { Component } from 'react';
import './index.css';
import ButtonContainer from './ButtonContainer';
import EventListContainer from './EventListContainer';


class Results extends Component {

  render() {
    return (
      <div className="container">
        <EventListContainer />
        <ButtonContainer
          btnName="Nahhhhhhhh son"
          arrowName="left arrow"
          pageName="/"/>
      </div>
    );
  }
}

export default Results;

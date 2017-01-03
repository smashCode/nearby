import React, { Component } from 'react';
import './index.css';
import ButtonContainer from './ButtonContainer';

class Results extends Component {

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ButtonContainer
          btnName="Nahhhhhhhh son"
          arrowName="left arrow"
          pageName="/"/>
      </div>
    );
  }
}

export default Results;

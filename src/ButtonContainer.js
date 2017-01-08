import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

class ButtonContainer extends Component {

  render() {
    return (
      <div className="btnContainer">
        <Button className="btn" animated>
          <Link to={this.props.pageName}>
          <Button.Content visible>{this.props.btnName}</Button.Content>
          <Button.Content hidden>
            <Icon name={this.props.arrowName} />
          </Button.Content>
          </Link>
        </Button>
      </div>

    );
  }
}

export default ButtonContainer;

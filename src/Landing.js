import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

class Landing extends Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <Button animated>
          <Button.Content visible>What's Hapn'n</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

export default Landing;

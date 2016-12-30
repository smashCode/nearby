import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Map from './Map'

class Landing extends Component {
  render() {
    return (
      <div>
        <Map />
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

import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Map from './Map';

class Landing extends Component {

  render() {
    console.log("loading landing page")
    return (
      <div>
        <Map />
        <Button className="btn" animated>
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

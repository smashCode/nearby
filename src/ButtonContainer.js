import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class ButtonContainer extends Component {

  render() {
    return (
      <div>
        <Button className="btn" animated>
          <Button.Content visible>What's Hapn'n</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>

      // <Router history={browserHistory}>
      //   <Route path="/" component={App}>
      //     <Route path="about" component={About}/>
      //     <Route path="users" component={Users}>
      //       <Route path="/user/:userId" component={User}/>
      //     </Route>
      //     <Route path="*" component={NoMatch}/>
      //   </Route>
      // </Router>
    );
  }
}

export default ButtonContainer;

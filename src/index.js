import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import Results from './Results';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  // <Landing />,
  <Router history={hashHistory}>
    <Route path="/" component={Landing}></Route>
    <Route path="/results" component={Results}></Route>
  </Router>,
  document.getElementById('root')
);

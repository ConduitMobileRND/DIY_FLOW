// Dependencies
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory } from 'history';

// Components
import Home from './components/home';
import Step1 from './components/step1';
import NotFound from './components/notFound';

export default class Routes extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    console.log('Routes was rendered');
    //debugger;
    return(
  		<Router history={createHistory()}>
  		<Route name='Home'       path='/'              component={Home}/>
        <Route name='Step1' path='step1'  component={Step1} />
        <Route name='404'             path='*'              component={NotFound} />
  		</Router>
  	);
  }
}

// Dependencies
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory } from 'history';

// Components
import Father from './components/father'
import Home from './components/home';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';
import Finish from './components/finish';
import NotFound from './components/notFound';

export default class Routes extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    //console.log('Routes was rendered');
    //debugger;
    return(
  		<Router history={createHistory()}>
  		<Route name='Father'       path='/'              component={Father}/>
        <Route name='Step1' path='step1'  component={Step1} />
        <Route name='Step2' path='step2'  component={Step2} />
        <Route name='Step3' path='step3'  component={Step3} />
        <Route name='Step4' path='step4'  component={Step4} />
        <Route name='Finish' path='finish' component={Finish} />
        <Route name='404'             path='*'              component={NotFound} />
  		</Router>
  	);
  }
}

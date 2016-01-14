// Dependencies
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory } from 'history';

// Components
import MainDashboard from './components/mainDashboard';
import PrintMaterials from './components/printMaterials';
import ShowEditor from './components/showEditor'
import Show from './components/show';
import NotFound from './components/notFound';

export default class Routes extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    console.log('Routes was rendered');
    debugger;
    return(
  		<Router history={createHistory()}>
  			<Route name='Dashboard'       path='/'              component={MainDashboard}/>
        <Route name='Print Materials' path='print/:showId'  component={PrintMaterials} />
        <Route name='Create'          path='create'         component={ShowEditor} />
  			<Route name='Edit'            path='edit/:showId'   component={ShowEditor} />
  			<Route name='Show'            path='show/:showId'   component={Show} />
  			<Route name='Peek'            path='peek/:showId'   component={Show} />
  			<Route name='404'             path='*'              component={NotFound} />
  		</Router>
  	);
  }
}

import React, { Component } from 'react';
import { Avatar, Card, CircularProgress,
        CardHeader, CardTitle, List,
        CardMedia, CardActions,
        CardText, FlatButton } from 'material-ui';
import ShowItem from './showItem';

import Shows from '../../api/slideshows/showData';
import _ from 'lodash';

export default class ShowList extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      shows: Shows
    };
  }

  render() {
    let showNodes = null;

    if(!this.state.isLoading){
      showNodes = _.values(this.state.shows.shows).map((item, i)=> {
        return (
          <ShowItem data={item} key={item.id} />
        );
      });
    }
    else{
      showNodes = <CircularProgress mode="indeterminate"
        style={{
          margin: '15px auto',
          display: 'block',
          width: '60px',
          height:'60px'
        }} />;
    }

    return (
      <div className="showlist-wrapper" style={{minHeight:60}}>
        {showNodes}
      </div>
    );

  }
}

import React, { Component } from 'react';
import { Link } from 'react-router'
import { Card, Toolbar, ToolbarGroup, DropDownMenu,
        MenuItem, ToolbarTitle, FontIcon,
        IconMenu, IconButton, ToolbarSeparator,
        RaisedButton, ActionGrade } from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import theme from '../../styles/material-theme/theme.js';

export default class ShowItem extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      showData: props.data
    };
    /* Autobind methods - might check this out
      this.deleteSlide = this.deleteSlide.bind(this);
      this.downloadContent = this.downloadContent.bind(this);
    */
  }

  // Methods
  deleteSlide(id, slideshow) {
    console.log(id + ' deleted')
  }

  downloadContent(id, slideshow) {
    console.log(id + ' downloaded')
  }

  // Render component
  render() {
    console.log('ShowItem was rendered');
    let data = this.state.showData;

    //inject styles into icons, might remove this and the style attribute from each <FontIcon> component
    const iconButtonStyles = {
      height:70,
      width:70,
      padding:0
    };
    const iconStyles = {
      padding:0,
      height:70,
      marginTop:5
    };
    return(
        <div className="row showitem">
          <div className="large-12 columns centered">
            <Card>
            <Toolbar style={{backgroundColor:'#fff', 'height':'100%','padding':0}}>
              <div className="row">
                {/*Left part*/}
                <div className="large-2 medium-12 columns">
                  <ToolbarGroup firstChild={true} style={{'margin':0,'width':'100%'}}>
                    <Link to={`/edit/${data.id}`} style={{'float':'right','marginRight':5}}>
                      <FontIcon style={iconStyles}>
                        <IconButton style={iconButtonStyles}
                          iconClassName="icon icon-cog"
                          tooltip="edit slideshow"
                          tooltipPosition="bottom-right"/>
                        </FontIcon>
                    </Link>
                    <FontIcon style={iconStyles}>
                      <IconButton style={iconButtonStyles}
                        iconClassName="icon icon-trash"
                        tooltip="delete slideshow"
                        tooltipPosition="bottom-right"
                        onClick={this.deleteSlide.bind(this, data.id)}/>
                    </FontIcon>
                  </ToolbarGroup>
                </div>
                {/*Center part*/}
                <div style={{lineHeight:'1.5em'}} className="large-6 medium-12 columns">
                  <div className="tag-details">
                    <h3>#{data.hashtag}</h3>
                    <span> Tweets: {data.tweetCount} </span>
                    <span> Photos: {data.photoCount} </span>
                    <span> Videos: {data.videoCount} </span>
                  </div>
                </div>
                {/*Right part*/}
                <div className="large-4 medium-12 columns actionbar">
                  <ToolbarGroup>
                    <Link to={`/show/${data.id}`}>
                      <FontIcon style={iconStyles}>
                        <IconButton style={iconButtonStyles}
                          iconClassName="icon icon-eye"
                          tooltip="Peek for 5 minutes"
                          tooltipPosition="bottom-right"/>
                      </FontIcon>
                    </Link>
                    <Link to={`/print/${data.id}`}>
                      <FontIcon style={iconStyles}>
                        <IconButton style={iconButtonStyles}
                          iconClassName="icon icon-print"
                          tooltip="Get print materials"
                          tooltipPosition="bottom-right"/>
                      </FontIcon>
                    </Link>
                    <FontIcon style={iconStyles}>
                      <IconButton style={iconButtonStyles}
                        iconClassName="icon icon-install"
                        tooltip="Download"
                        tooltipPosition="bottom-right"
                        onClick={this.downloadContent.bind(this, data.id)}/>
                    </FontIcon>

                    <Link to={`/show/${data.id}`}>
                      <FontIcon style={iconStyles}>
                        <IconButton style={iconButtonStyles}
                          iconClassName="icon icon-youtube"
                          tooltip="Play slideshow"
                          tooltipPosition="bottom-right"/>
                      </FontIcon>
                    </Link>
                  </ToolbarGroup>
                </div>
            </div>
            </Toolbar>
            </Card>
          </div>
        </div>
    );
  }
}

import React, { Component } from 'react';
import style from './header.scss';
import icons from '../../styles/main/icons.scss';
import Nav from './nav';

export default class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      currentRoute : props.currentRoute
    };
  }

  render() {
    return(
        <header classNameName="">
          <Nav/>
          <div classNameName="row">
            <div classNameName="large-12 columns">
              <section className="hero">
                <h1>{this.state.currentRoute}</h1>
              </section>
            </div>
          </div>
        </header>
    );
  }
}

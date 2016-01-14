// import React from 'react';

// const Nav = () => (
//      ///*<!-- Remove the className "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->*/
// <nav className="top-bar" data-topbar role="navigation">
//   <ul className="title-area">
//     <li className="name">
//       <h1><a href="#">My Site</a></h1>
//     </li>
//     <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
//   </ul>

//   <section className="top-bar-section">
//     <ul className="right">
//       <li className="active"><a href="#">Right Button Active</a></li>
//       <li className="has-dropdown">
//         <a href="#">Right Button Dropdown</a>
//         <ul className="dropdown">
//           <li><a href="#">First link in dropdown</a></li>
//           <li className="active"><a href="#">Active link in dropdown</a></li>
//         </ul>
//       </li>
//     </ul>

//     <ul className="left">
//       <li><a href="#">Left Nav Button</a></li>
//     </ul>
//   </section>
// </nav>
// );

// export default Nav;


import React, { Component } from 'react';
import { AppBar } from 'material-ui'

export default class Nav extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return(
		<nav>
			<AppBar title="SwanScreen"/>
		</nav>
    );
  }
}

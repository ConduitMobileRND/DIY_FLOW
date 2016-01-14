import React, { Component } from 'react';
import style from './footer.scss';
import icons from '../../styles/main/icons.scss';

export default class Footer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return(
        <footer id="footer">
          <div className="row">
            <div className="small-12 medium-3 large-4 columns">
              <i className="icon icon-megaphone"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores alias ea sunt facilis impedit fuga dignissimos illo quaerat iure in nobis id quos, eaque nostrum! Unde, voluptates suscipit repudiandae!</p>
            </div>
            <div className="small-12 medium-3 large-4 columns">
              <i className="icon icon-info-with-circle"></i>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit impedit consequuntur at! Amet sed itaque nostrum, distinctio eveniet odio, id ipsam fuga quam minima cumque nobis veniam voluptates deserunt!</p>
            </div>
            <div className="small-6 medium-3 large-2 columns">
              <h4>Work With Us</h4>
              <ul className="footer-links">
                <li><a href="#">What I Do</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ's</a></li>
              </ul>
            </div>
            <div className="small-6 medium-3 large-2 columns">
              <h4>Follow Us</h4>
              <ul className="footer-links">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </footer>
    );
  }
}

// Sticky footer
$(window).bind("load", function() {
       positionFooter();
       function positionFooter() {
         let contentHeight = $('header').height()+$("#currentScreen").height()+$('footer').height();
         (contentHeight+80 <= $(window).height())
           ? $('footer').css('position','fixed')
           : $('footer').css('position', 'relative')
       }
       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)
});

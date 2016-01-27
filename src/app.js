import React, { Component } from 'react'
import {render} from 'react-dom'
import promise from 'es6-promise'
promise.polyfill();

// Import global styles
import icons from './styles/main/icons.scss'
import style from './styles/main/style.scss'

// Import Material-UI
import theme from './styles/material-theme/theme'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// Import dependencies
import Fetch from './utils/fetch/fetch'

// Import API handlers
import RegFormApi from './api/reg-form-api'
import LocationApi from './api/location-api'
import LanguageApi from './api/language-api'
import ConfigApi from './api/config-api'

// Import components to render in App
import Routes from './routes'
//import Header from './components/generalComponents/header'
//import Footer from './components/generalComponents/footer'

// App
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRoute : "Dashboard"
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(theme),
    };
  }

  render () {
    return (
      <div id="page-wrapper" className="page-wrapper">
        <div id="currentScreen">
            <Routes/>
        </div>
      </div>
    );
  }
}

// For Material-UI
App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

// Render app
render(<App/>, document.getElementById('root'))

/** stickyfooter.js */


// var ready=function(){function i(){if(r.isReady){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(i,1);return}r.ready()}function s(t){r.bindReady();var n=r.type(t);e.done(t)}var e,t,n={};n["[object Boolean]"]="boolean";n["[object Number]"]="number";n["[object String]"]="string";n["[object Function]"]="function";n["[object Array]"]="array";n["[object Date]"]="date";n["[object RegExp]"]="regexp";n["[object Object]"]="object";var r={isReady:false,readyWait:1,holdReady:function(e){if(e){r.readyWait++}else{r.ready(true)}},ready:function(t){if(t===true&&!--r.readyWait||t!==true&&!r.isReady){if(!document.body){return setTimeout(r.ready,1)}r.isReady=true;if(t!==true&&--r.readyWait>0){return}e.resolveWith(document,[r])}},bindReady:function(){if(e){return}e=r._Deferred();if(document.readyState==="complete"){return setTimeout(r.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false);window.addEventListener("load",r.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",t);window.attachEvent("onload",r.ready);var n=false;try{n=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&n){i()}}},_Deferred:function(){var e=[],t,n,i,s={done:function(){if(!i){var n=arguments,o,u,a,f,l;if(t){l=t;t=0}for(o=0,u=n.length;o<u;o++){a=n[o];f=r.type(a);if(f==="array"){s.done.apply(s,a)}else if(f==="function"){e.push(a)}}if(l){s.resolveWith(l[0],l[1])}}return this},resolveWith:function(r,s){if(!i&&!t&&!n){s=s||[];n=1;try{while(e[0]){e.shift().apply(r,s)}}finally{t=[r,s];n=0}}return this},resolve:function(){s.resolveWith(this,arguments);return this},isResolved:function(){return!!(n||t)},cancel:function(){i=1;e=[];return this}};return s},type:function(e){return e==null?String(e):n[Object.prototype.toString.call(e)]||"object"}};if(document.addEventListener){t=function(){document.removeEventListener("DOMContentLoaded",t,false);r.ready()}}else if(document.attachEvent){t=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",t);r.ready()}}}return s}()
//
//
//
//
//
// ready(function(){
//   console.log($);
//   var stickyFooter = function() {
//     var pageRoot = document.getElementById('root');
//     var pageWrapper = document.getElementById('page-wrapper');
//     var body = document.body;
//     var html = document.documentElement;
//     var contentHeight = document.getElementById('page-wrapper').offsetHeight;
//
//     var stick = function() {
//       console.log('footer stuck');
//       pageRoot.style.height = '100%';
//       pageWrapper.style.height = '100%';
//       html.style.height = '100%';
//       body.style.height = '100%';
//     }
//     var unstick = function() {
//       console.log('footer unstuck');
//       pageRoot.style.height = 'auto';
//       pageWrapper.style.height = 'auto';
//       html.style.height = 'auto';
//       body.style.height = 'auto';
//     }
//
//     var windowHeight = Math.max( body.scrollHeight, body.offsetHeight,
//                            html.clientHeight, html.scrollHeight, html.offsetHeight );
//
//     (contentHeight < windowHeight) ? stick() : unstick();
//   }
//
//
//   stickyFooter();
//   console.log($);
// });







//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Import main js file
/*
import RegForm from './components/registration-form/reg-form';
*/

// Init app
/*
initGlobalConfiguration()
 .then(getRegFormData)
 .then(initLanguage)
 .then(renderForm);
*/
////////////////////////
/*
function renderForm() {
  document.getElementsByTagName('body')[0].className+=` direction-${LanguageApi.info.direction}`;
  return render(<RegForm formData={RegFormApi.data} />, document.getElementById('root'));
}

function initGlobalConfiguration() {
  return ConfigApi.init()
    .then(()=> {
      return Fetch.init({
        apiPrefix: ConfigApi.global.apiPrefix
      });
    });
}

function initLanguage(regFormData) {
  let lanaguageInfo = regFormData.lang || {};
  return LanguageApi.init(lanaguageInfo);
}

function getRegFormData() {
  return RegFormApi.getRegFormData();
}
*/

/////////////////////////////////////////////////////////////////////////////////

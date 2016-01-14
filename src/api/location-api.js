import qs from 'query-string';
import ConfigApi from './config-api';

const LocationApi = {
  locationId: '',

  init() {
    // Parse Querystring
    const queryString = qs.parse(location.search);
    this.locationId = queryString.locationid;

    // Inject location general css
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type= 'text/css';
    style.href= `${ConfigApi.global.apiPrefix}appUser/rendercss?location_id=${this.locationId}`;
    head.appendChild(style);
  }
}

LocationApi.init();
export default LocationApi;

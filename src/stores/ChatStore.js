import alt from '../alt';
import Actions from '../actions';
// import {decorate, bind, datasource} from 'alt/utils/decorators';
// import ChannelSource from '../sources/ChannelSource';
// import MessageSource from '../sources/MessageSource';
import _ from 'lodash';



class LocationStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      handleUpdateLocations: Actions.UPDATE_LOCATIONS
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');

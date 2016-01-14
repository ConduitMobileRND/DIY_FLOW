import LocationApi from './location-api';
import Fetch from '../utils/fetch/fetch';

const LanguageApi = {
  info: {},
  languageText: {},

  init(languageInfo) {
    this.info = {
      langId: languageInfo.lang_id || 1,
      langCode: languageInfo.lang_code || 'en',
      direction: languageInfo.direction || 'rtl',
    };


    var mockData = {}
    return mockData;

/*
    return Fetch
      .get(`apptexts/view?lang=${this.info.langId}&location_id=${LocationApi.locationId}`)
      .then((response)=> {
        this.languageText = response.data;
      });
*/



  },

  translate(key) {
    return this.languageText[key] || '';
  }

}

export default LanguageApi;

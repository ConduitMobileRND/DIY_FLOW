import LocationApi from './location-api';
import Fetch from '../utils/fetch/fetch';

const RegFormApi = {
  data: {},
  getRegFormData() {
    var _this = this;

    var mockData = {}
    return mockData;


/*
    return Fetch.get(`appUser/LoadData?fields=true&location_id=${LocationApi.locationId}`)
      .then(response => {
        console.log(response);
        _this.data = response;
        _this.data.fields = _this.data.fields
                            .filter(filterRegFormFields)
                            .sort(sortByFieldsOrder);
    
        return response;
      });
*/


  }
}

///////////////////

function filterRegFormFields(field) {
  return field.status !== 'hidden' && field.show_on_register == 'Y';
}

function sortByFieldsOrder(fieldA, fieldB) {
  let fieldAOrder = parseInt(fieldA.order);
  let fieldBOrder = parseInt(fieldB.order);

  if (fieldAOrder < fieldBOrder) {
    return -1;
  } else if (fieldAOrder > fieldBOrder) {
    return 1;
  } else {
    return 0;
  }
}

export default RegFormApi;

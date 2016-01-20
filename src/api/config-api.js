
const ConfigApi = {
  global: {
    //apiPrefix: location.hostname === 'localhost' ? 'https://qa.keeprz.com/api/public/' : location.host + '/api/public/',
    apiPrefix: 'http://localhost:3000/api/',
    isDesktop: false,
    pageDirection: 'ltr'
  },

  init() {

    return new Promise((resolve, reject) => {
      resolve();
    });

  }
}

export default ConfigApi;

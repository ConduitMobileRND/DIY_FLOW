/**
* Abstraction over ES6 Fetch API, in order to support success/failure response
* according to the HTTP response status. and outof the box json parser
*/
var apiPrefix;
const Fetch = {
  init(options) {
    apiPrefix = options.apiPrefix || '';
  },

  get(url) {
    let request = buildRequest(url);
    return fetch(request)

      .then(checkStatus)
      .then(parseJSON)
      .then(function(data) {
        return data
      }).catch(function(error) {
        return error
      });
   },

   post(url, options) {
     options = options || {};
    let getFormData = function(data){
        //debugger;
        var formData = new FormData();
        for(let key in data){
            if(!Array.isArray(data[key])) {
                if((typeof data[key] === "object") && (data[key] !== null)){
                    console.log("object but not array");
                    for(let j in data[key]){
                    //  for(let i in data[key][j]){
                          if((typeof data[key][j] === "object") && (data[key][j] !== null)){
                              console.log("object inside object");
                              for(let i in data[key][j]) {
                                  formData.append(key + "[" + j + "][" + i + "]", data[key][j][i]);
                              }
                          }else {
                              formData.append(key + "[" + j + "]", data[key][j]);
                          }
                     // }
                    }
                } else {
                    formData.append(key, data[key]);
                }
            }else{
                //let newArr = [];
                for(let ind in data[key]){
                    for(let objInd in data[key][ind]) {
                        formData.append(key + "[" + ind + "][" + objInd + "]", data[key][ind][objInd]);
                    }
                }
            }
        }
        return formData;
    }
     let request = buildRequest(url, {
       method: 'POST',
       headers: options.dataType === 'form-urlencoded'
        ? {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
        : {},
       body: options.dataType === 'form-urlencoded'
        ? serialize(options.data)
           /*Changed: need actually form data to be sent to register new user in keeperz */
        //: JSON.stringify(options.data)
         : getFormData(options.data)
     });

     return fetch(request)
       .then(checkStatus)
       .then(parseJSON)
       .then(function(data) {
         return data
       }).catch(function(error) {
         return error
       });
   }
 }

///////////////////

function buildRequest(url, options) {
    if(typeof apiPrefix == "undefined"){
        apiPrefix = "";
    }
  return new Request(apiPrefix + url, _.defaults(options, {
    method: 'GET'
  }));
}

function serialize(data) {
  return Object.keys(data).map(function (keyName) {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
};

function checkStatus(response) {

  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default Fetch;

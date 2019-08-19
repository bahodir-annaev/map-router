import axios from 'axios';

const searchLocations = (text) => {
  return axios.get('//search-maps.yandex.ru/v1/',{
      params: {
        type: 'geo',
        lang: 'ru_RU',
        apikey: 'c482b511-62ce-4670-81bc-a939803b2504',
        text: text
      },
      headers:{
        'Referer': ''
      }
    })
    .then(response => {
      return response;
    })
    // .catch( error => {
    //   return {error: true, response: error};
    // })
};

export {searchLocations};

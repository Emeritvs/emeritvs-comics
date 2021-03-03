import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com',
    params: {
      "apikey": "c49d65534bdc6981dd15b1b258bf0f14",
      "ts": "1614724481",
      "hash": "920105b07c69bee57eef4d38fc490868"
    },
    headers: {}
});

export default api;
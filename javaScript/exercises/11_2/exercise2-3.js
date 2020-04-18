const fetch = require('node-fetch');

const API = url => fetch(url);

const fetchURL = async () => {
  const dataApi = await API('https://dog.ceo/api/breeds/image/random')
  const dataJson = await dataApi.json();
  console.log(dataJson);
};

module.exports = { fetchURL };
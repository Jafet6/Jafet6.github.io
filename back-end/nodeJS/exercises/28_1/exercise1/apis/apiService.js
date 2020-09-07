const fetch = require('node-fetch');

const URL_CEP = 'http://cep.la';

const headers = {
  Accept: 'application/json',
};

const findCep = async (cep) => {
  const response = await fetch(`${URL_CEP}/${cep}`, { headers });
  const cepData = await response.json();
  
  if (Array.isArray(cepData) && cepData.length === 0) {
    throw new Error('CEP não encontrado');
  }

  return cepData;
};

module.exports = {
  findCep,
};

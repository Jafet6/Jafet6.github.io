const apiService = require('../apis/apiService');
const { findCep, saveCEP } = require('../models/cepModel');

const lookup = async (cep) => {
  if (!isValid(cep)) throw new Error('CEP inválido');

  const cepData = await findCep(cep);

  if (cepData) return cepData;

  const cepApi = await apiService.findCep(cep);
  await saveCEP(cepApi);
  return cepApi;
};

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

module.exports = {
  lookup,
};

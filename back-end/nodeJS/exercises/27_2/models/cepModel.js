const connect = require('./connect');
const apiService = require('../services/apiService');

const lookup = async (cep) => {
  if (!isValid(cep)) throw new Error('CEP inválido');

  const cepData = await findCep(cep);

  if (cepData) return cepData;

  const cepApi = await apiService.findCep(cep);
  await saveCEP(cepApi);
  return cepApi;
};

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const findCep = async (cep) => {
  const db = await connect();

  const result = await db.getTable('ceps')
    .select('uf', 'cidade', 'bairro', 'logradouro')
    .where('cep = :cep')
    .bind('cep', cep)
    .execute()

  const cepData = await result.fetchAll()[0];

  if (!cepData) return null;

  const [uf, cidade, bairro, logradouro] = cepData;
  return { uf, cidade, bairro, logradouro };
}

const saveCEP = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;
  const db = await connect();

  const saveCep = await db.getTable('ceps')
    .insert(['uf', 'cidade', 'bairro', 'logradouro', 'cep'])
    .values(uf, cidade, bairro, logradouro, cep)
    .execute();

  return saveCEP;
}

module.exports = {
  lookup,
};

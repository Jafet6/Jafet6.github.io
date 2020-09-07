const connect = require('./connect');

const findCep = async (cep) => {
  const db = await connect();

  const result = await db.collection('ceps')
    .findOne({ cep: cep })


  if (!result) return null;

  return result;
}

const saveCEP = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;
  const db = await connect();

  const saveCep = await db.collection('ceps')
    .insertOne({ ceps: { uf, cidade, bairro, logradouro, cep } } )

  return saveCep;
}

module.exports = {
  saveCEP,
  findCep,
};

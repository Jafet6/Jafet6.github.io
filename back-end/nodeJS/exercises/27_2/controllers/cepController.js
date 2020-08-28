const cepModel = require('../models/cepModel');

// const cep = {
//   uf: 'MG', 
//   bairro: 'São Bento',
//   cidade: 'Belo Horizonte',
//   logradouro: 'Rua Doutor Mario Pires',
// }

const cepFunc = async (req, res) => {
  try {
    const cep = await cepModel.lookup(req.query.cep);
    return res.render('cep', { cep, message: null });
  } catch (err) {
    return res.render('cep', { cep: null, message: err.message });
  }
};

module.exports = {
  cepFunc,
};

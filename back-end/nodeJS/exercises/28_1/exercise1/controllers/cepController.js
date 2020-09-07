const cepService = require('../services/cepService');

const cepFunc = async (req, res) => {
  try {
    const { cep } = req.query
    const cepInfo = await cepService.lookup(cep);
    return res.json({ cepInfo, message: null });
  } catch (err) {
    return res.json({ cepInfo: null, message: err.message });
  }
};

module.exports = {
  cepFunc,
};

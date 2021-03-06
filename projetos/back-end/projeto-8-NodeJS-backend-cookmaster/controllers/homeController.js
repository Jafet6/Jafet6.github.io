const homeModel = require('../models/homeModel');

const recipe = async (req, res) => {
  const recipes = await homeModel.getAll();
  const user = req.user;
  return res.render('home', { recipes, user });
};

module.exports = {
  recipe,
};

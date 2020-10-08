const Model = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports = (req, res) => {

  const password = req.body.password;
  
  bcrypt.hash(password, saltRounds, function(err, hash) {
    const data = new Model({
      username: req.body.username,
      password: hash,
      admin: req.body.admin,
    });
    // Store hash in your password DB.
    data.save().then((doc) => {
      res.status(201).json({ message: 'Novo usuário', data: doc });
    }).catch(err => {
      res.status(500).send('Erro ao salvar o usuário no banco', err);
    });
})

};

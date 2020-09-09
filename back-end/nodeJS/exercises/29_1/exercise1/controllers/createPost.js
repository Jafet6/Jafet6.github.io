const Model = require('../models/posts');

module.exports = (req, res) => {
  console.log(req.body)
  console.log(req.user)
  if (req.user.admin) {
    const data = new Model({
      title: req.body.title,
      content: req.body.content,
    });
    
    return data.save().then((doc) => {
      res.status(201).json({ message: 'Novo post', data: doc });
    }).catch(err => {
      res.status(500).send('Erro ao salvar o post no banco', err);
    });
  }

  return res.status(500).send('Usuário não é o admin');
};
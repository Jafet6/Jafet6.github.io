const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'seusecretdetoken';


module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.send(401);

  const user = await User.findOne({ username });
  
  
  if (!user) res.status(401).json({ message: 'Usuário não encontrado' });

  const results = await bcrypt.compare(password, user.password)
  console.log(results)

  const jwtConfig = {
    expiresIn: '7m',
    algorithm: 'HS256'
  };
  
  const token = jwt.sign({ data: user }, secret, jwtConfig)
  
  return res.status(200).json({ token });
};

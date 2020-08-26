const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send({ message: 'pong' })
});

// app.post('/hello', (req, res) => {
//   req.body = { name: 'Jafet' };
//   res.send({ message: `Hello ${req.body.name}!` })
// })

app.post('/hello', (req, res) => {
  req.body = {
    name: 'Jafet',
    age: 26,
  }
  if (req.body.age > 17) {
    res.send({ message: `Hello ${req.body.name}` });
    res.status(200);
  }
  res.send({ message: 'Unauthorized' });
  res.status(401).send('Algo deu errado');
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params; 
  res.send({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(3000, () => 'App ouvidno a porta 3000');

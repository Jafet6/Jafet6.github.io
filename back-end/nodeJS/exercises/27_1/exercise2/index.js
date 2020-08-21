const express = require('express');
const routeSimpsons = require('./routeSimpsons');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/simpsons', routeSimpsons);

const errorMiddleware = (err, req, res, next) => {
  if (err) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  };
  res.status(200).send('Tudo certo por aqui');
};

app.use(errorMiddleware);

app.listen(port, () => `Escutando a porta ${port}`);

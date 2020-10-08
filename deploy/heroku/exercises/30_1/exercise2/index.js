const express = require('express');

const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', (_req, res) => {
  res.status(200).json({ message: 'heroku api'})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => `Listening on ${PORT}`);

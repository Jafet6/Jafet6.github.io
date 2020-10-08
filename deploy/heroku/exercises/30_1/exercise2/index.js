const express = require('express');

const app = express();

app.use('/', (_req, res) => {
  res.send('Esta Vivo!')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => `Listening on ${PORT}`);

const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send(`Api ${process.env.MESSAGE}`);
});

app.get('/error', (_req, res) => {
  res.send('Um erro Ocorreu');
  process.exit(1);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

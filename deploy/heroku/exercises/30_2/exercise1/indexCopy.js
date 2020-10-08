const express = require('express');

const app = express();

app.get('/app2', (_req, res) => {
  res.send(`Api ${process.env.MESSAGE}`);
});

app.get('/error2', (_req, res) => {
  res.send('Um erro Ocorreu');
  process.exit(1);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

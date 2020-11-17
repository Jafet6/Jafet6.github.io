const express = require('express')
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const serverHttp = http.createServer(app);
const io = socket(serverHttp);

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', (socket) => {
  console.log('conectado');

  socket.on('disconnect', () => {
    console.log('fica mais');
  });

  socket.on('mensagem', (msg) => {
    io.emit('mensagemServer', msg)
  });
});

serverHttp.listen(3000, () => console.log('Listening on port 3000'));
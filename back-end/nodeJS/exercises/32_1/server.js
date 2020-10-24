const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado')

  connection.on('data', (data) => console.log(data.toString('utf-8')))

  connection.on('end', () => {
    console.log('Servidor desconectado');
  });

  connection.write('Bem Vindo ao chat!');

});

server.listen(8080, () => console.log('Listening on Port 8080'));
const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();

client.connect({ port: 8080 }, () => {
  stdin.addListener('data', (data) => {
    const message = data.toString('utf-8').trim();

    client.write(message)
  })
})

client.on('close', () => {
  console.log('Cliente desconectado');
});

client.on('data', (data) => {
  console.log(data.toString('utf-8'));
});

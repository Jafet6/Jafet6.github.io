const os = require('os');
const process = require('process');

console.log('Operating system: ', os.EOL);
console.log('Architecture: ', os.arch());
console.log('Release: ', os.release());
console.log('CPU Cores: ', os.cpus());
console.log('Total RAM: ', (os.totalmem()/(1000 * 1000 * 1000)));
console.log('Free RAM: ', (os.freemem()/(1000 * 1000 * 1000)));

setInterval(() => {
  console.log('PID: ', process.pid);
  console.log('Total RAM: ', (os.totalmem()/(1000 * 1000 * 1000)));
  console.log('Free RAM: ', (os.freemem()/(1000 * 1000 * 1000)));
}, 1000);
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function question (message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer)
      rl.close();
    })
  })
}

question('Which file would you like do read?')
  .then((answer) => readFile(path.resolve(__dirname, answer)))
  .then((file) => console.log(file.toString('utf8')))
  .catch(err => console.log(`Erro ao ler arquivo: ${err.message}`))

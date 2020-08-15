const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Which file would you like do read?', (file) => {
  fs.readFile(path.resolve(__dirname, file), 'utf8', (err, content) => {
    if (err) {
      console.log(`Erro: ${err.message}`);
      return
    }
    console.log(`Conteúdo: ${content}`);
    rl.close();
  });
});

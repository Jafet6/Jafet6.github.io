const fs = require('fs');
const path = require('path');
const readline = require('readline');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const question = async (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise ((resolve) => {
    rl.question(question, (anwser) => {
      resolve(anwser);
      rl.close();
    });
  });
};

const startPromise = async () => {
  const answer = await question('Which file would you like do read?');
  try {
    const fileRead = await readFile(path.resolve(__dirname, answer));
    console.log(fileRead.toString('utf8'));
    console.log(fileRead.byteLength);
  } catch (err) {
    console.log(err);
  }
}

startPromise();

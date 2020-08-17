const fs = require('fs');

let t0 = new Date().getTime();

const readDirectory = () => {
  const arq = fs.readdirSync('./testDirectory');
  const lenght = arq.length;
  const allSizes = arq.reduce((acc, elements) => {
    return acc += fs.readFileSync(`./testDirectory/${elements}`).byteLength
  }, 0);
  console.log(lenght);
  console.log(allSizes);
};
readDirectory();

let t1 = new Date().getTime();

console.log(`Call to readDirectory took ${(t1 - t0)} milliseconds.`);

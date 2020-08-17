const fs = require('fs');

let t0 = new Date().getTime();

const readFile = () => fs.readFileSync('./file.txt');
readFile();

let t1 = new Date().getTime();
console.log(`File bytes: ${readFile().byteLength}`)
console.log(`Call to readFile took ${(t1 - t0)} milliseconds.`);


let t2 = new Date().getTime();

const readFile2 = () => fs.readFileSync('./file.txt');
readFile2();

let t3 = new Date().getTime();
console.log(`File bytes: ${readFile2().byteLength}`)
console.log(`Call to readFile2 took ${(t3 - t2)} milliseconds.`);

console.log(`Every call took ${(t3 - t0)} milliseconds.`);

const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    array[i] > largestNumber ? largestNumber = array[i] : largestNumber = largestNumber;
  }
  return largestNumber;
};

let parameter = [45, 8, 2, 50, 1, 7, 99];
let result = 99;
assert.strictEqual(getLargestNumber(parameter), result);

parameter = [35, 45, 2, 10, 89, 91, 90];
result = 91;
assert.strictEqual(getLargestNumber(parameter), result);

/*
Use a variável parameter como parâmetro da função acima, escreva testes para verificar
se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
um por vez e vá corrigindo a função aos poucos:
*/

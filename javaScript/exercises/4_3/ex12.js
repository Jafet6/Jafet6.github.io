let roman = "XXX";
let parametrosRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};


function romanToNum(roman) {
  let arrayRoman = roman.split("");
  let arrayLength = arrayRoman.length;
  let total = 0;
  for (let i = 0; i < (arrayLength / 2); i++) {
    if (parametrosRoman[arrayRoman[arrayRoman.length - 1 - (2 * i)]] > parametrosRoman[arrayRoman[arrayRoman.length - 2 - (2 * i)]]) {
      total += parametrosRoman[arrayRoman[arrayRoman.length - 1 - (2 * i)]] - parametrosRoman[arrayRoman[arrayRoman.length - 2 - (2 * i)]];
    }
    else if (parametrosRoman[arrayRoman[arrayRoman.length - 1 - (2 * i)]] <= parametrosRoman[arrayRoman[arrayRoman.length - 2 - (2 * i)]]) {
      total += parametrosRoman[arrayRoman[arrayRoman.length - 1 - (2 * i)]] + parametrosRoman[arrayRoman[arrayRoman.length - 2 - (2 * i)]];
    } else {
      total += parametrosRoman[arrayRoman[arrayRoman.length - 1 - (2 * i)]];
    }
  }
  return total;
}

console.log(parametrosRoman["X"]);
console.log(romanToNum(roman));
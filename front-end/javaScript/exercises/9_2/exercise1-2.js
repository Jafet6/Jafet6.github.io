const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (numb) => numb % 2 === 0;

const sumEven = (acc, numb) => acc + numb;

const sumEvens = (arrNumb) => arrNumb.filter(getEven).reduce(sumEven);

console.log(sumEvens(numbers));
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

const print = arrayOfValues.forEach((element, index, arr) => {
  console.log(element);
  console.log(index);
  console.log(arr);
})

console.log(print);
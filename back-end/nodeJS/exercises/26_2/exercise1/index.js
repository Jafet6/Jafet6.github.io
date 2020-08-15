const isNumber = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    if ([param1, param2, param3].some((element) => typeof element !== 'number')) {
      return (reject('Digite apenas números'));
    };
    const operation = (param1 + param2) * 3;
    if (operation < 50) return reject('Valor muito baixo');
    resolve(operation);
  })
}

isNumber(21,2,33)
  .then((content) => { console.log(content) })
  .catch((err) => console.log(err));

const isNumber = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    if ([param1, param2, param3].some((element) => typeof element !== 'number')) {
      return (reject('Digite apenas números'));
    };
    const operation = (param1 + param2) * 3;
    if (operation < 50) return reject('Valor muito baixo');
    return resolve(operation);
  })
}

const callPromise = async () => {
  try {
    let isNumberReturn = await isNumber(21,'2',33)
    console.log(isNumberReturn)
  }
  catch (err) {
    console.log(err)
  }
}

callPromise();

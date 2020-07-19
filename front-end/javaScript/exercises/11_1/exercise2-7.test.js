const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const objAnimal = Animals.find(element => element.name === name);
      if (objAnimal) {
        return resolve(objAnimal);
      }
      return reject('Nenhum animal com esse nome!')
    }, 1000)
  })
}


const getAnimal = (name1) => {
  return findAnimalByName(name1).then(obj => obj)
}

const findAnimalByAge = (age) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const animalAgeArr = Animals.filter(animal => animal.age === age);
      if (animalAgeArr.length > 0) {
        return resolve(animalAgeArr);
      }
      return reject({error: 'Não existe animal com essa idade'})
    }, 1000);
  })
}

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(arrAnimal => arrAnimal);
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando Promise - findAnimalByAge', () => {
  describe('Quando existeo animal com a idade produrada', () => {
    test('Retorne um array com objetos dos animais', () => {
      expect.assertions(1);
      return getAnimalByAge(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }])
      })
    })
  })

  describe('Quando não existe o animal com a idade desejada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(10).catch(error => {
        expect(error).toEqual({error: 'Não existe animal com essa idade'})
      })
    })
  })
})
function randomNumber () {
  return Math.floor(Math.random() * 100) + 1;
};

function isDivisible (number) {
  return ((randomNumber() % number) === 0);
};

test('randomNumber é chamada quando invocamos isDivisible', () => {
  randomNumber = jest.fn()
  isDivisible(2);
  expect(randomNumber).toBeCalled();
});

test('RandomNumber é par e o isDivisible retorna True', () => {
  randomNumber = jest.fn().mockReturnValue(2)
  isDivisible = jest.fn().mockImplementation((number) => randomNumber() % number === 0)
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible).toHaveBeenCalled();
})

test('Mockando valores para randomNumber', () => {
  randomNumber = jest.fn()
    .mockReturnValue(5)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(7);
  isDivisible = jest.fn().mockImplementation((number) => randomNumber() % number === 0);
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(3)).toBe(false);
  expect(isDivisible(2)).toBe(false);
  expect(isDivisible(5)).toBe(true);
  expect(isDivisible).toHaveBeenCalledTimes(4)
})



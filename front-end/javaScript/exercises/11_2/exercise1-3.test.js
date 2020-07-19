const exercise2 = require('./exercise1-2.js');

test('Testando multiplicar', () => {
  const mockMultiplicar = jest.spyOn(exercise2, 'multiplicar');
  expect(exercise2.multiplicar(1, 2)).toBe(2);
  expect(mockMultiplicar).toHaveBeenCalled()
  expect(mockMultiplicar).toHaveBeenCalledTimes(1)
  expect(mockMultiplicar).toHaveBeenCalledWith(1, 2)
  expect(mockMultiplicar(5, 1)).toBe(5);
})
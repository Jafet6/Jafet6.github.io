const exercise2 = require('./exercise1-2.js');

jest.mock('./exercise1-2.js')

test('Testando Subtrair', () => {
  exercise2.subtrair = jest.fn().mockImplementation((n1, n2) => n1 - n2)
  expect(exercise2.subtrair(1, 2)).toBe(-1);
  expect(exercise2.subtrair).toHaveBeenCalled();
  expect(exercise2.subtrair).toHaveBeenCalledTimes(1);
  expect(exercise2.subtrair).toHaveBeenCalledWith(1, 2);
})

test('Testando multiplicar', () => {
  exercise2.multiplicar.mockImplementation((a, b) => a * b)
  exercise2.multiplicar
    .mockReturnValue(10)
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(2);
  exercise2.multiplicar(2, 2);
  expect(exercise2.multiplicar).toBeCalled()
  expect(exercise2.multiplicar(1, 2)).toBe(2);
})

test('Testando somar', () => {
  exercise2.somar.mockImplementation((a, b) => a + b);
  exercise2.somar(2, 2);
  expect(exercise2.somar).toHaveBeenCalledTimes(1);
  expect(exercise2.somar(2, 2)).toBe(4);
  expect(exercise2.somar).toHaveBeenCalledTimes(2);
  expect(exercise2.somar).toHaveBeenCalledWith(2, 2);
})

test('Testando dividir', () => {
  exercise2.dividir.mockImplementation((a, b) => a / b)
  exercise2.dividir
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);
  exercise2.dividir(4, 2);
  expect(exercise2.dividir).toBeCalled();
  expect(exercise2.dividir(10, 2)).toBe(5);
  expect(exercise2.dividir).toHaveBeenCalledTimes(2);
})

test('Testando Subtrair', () => {
  exercise2.subtrair.mockRestore()
  exercise2.subtrair.mockImplementation((a, b) => a + b);
  exercise2.subtrair(2, 2);
  expect(exercise2.subtrair).toHaveBeenCalledTimes(1);
  expect(exercise2.subtrair(2, 2)).toBe(4);
  exercise2.subtrair.mockRestore()
  exercise2.subtrair.mockImplementation((a, b) => a - b)
  expect(exercise2.subtrair(2, 2)).toBe(0);
})
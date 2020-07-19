function randomNumber () {
  return Math.floor(Math.random() * 100) + 1;
};

test('Testando randomNumber', () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(10)
    .mockReturnValueOnce(5);
  expect(randomNumber()).toBe(5)
  expect(randomNumber).toBeCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockRestore();
  randomNumber.mockImplementation((a, b) => a / b)
  expect(randomNumber(2, 2)).toBe(1)
  expect(randomNumber).toBeCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockRestore();
  randomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(randomNumber(1, 2, 3)).toBe(6);
  expect(randomNumber).toHaveBeenCalledTimes(1);
});
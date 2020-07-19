const required = require('./exercise2-2');

jest.mock('./exercise2-2');

test('Novas implementações', () => {
  required.toUpperCase.mockImplementation((str) => str.toLowerCase())
  required.firstLetter.mockImplementation((str) => {
    const lastLetter = str.split("");
    return lastLetter[lastLetter.length -1]
  });
  required.strConcatenate.mockImplementation((str1, str2, str3) => str1 + str2 + str3)

  expect(required.toUpperCase('JAFET')).toBe('jafet');
  expect(required.firstLetter('JAFET')).toBe('T');
  expect(required.strConcatenate('JA', 'fe', 'T')).toBe('JAfeT')

  required.toUpperCase.mockRestore()
  required.toUpperCase.mockImplementation((str) => str.toUpperCase())
  expect(required.toUpperCase('jafet')).toBe('JAFET')
  expect(required.toUpperCase).toHaveBeenCalledTimes(1);
})
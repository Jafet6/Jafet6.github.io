const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 1000);
}
    
test('Testing if string goes uppercase', done => {
  expect.assertions(1);
  const callback = (result) => {
    expect(result).toBe('JAFET');
    done();
  }
  uppercase('jafet', callback);
})

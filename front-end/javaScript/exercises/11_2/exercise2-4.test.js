const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
jest.mock('node-fetch');
test('Mocking fetch', () => {
  const objResolved = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  
  fetch.mockImplementation(
    () => Promise.resolve({
      json: () => Promise.resolve(objResolved),
    })
  );
  
  return fetchJoke().then((joke) => {
    expect(joke).toEqual('Whiteboards ... are remarkable.');
  })

});
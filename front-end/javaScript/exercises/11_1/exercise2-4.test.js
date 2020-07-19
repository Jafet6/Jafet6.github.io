const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}


test('Testing if todo list exist', () => {
  expect.assertions(1);
  return getRepos('https://api.github.com/users/tryber/repos')
    .then(data => {
      const find = data.find(el => el === 'sd-01-week4-5-project-todo-list')
      expect(find).toBe(undefined)
    });
})

test('Testing if todo list exist Async/Await', async () => {
  expect.assertions(1);
  const data = await getRepos('https://api.github.com/users/tryber/repos');
  expect(data).toContain('sd-01-week13-project-frontend-online-store-group-2')
})

test('Testing if meme generator exist', () => {
  expect.assertions(1);
  return getRepos('https://api.github.com/users/tryber/repos').then(data => {
    const dataFind = data.find(el => el === 'sd-01-week4-5-project-todo-list')
    expect(dataFind).toBe(undefined);
  })
})

test('Testing if meme generator exist Async/Await', async () => {
  expect.assertions(1);
  const data = await getRepos('https://api.github.com/users/tryber/repos');
  expect(data).toContain('sd-01-week10-movie-card-library-tests');
})

module.exports = getRepos
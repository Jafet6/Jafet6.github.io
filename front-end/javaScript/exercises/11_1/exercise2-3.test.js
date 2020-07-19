const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: `User with ${id} not found.` });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

test('Testing Promises with Async Await CORRECT', async () => {
  expect.assertions(1);
  const result = await getUserName(4);
  expect(result).toBe('Mark');
})

test('Testing Promises with Async Await CORRECT Resolve', async () => {
  expect.assertions(1);
  await expect(getUserName(4)).resolves.toBe('Mark');
})

test('Testing Promises with Async Await WROGN', async () => {
  expect.assertions(1);
  try {
    await getUserName(6);
  } catch (e) {
    expect(e).toEqual({ error: `User with 6 not found.` })
  }
});

test('Testing Promises with Async Await WROGN', async () => {
  expect.assertions(1);
  await expect(getUserName(6)).rejects.toEqual({ error: `User with 6 not found.` })
})
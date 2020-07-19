const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: `User with ${id} not found.` });
    })
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

test('Testing users database with promises CORRECT', () => {
  expect.assertions(1);
  return getUserName(4).then(user => {
    expect(user).toBe('Mark')
  })
});

test('Testing users database with promises CORRECT Resolves', () => {
  expect.assertions(1);
  return expect(getUserName(4)).resolves.toBe('Mark');
});

test('Testing users database with promises WRONG', () => {
  expect.assertions(1);
  return getUserName(6).catch(error => {
    expect(error).toEqual({ error: `User with 6 not found.` })
  })
});

test('Testing users database with promises WRONG Reject', () => {
  expect.assertions(1);
  return expect(getUserName(6)).rejects.toEqual({ error: `User with 6 not found.` })
});





      
  
const REGISTER = 'REGISTER'

const registerAction = (userObj) => {
  return {
    type: REGISTER,
    users: userObj,
  }
};

export {
  REGISTER,
  registerAction,
};

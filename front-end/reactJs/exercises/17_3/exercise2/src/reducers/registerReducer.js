import { REGISTER } from '../actions/registerAction';

const INITIAL = {
  users: [],
};

const registerReducer = (state = INITIAL, action) => {
  // console.log(state);
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        users: [...state.users, action.users],
      }
    default:
      return state;
  }
}

export default registerReducer;

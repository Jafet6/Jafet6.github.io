import { LOGIN } from '../actions/loginAction';

const INITIAL_STATE = {
  loged: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        loged: action.login,
      }
    default:
      return state;
  };
}

export default loginReducer;

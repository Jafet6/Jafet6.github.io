import { CLICK } from '../actions/addClickAction';

const INITIAL_STATE = 0;

const countReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case CLICK:
      return state + 1;
    default:
      return state;
  }
}

export default countReducer;

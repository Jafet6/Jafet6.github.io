import { ADD_TODO } from '../actions/addInputAction';
import { REMOVE_TODO } from '../actions/removeInputAction';

const INITIAL_STATE = {
  list: [],
};

const addInputReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.text],
        listLength: Number(state.list + 1),
      };
      case REMOVE_TODO:
        return {
          ...state,
          list: action.list,
          listLength: Number(state.list - 1)
        };
    default:
      return state;
  }
}

export default addInputReducer;

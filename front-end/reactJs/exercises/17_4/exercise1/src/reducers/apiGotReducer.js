import { REQUEST_GOT_API } from '../actions/apiRequestActions';
import { RECEIVE_GOT_API_SUCCESS } from '../actions/apiRequestActions';
import { RECEIVE_GOT_API_FAILURE } from '../actions/apiRequestActions';


const INITIAL_STATE = {
  loading: false,
}

const apiGotReducer = (state = INITIAL_STATE, action) => {
  const { name, gender, aliases, books } = action
  switch(action.type) {
    case REQUEST_GOT_API:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_GOT_API_SUCCESS:
      return {
        ...state,
        character: {
          name,
          gender,
          aliases,
          books,
        },
        loading: false,
      }
    case RECEIVE_GOT_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      }
    default:
      return state
  }
}

export default apiGotReducer;

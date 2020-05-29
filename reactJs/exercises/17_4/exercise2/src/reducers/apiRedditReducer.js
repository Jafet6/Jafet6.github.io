import {
  API_REQUEST,
  API_RECEIVE_SUCCESS,
  API_RECEIVE_FAILURE
} from '../actions/apiRedditActions';

const INITIAL_STATE = {
  loading: false,
};

const apiRedditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_RECEIVE_SUCCESS:
      return {
        ...state,
        data: action.allData,
        loading: false,
      };
    case API_RECEIVE_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading:false,
      };
    default:
      return state;
  }
}

export default apiRedditReducer;

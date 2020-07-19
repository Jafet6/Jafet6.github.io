import { combineReducers } from 'redux';
import apiRedditReducer from '../reducers/apiRedditReducer';

const rootReducer = combineReducers({ apiRedditReducer });

export default rootReducer;

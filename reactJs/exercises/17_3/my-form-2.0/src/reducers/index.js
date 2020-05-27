import { combineReducers } from 'redux';
import formReducer from '../reducers/formReducer';

const rootReducer = combineReducers({ formReducer: formReducer });

export default rootReducer;

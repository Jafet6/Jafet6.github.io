import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer'


const rootReducers = combineReducers({ registerReducer, loginReducer })

export default rootReducers;

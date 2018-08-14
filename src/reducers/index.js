import { combineReducers } from 'redux';

// Reducers
import auth from './authReducer';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;

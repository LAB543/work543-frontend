import * as actions from '../constants/ActionTypes';

const initialState = {
  isAuth : null,
  success: null,
  status: null,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        success: action.payload.message,
        status: action.payload.status
      };
    case actions.USER_REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case actions.USER_LOGIN_SUCCESS :
      return {
        ...state,
        isAuth: action.payload
      };
    case actions.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;

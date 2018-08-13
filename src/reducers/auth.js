import * as actions from '../constants/ActionTypes';

const initialState = {
  user: {},
  isAuth : null,
  token: null,
  error: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state
      };
    case actions.USER_REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case actions.USER_LOGIN_SUCCESS :
      return {
        ...state,
        user: action.payload.data.user,
        token: action.payload.data.token,
        isAuth: true,
      };
    case actions.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case actions.USER_LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;

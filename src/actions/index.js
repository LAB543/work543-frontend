// Actions
import * as actions from '../constans/ActionTypes';
import axios from 'axios';

export const userLogin = (data) => (dispatch) => {
  const config = {'Content-Type': 'application/json'}
  const authUser = axios.post('/api/auth/login', data, config);

  authUser.then(res => {
    dispatch({
      type: actions.USER_LOGIN_SUCCESS,
      payload: res.data.token
    });
  })
  .catch(err => {
    dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload: err.response.data.message
    });
  });
}

export const userRegister = (data) => (dispatch) => {
  const config = { 'Content-Type': 'application/json' }
  const authUser = axios.post('/api/auth/register', data, config);

  authUser.then(res => {
    dispatch({
      type: actions.USER_REGISTER_SUCCESS,
      payload: res.data.message
    });
  })
    .catch(err => {
      dispatch({
        type: actions.USER_REGISTER_FAIL,
        payload: err.response.data.message
      });
    });
}

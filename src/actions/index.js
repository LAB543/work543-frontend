// Actions
import * as actions from '../constants/ActionTypes';
import axios from 'axios';
import browserHistory from '../utils/history';

// for external api server connection - 201808101214 Hwan Oh
const instance = axios.create({
    baseURL: 'http://localhost:3000/v1',
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
});

export const userRegister = (data) => (dispatch) => {
  const config = { 'Content-Type': 'application/x-www-form-urlencoded' };
  const authUser = instance.post('/user', data, config);

  authUser.then(res => {
    if (res.status === 201) {
      browserHistory.push('/login');
      return dispatch({
        type: actions.USER_REGISTER_SUCCESS
      });
    }
  })
  .catch(err => {
    return dispatch({
      type: actions.USER_REGISTER_FAIL,
      payload: err.response.data.message
    });
  });
};

export const userLogin = (data) => (dispatch) => {
  const config = { 'Content-Type': 'application/x-www-form-urlencoded'}
  const authUser = instance.post('/login', data, config);

  authUser.then(res => {
    if (res.status === 200) {
      sessionStorage.setItem(`user-token`, res.data.data.token);
      browserHistory.push('/');
      return dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: res.data
      });
    }
  })
  .catch(err => {
    return dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload: err.response.data
    });
  });
};

export const userLogout = () => (dispatch) => {
  browserHistory.push('/');
  return dispatch({
    type: actions.USER_LOGOUT
  });
};

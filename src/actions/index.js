// Actions
import * as actions from '../constants/ActionTypes';
import axios from 'axios';


// for external api server connection - 201808101214 Hwan Oh
const instance = axios.create({
    baseURL: 'http://localhost:3000/v1',
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
});

export const userRegister = (data) => (dispatch) => {
  const config = { 'Content-Type': 'application/json' }
  const authUser = instance.post('/register', data, config);

  authUser.then(res => {
    console.log(res);
    dispatch({
      type: actions.USER_REGISTER_SUCCESS,
      payload: {
        message: res.data.message,
        status: res.status
      }
    });
  })
  .catch(err => {
    console.log(err);
    dispatch({
      type: actions.USER_REGISTER_FAIL,
      payload: err.response.data.message
    });
  });
};

export const userLogin = (data) => (dispatch) => {
  const config = {'Content-Type': 'application/json'}
  const authUser = instance.post('/register', data, config);

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
};

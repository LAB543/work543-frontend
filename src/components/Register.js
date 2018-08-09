import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action
import { userRegister } from '../actions';


class Register extends Component {

  handleSubmit(e) {
    e.preventDefault();

    const authData = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    return this.props.userRegister(authData);
  }

  render() {
    const { success, error } = this.props.auth;
    return (
      <div className="register">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Name" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" required />
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" placeholder="E-mail" required />
          <button>Submit</button>
        </form>
        <div className="msg">
          <div>
          {typeof success === 'string' &&
              success
          }
          </div>
          <div>
          {typeof error === 'string' &&
            error
          }
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userRegister })(Register);

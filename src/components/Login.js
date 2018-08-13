import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browserHistory from '../utils/history';


// Action
import { userLogin } from '../actions';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    if (sessionStorage.getItem('user-token')) {
      browserHistory.push('/');
    }
  }

  onInputChange(e) {
    const {name , value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    const authData = {
      username,
      password
    }

    return this.props.userLogin(authData);
  }

  render() {
    return (
      <div className="login">
        <div className="content d-flex justify-content-center align-items-center">
          <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="card mb-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                  <h5 className="mb-0">Login to your account</h5>
                  <span className="d-block text-muted">Enter your credentials below</span>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" name="username" className="form-control" placeholder="Username" required onChange={(e) => this.onInputChange(e)} />
                    <div className="form-control-feedback">
                      <i className="icon-user text-muted"></i>
                    </div>
                </div>
                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="password" name="password" className="form-control" placeholder="Password" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-lock2 text-muted"></i>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2"></i></button>
                </div>

                <div className="text-center">
                  <a href="/">Forgot password?</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { userLogin })(Login));
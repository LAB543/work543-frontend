import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action
import { userRegister } from '../actions';

class Register extends Component {
  state = {
    username :'',
    firstName :'',
    lastName :'',
    email: '',
    password :''
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({[name] : value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, firstName, lastName, password, email } = this.state;

    const authData = {
      username,
      firstName,
      lastName,
      email,
      password
    }

    return this.props.userRegister(authData);
  }

  render() {
    return (
      <div className="register">
        <div className="content d-flex justify-content-center align-items-center">
          <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="card mb-0">
              <div className="card-body">

                <div className="text-center mb-3">
                  <i className="icon-plus3 icon-2x text-success border-success border-3 rounded-round p-3 mb-3 mt-1"></i>
                  <h5 className="mb-0">Create account</h5>
                  <span className="d-block text-muted">All fields are required</span>
                </div>

                <div className="form-group text-center text-muted content-divider">
                  <span className="px-2">Your credentials</span>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" name="username" className="form-control" placeholder="Username" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-user-check text-muted"></i>
                  </div>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" name="firstName" className="form-control" placeholder="First name" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-user-check text-muted"></i>
                  </div>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" name="lastName" className="form-control" placeholder="Last name" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-user-check text-muted"></i>
                  </div>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="text" name="email" className="form-control" placeholder="Your email" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-mention text-muted"></i>
                  </div>
                </div>

                <div className="form-group form-group-feedback form-group-feedback-left">
                  <input type="password" name="password" className="form-control" placeholder="Password" required onChange={(e) => this.onInputChange(e)} />
                  <div className="form-control-feedback">
                    <i className="icon-user-lock text-muted"></i>
                  </div>
                </div>

                <div className="form-group text-center text-muted content-divider">
                  <span className="px-2">Additions</span>
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <label className="form-check-label">
                      <div className="uniform-checker">
                        <span className="checked">
                          <input type="checkbox" name="remember" className="form-input-styled" />
                        </span>
                      </div>
                      Send me <a href="/">test account settings</a>
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label">
                      <div className="uniform-checker">
                        <span className="checked">
                          <input type="checkbox" name="remember" className="form-input-styled" />
                        </span>
                      </div>
                      Subscribe to monthly newsletter
                    </label>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label">
                      <div className="uniform-checker">
                        <span className="checked">
                          <input type="checkbox" name="remember" className="form-input-styled" />
                        </span>
                      </div>
                      Accept <a href="/">terms of service</a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn bg-teal-400 btn-block">Register <i className="icon-circle-right2 ml-2"></i></button>
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

export default connect(mapStateToProps, { userRegister })(Register);

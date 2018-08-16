import React, {Component} from 'react';

class PasswordReset extends Component {

  render() {
    return (
      <div className="content d-flex justify-content-center align-items-center">
        {/* Login-form */}
        <form className="login-form" action="index.html">
          <div className="card mb-0">
            <div className="card-body">
              <div className="text-center mb-3">
                <i
                  className="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                <h5 className="mb-0">Password recovery</h5>
                <span className="d-block text-muted">We'll send you instructions in email</span>
              </div>

              <div className="form-group form-group-feedback form-group-feedback-right">
                <input type="email" className="form-control" placeholder="Your email"/>
                <div className="form-control-feedback">
                  <i className="icon-mail5 text-muted"></i>
                </div>
              </div>

              <button type="submit" className="btn bg-blue btn-block">
                <i className="icon-spinner11 mr-2"></i> Reset password
              </button>
            </div>
          </div>
        </form>
        {/* Login-form */}
      </div>
    );
  }
};

export default PasswordReset;

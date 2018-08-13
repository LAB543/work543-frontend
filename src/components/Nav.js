import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Assets/images
import logo from '../assets/images/logo_light.png';

// Actions
import { userLogout } from '../actions';

class Nav extends Component {
  state = {
    toggleMenu : false
  }

  onToggleClick(e) {
    e.preventDefault();

    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  handleUserLogout(e) {
    e.preventDefault();

    this.setState({
      toggleMenu: !this.state.toggleMenu
    });

    sessionStorage.removeItem('user-token');
    return this.props.userLogout();
  }

  render() {
    const { isAuth } = this.props.auth;

    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark">
          <div className="navbar-brand">
            <Link to="/" className="d-inline-block">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-mobile" style={{ justifyContent : "flex-end"}}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-user">
                <a href="/" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block" onClick={(e) => this.onToggleClick(e)}>
                  <i className="icon-paragraph-justify3"></i>
                </a>
                <div className={`dropdown-menu dropdown-menu-right ${!this.state.toggleMenu ? '': 'show'}`}>
                  {
                    isAuth ?
                    <a className="dropdown-item" onClick={(e) => this.handleUserLogout(e)}><i className="icon-switch2"></i> Logout</a> :
                    <div>
                      <a href="/login" className="dropdown-item"><i className="icon-user-plus"></i> Login</a>
                      <a href="/register" className="dropdown-item"><i className="icon-user-plus"></i> Register</a>
                    </div>
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userLogout })(Nav);

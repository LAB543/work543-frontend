import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Assets/images
import logo from '../../assets/images/logo_light.png';

// Actions
import { userLogout } from '../../actions';

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
      <div className="navbar navbar-expand-md navbar-dark">
        { /* Navbar-brand */ }
        <div className="navbar-brand">
          <Link to="/" className="d-inline-block">
            <img src={logo} alt="" />
          </Link>
        </div>
        { /* /Navbar-brand */ }
  
        { /* Navbar-collapse */ }
        <div className="collapse navbar-collapse" id="navbar-mobile" style={{ justifyContent : "flex-end"}}>
          { /* Navbar-nav */ }
          <ul className="navbar-nav">
            { /* Nav-item */ }
            <li className="nav-item dropdown dropdown-user">
              <a href="/" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block" onClick={(e) => this.onToggleClick(e)}>
                <i className="icon-paragraph-justify3"></i>
              </a>
              <div className={`dropdown-menu dropdown-menu-right ${!this.state.toggleMenu ? '': 'show'}`}>
                  {
                  isAuth ?
                  <div>
                    <a className="dropdown-item" onClick={(e) => this.handleUserLogout(e)}><i className="icon-cog2"></i> Settings</a>
                    <a className="dropdown-item" onClick={(e) => this.handleUserLogout(e)}><i className="icon-switch2"></i> Logout</a> 
                  </div>
                  :<div>
                    <a href="/login" className="dropdown-item"><i className="icon-user-plus"></i> Login</a>
                    <a href="/register" className="dropdown-item"><i className="icon-user-plus"></i> Register</a>
                  </div>
                  }
              </div>
            </li>
            { /* /Nav-item */ }
          </ul>
          { /* /Navbar-nav */ }
        </div>
        { /* /Navbar-collapse */ }
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userLogout })(Nav);

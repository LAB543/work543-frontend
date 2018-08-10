import React from 'react';
import { Link } from 'react-router-dom';

// Assets/images
import logo from '../assets/images/logo_light.png';

const Nav = () => {
  return (
    <div>
      <div className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-brand">
          <Link to="/" className="d-inline-block">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div class="collapse navbar-collapse" id="navbar-mobile">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                <i class="icon-paragraph-justify3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
      <div className="sidebar-content">
        <div className="card card-sidebar-mobile">
          <ul className="nav nav-sidebar">
            {
              /* List - Header
                <li className="nav-item-header">
                  <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                  <i className="icon-menu" title="Main"></i>
                </li>
              */
            }
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="icon-home4"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="icon-people"></i>
                <span>Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <i className="icon-people"></i>
                <span>Register</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/protected" className="nav-link">
                <i className="icon-copy"></i>
                <span>Protected</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

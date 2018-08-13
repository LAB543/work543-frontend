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
              <Link to="/tool/1" className="nav-link">
                <i className="icon-file-empty"></i>
                <span>Tool 1</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tool/2" className="nav-link">
                <i className="icon-file-plus"></i>
                <span>Tool 2</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tool/3" className="nav-link">
                <i className="icon-check"></i>
                <span>Tool 3</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

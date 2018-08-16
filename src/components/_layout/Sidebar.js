import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
   constructor(props) {
    super(props);

    this.toggleMenu = React.createRef();

    this.state = {
       active: false
    };
  }

  /*
  onClickDahsboard(e) {
    e.currentTarget.classList.add('active');

    // remove toggle
    this.onToggleClick(e);
  };
  */

  onToggleClick(e) {
    e.preventDefault();

    const toggleParents = this.toggleMenu.current.children;
    const toggleTarget = e.currentTarget.parentElement;

    const toggleItemOpen = 'nav-item-open';
    const toggleSubOpen = 'nav-sub-open';
    const toggleVisible = 'nav-sub-visible';

    const filterToggleMenu = Array.prototype.filter.call(toggleParents, (children) => {
      if (children.classList.contains('nav-submenu')) {
        return children;
      }
    });

    filterToggleMenu.forEach((children) => {
      if ( (children !== toggleTarget && children.classList.contains(toggleItemOpen))
          || (children === toggleTarget && children.classList.contains(toggleItemOpen)) ) {
        children.classList.remove(toggleItemOpen);
        children.children[1].classList.remove(toggleVisible);
        children.children[1].classList.remove(toggleSubOpen);
      } else if(children === toggleTarget) {
        children.classList.add(toggleItemOpen);
        children.children[1].classList.add(toggleVisible);


      }
    });
  }

  render() {
    return (
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        {/* Sidebar-content */}
        <div className="sidebar-content">
          {/* Card */}
          <div className="card card-sidebar-mobile">
            {/* Nav */}
            <ul className="nav nav-sidebar" ref={this.toggleMenu} >
              {/* Sidebar - Title - Main */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs"> Main</div>
                <i className="icon-menu" title="Main"></i>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" id="dashboard" className="nav-link">
                  <i className="icon-home4"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              {/* /Sidebar - Title - Main */}
              
              {/* Sidebar - Title - Tools */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Tools
                </div> 
                <i className="icon-hammer-wrench" title="Tools"></i>
              </li>
              { /* Sidebar - Title - Tools */}
              
              {/* Sidebar - Tools - facebook */}
              <li className="nav-item nav-submenu">
                <a className="nav-link" id="facebook" onClick={(e) => this.onToggleClick(e)}>
                  <i className="icon-facebook2"></i>
                  <span>Facebook</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="Facebook">
                  <li className="nav-item">
                    <Link to="/facebook/post-monitor" className="nav-link">
                      포스트 모니터
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/facebook/comment-collector" className="nav-link">
                      댓글 수집기
                    </Link>
                  </li>
                </ul>
              </li>
              {/* /Sidebar - Tools - facebook */ }
              
              {/* Sidebar - Tools - instagram */ }
              <li className="nav-item nav-submenu">
                <a className="nav-link" onClick={(e) => this.onToggleClick(e)} >
                  <i className="icon-instagram"></i>
                  <span>Instagram</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="Instagram">
                  <li className="nav-item">
                    <Link to="/instagram/account-monitor" className="nav-link">
                      계정 모니터
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/instagram/post-collector" className="nav-link">
                      포스팅 수집기
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/instagram/tag-collector" className="nav-link">
                      태그 수집기
                    </Link>
                  </li>
                </ul>
              </li>
              {/* /Sidebar - Tools - instagram */}
              
              {/* Sidebar - Tools - youtube */}
              <li className="nav-item nav-submenu">
                <a className="nav-link" onClick={(e) => this.onToggleClick(e)} >
                  <i className="icon-youtube"></i>
                  <span>Youtube</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="Youtube">
                  <li className="nav-item">
                    <Link to="/youtube/comment-collector" className="nav-link">
                      댓글 수집기
                    </Link>
                  </li>
                </ul>
              </li>
              {/* /Sidebar - Tools - youtube */}
              
              {/* /Sidebar - Tools - etc */}
              <li className="nav-item nav-submenu">
                <a className="nav-link" onClick={(e) => this.onToggleClick(e)} >
                  <i className="icon-hammer-wrench"></i>
                  <span>E.T.C.</span>
                </a>
                <ul className="nav nav-group-sub" data-submenu-title="E.T.C.">
                  <li className="nav-item">
                    <Link to="/etc/privacy-masking" className="nav-link">
                      개인정보 마스킹
                    </Link>
                  </li>
                </ul>
              </li>
              {/* /Sidebar - Tools - etc */}
            </ul>
            {/* /Nav */}
          </div>
          {/* /Card */}
        </div>
        {/* /Sidebar-content */}
      </div>
    );
  };
};

export default Sidebar;

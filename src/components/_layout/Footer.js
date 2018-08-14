import React from 'react';

const Footer = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      
      {/* Footer */}
      <div className="text-center d-lg-none w-100">
        <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
          <i className="icon-unfold mr-2"></i>
          Footer
        </button>
      </div>
      {/* /Footer */}
      
      {/* Navbar-footer */}
      <div className="navbar-collapse collapse" id="navbar-footer">
        <span className="navbar-text">
          © 2018. <a>WORK543</a> by <a href="http://lab543.com" target="_blank" rel="noopener noreferrer">LAB543</a>
        </span>

        <ul className="navbar-nav ml-lg-auto">
          <li className="nav-item">
            <a href="https://kopyov.ticksy.com/" className="navbar-nav-link" target="_blank" rel="noopener noreferrer">
              <i className="icon-lifebuoy mr-2"></i> Support
            </a>
          </li>
          <li className="nav-item">
            <a href="http://demo.interface.club/limitless/docs/" className="navbar-nav-link" target="_blank" rel="noopener noreferrer">
              <i className="icon-file-text2 mr-2"></i> Docs
            </a>
          </li>
          <li className="nav-item">
            <a href="http://api.work543.com/docs/" className="navbar-nav-link" target="_blank" rel="noopener noreferrer">
              <i className="icon-cube3 mr-2"></i> API
            </a>
          </li>
          {/*
          <li class="nav-item"><a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" class="navbar-nav-link font-weight-semibold"><span class="text-pink-400"><i class="icon-cart2 mr-2"></i> Purchase</span></a></li>
          */}
        </ul>
      </div>
      {/* /Navbar-footer */}
    </div>
  );
};

export default Footer;

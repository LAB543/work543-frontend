import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header page-header-light">
        {/* Page-header-content */}
        <div className="page-header-content header-elements-md-inline">
          {/* Page-title */}
          <div className="page-title d-flex">
            <h4><i className="icon-arrow-left52 mr-2"></i> Dashboard</h4>
          </div>
          {/* /Page-title */}
          
          {/* Header-elements */}
          <div className="header-elements d-none">
            <div className="d-flex justify-content-center">
              <a href="/" className="btn btn-link btn-float text-default"><i className="icon-bars-alt text-primary"></i><span>Statistics</span></a>
              <a href="/" className="btn btn-link btn-float text-default"><i className="icon-calculator text-primary"></i> <span>Invoices</span></a>
              <a href="/" className="btn btn-link btn-float text-default"><i className="icon-calendar5 text-primary"></i> <span>Schedule</span></a>
            </div>
          </div>
          {/* /Header-elements */}
        </div> 
        {/* /Page-header-content */}
        
        {/* Header-elements */}
        <div className="header-elements d-none">
          <div className="d-flex justify-content-center">
            <a href="/" className="btn btn-link btn-float text-default"><i className="icon-bars-alt text-primary"></i><span>Statistics</span></a>
            <a href="/" className="btn btn-link btn-float text-default"><i className="icon-calculator text-primary"></i> <span>Invoices</span></a>
            <a href="/" className="btn btn-link btn-float text-default"><i className="icon-calendar5 text-primary"></i> <span>Schedule</span></a>
          </div>
        </div>
        {/* /Header-elements */}
        
        {/* Breadcrumb-line */}
        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div className="d-flex">
            <div className="breadcrumb">
              <a href="/" className="breadcrumb-item"><i className="icon-home2 mr-2"></i> Home</a>
              <span className="breadcrumb-item active">Dashboard</span>
            </div>
            <a href="/" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
          </div>
        </div>
        { /* /Breadcrumb-line */ }
      </div>
    );
  };
};

export default withRouter(PageHeader);

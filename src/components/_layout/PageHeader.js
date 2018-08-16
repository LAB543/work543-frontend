import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.groupName = this.groupName ? this.groupName : "Dashboard"

    this.props.history.listen((location, action) => {

      if (action === "PUSH") {
        var split = location.pathname.split("/");
        this.groupName = split[1] ? split[1].charAt(0).toUpperCase() + split[1].slice(1) : 'Dashboard';
        this.toolName = split[2] ? (split[2].charAt(0).toUpperCase() + split[2].slice(1)).replace("-", " ") : null;
      }

    });
  }

  render() {
    return (
      <div className="page-header page-header-light">
        {/* Page-header-content */}
        <div className="page-header-content header-elements-md-inline">
          {/* Page-title */}
          <div className="page-title d-flex">
            <h4><i className="icon-arrow-left52 mr-2"></i>
              <b>{this.groupName}</b> {this.toolName ? " - " + this.toolName : ""}</h4>
          </div>
          {/* /Page-title */}

          {/* Header-elements */}
          <div className="header-elements d-none">
            <div className="d-flex justify-content-center">
              <Link to="/" className="btn btn-link btn-float text-default">
                <i className="icon-bars-alt text-primary"></i><span>Statistics</span>
              </Link>
              <Link to="/" className="btn btn-link btn-float text-default">
                <i className="icon-calculator text-primary"></i> <span>Invoices</span>
              </Link>
              <Link to="/" className="btn btn-link btn-float text-default">
                <i className="icon-calendar5 text-primary"></i> <span>Schedule</span>
              </Link>
            </div>
          </div>
          {/* /Header-elements */}
        </div>
        {/* /Page-header-content */}

        {/* Breadcrumb-line */}
        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div className="d-flex">
            <div className="breadcrumb">
              <Link to="/" className="breadcrumb-item">
                <i className="icon-home2 mr-2"></i> Home
              </Link>
              <span className={`breadcrumb-item ${this.toolName ? "" : "active"}`}>{this.groupName}</span>
              {
                this.toolName &&
                <span className="breadcrumb-item active">{this.toolName}</span>
              }
            </div>
          </div>
        </div>
        {/* /Breadcrumb-line */}
      </div>
    );
  };
};

export default withRouter(PageHeader);

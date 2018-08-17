import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {capitalize} from '../../utils';

class PageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainTitle: '',
      subTitle: '',
      toolName: ''
    }
  }

  currentTitle () {
    const arr = capitalize(this.props.currentLocation);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('this.props : ',this.props.currentLocation);
    console.log('nextProps : ', nextProps.currentLocation);
    console.log('compare : ', nextProps.currentLocation !== this.props.currentLocation);
    return false;
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

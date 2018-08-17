import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {capitalize} from '../../utils';

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
      toolName: ''
    }
  }

  componentDidMount() {
    const curLoc = capitalize(this.props.currentLocation);
    this.setState({
      groupName: curLoc[0],
      toolName: `${curLoc[1] !== undefined ? curLoc[1] : ''}`,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const curLoc = capitalize(this.props.currentLocation);
    if (curLoc.length > 1 && curLoc[1] !== prevState.toolName) {
      this.setState({
        groupName: curLoc[0],
        toolName: `${curLoc[1] !== undefined ? curLoc[1] : ''}`,
      });
    }
  }

  render() {
    return (
      <div className="page-header page-header-light">
        {/* Page-header-content */}
        <div className="page-header-content header-elements-md-inline">
          {/* Page-title */}
          <div className="page-title d-flex">
            <h4><i className="icon-arrow-left52 mr-2"></i>
              <b>{this.state.groupName}</b> {this.state.toolName ? " - " + this.state.toolName : ""}</h4>
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
              <span className={`breadcrumb-item ${this.state.toolName ? "" : "active"}`}>{this.state.groupName}</span>
              {
                this.state.toolName &&
                <span className="breadcrumb-item active">{this.state.toolName}</span>
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

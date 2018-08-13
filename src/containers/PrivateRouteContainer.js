import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

class PrivateRouteContainer extends Component {
  render() {
    return(
      <div className="page-content">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content" style={{ height: '100vh' }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(PrivateRouteContainer);

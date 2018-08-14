import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrivateRouteContainer extends Component {
  render() {
    return(
      <div className="content" style={{ height: '100vh' }}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, {})(PrivateRouteContainer);

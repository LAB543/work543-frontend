import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';


class ProtectedContainer extends Component {
  render() {
    return(
      <div>
        <Sidebar />
      </div>
    );
  }
}

export default connect(null, {})(ProtectedContainer);

import {Component} from 'react';
import {connect} from 'react-redux';

class PrivateRouteContainer extends Component {
  render() {
    return this.props.children;
  }
}

export default connect(null, {})(PrivateRouteContainer);

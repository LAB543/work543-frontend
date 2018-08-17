
import React, {Component} from 'react';
import {_navigationSidebar, capitalize} from '../../utils'
import AccoordianMenu from './AccoordianMenu';

class Sidebar extends Component {
  componentDidMount() {
    _navigationSidebar();
  }

  render() {
    return (
      <AccoordianMenu currentLocation={this.props.currentLocation.length < 2 ? capitalize(this.props.currentLocation)[0] : capitalize(this.props.currentLocation)[1]} />
    );
  };
};

export default Sidebar;

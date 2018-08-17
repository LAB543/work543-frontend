
import React, {Component} from 'react';
import {_navigationSidebar, capitalize} from '../../utils'
import AccoordianMenu from './AccoordianMenu';

class Sidebar extends Component {
  componentDidMount() {
    _navigationSidebar();
  }

  render() {
    const checkLocation = this.props.currentLocation[0] === 'etc' ? ['E.T.C'] : this.props.currentLocation;

    return (
      <AccoordianMenu currentLocation={capitalize(checkLocation)[0]} />
    );
  };
};

export default Sidebar;

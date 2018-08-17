import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
// import Sidebar from '../components/_layout/Sidebar';
import SidebarTemp from '../components/_layout/SidebarTemp';
import PageHeader from '../components/_layout/PageHeader';
import Etc from '../components/etc/Etc';

class EtcContainer extends Component {
  render() {
    const { match } = this.props;
    const locations = this.props.location.pathname.split('/').slice(1);

    return (
      <div className="page-content">
        <SidebarTemp currentLocation={locations} />
        <div className="content-wrapper">
          <PageHeader currentLocation={locations} />
          <Route path={`${match.url}/:tool`} component={Etc} />
        </div>
      </div>
    );
  }
}

export default EtcContainer;

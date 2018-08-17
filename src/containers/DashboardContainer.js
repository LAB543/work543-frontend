import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Components
// import Sidebar from '../components/_layout/Sidebar';
import SidebarTemp from '../components/_layout/SidebarTemp';
import PageHeader from '../components/_layout/PageHeader';
import Dashboard from '../components/dashboard/Dashboard';

class DashboardContainer extends Component {
  render() {
    const { match } = this.props;
    const locations = this.props.location.pathname.split('/').slice(1);

    return(
      <div className="page-content">
        <SidebarTemp currentLocation={locations} />
        <div className="content-wrapper">
          <PageHeader currentLocation={locations} />
          <Route path={`${match.url}`} component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;

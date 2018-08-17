import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Components
// import Sidebar from '../components/_layout/Sidebar';
import SidebarTemp from '../components/_layout/SidebarTemp';
import PageHeader from '../components/_layout/PageHeader';
import Dashboard from '../components/dashboard/Dashboard';
import Facebook from '../components/facebook/Facebook';
import Instagram from '../components/instagram/Instagram';
import Youtube from '../components/youtube/Youtube';
import Etc from '../components/etc/Etc';

class PrivateRouteContainer extends Component {
  render() {
    const { match } = this.props;
    const locations = this.props.location.pathname.split('/').slice(1);

    return(
      <div className="page-content">
        <SidebarTemp currentLocation={locations} />
        <div className="content-wrapper">
          <PageHeader currentLocation={locations} />
          <Route exact path={`${match.url}`} component={Dashboard} />
          <Route path={`${match.url}/facebook/:tool`} component={Facebook} />
          <Route path={`${match.url}/instagram/:tool`} component={Instagram} />
          <Route path={`${match.url}/youtube/:tool`} component={Youtube} />
          <Route path={`${match.url}/etc/:tool`} component={Etc} />
        </div>
      </div>
    );
  }
}

export default PrivateRouteContainer;

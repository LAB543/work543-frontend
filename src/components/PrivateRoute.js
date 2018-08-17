import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({path: Path, component: Component, linkTo: LinkTo}) => (
  <Route path={Path} render={props => (
    sessionStorage.getItem('user-token') !== null ?
      (<Component {...props} />) :
      (<Redirect to={LinkTo}/>)
  )}/>
);

export default PrivateRoute;

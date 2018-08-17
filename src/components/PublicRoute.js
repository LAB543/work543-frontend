import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({exact: Exact, path: Path, component: Component, linkTo: LinkTo}) => (
  <Route exact={Exact} path={Path} render={props => (
    sessionStorage.getItem('user-token') === null ?
      (<Component {...props} />) :
      (<Redirect to={{pathname: LinkTo, state: {from: props.location}}}/>)
  )}/>
);

export default PublicRoute;

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PublicRoute = ({exact: Exact, path: Path, component: Component, linkTo: LinkTo, auth: isAuth}) => (
  <Route exact={Exact} path={Path} render={props => (
    isAuth === null ?
      (<Component {...props} />) :
      (<Redirect to={{pathname: LinkTo, state: {from: props.location}}}/>)
  )}/>
);

export default connect(null, null, null, {pure: false})(PublicRoute);

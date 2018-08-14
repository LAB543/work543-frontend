import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ exact: Exact, path: Path, component: Component, linkTo: LinkTo, auth: isAuth }) => (
  <Route path={Path} render={props => (
    isAuth !== null ?
    (<Component {...props} />) :
    (<Redirect to={LinkTo} />)
  )} />
);

export default connect(null, null, null, { pure: false })(PrivateRoute);

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path: Path, component: Component, linkTo: LinkTo, auth: Auth }) => (
  <Route path={Path} render={props => (
    !!Auth ? <Component {...props} /> : <Redirect to={LinkTo} />
  )} />
);

export default PrivateRoute;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Containers
import PrivateRouteContainer from './PrivateRouteContainer';

// Component
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Tool from '../components/Tool';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

// Actions
import { userLoginCheck } from '../actions';

class App extends Component {

  state = {
    value : false,
  }

  componentDidMount() {
    this.props.userLoginCheck();
  }

  render() {
    const { isAuth } = this.props.auth;

    return (
      <div className="app">
        <Header />
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PublicRoute exact path="/" component={Home} linkTo="/dashboard" auth={isAuth} />
        <PrivateRouteContainer>
          <PrivateRoute path="/dashboard" component={Dashboard} linkTo="/login" auth={isAuth} />
          <PrivateRoute path="/tool/:id" component={Tool} linkTo="/login" auth={isAuth} />
        </PrivateRouteContainer>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { userLoginCheck })(App));

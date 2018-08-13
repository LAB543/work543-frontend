import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Tool from '../components/Tool';
import PrivateRoute from '../components/PrivateRoute';

// Actions
import { userLoginCheck } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.userLoginCheck();
  }

  render() {
    const { isAuth } = this.props.auth;

    return (
      <div className="app">
        <Header />
        {
          isAuth ?
          <Redirect to="dashboard" /> :
          <Route exact path="/" component={Home} />
        }
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {
          isAuth ?
          <div>
            <PrivateRoute path="/dashboard" component={Dashboard} linkTo="/login" auth={isAuth} />
            <PrivateRoute path="/tool/:id" component={Tool} linkTo="/login" auth={isAuth} />
          </div>
          :
          <div>
            <PrivateRoute path="/dashboard" component={Dashboard} linkTo="/login" auth={isAuth} />
            <PrivateRoute path="/tool/:id" component={Tool} linkTo="/login" auth={isAuth} />
          </div>
        }

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

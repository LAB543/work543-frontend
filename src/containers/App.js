import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import Protected from '../components/Protected';

class App extends Component {
  state = {
    isAuth : false
  }

  componentDidMount() {
    if (sessionStorage.getItem('user-token')) {
      this.setState({
        isAuth: true
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} linkTo="/login" auth={this.state.isAuth} />
        <PrivateRoute path="/protected" component={Protected} linkTo="/login" auth={this.state.isAuth} />
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

export default withRouter(connect(mapStateToProps, {})(App));

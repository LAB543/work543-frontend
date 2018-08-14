import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Containers
import PrivateRouteContainer from './PrivateRouteContainer';

// Components
import Header from '../components/_layout/Header';
import Footer from '../components/_layout/Footer';
import Sidebar from '../components/_layout/Sidebar';
import PageHeader from '../components/_layout/PageHeader';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/dashboard/Dashboard';


import Facebook from '../components/facebook/Facebook';
import Instagram from '../components/instagram/Instagram';
import Youtube from '../components/youtube/Youtube';
import Etc from '../components/etc/Etc';

// Routing
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

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
        { /* page-content */ }
        <div className="page-content">
          { isAuth && <Sidebar /> }

          { /* content-wrapper */ }
          <div className="content-wrapper">

            { isAuth && <PageHeader /> }
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PublicRoute exact path="/" component={Home} linkTo="/dashboard" auth={isAuth} />
              <PrivateRouteContainer>
                <PrivateRoute path="/dashboard" component={Dashboard} linkTo="/login" auth={isAuth} />
                <PrivateRoute path="/facebook/:tool" component={Facebook} linkTo="/login" auth={isAuth} />
                <PrivateRoute path="/instagram/:tool" component={Instagram} linkTo="/login" auth={isAuth} />
                <PrivateRoute path="/youtube/:tool" component={Youtube} linkTo="/login" auth={isAuth} />
                <PrivateRoute path="/etc/:tool" component={Etc} linkTo="/login" auth={isAuth} />
              </PrivateRouteContainer>
            </Switch>
            <Footer />

          </div>
          { /* /content-wrapper */ }
        </div>
        { /* /page-content */ }
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

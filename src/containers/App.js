import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types';

// Components
import Header from '../components/_layout/Header';
import Footer from '../components/_layout/Footer';
import Home from '../components/Home';
import NoMatch from '../components/NoMatch';
import Login from '../components/Login';
import Register from '../components/Register';
import PasswordReset from '../components/PasswordReset';

// Routing
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

// Containers
import DashboardContainer from '../containers/DashboardContainer';
import FacebookContainer from '../containers/FacebookContainer';
import InstagramContainer from '../containers/InstagramContainer';
import YoutubeContainer from '../containers/YoutubeContainer';
import EtcContainer from '../containers/EtcContainer';


// Actions
import {userLoginCheck} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.userLoginCheck();
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <PublicRoute exact path="/" component={Home} linkTo="/dashboard" />
          <PublicRoute path="/login" component={Login} linkTo="/dashboard" />
          <PublicRoute path="/register" component={Register} linkTo="/dashboard" />
          <Route path="/password-reset" component={PasswordReset} />
          <PrivateRoute path="/dashboard" component={DashboardContainer} linkTo="/login" />
          <PrivateRoute path="/facebook" component={FacebookContainer} linkTo="/login" />
          <PrivateRoute path="/instagram" component={InstagramContainer} linkTo="/login" />
          <PrivateRoute path="/youtube" component={YoutubeContainer} linkTo="/login" />
          <PrivateRoute path="/etc" component={EtcContainer} linkTo="/login" />
          <Route component={NoMatch} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(null, {userLoginCheck})(App));

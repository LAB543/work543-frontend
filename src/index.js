import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router} from 'react-router-dom';
import browserHistory from './utils/history';
import ReduxThunk from 'redux-thunk';

// Default
import './index.css';
import App from './containers/App';

// ServiceWorker
import registerServiceWorker from './registerServiceWorker';

// Reducers
import reducers from './reducers';

// Bootstrap & Theme JS
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Middlewares
const middlewares = [ReduxThunk];
if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);

  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();

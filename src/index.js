import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

// Default
import './index.css';
import App from './containers/App';

// ServiceWorker
import registerServiceWorker from './registerServiceWorker';

// Reducers
import reducers from './reducers';

// Middlewares
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();

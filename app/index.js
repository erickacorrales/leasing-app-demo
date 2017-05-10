/**
 * Created by erickacorrales on 20/4/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import {loadTenants} from './actions/tenantActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import createHistory from '../node_modules/history/createBrowserHistory';

const history = createHistory();
const middlewareHistory = routerMiddleware(history);
const store =  configureStore(middlewareHistory);

store.dispatch(loadTenants());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

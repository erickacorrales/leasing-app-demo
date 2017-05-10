/**
 * Created by erickacorrales on 3/5/17.
 */
import {combineReducers} from 'redux';
import tenants from './tenantReducer';
import {routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  tenants,
  router: routerReducer
});

export default rootReducer;

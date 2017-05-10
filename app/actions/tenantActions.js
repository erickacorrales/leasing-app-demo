/**
 * Created by erickacorrales on 3/5/17.
 */
import * as types from './actionTypes';
import tenantApi from '../api/mockTenantApi';

export function loadTenantsSuccess(tenants){
  return { type: types.LOAD_TENANTS_SUCCESS, tenants};
}

export function loadTenants() {
  return function(dispatch){
    return tenantApi.getAllTenants().then( tenants =>{
        dispatch(loadTenantsSuccess(tenants));
      }).catch(error => {
        throw(error);
      });
  };

}

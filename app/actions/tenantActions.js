/**
 * Created by erickacorrales on 3/5/17.
 */
import * as types from './actionTypes';

export function createTenant(tenant){
  return { type: types.CREATE_TENANT, tenant};
}

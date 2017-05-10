/**
 * Created by erickacorrales on 3/5/17.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {

  switch (action.type) {

    case types.LOAD_TENANTS_SUCCESS :
      return action.tenants;

    default:
      return state;

  }

}

/**
 * Created by erickacorrales on 3/5/17.
 */
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {

  switch (action.type) {

    case types.CREATE_TENANT :
      return [...state,
        Object.assign({}, action.tenant)
      ];

    default:
      return state;

  }

}

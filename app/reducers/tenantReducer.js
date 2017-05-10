/**
 * Created by erickacorrales on 3/5/17.
 */
export default function courseReducer(state = [], action) {

  switch (action.type) {

    case 'CREATE_TENANT' :
      return [...state,
        Object.assign({}, action.tenant)
      ];

    default:
      return state;

  }

}

import {
  LOGIN, LOGOUT,
} from './action';

import {
  LoginState, LoginAction,
} from './types';

const initialState = {
  userOid: '',
};

function login(state:LoginState = initialState, action:LoginAction) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userOid: action.payload.userOid,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default login;

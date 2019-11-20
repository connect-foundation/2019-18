import {
  LOGIN, LOGOUT,
} from './action';

import {
  LoginState, LoginAction,
} from './types';

const initialState = {
  email: null,
  name: null,
  thumbnailUrl: null,
};

function login(state:LoginState = initialState, action:LoginAction) {
  switch (action.type) {
    case LOGIN:
      console.log(state);
      console.log(action);
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        thumbnailUrl: action.payload.thumbnailUrl,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default login;

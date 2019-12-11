import {
  SETUSER, UNSETUSER, LOGIN,
} from './action';

import {
  LoginUserState, LoginUserAction,
} from './types';

const initialState = {
  isLogin: false,
  email: '',
  name: '',
  thumbnailUrl: '',
  originUrl: '',
  profile: '',
};

function login(state:LoginUserState = initialState, action:LoginUserAction) {
  switch (action.type) {
    case SETUSER:
      return {
        ...action.payload,
      };
    case UNSETUSER:
      return {
        ...initialState,
      };
    case LOGIN:
      return {
        ...initialState, isLogin: true,
      };
    default:
      return state;
  }
}

export default login;

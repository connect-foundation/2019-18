import {
  SETUSER, UNSETUSER, LOGIN, UPDATE_IMG_URL,
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
  id: '',
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
    case UPDATE_IMG_URL:
      return {
        ...initialState,
        thumbnailUrl: action.payload.thumbnailUrl,
        originUrl: action.payload.originUrl,
      };
    default:
      return state;
  }
}

export default login;

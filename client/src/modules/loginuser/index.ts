import { LoginUserState } from '../login/types';

export const makeUserState = (cookies:string) => {
  const tempState = {
    email: '',
    name: '',
    thumbnailUrl: '',
    originUrl: '',
    isLogin: false,
  };
  return tempState;
};
export const setUserState = (LoginUser: LoginUserState) => {
  console.log(LoginUser);
};

import { LoginUserState } from '../login/types';
import { API_SERVER } from '../../utils/constants';

const initialState = {
  email: '',
  name: '',
  thumbnailUrl: '',
  originUrl: '',
  isLogin: false,
};
export const makeUserState = async (cookies:string) => {
  const response = await fetch(`${API_SERVER}/login/whoAmI`, {
    method: 'get',
    credentials: 'include',
  });

  if (!response.ok) {
    return initialState;
  }

  const { user } = (await response.json()).data;

  const UserState = {
    email: user.email,
    name: user.name,
    thumbnailUrl: user.thumbnailUrl,
    originUrl: user.originUrl,
    isLogin: true,
  };

  return UserState;
};
export const setUserState = (LoginUser: LoginUserState) => {
  console.log(LoginUser);
};

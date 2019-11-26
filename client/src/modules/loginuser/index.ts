import { API_SERVER } from '../../utils/constants';

const initialState = {
  email: '',
  name: '',
  thumbnailUrl: '',
  originUrl: '',
  isLogin: false,
};
const makeUserState = async (cookies:string) => {
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

export default makeUserState;

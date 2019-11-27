import { API_SERVER } from '../../utils/constants';

const initialState = {
  email: '',
  name: '',
  thumbnailUrl: '',
  originUrl: '',
  isLogin: false,
};
const makeUserState = async (cookies:string, resolve:any) => {
  const response = await fetch(`${API_SERVER}/login/whoAmI`, {
    method: 'get',
    credentials: 'include',
  });
  const responseData = await response.json();

  if (!responseData.success) { return resolve(initialState); }

  console.log(responseData);
  const { user } = responseData.data;
  const UserState = {
    email: user.email,
    name: user.name,
    thumbnailUrl: user.thumbnailUrl,
    originUrl: user.originUrl,
    isLogin: true,
  };

  resolve(UserState);
};

export default makeUserState;

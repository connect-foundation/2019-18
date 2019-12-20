import { API_SERVER } from '../../utils/constants';

const initialState = {
  email: '',
  name: '',
  thumbnailUrl: '',
  originUrl: '',
  profile: '',
  id: '',
  isLogin: false,
};
const makeUserState = async () => {
  const response = await fetch(`${API_SERVER}/login/whoAmI`, {
    method: 'get',
    credentials: 'include',
  });
  const responseData = await response.json();

  if (!responseData.success) { return initialState; }
  const { user } = responseData.data;
  const UserState = {
    ...user,
    isLogin: true,
  };

  return UserState;
};

export default makeUserState;

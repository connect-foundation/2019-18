export const SETUSER = 'login/SETUSER' as const;
export const UNSETUSER = 'login/UNSETUSER' as const;
export const LOGIN = 'login/LOGIN' as const;

interface loginUser {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
}

export const setuser = (user: loginUser) => ({
  type: SETUSER,
  payload: user,
});
export const unsetuser = () => ({ type: UNSETUSER });
export const login = () => ({ type: LOGIN });

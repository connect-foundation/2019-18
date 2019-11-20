export const LOGIN = 'login/LOGIN' as const;
export const LOGOUT = 'login/LOGOUT' as const;

interface loginType {
    email: string;
    name: string;
    thumbnailUrl: string;
}

export const login = (user: loginType) => ({
  type: LOGIN,
  payload: user,
});
export const logout = (user: loginType) => ({ type: LOGOUT, payload: user });

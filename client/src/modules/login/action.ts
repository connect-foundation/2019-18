export const LOGIN = 'login/LOGIN' as const;
export const LOGOUT = 'login/LOGOUT' as const;

interface loginType {
    userOid: string;
}

export const login = (user: loginType) => ({
  type: LOGIN,
  payload: user,
});
export const logout = () => ({ type: LOGOUT });

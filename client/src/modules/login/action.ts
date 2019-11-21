export const LOGIN = 'login/LOGIN' as const;
export const LOGOUT = 'login/LOGOUT' as const;

interface loginType {
<<<<<<< HEAD
    userOid: string;
=======
    email: string;
    name: string;
    thumbnailUrl: string;
>>>>>>> 64e80fe04f2519edc97309139816df491acc1943
}

export const login = (user: loginType) => ({
  type: LOGIN,
  payload: user,
});
<<<<<<< HEAD
export const logout = () => ({ type: LOGOUT });
=======
export const logout = (user: loginType) => ({ type: LOGOUT, payload: user });
>>>>>>> 64e80fe04f2519edc97309139816df491acc1943

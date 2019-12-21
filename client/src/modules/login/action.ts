export const SETUSER = 'login/SETUSER' as const;
export const UNSETUSER = 'login/UNSETUSER' as const;
export const LOGIN = 'login/LOGIN' as const;
export const UPDATE_IMG_URL = 'login/UPDATE_IMG_URL' as const;

export interface loginUser {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
    profile: string;
    id: string;
}

export const setuser = (user: loginUser) => ({
  type: SETUSER,
  payload: user,
});
export const unsetuser = () => ({ type: UNSETUSER });
export const login = () => ({ type: LOGIN });
export const updateImgUrl = (thumbnailUrl:string, originUrl:string) => ({
  type: UPDATE_IMG_URL,
  payload: { thumbnailUrl, originUrl },
});

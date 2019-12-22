import {
  setuser, unsetuser, login, updateImgUrl,
} from './action';

export type LoginUserAction =
| ReturnType<typeof setuser>
| ReturnType<typeof unsetuser>
| ReturnType<typeof login>
| ReturnType<typeof updateImgUrl>;

export type LoginUserState = {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
    profile: string;
    id: string;
};

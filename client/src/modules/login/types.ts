import { setuser, unsetuser, login } from './action';

export type LoginUserAction =
| ReturnType<typeof setuser>
| ReturnType<typeof unsetuser>
| ReturnType<typeof login>;

export type LoginUserState = {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
    profile: string;
};

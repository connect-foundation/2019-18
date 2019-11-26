import { setuser, unsetuser } from './action';

export type LoginUserAction =
| ReturnType<typeof setuser>
| ReturnType<typeof unsetuser>;

export type LoginUserState = {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
};

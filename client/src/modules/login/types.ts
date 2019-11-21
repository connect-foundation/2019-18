import { login, logout } from './action';

export type LoginAction =
| ReturnType<typeof login>
| ReturnType<typeof logout>;

<<<<<<< HEAD
export type LoginState = {
    userOid: string;
=======

export type LoginState = {
    email : string | null ;
    name : string | null;
    thumbnailUrl : string | null;
>>>>>>> 64e80fe04f2519edc97309139816df491acc1943
};

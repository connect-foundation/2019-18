import { login, logout } from './action';

export type LoginAction =
| ReturnType<typeof login>
| ReturnType<typeof logout>;

export type LoginState = {
    userOid: string;
};

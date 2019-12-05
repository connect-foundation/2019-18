export interface JoinProp{
    onJoin: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangePwdCheck: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangePwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;

    pwd: string;
    name: string;
    email: string;
    pwdCheck: string;
    joinSuccess: boolean

}

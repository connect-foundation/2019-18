import React from 'react';


interface LoginProp{
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onLogout: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangeid: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  }

const Login:React.FC<LoginProp> = ({
  onSubmit, onChangeid, onChangepwd, onLogout,
}) => (
  <div>
    <input onChange={onChangeid} />
    <input onChange={onChangepwd} />
    <button type="button" onClick={onSubmit}>LOGIN</button>
    <button type="button" onClick={onLogout}>LOGOUT</button>
  </div>
);

export default Login;

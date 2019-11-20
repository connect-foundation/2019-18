import React from 'react';


interface LoginProp{
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangeid: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  }

const Login:React.FC<LoginProp> = ({ onSubmit, onChangeid, onChangepwd }) => (
  <div>
    <input onChange={onChangeid} />
    <input onChange={onChangepwd} />
    <button type="button" onClick={onSubmit}>LOGIN</button>
  </div>
);

export default Login;

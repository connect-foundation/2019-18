import React, { useState } from 'react';

const useInputTag = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;
    setValue(targetValue);
  };

  return [value, onChange];
};

const Login:React.FC = () => {
  const [id, setId] = useInputTag('');
  const [pwd, setPwd] = useInputTag('');

  return (
    <div>
      <h3>id: </h3>
      <input value={id} onChange={setId} type="text" />
      <h3>pwd: </h3>
      <input value={pwd} onChange={setPwd} type="password" />
    </div>
  );
};

export default Login;
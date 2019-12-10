import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import UploadMain from '../components/UploadMain';
import { RootState } from '../modules';

const UploadMainContainer:React.FC = () => {
  const isLogin = useSelector((state:RootState) => state.login.isLogin);

  return (
    <div>
      {isLogin ? <UploadMain />
        : <Redirect to="/login" />}
    </div>
  );
};

export default UploadMainContainer;

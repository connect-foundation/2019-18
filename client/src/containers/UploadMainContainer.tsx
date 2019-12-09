import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UploadMain from '../components/UploadMain';
import { RootState } from '../modules';

const UploadMainContainer:React.FC = () => {
  const isLogin = useSelector((state:RootState) => state.login.isLogin);
  return (
    <div>
      <UploadMain
        isLogin={isLogin}
      />
    </div>
  );
};

export default UploadMainContainer;

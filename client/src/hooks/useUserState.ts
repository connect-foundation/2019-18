import { useEffect } from 'react';
import { ReactCookieProps } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import socket from 'socket.io-client';
import { loginUser, setuser } from '../modules/login';
import makeUserState from '../modules/loginuser';
import { RootState } from '../modules';
import { sendMySocketID } from '../socket';

const useUserState = (props:ReactCookieProps) => {
  const dispatch = useDispatch();
  const currentUserState = useSelector((state:RootState) => state.login);
  useEffect(() => {
    const token = props.cookies && props.cookies.get('token');
    if (token && currentUserState.name === '') {
      makeUserState().then((userState:loginUser) => {
        // io.emit('userInfo', userState);
        sendMySocketID(userState);
        dispatch(setuser(userState));
      });
    }
  }, [currentUserState, dispatch, props.cookies]);
};

export default useUserState;

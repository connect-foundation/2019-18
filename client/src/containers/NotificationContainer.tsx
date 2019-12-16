import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Alarm from '../components/Alarm';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import { setNotification, INotification } from '../modules/notification';


const NotificationContainer:React.FC = () => {
  const notifications = useSelector((state:RootState) => state.notification);
  const user = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    axios(`${API_SERVER}/user/notifications/${user.id}`)
      .then((result) => {
        dispatch(setNotification(result.data.data));
      })
      .catch((e) => {
      });
  }, []);

  return (
    <Alarm
      notifications={notifications}
    />
  );
};

export default NotificationContainer;

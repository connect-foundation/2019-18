import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Alarm from '../components/Alarm';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import { INotification, setNotification } from '../modules/notification';
import { getNewNotis } from '../socket';

const NotificationContainer:React.FC = () => {
  const { notifications } = useSelector((state:RootState) => state.notification);
  const user = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();
  const alarmRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    axios(`${API_SERVER}/user/notifications/${user.id}`)
      .then((result) => {
        dispatch(setNotification(result.data.data));
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const newNotificationAnimation = () => {
    if (!alarmRef) {
      return;
    }
    const ref = alarmRef.current;
    if (!ref) {
      return;
    }
    ref.classList.remove('animated', 'shake');
    ref.classList.add('animated', 'shake');
  };

  getNewNotis((newNotifications:INotification) => {
    dispatch(setNotification(newNotifications));
    newNotificationAnimation();
  });

  return (
    <Alarm
      notifications={notifications}
      alarmRef={alarmRef}
      newNotificationAnimation={newNotificationAnimation}
    />
  );
};

export default NotificationContainer;

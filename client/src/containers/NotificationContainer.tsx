import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alarm from '../components/Alarm';
import { RootState } from '../modules';
import { INotification, setNotification } from '../modules/notification';
import { getNewNotis } from '../socket';
import { NOTIFICATIONS, Axios } from '../utils/request';

const NotificationContainer:React.FC = () => {
  const [notiNum, setNotiNum] = useState(0);
  const { notifications } = useSelector((state:RootState) => state.notification);
  const user = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();
  const alarmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const notificationConfig = NOTIFICATIONS(user.id);
    Axios(notificationConfig)
      .then((result) => {
        dispatch(setNotification(result.data.data));
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    setNotiNum(notifications.length);
  }, [notifications]);

  const newNotificationAnimation = () => {
    if (!alarmRef) {
      return;
    }
    const ref = alarmRef.current;
    if (!ref) {
      return;
    }
    ref.classList.remove('animated', 'bounceIn');
    ref.classList.add('animated', 'bounceIn');
  };

  getNewNotis((newNotifications:INotification) => {
    dispatch(setNotification(newNotifications));
    newNotificationAnimation();
  });

  return (
    <Alarm
      notifications={notifications}
      alarmRef={alarmRef}
      notiNum={notiNum}
    />
  );
};

export default NotificationContainer;

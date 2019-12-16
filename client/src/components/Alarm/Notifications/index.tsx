import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as S from './styles';
import { RootState } from '../../../modules';
import { getShortId, getTimeSimple } from '../../../utils';
import { INoti } from '../../../modules/notification';
import NotificationItem from '../NotificationItem';

const Notifications: React.FC = () => {
  const notifications = useSelector((state:RootState) => state.notification.notifications);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <S.Container>
      <S.Header>
        새로운 작품
      </S.Header>
      {
        notifications.map((noti:INoti) => (
          <NotificationItem
            key={getShortId()}
            sender={noti.sender}
            type={noti.type}
            createdAt={noti.createdAt}
          />
        ))
      }
    </S.Container>
  );
};

export default Notifications;

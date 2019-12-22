import React, { useEffect } from 'react';
import * as S from './styles';
import { getShortId } from '../../../utils';
import { INoti } from '../../../modules/notification';
import NotificationItem from '../NotificationItem';


interface NotificationsProp{
  notifications: INoti[];
}

const Notifications: React.FC<NotificationsProp> = ({
  notifications,
}) => (
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
          refPost={noti.ref}
        />
      ))
      }
  </S.Container>
);
export default Notifications;

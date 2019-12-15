import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as S from './styles';
import { API_SERVER } from '../../../utils/constants';
import { RootState } from '../../../modules';
import useFetch from '../../../hooks/useFetch';
import { getShortId } from '../../../utils';


const Notifications: React.FC = () => {
  const notifications = useSelector((state:RootState) => state.notification.notifications);
  return (
    <S.Container>
      {
        notifications.map((noti) => (
          <div key={getShortId()}>
            <div>{noti.sender}</div>
            <div>{noti.ref}</div>
            <div>{noti.type}</div>
          </div>
        ))
      }
    </S.Container>
  );
};

export default Notifications;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as S from './styles';
import { API_SERVER } from '../../../utils/constants';
import { RootState } from '../../../modules';
import useFetch from '../../../hooks/useFetch';
import { getShortId } from '../../../utils';

interface INoti {
  isRead: boolean;
  createdAt: number;
  _id: string;
  sender: string;
  ref: string;
  type: string;
}

interface IData {
  _id: string,
  notifications:INoti[];
}

const Notifications: React.FC = () => {
  const user = useSelector((state:RootState) => state.login);
  const {
    data, isLoading, isError, setUrl,
  } = useFetch<IData>();


  useEffect(() => {
    setUrl(`${API_SERVER}/user/notifications/${user.id}`);
  }, []);

  if (!data) {
    return (
      <S.Container>
        <p>알림이 없습니다.</p>
      </S.Container>
    );
  }

  if (isLoading) {
    return (
      <S.Container>
        <div>Loading...</div>
      </S.Container>
    );
  }

  if (isError) {
    return (
      <S.Container>
        <div>something wrong...</div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {
        data.notifications.map((noti) => (
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

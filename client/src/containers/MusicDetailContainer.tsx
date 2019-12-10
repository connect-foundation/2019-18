import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MusicDetail from '../components/MusicDetail';
import useGetFeed from '../hooks/useGetFeed';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import { IData } from '../components/MusicDetail/types';

const md = {
  title: 'face to face',
  author: 'Ruel',
  date: '2019.12.03',
  views: 193,
  plays: 1948,
  genres: ['록', '실험', '월드뮤직', '힙합', '랩'],
  moods: ['기쁨', '행복', 'o', 's'],
  instruments: ['보컬', '키보드', '기타', '드럼'],
  musicUrl: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
  coverUrl: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg',
};

const MusicDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);
  const user = useSelector((state: RootState) => state.login);
  useEffect(() => {
    setUrl(`${API_SERVER}/feed/workmusic/${id}`);
  }, [data]);

  return (
    <MusicDetail
      data={data}
      user={user}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default MusicDetailContainer;

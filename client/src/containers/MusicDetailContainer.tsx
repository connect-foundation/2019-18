import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MusicDetail from '../components/MusicDetail';
import useGetFeed from '../hooks/useGetFeed';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import { IData } from '../components/MusicDetail/types';

const MusicDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);

  const user = useSelector((state: RootState) => state.login);

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/workmusic/${id}`);
  }, []);

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

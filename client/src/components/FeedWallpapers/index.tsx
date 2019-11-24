import React, { useEffect } from 'react';
import Card from '../Card';
import useFetch from '../../hooks/useFetch';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';

interface IWallpaper{
  _id: string;
  creator:{
    _id: string,
    name: string,
    email: string,
  };
  url: string;
}

const FeedWallpapers: React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useFetch<IWallpaper>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/wallpapers`);
  }, []);
  return (

    <S.Container>
      {
        isError
          ? (<div>Something wrong...</div>)
          : isLoading
            ? (<div>Loadinng...</div>)
            : (
              data.map(({ _id, url, creator }) => (
                <Card
                  imageId={_id}
                  imgUrl={url}
                  creator={creator}
                  key={_id}
                />
              ))
            )
      }
    </S.Container>
  );
};

export default FeedWallpapers;

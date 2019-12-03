import React, { useEffect } from 'react';
import WorksCard from '../Card/WorksCard';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';

interface IWallpaper{
  _id: string;
  ownerId:string;
  creator:{
    _id: string,
    name: string,
    email: string,
  };
  url: string;
  title:string;
  numOfComments:string;
  views: string;
}

const FeedWallpapers: React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useGetFeedList<IWallpaper>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images`);
  }, []);
  return (

    <S.Container>
      {
        isError
          ? (<div>Something wrong...</div>)
          : isLoading
            ? (<div>Loadinng...</div>)
            : (
              data.map(({
                _id, ownerId, url, creator, title, numOfComments, views,
              }) => (
                <WorksCard
                  _id={_id}
                  ownerId={ownerId}
                  imgUrl={url}
                  creator={creator}
                  key={_id}
                  title={title}
                  numOfComments={numOfComments}
                  views={views}
                />
              ))
            )
      }
    </S.Container>
  );
};

export default FeedWallpapers;

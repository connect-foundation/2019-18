import React, { useEffect } from 'react';
import shortid from 'shortid';
import { CircularProgress } from '@material-ui/core';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { IWallpaper } from './type';
import WorksCard from '../Card/WorksCard';

const FeedWallpapers: React.FC = () => {
  const [{
    data, isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList<IWallpaper>([]);

  useEffect(() => {
    window.addEventListener('scroll', onInsert);
    return () => {
      window.removeEventListener('scroll', onInsert);
    };
  }, []);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/wallpapers/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  return (
    <S.Container>
      <S.FeedWrapper>
        {
          data.map(({
            _id, ownerId, url, creator, title, numOfComments, views,
          }) => (
            <WorksCard
              _id={_id}
              ownerId={ownerId}
              imgUrl={url}
              creator={creator}
              key={shortid.generate()}
              title={title}
              numOfComments={numOfComments}
              views={views}
            />
          ))
      }

      </S.FeedWrapper>
      <S.Progress>
        {isLoading && <CircularProgress color="inherit" />}
      </S.Progress>
    </S.Container>


  );
};

export default FeedWallpapers;

import React, { useEffect } from 'react';
import shortid from 'shortid';
import { CircularProgress } from '@material-ui/core';
import Card from '../Card';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { IImage } from './type';

const FeedWorks:React.FC = () => {
  const [{
    data, isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList<IImage>([]);

  useEffect(() => {
    window.addEventListener('scroll', onInsert);
    return () => {
      window.removeEventListener('scroll', onInsert);
    };
  }, []);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  return (
    <S.Container>
      {
        data.map(({
          _id, ownerId, url, creator, title, numOfComments, views,
        }) => (
          <Card
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

      <S.Progress>
        {isLoading && <CircularProgress color="inherit" />}
      </S.Progress>
    </S.Container>
  );
};

export default FeedWorks;

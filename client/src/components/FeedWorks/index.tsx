import React, { useEffect } from 'react';
<<<<<<< HEAD
import WorksCard from '../Card/WorksCard';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { getShortId } from '../../utils';
import IImage from './types';
=======
import shortid from 'shortid';
import { CircularProgress } from '@material-ui/core';
import Card from '../Card';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { IImage } from './type';
>>>>>>> b56116383d9dee7a64ec0f97559dc406558ce10c

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
<<<<<<< HEAD
          isLoading
            ? (<div>Loading...</div>)
            : (
              data.map(({
                _id, ownerId, url, creator, title, numOfComments, views,
              }) => (
                <WorksCard
                  _id={_id}
                  ownerId={ownerId}
                  imgUrl={url}
                  creator={creator}
                  key={getShortId()}
                  title={title}
                  numOfComments={numOfComments}
                  views={views}
                />
              ))
            )
=======
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
>>>>>>> b56116383d9dee7a64ec0f97559dc406558ce10c
      }

      <S.Progress>
        {isLoading && <CircularProgress color="inherit" />}
      </S.Progress>
    </S.Container>
  );
};

export default FeedWorks;

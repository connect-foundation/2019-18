import React, { useEffect } from 'react';
import Card from '../Card';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { getShortId } from '../../utils';
import IImage from './types';

const FeedWorks:React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useGetFeedList<IImage>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images`);
  }, [data]);

  console.log(data);

  return (
    <S.Container>
      {
          isLoading
            ? (<div>Loading...</div>)
            : (
              data.map(({
                _id, ownerId, url, creator, title, numOfComments, views,
              }) => (
                <Card
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
      }

    </S.Container>
  );
};

export default FeedWorks;

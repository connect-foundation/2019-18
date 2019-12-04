import React, { useEffect } from 'react';
import Card from '../Card';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { IImage } from './type';

const FeedWorks:React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useGetFeedList<IImage>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images`);
  }, [data]);

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

export default FeedWorks;

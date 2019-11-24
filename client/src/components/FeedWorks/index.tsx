import React, { useEffect } from 'react';
import Card from '../Card';
import useFetch from '../../hooks/useFetch';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';

interface IImage{
  _id: string;
  creator:{
    _id: string,
    name: string,
    email: string,
  };
  url: string;
}
const FeedWorks:React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useFetch<IImage>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images`);
  }, []);

  return (
    <S.Container>
      {
        isError
          ? (<div>Something wrong...</div>)
          : isLoading
            ? (<div>Loading...</div>)
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

export default FeedWorks;

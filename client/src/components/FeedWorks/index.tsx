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
  title:string;
  numOfComments:string;
  views: string;
}
const FeedWorks:React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useFetch<IImage>([]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images`);
  }, []);

  console.log(data);

  return (
    <S.Container>
      {
        isError
          ? (<div>Something wrong...</div>)
          : isLoading
            ? (<div>Loading...</div>)
            : (
              data.map(({
                _id, url, creator, title, numOfComments, views,
              }) => (
                <Card
                  imageId={_id}
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

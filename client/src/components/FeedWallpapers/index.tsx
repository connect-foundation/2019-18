import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import shortid from 'shortid';
import { CircularProgress } from '@material-ui/core';
import Card from '../Card';
import useGetFeedList from '../../hooks/useGetFeedList';
import { API_SERVER } from '../../utils/constants';
import * as S from './styles';
import { IWallpaper } from './type';

const FeedWallpapers: React.FC = () => {
  const [{
    data, isLoading, isError,
  }, doFetch] = useGetFeedList<IWallpaper>([]);

  const [skippedNum, setSkippedNum] = useState(0);
  const fixedNum = useRef(9);

  useEffect(() => {
    window.addEventListener('scroll', onInsert);
    return () => {
      window.removeEventListener('scroll', onInsert);
    };
  }, []);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/wallpapers/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  const onInsert = useCallback(
    (e) => {
      const scrollTop = window.scrollY;
      const { clientHeight } = document.documentElement;
      const { scrollHeight } = document.body;
      if ((scrollTop + clientHeight) === scrollHeight) {
        setSkippedNum(skippedNum + fixedNum.current);
      }
    },
    [],
  );

  return (

    <S.Container>
      {
        // isError
        //   ? (<div>Something wrong...</div>)
        //   : isLoading
        //     ? (<div>Loadinng...</div>)
        //     : (
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

export default FeedWallpapers;

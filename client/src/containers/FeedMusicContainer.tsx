import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedMusics from '../components/FeedMusics';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedList from '../hooks/useGetFeedList';
import { getMusicDataMore } from '../modules/feed';

const FeedMusicContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.musicData);
  const skippedNumG = useSelector((state: RootState) => state.feed.musicSkippedNum);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList(skippedNumG, getMusicDataMore);

  useEffect(() => {
    document.addEventListener('scroll', onInsert);
    return () => {
      document.removeEventListener('scroll', onInsert);
    };
  }, [skippedNum]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/musics/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  return (
    <FeedMusics
      data={data}
      isLoading={isLoading}
    />
  );
};

export default FeedMusicContainer;

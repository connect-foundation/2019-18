import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedMusics from '../components/FeedMusics';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedMusicList from '../hooks/useGetFeedMusicList';

const FeedMusicContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.musicData);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert2] = useGetFeedMusicList();

  useEffect(() => {
    window.addEventListener('scroll', onInsert2);
    return () => {
      window.removeEventListener('scroll', onInsert2);
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

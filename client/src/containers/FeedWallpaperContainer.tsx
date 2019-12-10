import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedWallpapers from '../components/FeedWallpapers';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedWallpaperList from '../hooks/useGetFeedWallpaperList';

const FeedWallpaperContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.wallpaperData);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert2] = useGetFeedWallpaperList();

  useEffect(() => {
    window.addEventListener('scroll', onInsert2);
    return () => {
      window.removeEventListener('scroll', onInsert2);
    };
  }, [skippedNum]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/wallpapers/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  return (
    <FeedWallpapers
      data={data}
      isLoading={isLoading}
    />
  );
};

export default FeedWallpaperContainer;

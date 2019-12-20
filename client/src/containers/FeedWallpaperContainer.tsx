import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedWallpapers from '../components/FeedWallpapers';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedList from '../hooks/useGetFeedList';
import { getWallpaperDataMore } from '../modules/feed';

const FeedWallpaperContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.wallpaperData);
  const skippedNumG = useSelector((state: RootState) => state.feed.wallpaperSkippedNum);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList(skippedNumG, getWallpaperDataMore);

  useEffect(() => {
    document.addEventListener('scroll', onInsert);
    return () => {
      document.removeEventListener('scroll', onInsert);
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

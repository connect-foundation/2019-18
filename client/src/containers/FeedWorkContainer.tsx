import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedWorks from '../components/FeedWorks';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedList from '../hooks/useGetFeedList';

const FeedWorkContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.data);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList();

  useEffect(() => {
    window.addEventListener('scroll', onInsert);
    return () => {
      window.removeEventListener('scroll', onInsert);
    };
  }, [skippedNum]);

  useEffect(() => {
    doFetch(`${API_SERVER}/feed/images/more/${fixedNum.current}/${skippedNum}`);
  }, [skippedNum]);

  return (
    <FeedWorks
      data={data}
      isLoading={isLoading}
    />
  );
};

export default FeedWorkContainer;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedWorks from '../components/FeedWorks';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedWorkList from '../hooks/useGetFeedWorkList';

const FeedWorkContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.workData);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedWorkList();

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
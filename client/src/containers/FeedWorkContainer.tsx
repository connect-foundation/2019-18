import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FeedWorks from '../components/FeedWorks';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import useGetFeedList from '../hooks/useGetFeedList';
import { getWorkDataMore } from '../modules/feed';

const FeedWorkContainer:React.FC = () => {
  const data = useSelector((state: RootState) => state.feed.workData);
  const skippedNumG = useSelector((state: RootState) => state.feed.workSkippedNum);
  const [{
    isLoading, isError, skippedNum, fixedNum,
  }, doFetch, onInsert] = useGetFeedList(skippedNumG, getWorkDataMore);

  useEffect(() => {
    document.addEventListener('scroll', onInsert);
    return () => {
      document.removeEventListener('scroll', onInsert);
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

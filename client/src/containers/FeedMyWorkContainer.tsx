import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedWorks from '../components/FeedWorks';
import { API_SERVER } from '../utils/constants';

interface MyWorkContainerProp
{
  id:string;
}

const FeedMyWorkContainer:React.FC<MyWorkContainerProp> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadMyWork = async () => {
      const url = `${API_SERVER}/feed/images/${id}`;
      const result = await axios(url);
      if (result.data.success) {
        setIsLoading(false);
        setData(result.data.data);
      }
    };
    loadMyWork();
  }, []);
  return (
    data.length > 0 ? (
      <FeedWorks
        data={data}
        isLoading={isLoading}
      />
    )
      : (<div />)
  );
};

export default FeedMyWorkContainer;

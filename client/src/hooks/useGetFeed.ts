import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetFeed = <T>(initData:T)
  :[{data:T, setData:React.Dispatch<T>, isLoading:boolean, isError:boolean}, (url:string)=>void ] => {
  const [data, setData] = useState(initData);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // const { CancelToken } = axios;
    // const source = CancelToken.source();
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (!result.data.success) {
          setIsLoading(false);
        } else {
          setData(result.data.data);
          setIsLoading(false);
          setIsError(true);
        }
      } catch (e) {
        console.error(e);
        setIsError(e);
      }
    };
    fetchData();
  }, [url]);


  return [{
    data, setData, isLoading, isError,
  }, setUrl];
};

export default useGetFeed;

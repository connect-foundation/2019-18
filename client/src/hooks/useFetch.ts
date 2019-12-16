import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>()
  :{
  data:T | undefined, isLoading: boolean, isError: boolean, setUrl: React.Dispatch<React.SetStateAction<string>>
  } => {
  const [data, setData] = useState<T>();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (!result.data.success) {
          setIsError(true);
        } else {
          setData(result.data.data);
          setIsLoading(false);
          setIsError(false);
        }
      } catch (e) {
        console.error(e);
        setIsError(e);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
    setUrl,
  };
};

export default useFetch;

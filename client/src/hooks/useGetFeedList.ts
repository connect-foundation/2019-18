import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(initData:T[])
  :[{data:T[], isLoading:boolean, isError:boolean}, (url:string)=>void ] => {
  const [data, setData] = useState(initData);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (!result.data.success) {
          setIsLoading(false);
        } else {
          const images = result.data.data;
          const newData = data.concat(images);
          setData(newData);
          setIsLoading(false);
          setIsError(false);
        }
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);

  useEffect(()=>{
    console.log(data);
  },[data]);

  return [{
    data, isLoading, isError,
  }, setUrl];
};

export default useFetch;

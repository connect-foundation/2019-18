import {
  useState, useEffect, useRef, useCallback,
} from 'react';
import axios from 'axios';

const useFetch = <T>(initData:T[])
  :[{data:T[], isLoading:boolean, isError:boolean, skippedNum:number, fixedNum:React.MutableRefObject<number>}, (url:string)=>void, ()=>void ] => {
  const [data, setData] = useState(initData);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [skippedNum, setSkippedNum] = useState(0);
  const fixedNum = useRef(9);

  const onInsert = useCallback(
    () => {
      const scrollTop = window.scrollY;
      const { clientHeight } = document.documentElement;
      const { scrollHeight } = document.body;
      if ((scrollTop + clientHeight) === scrollHeight) {
        setSkippedNum(skippedNum + fixedNum.current);
      }
    },
    [],
  );

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
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);

  // useEffect(() => {
  // }, [data]);

  return [{
    data, isLoading, isError, skippedNum, fixedNum,
  }, setUrl, onInsert];
};

export default useFetch;

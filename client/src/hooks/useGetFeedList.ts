import {
  useState, useEffect, useRef, useCallback,
} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkDataMore, getWorkData } from '../modules/feed';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';

const useFetch = ()
  :[{isLoading:boolean, isError:boolean, fixedNum:React.MutableRefObject<number>, skippedNum:number}, (url:string)=>void, ()=>void] => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fixedNum = useRef(9);
  const dispatch = useDispatch();
  const skippedNumG = useSelector((state: RootState) => state.feed.skippedNum);
  const [skippedNum, setSkippedNum] = useState(skippedNumG);


  const onInsert = useCallback(
    () => {
      const scrollTop = window.scrollY;
      const { clientHeight } = document.documentElement;
      const { scrollHeight } = document.body;
      if ((scrollTop + clientHeight) === scrollHeight) {
        setSkippedNum(skippedNum + 9);
      }
    },
    [],
  );

  useEffect(() => {
    console.log('useEffecctt!!!', skippedNumG);
  }, [skippedNumG]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true); try {
        const result = await axios(url);
        if (!result.data.success) {
          setIsLoading(false);
        } else {
          const images = result.data.data;
          // const newData = data.concat(images);
          // setData(newData);
          console.log('fetch!!');
          dispatch(getWorkDataMore(images));
          setIsLoading(false);
          setIsError(false);
        }
      } catch (e) {
        setIsError(true);
      }
    };
    fetchData();
  }, [url]);


  return [{
    isLoading, isError, fixedNum, skippedNum,
  }, setUrl, onInsert];
};

export default useFetch;

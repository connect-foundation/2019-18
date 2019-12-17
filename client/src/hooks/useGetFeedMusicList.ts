import {
  useState, useEffect, useRef,
} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getMusicDataMore } from '../modules/feed';
import { RootState } from '../modules';

const useFetch = ()
  :[{isLoading:boolean, isError:boolean, fixedNum:React.MutableRefObject<number>, skippedNum:number}, (url:string)=>void, ()=>void] => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fixedNum = useRef(9);
  const dispatch = useDispatch();
  const skippedNumG = useSelector((state: RootState) => state.feed.musicSkippedNum);
  const [skippedNum, setSkippedNum] = useState(skippedNumG);
  const isLoading2 = useRef(false);

  const onInsert2 = () => {
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;
    const { scrollHeight } = document.body;

    if ((scrollTop + clientHeight) === scrollHeight) {
      if (isLoading2.current === false && skippedNumG >= skippedNum) {
        setSkippedNum(skippedNum + 9);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      isLoading2.current = true;
      try {
        const result = await axios(url);
        if (!result.data.success) {
          setIsLoading(false);
        } else {
          const musics = result.data.data;
          dispatch(getMusicDataMore(musics));
          setIsLoading(false);
          isLoading2.current = false;
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
  }, setUrl, onInsert2];
};

export default useFetch;

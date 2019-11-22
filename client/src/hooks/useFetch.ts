import { useState, useEffect } from 'react';

interface IImage {
  creator: string;
  url: string;
}

const useFetch = () => {
  const [data, setData] = useState<IImage[] | null>(null);
  const [url, setUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const json = await result.json();
        console.log(JSON.stringify(json));
        setData(json);
      } catch (e) {
        setIsError(e);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;

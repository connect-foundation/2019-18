import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;

    width: 60%;
    margin: auto;
`;

interface IImage{
  creator: string;
  url: string;
}
const FeedWorks:React.FC = () => {
  const [data, setData] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetch('http://localhost:3050/image/');
        const images = await result.json();
        const newData = data.concat(images);
        setData(newData);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {isError && <div>Something wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((image) => (
          <Card
            imgUrl={image.url}
            creator={image.creator}
          />
        ))
      )}

    </Container>
  );
};

export default FeedWorks;

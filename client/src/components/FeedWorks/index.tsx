import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '../Card';
import useFetch from '../../hooks/useFetch';
import { API_SERVER } from '../../utils/constants';

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: 60%;
    margin: auto;
`;

interface IImage{
  _id: string;
  creator:{
    _id: string,
    name: string,
    email: string,
  };
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
        const result = await axios(`${API_SERVER}/image/`);
        if (!result.data.success) {
          alert(result.data.data.message);
          setIsError(true);
          setIsLoading(false);
        } else {
          const images = result.data.data;
          const newData = data.concat(images);
          setData(newData);
          setIsLoading(false);
        }
      } catch (e) {
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {isError && !isLoading && <div>Something wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((image) => (
          <Card
            imgUrl={image.url}
            creator={image.creator.name}
            key={image._id}
          />
        ))
      )}

    </Container>
  );
};

export default FeedWorks;

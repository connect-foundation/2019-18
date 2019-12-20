import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { resultsAriaMessage } from 'react-select/src/accessibility';
import FeedWorks from '../components/FeedWorks';
import FeedMusics from '../components/FeedMusics';
import { API_SERVER } from '../utils/constants';

interface MyWorkContainerProp
{
  id:string;
}

const FeedMyWorkContainer:React.FC<MyWorkContainerProp> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ image: [], music: [] });
  useEffect(() => {
    const loadMyWork = async () => {
      const imageUrl = `${API_SERVER}/feed/images/${id}`;
      const musicUrl = `${API_SERVER}/feed/musics/${id}`;
      const imageResult = await axios(imageUrl);
      const musicResult = await axios(musicUrl);
      const result = { image: [], music: [] };
      if (imageResult.data.success) {
        result.image = imageResult.data.data;
      }
      if (musicResult.data.success) {
        result.music = musicResult.data.data;
      }
      setData(result);
      setIsLoading(false);
    };
    loadMyWork();
  }, []);
  return (
    <div>

      {data.image.length > 0 && (
        <FeedWorks
          data={data.image}
          isLoading={isLoading}
        />
      )}
      {data.music.length > 0 && (
        <FeedMusics
          data={data.music}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default FeedMyWorkContainer;

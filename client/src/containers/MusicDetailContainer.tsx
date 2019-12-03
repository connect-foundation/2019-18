import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MusicDetail from '../components/MusicDetail';

const md = {
  title: 'face to face',
  author: 'Ruel',
  date: '2019.12.03',
  views: 193,
  plays: 1948,
  genres: ['록', '실험', '월드뮤직', '힙합', '랩'],
  moods: ['기쁨', '행복', 'o', 's'],
  instruments: ['보컬', '키보드', '기타', '드럼'],
  musicUrl: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
  coverUrl: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg',
};

const MusicDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;

  return (
    <MusicDetail
      title={md.title}
      author={md.author}
      date={md.date}
      views={md.views}
      plays={md.plays}
      genres={md.genres}
      moods={md.moods}
      instruments={md.instruments}
      musicUrl={md.musicUrl}
      coverUrl={md.coverUrl}
    />
  );
};

export default MusicDetailContainer;

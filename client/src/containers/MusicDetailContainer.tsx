import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MusicDetail from '../components/MusicDetail';

const md = {
  title: 'wpahrdlek',
  author: 'authordlek',
  date: '2019.12.03',
  views: 123,
  plays: 1234,
  genres: ['g', 'e', 'n', 'r', 'e', 's'],
  moods: ['m', 'o', 'o', 's'],
  instruments: ['i', 'n', 's', 't'],
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

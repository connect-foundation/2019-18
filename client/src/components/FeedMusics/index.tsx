import React from 'react';
import * as S from './styles';
import IMusic from './types';
import MusicCard from '../Card/MusicCard';
import { getShortId } from '../../utils';

const FeedMusics: React.FC = () => {
  const dd:IMusic[] = [{
    _id: '123',
    ownerId: '123',
    url: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/21751720_1497560586995026_8895703824676526156_n.jpg',
    creator: {
      _id: '123',
      name: '123',
      email: '123',
    },
    title: 'asd',
    numOfComments: '123',
    views: '123',
  },
  {
    _id: '123',
    ownerId: '123',
    url: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/21751720_1497560586995026_8895703824676526156_n.jpg',
    creator: {
      _id: '123',
      name: '123',
      email: '123',
    },
    title: 'asd',
    numOfComments: '123',
    views: '123',
  },
  {
    _id: '123',
    ownerId: '123',
    url: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/21751720_1497560586995026_8895703824676526156_n.jpg',
    creator: {
      _id: '123',
      name: '123',
      email: '123',
    },
    title: 'asd',
    numOfComments: '123',
    views: '123',
  },
  {
    _id: '123',
    ownerId: '123',
    url: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/21751720_1497560586995026_8895703824676526156_n.jpg',
    creator: {
      _id: '123',
      name: '123',
      email: '123',
    },
    title: 'asd',
    numOfComments: '123',
    views: '123',
  }];
  return (
    <S.Container>
      {
        dd.map(({
          _id, ownerId, url, creator, title, numOfComments, views,
        }) => (
          <MusicCard
            _id={_id}
            ownerId={ownerId}
            imgUrl={url}
            creator={creator}
            key={getShortId()}
            title={title}
            numOfComments={numOfComments}
            views={views}
          />
        ))
      }

    </S.Container>
  );
};

export default FeedMusics;

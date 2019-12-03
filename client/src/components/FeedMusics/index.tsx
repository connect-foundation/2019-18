import React from 'react';
import * as S from './styles';
import IMusic from './types';
import Card from '../../components/Card';
import { getShortId } from '../../utils';

const FeedMusics: React.FC = () => {
  const dd:IMusic = {
    _id: '123',
    ownerId: '123',
    url: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg',
    creator: {
      _id: '123',
      name: '123',
      email: '123',
    },
    title: 'asd',
    numOfComments: '123',
    views: '123',
  };
  return (
    <S.Container>
      <Card
        _id={dd._id}
        ownerId={dd.ownerId}
        imgUrl={dd.url}
        creator={dd.creator}
        key={getShortId()}
        title={dd.title}
        numOfComments={dd.numOfComments}
        views={dd.views}
      />
    </S.Container>
  );
};

export default FeedMusics;

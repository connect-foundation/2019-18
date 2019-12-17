import React from 'react';
import * as S from './styles';
import { IMusic2 } from './types';
import MusicCard from '../Card/MusicCard';
import { getShortId } from '../../utils';

const FeedMusics: React.FC = () => {
  const dd:IMusic2[] = [{
    _id: '5df76a73ba3a799eac61ca55',
    imageUrl: 'http://roebskkcmsoo3088464.cdn.ntruss.com/musicCovers/14e97a98-1440-4623-8ff0-c62d27fc6e50.png?type=w&w=200&quality=90',
    musicUrl: 'https://kr.object.ncloudstorage.com/crafolio-test-upload/musics/45fff607-0f7c-44d6-b2c6-3a227812a36d.mp3',
    title: '음악',
    creator: {
      _id: '00000003cde97711649b8334',
      name: '조민지',
      thumbnailUrl: 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png',
    },
    ownerId: '5df76a73ba3a799eac61ca54',
    numOfComments: 0,
    views: 0,
    createdAt: '2019-12-16T11:28:51.927Z',
    updatedAt: '2019-12-16T11:28:51.927Z',
  },
  {
    _id: '5df76b8c2ed477abb754126e',
    imageUrl: 'http://roebskkcmsoo3088464.cdn.ntruss.com/musicCovers/da7d779f-85c9-436f-b324-f5855ee9604b.png?type=w&w=200&quality=90',
    musicUrl: 'https://kr.object.ncloudstorage.com/crafolio-test-upload/musics/57ef9f40-3cb5-49a8-9aee-d6357a13fb54.mp3',
    title: '11111111111111111111',
    creator: {
      _id: '00000003cde97711649b8334',
      name: '조민지',
      thumbnailUrl: 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png',
    },
    ownerId: '5df76b8c2ed477abb754126d',
    numOfComments: 0,
    views: 0,
    createdAt: '2019-12-16T11:33:32.963Z',
    updatedAt: '2019-12-16T11:33:32.963Z',
  },
  {
    _id: '5df7737480b02bb048363693',
    imageUrl: 'http://roebskkcmsoo3088464.cdn.ntruss.com/musicCovers/1a8ab47c-df7f-42de-add1-02baec98abb5.png?type=w&w=200&quality=90',
    musicUrl: 'https://kr.object.ncloudstorage.com/crafolio-test-upload/musics/16a70c16-4859-41e8-a1da-77844a9fcd60.mp3',
    title: 'dfg',
    creator: {
      _id: '00000003cde97711649b8334',
      name: '조민지',
      thumbnailUrl: 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png',
    },
    ownerId: '5df7737480b02bb048363692',
    numOfComments: 0,
    views: 0,
    createdAt: '2019-12-16T12:07:16.149Z',
    updatedAt: '2019-12-16T12:07:16.149Z',
  },
  ];
  return (
    <S.Container>
      {
        dd.map(({
          _id, imageUrl, musicUrl, title, creator, ownerId, numOfComments, views, createdAt, updatedAt,
        }) => (
          <MusicCard
            key={getShortId()}
            _id={_id}
            imageUrl={imageUrl}
            musicUrl={musicUrl}
            title={title}
            creator={creator}
            ownerId={ownerId}
            numOfComments={numOfComments}
            views={views}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        ))
      }

    </S.Container>
  );
};

export default FeedMusics;

import React from 'react';
import { CircularProgress } from '@material-ui/core';
import * as S from './styles';
import { IMusic2 } from './types';
import MusicCard from '../Card/MusicCard';
import { getShortId } from '../../utils';

type FeedMusicsProps = {
  data: IMusic2[];
  isLoading: boolean;
};

const FeedMusics: React.FC<FeedMusicsProps> = ({
  data, isLoading,
}) => (
  <S.Container>
    <S.FeedWrapper>
      {
        data.map(({
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
    </S.FeedWrapper>

    <S.Progress>
      {isLoading && <CircularProgress color="inherit" />}
    </S.Progress>
  </S.Container>
);

export default FeedMusics;

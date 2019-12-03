import React, { useEffect, useState } from 'react';

import * as S from './styles';
import MusicPlayer from '../MusicPlayer';

interface MusicDetailProp {
    title: string;
    author: string;
    date: string;
    views: number;
    plays: number;
    genres: string[];
    moods: string[];
    instruments: string[];
    coverUrl: string;
    musicUrl: string;
  }

const MusicDetail: React.FC<MusicDetailProp> = ({
  title, author, date, views, plays, genres, moods, instruments, coverUrl, musicUrl,
}) => (
  <S.Container>
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <h4>{`by ${author} | ${date} | 조회 ${views}`}</h4>
    </S.Header>

    <MusicPlayer
      title={title}
      author={author}
      coverUrl={coverUrl}
      musicUrl={musicUrl}
    />

    <S.PlayerFooter>
      <S.FooterAudioList>
        <S.FooterDl>
          <S.FooterDt>감상</S.FooterDt>
          <S.FooterDd>{`${plays}회`}</S.FooterDd>
        </S.FooterDl>
        <S.FooterDl>
          <S.FooterDt>장르</S.FooterDt>
          <S.FooterDd>{genres.join(',')}</S.FooterDd>
        </S.FooterDl>
        <S.FooterDl>
          <S.FooterDt>무드</S.FooterDt>
          <S.FooterDd>{moods.join(',')}</S.FooterDd>
        </S.FooterDl>
        <S.FooterDl>
          <S.FooterDt>악기</S.FooterDt>
          <S.FooterDd>{instruments.join(',')}</S.FooterDd>
        </S.FooterDl>
      </S.FooterAudioList>
    </S.PlayerFooter>
  </S.Container>
);

export default MusicDetail;

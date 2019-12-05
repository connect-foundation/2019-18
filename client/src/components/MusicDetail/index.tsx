import React from 'react';

import * as S from './styles';
import MusicPlayer from '../MusicPlayer';
import MusicDetailProp from './types';

const MusicDetail: React.FC<MusicDetailProp> = ({
  title, author, date, views, plays, genres, moods, instruments, coverUrl, musicUrl,
}) => (
  <S.Container>
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderMeta>
        <span>by</span>
        &nbsp;
        <S.Strong>{author}</S.Strong>
        &nbsp;
        <span>{`| ${date} | 조회 ${views}`}</span>
      </S.HeaderMeta>
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

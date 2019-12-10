import React from 'react';
import * as S from './styles';
import PlayerFooterProp from './types';

const PlayerFooter:React.FC<PlayerFooterProp> = ({
  view,
  genres,
  moods,
  instruments,
}) => (
  <S.Container>
    <S.FooterAudioList>
      <S.FooterDl>
        <S.FooterDt>감상</S.FooterDt>
        <S.FooterDd>{`${view}회`}</S.FooterDd>
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
  </S.Container>
);

export default PlayerFooter;

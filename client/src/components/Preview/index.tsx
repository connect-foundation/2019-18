import React from 'react';
import * as S from './style';

type PreviewProps ={
    src: string
}
function Preview({
  src,
}: PreviewProps) {
  return (
    <S.Box>
      <S.Img src={src} alt="preview_image" />
    </S.Box>
  );
}

export default Preview;

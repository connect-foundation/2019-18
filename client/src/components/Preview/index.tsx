import React from 'react';

import * as S from './styles';

type PreviewProps ={
    src: string
}

function Preview({
  src,
}: PreviewProps) {
  return (
    <S.Box className="Preview-container">
      <S.Img src={src} alt="preview_image" />
    </S.Box>
  );
}

export default Preview;

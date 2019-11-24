import React from 'react';
import * as S from './style';

type BasicboxProps = {
    name: string,
}

function Basicbox({
  name,
}: BasicboxProps) {
  return (
    <S.Box className="Basicbox">
      <S.Button type="button">{name}</S.Button>
    </S.Box>
  );
}

export default Basicbox;

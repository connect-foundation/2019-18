import React from 'react';

import * as S from './styles';

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

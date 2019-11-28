import React, { useState } from 'react';
import Heart from '../../svgs/Heart';
import * as S from './styles';
import { theme } from '../../style/theme';

interface Props{
    initCount: number;
}
const Like:React.FC<Props> = ({ initCount }) => {
  const [count, setCount] = useState(initCount);

  const onClickHandler = () => {
    if (count === initCount) {
      setCount(initCount + 1);
    } else {
      setCount(initCount);
    }
  };

  return (
    <S.Container onClick={onClickHandler}>
      <Heart color={theme.CHI_CONG} width="1rem" />
      &nbsp;
      {count}
    </S.Container>
  );
};


export default Like;

import React from 'react';
import * as S from './style';

type PurpleButtonProps = {
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    buttonText: string,
}
function PurpleButton({
  clickHandler,
  buttonText,
}: PurpleButtonProps) {
  return (
    <S.Button type="button" onClick={clickHandler}>{buttonText}</S.Button>
  );
}

export default PurpleButton;

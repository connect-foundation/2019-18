import React from 'react';
import * as S from './style';
import PurpleButton from '../../basics/PURPLE_Button';

type PopupProps ={
  text: string,
  closePopup: (e: React.MouseEvent<HTMLButtonElement>)=>void;
}

function Popup({
  text,
  closePopup,
}: PopupProps) {
  return (
    <S.Box>
      <S.Inner>
        <label htmlFor="text">{text}</label>
        <PurpleButton clickHandler={closePopup} buttonText="확인" />
      </S.Inner>
    </S.Box>
  );
}

export default Popup;

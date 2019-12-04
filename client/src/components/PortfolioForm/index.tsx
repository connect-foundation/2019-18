import React from 'react';
import * as S from './style';
import TextInput from '../../basics/Input/TextInput';

const PortfolioForm = () => (
  <S.PortfolioForm>
    <S.InputContainer>
      <S.InputArea>
        <S.InputTitle>한 줄 소개</S.InputTitle>
        <S.InputTextArea>
          <TextInput placeholder="한줄소개" />
        </S.InputTextArea>
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>활동 분야</S.InputTitle>
        <S.InputSelectArea>
          <S.SelectedValue>활동 분야를 선택해주세요.(최대 2개)</S.SelectedValue>
          <S.BelowTriangle></S.BelowTriangle>
        </S.InputSelectArea>
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>상세 소개</S.InputTitle>
        <S.LongInputTextArea>
          <TextInput placeholder="상세 소개입니다" />
        </S.LongInputTextArea>
      </S.InputArea>
    </S.InputContainer>
  </S.PortfolioForm>
);
export default PortfolioForm;

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { fieldoptions } from '../../utils/constants';

import * as S from './style';
import TextInput from '../../basics/Input/TextInput';

const makeFieldSelects = (value:string, label:string) => (
  <FormControlLabel
    control={
      <Checkbox checked={false} onChange={alert} value={value} />
      }
    label={label}
  />
);


const PortfolioForm = () => (
  <S.PortfolioForm>
    <S.InputContainer>
      <S.InputArea>
        <S.InputTitle>한 줄 소개</S.InputTitle>
        <S.InputTextArea>
          <TextInput placeholder="한줄소개" />
        </S.InputTextArea>
      </S.InputArea>
      <S.SelectionArea>
        <S.InputTitle>활동 분야</S.InputTitle>
        <S.InputSelectArea>
          <S.SelectedValue>활동 분야를 선택해주세요.(최대 2개)</S.SelectedValue>
          <S.BelowTriangle></S.BelowTriangle>
        </S.InputSelectArea>
      </S.SelectionArea>
      <S.SelectionArea>
        <S.InputTitle></S.InputTitle>
        <S.InputOptionsArea>
          {(fieldoptions.map((option) => makeFieldSelects(option.value, option.label)))}
        </S.InputOptionsArea>
      </S.SelectionArea>
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

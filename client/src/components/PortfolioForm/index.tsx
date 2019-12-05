import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './style';
import TextInput from '../../basics/Input/TextInput';

interface PortfolioProp{
    introSimple: string;
    introDetail: string;
    showOption: boolean;
    onChangeintroSimple :(e: React.ChangeEvent<HTMLTextAreaElement>)=> void;
    onChangeintroDetail :(e: React.ChangeEvent<HTMLTextAreaElement>)=> void;
    onClickShowOption : (e: React.MouseEvent<HTMLDivElement>)=>void;
    onChangeActiveFields:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit:(e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel:(e: React.MouseEvent<HTMLButtonElement>) => void;
    activeField: any;
}


const PortfolioForm:React.FC<PortfolioProp> = (
  {
    introSimple, introDetail, showOption, onChangeintroSimple, onChangeintroDetail, onClickShowOption,
    onChangeActiveFields, activeField, onSubmit, onCancel,
  },
) => {
  const makeFieldSelects = (value:string, label:string, checked:boolean) => (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChangeActiveFields} value={value} />
            }
      label={label}
    />
  );
  const fieldString = activeField.filter((option:any) => option.checked)
    .map((option:any) => option.value).join(', ');
  return (
    <S.PortfolioForm>
      <S.InputArea>
        <S.InputTitle>한 줄 소개</S.InputTitle>
        <S.InputTextArea>
          <TextInput placeholder="한줄소개" value={introSimple} onChange={onChangeintroSimple} />
        </S.InputTextArea>
      </S.InputArea>
      <S.SelectionArea>
        <S.InputTitle>활동 분야</S.InputTitle>
        <S.InputSelectArea onClick={onClickShowOption}>
          <S.SelectedValue>
            { (fieldString === '') ? '활동 분야를 선택해주세요.(최대 2개)' : fieldString}
          </S.SelectedValue>
          <S.BelowTriangle></S.BelowTriangle>
        </S.InputSelectArea>
      </S.SelectionArea>
      {showOption
    && (
    <S.SelectionArea>
      <S.InputTitle></S.InputTitle>
      <S.InputOptionsArea>
        {(activeField.map((option:any) => makeFieldSelects(option.value, option.label, option.checked)))}
      </S.InputOptionsArea>
    </S.SelectionArea>
    )}
      <S.InputArea>
        <S.InputTitle>상세 소개</S.InputTitle>
        <S.LongInputTextArea>
          <TextInput placeholder="상세 소개입니다" value={introDetail} onChange={onChangeintroDetail} />
        </S.LongInputTextArea>
      </S.InputArea>
      <S.InputButtonArea>
        <S.InputTitle></S.InputTitle>
        <S.GreenSubmitButton onClick={onSubmit}>제출</S.GreenSubmitButton>
        <S.RedSubmitButton onClick={onCancel}>취소</S.RedSubmitButton>
      </S.InputButtonArea>
    </S.PortfolioForm>

  );
};
export default PortfolioForm;

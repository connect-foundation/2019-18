import React, { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Redirect } from 'react-router-dom';
import * as S from './style';
import TextInput from '../../basics/Input/TextInput';
import { PortfolioProp } from './types';
import Preview from '../Preview';

const PortfolioForm:React.FC<PortfolioProp> = (
  {
    canRedirect, previewImage, onImageUrlChangeHandler, introSimple, introDetail, showOption, onChangeintroSimple, onChangeintroDetail, onClickShowOption,
    onChangeActiveFields, activeFields, onSubmit, onCancel,
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
  const fieldString = activeFields.filter((option:any) => option.checked)
    .map((option:any) => option.value).join(', ');

  const redirectHandler = () => {
    if (canRedirect) {
      return <Redirect to="/creator" />;
    }
  };
  useEffect(() => {

  }, [previewImage]);

  return (

    <S.PortfolioForm>
      {redirectHandler()}
      <S.InputArea>
        <S.InputTitle>프로필 사진</S.InputTitle>
        <S.Preview>
          <Preview src={previewImage.preview} />
          <label htmlFor="image" className="sc-daURTG dBDRlb">
            <input type="file" id="image" accept="image/*" onChange={onImageUrlChangeHandler} />
          </label>
        </S.Preview>
      </S.InputArea>
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
        {(activeFields.map((option:any) => makeFieldSelects(option.value, option.label, option.checked)))}
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
        <S.GreenEmptyButton onClick={onSubmit}>제출</S.GreenEmptyButton>
        <S.RedEmptyButton onClick={onCancel}>취소</S.RedEmptyButton>
      </S.InputButtonArea>
    </S.PortfolioForm>
  );
};
export default PortfolioForm;

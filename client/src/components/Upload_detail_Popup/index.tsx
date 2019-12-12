import React, { useState, useRef } from 'react';
import Select from 'react-select';

import * as S from './style';
import PurpleButton from '../../basics/PURPLE_Button';
import {
  PopupProps, ValueType, OptionType,
} from './type';
import { fieldoptions, ccloptions } from '../../utils/constants';
import PopupWarn from '../../commons/Popup_warn';

function PopupDetail({
  text,
  cancleHandler,
  aproveHandler,
  setDetailInfo,
}: PopupProps) {
  const [field, setField] = useState('');
  const [ccl, setCcl] = useState('');
  const [ispublic, setIspublic] = useState(true);
  const [canComments, setCanComments] = useState(true);
  const [showPopupWARN, setShowPopupWARN] = useState<boolean>(false);
  const msg = useRef('분야는 필수 입력사항 입니다.');

  const selectHandlerField = (selectedOption: ValueType<OptionType>) => {
    const { value } = selectedOption as OptionType;
    setField(value);
  };

  const selectHandlerCcl = (selectedOption: ValueType<OptionType>) => {
    const { value } = selectedOption as OptionType;
    setCcl(value);
  };

  const radioHandlerComments = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCanComments(value === 'Y');
  };

  const radioHandlerIspublic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIspublic(value === 'Y');
  };

  const composeAddtionalInfo = async () => {
    if (field.length === 0) {
      setShowPopupWARN(true);
      return;
    }
    if (ccl.length === 0) {
      msg.current = 'CCL라이선스 은 필수 입력사항 입니다.';
      setShowPopupWARN(true);
      return;
    }
    const obj = {
      field,
      ccl,
      public: ispublic,
      commentsAllow: canComments,
    };
    await setDetailInfo(obj);
    await aproveHandler();
  };


  const togglePopup = () => {
    setShowPopupWARN(false);
  };

  return (
    <S.Box>
      <S.Inner>
        <label htmlFor="text">{text}</label>
        <S.SelectBox>
          <span>분야</span>
          <Select
            options={fieldoptions}
            onChange={selectHandlerField}
            placeholder="작품 분야를 선택해 주세요."

          />
          <span>CCL라이선스</span>
          <Select
            options={ccloptions}
            onChange={selectHandlerCcl}
            placeholder="CCL라이선스를 선택해 주세요."
          />
          <span>댓글</span>
          <S.Radios>
            <label htmlFor="comment">
              <input type="radio" name="comments" value="Y" checked onChange={radioHandlerComments} />
              허용
            </label>
            <label htmlFor="comment">
              <input type="radio" name="comments" value="N" onChange={radioHandlerComments} />
              비허용
            </label>
          </S.Radios>
          <span>공개설정</span>
          <S.Radios>
            <label htmlFor="is1">
              <input type="radio" name="ispublic" value="Y" checked onChange={radioHandlerIspublic} />
              공개
            </label>
            <label htmlFor="is2">
              <input type="radio" name="ispublic" value="N" onChange={radioHandlerIspublic} />
              비공개
            </label>
          </S.Radios>
        </S.SelectBox>
        <S.Buttons>
          <PurpleButton clickHandler={cancleHandler} buttonText="취소" />
          <PurpleButton clickHandler={composeAddtionalInfo} buttonText="확인" />
        </S.Buttons>
      </S.Inner>
      {showPopupWARN && <PopupWarn text={msg.current} closePopup={togglePopup} />}
    </S.Box>
  );
}

export default PopupDetail;

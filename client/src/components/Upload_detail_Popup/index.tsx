import React, { useState, useRef } from 'react';
import Select from 'react-select';
import * as S from './style';
import PurpleButton from '../../basics/PURPLE_Button';
import {
  PopupProps, ValueType, OptionType,
} from './type';
import { fieldoptions, ccloptions, UPLOAD_POPUP_MSG } from '../../utils/constants';
import {
  CheckStringLength, imageUploadDetailFieldChecker, imageUploadDetailCclChecker,
} from '../../utils/check';

function PopupDetail({
  text,
  field,
  ccl,
  cancleHandler,
  aproveHandler,
  setField,
  setCcl,
  setIspublic,
  setCanComments,
}: PopupProps) {
  const [showPopupWARN, setShowPopupWARN] = useState<boolean>(false);
  const msg = useRef(UPLOAD_POPUP_MSG.feildWarn);
  const fieldLengthChecker = CheckStringLength(imageUploadDetailFieldChecker);
  const cclLengthChecker = CheckStringLength(imageUploadDetailCclChecker);

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
    if (!fieldLengthChecker(field)) {
      return;
    }
    if (!cclLengthChecker(ccl)) {
      return;
    }
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
            placeholder={UPLOAD_POPUP_MSG.feildWarn}

          />
          <span>CCL라이선스</span>
          <Select
            options={ccloptions}
            onChange={selectHandlerCcl}
            placeholder={UPLOAD_POPUP_MSG.cclPlaceHolder}
          />
          <span>댓글</span>
          <S.Radios>
            <label htmlFor="comment_Y">
              <input type="radio" id="comment_Y" name="comments" value="Y" checked onChange={radioHandlerComments} />
              허용
            </label>
            <label htmlFor="comment_N">
              <input type="radio" id="comment_N" name="comments" value="N" onChange={radioHandlerComments} />
              비허용
            </label>
          </S.Radios>
          <span>공개설정</span>
          <S.Radios>
            <label htmlFor="public_Y">
              <input type="radio" id="public_Y" name="ispublic" value="Y" checked onChange={radioHandlerIspublic} />
              공개
            </label>
            <label htmlFor="public_N">
              <input type="radio" id="public_N" name="ispublic" value="N" onChange={radioHandlerIspublic} />
              비공개
            </label>
          </S.Radios>
        </S.SelectBox>
        <S.Buttons>
          <PurpleButton clickHandler={cancleHandler} buttonText="취소" />
          <PurpleButton clickHandler={composeAddtionalInfo} buttonText="확인" />
        </S.Buttons>
      </S.Inner>
    </S.Box>
  );
}

export default PopupDetail;

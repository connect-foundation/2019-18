import React, { useState } from 'react';
import Select from 'react-select';

import * as S from './style';
import PurpleButton from '../../basics/PURPLE_Button';
import {
  PopupProps, ValueType, OptionType,
} from './type';
import { fieldoptions, ccloptions } from '../../utils/constants';

function Popup({
  text,
  cancleHandler,
  aproveHandler,
  setDetailInfo,
}: PopupProps) {
  const [field, setField] = useState('');
  const [ccl, setCcl] = useState('');
  const [ispublic, setIspublic] = useState(true);
  const [commentsAllow, setCommemtsAllow] = useState(true);

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
    if (value === 'Y') {
      setCommemtsAllow(true);
    } else {
      setCommemtsAllow(false);
    }
  };

  const radioHandlerIspublic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === 'Y') {
      setIspublic(true);
    } else {
      setIspublic(false);
    }
  };

  const composeAddtionalInfo = async () => {
    const obj = {
      field,
      ccl,
      public: ispublic,
      commentsAllow,
    };
    await setDetailInfo(obj);
    await aproveHandler();
  };

  return (
    <S.Box>
      <S.Inner>
        <label htmlFor="text">{text}</label>
        <S.SelectBox>
          {/** 분야와 CCL라이선스는 컴포넌트로 묶어서 관리할 수 있을 것 같습니다. */}
          {/* <span>분야</span>
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
          /> */}

        </S.SelectBox>
        <S.Buttons>
          <PurpleButton clickHandler={cancleHandler} buttonText="취소" />
          <PurpleButton clickHandler={composeAddtionalInfo} buttonText="확인" />
        </S.Buttons>
      </S.Inner>
    </S.Box>
  );
}

export default Popup;

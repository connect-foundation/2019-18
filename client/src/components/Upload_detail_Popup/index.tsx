import React, { useState } from 'react';
import Select from 'react-select';
import * as S from './style';
import PurpleButton from '../../basics/PURPLE_Button';

interface OptionType {
  label: string;
  value: string;
}
type OptionsType<OptionType> = ReadonlyArray<OptionType>;
type ValueType<OptionType> = OptionType | OptionsType<OptionType> | null | undefined;

const fieldoptions = [
  { value: '일러스트', label: '일러스트' },
  { value: '회화', label: '회화' },
  { value: '사진', label: '사진' },
  { value: '캘리그라피', label: '캘리그라피' },
  { value: '디자인', label: '디자인' },
];

const ccloptions = [
  { value: 'All', label: 'Copyright @ All Rights Reserved' },
  { value: 'CCBY', label: 'CC BY (저작자 표시)' },
  { value: 'CCBY-SA', label: 'CC BY-SA (저작자표시-동일조건변경허락)' },
  { value: 'CCBY-ND', label: 'CC BY-ND (저작자표시-변경금지)' },
  { value: 'CCBY-NC', label: 'CC BY-NC (저작자표시-비영리)' },
  { value: 'CCBY-NC-SA', label: 'CC BY-NC-SA (저작자표시-비영리-동일조건변경허락)' },
  { value: 'CCBY-NC-ND', label: 'CC BY-NC-ND (저작자표시-비영리-변경금지)' },
];

type PopupProps = {
  text: string,
  cancleHandler: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  aproveHandler: ()=>void;
  setDetailInfo: (arg0: DetailObject)=>void;
}

interface DetailObject {
  field: string,
  ccl: string,
  commentsAllow: boolean,
  public: boolean,
}

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
            <label htmlFor="is">
              <input type="radio" name="ispublic" value="Y" checked onChange={radioHandlerIspublic} />
              공개
            </label>
            <label htmlFor="is">
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
    </S.Box>
  );
}

export default Popup;

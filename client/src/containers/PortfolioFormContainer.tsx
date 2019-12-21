import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PortfolioForm from '../components/PortfolioForm';
import {
  fieldoptions, API_SERVER, UPLOAD, IMAGEFORMAT,
} from '../utils/constants';
import { RootState } from '../modules';
import PopupWarn from '../commons/Popup_warn';
import { getShortId, getFileUrl } from '../utils';
import {
  Axios, UPDATE_PROFILE_IMG,
} from '../utils/request';


interface imageObject {
  file: File | null,
  preview: string,
}

const S = {
  PortfolioFormContainer: styled.div`
    flex:1;
    width:100%;
    display: flex;
`,
};
const makeFirstStates = () => fieldoptions.map((option) => ({ ...option, checked: false }));

const PortfolioFormContainer:React.FC = () => {
  const [introSimple, setIntroSimple] = useState('');
  const [introDetail, setIntroDetail] = useState('');
  const [activeFields, setActiveFields] = useState(makeFirstStates);
  const [showOption, setShowOption] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(true);
  const [showPopupWARN, setShowPopupWARN] = useState(false);
  const [popupTEXT, setPopupTEXT] = useState('');
  const email = useSelector((state:RootState) => state.login.email);
  const originUrl = useSelector((state:RootState) => state.login.originUrl);
  const [previewImage, setPreviewImage] = useState<imageObject>({ file: null, preview: originUrl });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API_SERVER}/profile`, {
        method: 'get',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseJson = await response.json();
      if (!responseJson.success) {
        return null;
      }
      return responseJson.data;
    };
    const setForm = (result:any) => {
      if (!result) {
        return;
      }
      setIntroSimple(result.introSimple);
      setIntroDetail(result.introDetail);
      setActiveFields(activeFields.map((option) => {
        if (result.activeFields.includes(option.value)) { return { ...option, checked: true }; }
        return option;
      }));
    };
    setShowOption(false);
    getData().then((result) => setForm(result.profile));
    setSubmitSuccess(false);
  }, [submitSuccess, setSubmitSuccess]);


  const onImageUrlChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (!target) {
      return;
    }
    const { files } = target;
    const file = files![0];
    const preview = getFileUrl(file);
    setPreviewImage({ file, preview });
  });

  const onSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    const submitData = async () => {
      const formdata = new FormData();
      let format:string;
      const { file } = previewImage;
      if (file !== null && file.type === IMAGEFORMAT.JPEG) {
        format = IMAGEFORMAT._JPG;
        formdata.append(UPLOAD.MULTER_KEY, file, `profileImage${format}`);
      } else if (file !== null) {
        format = IMAGEFORMAT._PNG;
        formdata.append(UPLOAD.MULTER_KEY, file, `profileImage${format}`);
      }
      const reqConfig = UPDATE_PROFILE_IMG(formdata);
      await Axios(reqConfig);

      const params = {
        email,
        introSimple,
        introDetail,
        activeFields: activeFields.filter((option:any) => option.checked).map((option:any) => option.value),
      };
      const response = await fetch(`${API_SERVER}/profile`, {
        method: 'post',
        body: JSON.stringify(params),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseJson = await response.json();
      if (!responseJson.success) {
        setPopupTEXT('변경되지 않았습니다.');
        setShowPopupWARN(true);
        return null;
      }
      setPopupTEXT('성공적으로 제출되었습니다.');
      setShowPopupWARN(true);
      return setSubmitSuccess(true);
    };
    setShowOption(false);
    submitData();
  };
  const onCancel = (e:React.MouseEvent<HTMLButtonElement>) => {
    setSubmitSuccess(true);
  };
  const onChangeintroSimple = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroSimple(e.target.value);
  };
  const onChangeintroDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroDetail(e.target.value);
  };
  const onClickShowOption = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowOption(!showOption);
  };
  const countSelectedFields = () => activeFields.filter((option) => option.checked).length;
  const onChangeActiveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && (countSelectedFields() >= 2)) {
      return;
    }
    setActiveFields(activeFields.map((option:any) => {
      if (option.value === e.target.value) {
        return { ...option, checked: e.target.checked };
      }
      return { ...option };
    }));
  };
  const togglePopup = () => {
    setShowPopupWARN(false);
  };
  return (
    <S.PortfolioFormContainer>
      <PortfolioForm
        previewImage={previewImage}
        onImageUrlChangeHandler={onImageUrlChangeHandler}
        introSimple={introSimple}
        introDetail={introDetail}
        showOption={showOption}
        activeFields={activeFields}
        onChangeActiveFields={onChangeActiveFields}
        onChangeintroSimple={onChangeintroSimple}
        onChangeintroDetail={onChangeintroDetail}
        onClickShowOption={onClickShowOption}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
      {showPopupWARN && <PopupWarn text={popupTEXT} closePopup={togglePopup} />}
    </S.PortfolioFormContainer>
  );
};

export default PortfolioFormContainer;

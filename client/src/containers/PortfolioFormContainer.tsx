import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { optionCSS } from 'react-select/src/components/Option';
import PortfolioForm from '../components/PortfolioForm';
import { theme } from '../style/theme';
import { fieldoptions, API_SERVER } from '../utils/constants';

const S = {
  PortfolioFormContainer: styled.div`
    width:100%;
    display: flex;
    background-color: ${theme.WARN_GRAY};
`,
};
const makeFirstStates = () => fieldoptions.map((option) => ({ ...option, checked: false }));


const PortfolioFormContainer:React.FC = () => {
  const [introSimple, setIntroSimple] = useState('');
  const [introDetail, setIntroDetail] = useState('');
  const [activeField, setActiveFields] = useState(makeFirstStates);
  const [showOption, setShowOption] = useState(false);
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
      setActiveFields(activeField.map((option) => {
        if (result.activeFields.includes(option.value)) { return { ...option, checked: true }; }
        return option;
      }));
    };
    getData().then((result) => setForm(result));
  }, []);

  const onChangeintroSimple = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroSimple(e.target.value);
  };
  const onChangeintroDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroDetail(e.target.value);
  };
  const onClickShowOption = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowOption(!showOption);
  };
  const countSelectedFields = () => activeField.filter((option) => option.checked).length;
  const onChangeActiveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && (countSelectedFields() >= 2)) {
      return;
    }
    setActiveFields(activeField.map((option:any) => {
      if (option.value === e.target.value) {
        return { ...option, checked: e.target.checked };
      }
      return { ...option };
    }));
  };
  return (
    <S.PortfolioFormContainer>
      <PortfolioForm
        introSimple={introSimple}
        introDetail={introDetail}
        showOption={showOption}
        activeField={activeField}
        onChangeActiveFields={onChangeActiveFields}
        onChangeintroSimple={onChangeintroSimple}
        onChangeintroDetail={onChangeintroDetail}
        onClickShowOption={onClickShowOption}
      />
    </S.PortfolioFormContainer>
  );
};

export default PortfolioFormContainer;

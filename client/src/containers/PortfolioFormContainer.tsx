import React, { useState } from 'react';
import styled from 'styled-components';
import PortfolioForm from '../components/PortfolioForm';
import { theme } from '../style/theme';
import { fieldoptions } from '../utils/constants';

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

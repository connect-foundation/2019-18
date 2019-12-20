import React from 'react';

import * as S from './styles';

interface ToolBoxProp {
  MusicFileChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
  TextButtonOnCLickHandler: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined,
}
const ToolBox: React.FC<ToolBoxProp> = ({
  MusicFileChangeHandler,
  TextButtonOnCLickHandler,
}) => (
  <S.Container>
    <S.ToolButton>
      <S.Label htmlFor="musicfile">
        <S.VolumeUpIcon fontSize="large" />
      </S.Label>
      <S.Input type="file" id="musicfile" accept="audio/*" onChange={MusicFileChangeHandler} />
    </S.ToolButton>
    <S.ToolButton onClick={TextButtonOnCLickHandler}>
      <S.TextFieldsIcon fontSize="large" />
    </S.ToolButton>
  </S.Container>
);

export default ToolBox;

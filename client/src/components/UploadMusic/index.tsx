import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import shortId from 'shortid';
import 'react-quill/dist/quill.snow.css';
import MusicUploader from './MusicUploader';
import * as S from './styles';
import ToolBox from './ToolBox';

import {
  IMusic,
  IDocu,
} from './types';

interface UploadMusicProp {
  title: string;
  docus: IDocu[],
  titleChangeHandler: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void,
  genresChangeHandler: (key: string) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,
  moodsChangeHandler: (key: string) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,
  instrumentsChangeHandler: (key: string) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,
  imageUrlChangeHandler: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void,
  MusicFileChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  TextButtonOnCLickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  UploadClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>,
  quillOnChangeHandler: (curDocu: IDocu) => (text: string) => void,
}
const UploadMusic:React.FC<UploadMusicProp> = ({
  title,
  docus,
  titleChangeHandler,
  genresChangeHandler,
  moodsChangeHandler,
  instrumentsChangeHandler,
  imageUrlChangeHandler,
  onChangeTitle,
  MusicFileChangeHandler,
  TextButtonOnCLickHandler,
  UploadClickHandler,
  quillOnChangeHandler,
}) => {
  const makeDescription = (el: IDocu) => (
    <S.ContentWrapper key={el.key}>
      <ReactQuill
        value={el.content as string}
        onChange={quillOnChangeHandler(el)}
      />
    </S.ContentWrapper>
  );

  const makeMusic = (el: IDocu) => {
    const music = el.content as IMusic;
    return (
      <S.ContentWrapper key={el.key}>
        <MusicUploader
          docuKey={el.key}
          content={music}
          titleChangeHandler={titleChangeHandler}
          genresChangeHandler={genresChangeHandler}
          moodsChangeHandler={moodsChangeHandler}
          instrumentsChangeHandler={instrumentsChangeHandler}
          imageUrlChangeHanldler={imageUrlChangeHandler}
        />
      </S.ContentWrapper>
    );
  };

  const makeContent = (docu: IDocu) => {
    if (docu.type === 'description') {
      return makeDescription(docu);
    }
    return makeMusic(docu);
  };

  return (
    <S.Container>
      <S.TitleInput
        type="text"
        name="title"
        onChange={onChangeTitle}
        value={title}
        placeholder="제목을 입력해 주세요."
      />

      {
        docus.map((docu:IDocu) => makeContent(docu))
      }

      <ToolBox
        MusicFileChangeHandler={MusicFileChangeHandler}
        TextButtonOnCLickHandler={TextButtonOnCLickHandler}
      />
      <S.UploadButton onClick={UploadClickHandler}>업로드</S.UploadButton>
    </S.Container>

  );
};

export default UploadMusic;

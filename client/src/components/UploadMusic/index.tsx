import React, { useState, useEffect, ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import shortId from 'shortid';
// import MusicPlayer from '../MusicPlayer';
import * as S from './styles';
import 'react-quill/dist/quill.snow.css';
import { getShortId } from '../../utils';
import MusicUploader from './MusicUploader';

import {
  IMusic,
  IDocu,
} from './types';

const docuinit:IDocu[] = [
  {
    key: getShortId(),
    type: 'description',
    content: '',
  },
  {
    key: getShortId(),
    type: 'description',
    content: '',
  },
  {
    key: getShortId(),
    type: 'music',
    content: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
  },
  // {
  //   key: getShortId(),
  //   type: 'music',
  //   content: {
  //     title: 'this is title',
  //     author: 'this is author',
  //     coverUrl: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg',
  //     musicUrl: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
  //   },
  // },
];


const UploadMusic = () => {
  const [title, setTitle] = useState('');
  const [docu, setDocu] = useState(docuinit);


  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const ImageButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  };

  const MusicButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('hi');
  };

  const getFileUrl = (file: any) => window.URL.createObjectURL(file);

  const MusicFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target) {
      return;
    }
    const { files } = target!;
    const file = files![0];
    const url = getFileUrl(file);
    addMusicToDocu(url);
  };

  const addMusicToDocu = (url: string) => {
    setDocu([
      ...docu,
      {
        key: getShortId(),
        type: 'music',
        content: url,
      },
    ]);
  };

  const TextButtonOnCLickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDocu([
      ...docu,
      {
        key: shortId.generate(),
        type: 'description',
        content: '',
      },
    ]);
  };
  const makeDescription = (el: IDocu) => (
    <S.ContentWrapper key={el.key}>
      <ReactQuill
        value={el.content as string}
        onChange={(text) => {
          el.content = text;
          setDocu(docu.map((d) => {
            if (d.key === el.key) {
              return {
                ...el,
                content: text,
              };
            }
            return d;
          }));
        }}
      />
    </S.ContentWrapper>
  );

  const makeMusic = (el: IDocu) => {
    const content = el.content as string;
    return (
      <S.ContentWrapper key={el.key}>
        <MusicUploader musicUrl={content} />
      </S.ContentWrapper>
    );
  };

  const makeContent = (el: IDocu) => {
    if (el.type === 'description') {
      return makeDescription(el);
    }
    if (el.type === 'music') {
      return makeMusic(el);
    }
  };

  return (
    <S.Container>
      <S.TitleInput
        type="text"
        name="title"
        onChange={onChangetitle}
        value={title}
        placeholder="제목을 입력해 주세요."
      />

      {
        docu.map((el:IDocu) => makeContent(el))
      }

      <S.AddButtonList>
        <S.Button onClick={ImageButtonOnClickHandler}>
          <S.ImageIcon fontSize="large" />
        </S.Button>
        <S.Button onClick={MusicButtonOnClickHandler}>
          <S.Label htmlFor="musicfile">
            <S.VolumeUpIcon fontSize="large" />
          </S.Label>
          <S.Input type="file" id="musicfile" accept="audio/*" onChange={MusicFileChangeHandler} />
        </S.Button>
        <S.Button onClick={TextButtonOnCLickHandler}>
          <S.TextFieldsIcon fontSize="large" />
        </S.Button>
      </S.AddButtonList>

    </S.Container>

  );
};


export default UploadMusic;

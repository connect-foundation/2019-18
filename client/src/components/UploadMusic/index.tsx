import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill'; // Typescript
import ReactQuill from 'react-quill';
import shortId from 'shortid';
import MusicPlayer from '../MusicPlayer';
import * as S from './styles';
import 'react-quill/dist/quill.snow.css';

interface IMusic{
  title: string;
  author: string;
  musicUrl: string;
  coverUrl: string;
}

interface IDocu{
  key: string;
  type: string;
  content: string | IMusic;
}
const docuinit:IDocu[] = [
  {
    key: shortId.generate(),
    type: 'description',
    content: '',
  },
  {
    key: shortId.generate(),
    type: 'description',
    content: '',
  },
  {
    key: shortId.generate(),
    type: 'music',
    content: {
      title: 'this is title',
      author: 'this is author',
      coverUrl: 'https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg',
      musicUrl: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
    },
  },
];

const UploadMusic = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [editor, setEditor] = useState([]);
  const [docu, setDocu] = useState(docuinit);


  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const ImageButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('image');
  };

  const MusicButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('music');
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

  useEffect(() => {
    console.log(text);
  }, [text]);

  useEffect(() => {
    console.dir(docu);
  }, [docu]);

  return (
    <S.Container>
      <S.TitleInput
        type="text"
        name="title"
        onChange={onChangetitle}
        value={title}
        placeholder="제목을 입력해 주세요."
      />
      {/*
      <S.EditorWrapper>
        <ReactQuill />
      </S.EditorWrapper> */}

      {
        docu.map((el:IDocu) => {
          if (el.type === 'description') {
            return (
              <S.ContentWrapper key={el.key}>
                <ReactQuill
                  value={el.content as string}
                  onChange={(e) => {
                    el.content = e;
                    // console.log(docu);

                    // setDocu([
                    //   ...docu,
                    //   obj,
                    // ]);

                    setDocu(docu.map((d) => {
                      if (d.key === el.key) {
                        const obj = {
                          ...el,
                          content: e,
                        };
                        return obj;
                      }
                      return d;
                    }));
                  }}
                />
              </S.ContentWrapper>
            );
          }
          if (el.type === 'music') {
            const content = el.content as IMusic;
            return (
              <S.ContentWrapper key={el.key}>
                <MusicPlayer
                  title={content.title}
                  author={content.author}
                  musicUrl={content.musicUrl}
                  coverUrl={content.coverUrl}
                />
              </S.ContentWrapper>
            );
          }
        })
      }

      <S.AddButtonList>
        <S.Button onClick={ImageButtonOnClickHandler}>
          <S.ImageIcon fontSize="large" />
        </S.Button>
        <S.Button onClick={MusicButtonOnClickHandler}>
          <S.VolumeUpIcon fontSize="large" />
        </S.Button>
        <S.Button onClick={TextButtonOnCLickHandler}>
          <S.TextFieldsIcon fontSize="large" />
        </S.Button>
      </S.AddButtonList>
    </S.Container>

  );
};


export default UploadMusic;

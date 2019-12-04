import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill'; // Typescript
import ReactQuill from 'react-quill';
import * as S from './styles';
import 'react-quill/dist/quill.snow.css';
import shortId from 'shortid';

interface ITexts{
  text: string;
  setText: React.Dispatch<string>;
}

const docuinit = [
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
        docu.map((el) => {
          if (el.type === 'description') {
            return (
              <S.EditorWrapper key={el.key}>
                <ReactQuill
                  value={el.content}
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
              </S.EditorWrapper>
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

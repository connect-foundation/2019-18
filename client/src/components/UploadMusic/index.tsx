import React, { useState, useEffect, ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import shortId from 'shortid';
// import MusicPlayer from '../MusicPlayer';
import * as S from './styles';
import 'react-quill/dist/quill.snow.css';
import { getShortId, getFileUrl } from '../../utils';
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
    content: {
      musicUrl: 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3',
      imageUrl: '',
      title: '',
      genres: [],
      moods: [],
      instruments: [],
    },
  },
];

const UploadMusic:React.FC = () => {
  const [title, setTitle] = useState('');
  const [docus, setDocus] = useState<IDocu[]>(docuinit);

  const titleChangeHandler = (key: string) => (e:React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    const docuKey = key;
    setDocus(docus.map((docu) => {
      const content = docu.content as IMusic;
      if (docu.key === docuKey) {
        content.title = newTitle;
        return { ...docu, content };
      }
      return docu;
    }));
  };

  const genresChangeHandler = (key: string) => (e:React.MouseEvent<HTMLLIElement>) => {
    const newGenre = e.currentTarget.innerHTML;
    const docuKey = key;
    const newDocus = docus.map((docu) => {
      if (docu.key === docuKey) {
        const content = docu.content as IMusic;
        const { genres } = content;

        if (genres.indexOf(newGenre) !== -1) {
          const newGenres = genres.filter((genre) => genre !== newGenre);
          content.genres = newGenres;
        } else {
          if (content.genres.length > 4) {
            alert('최대 5개 선택 가능합니다.');
            return { ...docu, content };
          }
          content.genres = [...genres, newGenre];
        }

        return { ...docu, content };
      }
      return docu;
    });
    setDocus(newDocus);
  };

  const moodsChangeHandler = (key: string) => (e:React.MouseEvent<HTMLLIElement>) => {
    const newMood = e.currentTarget.innerHTML;
    const docuKey = key;
    const newDocus = docus.map((docu) => {
      if (docu.key === docuKey) {
        const content = docu.content as IMusic;
        const { moods } = content;

        if (moods.indexOf(newMood) !== -1) {
          const newMoods = moods.filter((mood) => mood !== newMood);
          content.moods = newMoods;
        } else {
          if (content.moods.length > 4) {
            alert('최대 5개 선택 가능합니다.');
            return { ...docu, content };
          }
          content.moods = [...moods, newMood];
        }
        return { ...docu, content };
      }
      return docu;
    });
    setDocus(newDocus);
  };

  const instrumentsChangeHandler = (key: string) => (e:React.MouseEvent<HTMLLIElement>) => {
    const newInstrument = e.currentTarget.innerHTML;
    const docuKey = key;
    const newDocus = docus.map((docu) => {
      if (docu.key === docuKey) {
        const content = docu.content as IMusic;
        const { instruments } = content;

        if (instruments.indexOf(newInstrument) !== -1) {
          const newInstruments = instruments.filter((instrument) => instrument !== newInstrument);
          content.instruments = newInstruments;
        } else {
          if (content.instruments.length > 4) {
            alert('최대 5개 선택 가능합니다.');
            return { ...docu, content };
          }
          content.instruments = [...instruments, newInstrument];
        }
        return { ...docu, content };
      }
      return docu;
    });
    setDocus(newDocus);
  };

  const imageUrlChangeHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const docuKey = key;
    const target = e.currentTarget;

    if (!target) {
      return;
    }
    const { files } = target;
    const file = files![0];
    const newImageUrl = getFileUrl(file);

    const newDocus = docus.map((docu) => {
      const content = docu.content as IMusic;
      if (docu.key === docuKey) {
        content.imageUrl = newImageUrl;
        return { ...docu, content };
      }
      return docu;
    });

    setDocus(newDocus);
    // setImageUrl(url);
  };

  useEffect(() => {
    console.log(docus);
  }, [docus]);

  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const ImageButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  };

  const MusicButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('hi');
  };


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
    const newMusic:IMusic = {
      musicUrl: url,
      imageUrl: '',
      title: '',
      genres: [],
      moods: [],
      instruments: [],
    };
    setDocus([
      ...docus,
      {
        key: getShortId(),
        type: 'music',
        content: newMusic,
      },
    ]);
  };

  const TextButtonOnCLickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDocus([
      ...docus,
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
          setDocus(docus.map((d) => {
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
    const music = el.content as IMusic;
    console.log(el);
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
        docus.map((el:IDocu) => makeContent(el))
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

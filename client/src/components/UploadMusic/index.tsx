import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import shortId from 'shortid';
import 'react-quill/dist/quill.snow.css';
import MusicUploader from './MusicUploader';

import { getShortId, getFileUrl } from '../../utils';
import * as S from './styles';

import {
  IMusic,
  IDocu,
} from './types';
import { API_SERVER } from '../../utils/constants';

const UploadMusic:React.FC = () => {
  const [title, setTitle] = useState('');
  const [docus, setDocus] = useState<IDocu[]>([]);

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
        content.imageFile = file;
        return { ...docu, content };
      }
      return docu;
    });

    setDocus(newDocus);
  };

  const onChangetitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const ImageButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  };

  const MusicButtonOnClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  };

  const MusicFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target) {
      return;
    }
    const { files } = target!;
    const file = files![0];
    const url = getFileUrl(file);

    addMusicToDocu(url, file);
  };

  const addMusicToDocu = (url: string, musicFile: File) => {
    const newMusic:IMusic = {
      musicUrl: url,
      imageUrl: '',
      title: '',
      genres: [],
      moods: [],
      instruments: [],
      musicFile,
      imageFile: null,
    };
    setDocus([
      ...docus,
      {
        key: getShortId(),
        type: 'musics',
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

  const makeFormData = () => {
    const formData = new FormData();

    docus.forEach((docu) => {
      if (docu.type === 'musics') {
        const music = docu.content as IMusic;
        const musicFile = music.musicFile as File;
        const imageFile = music.imageFile as File;
        const musicFileName = 'musics.mp3';
        const imageFileName = 'musicCovers.png';

        formData.append('multi-files', musicFile, musicFileName);
        formData.append('multi-files', imageFile, imageFileName);
      }
    });

    return formData;
  };

  const getMusicUrl = async () => {
    const formData = makeFormData();
    const { data } = await axios.post(`${API_SERVER}/upload/getImageUrl`, formData);
    const { objectStorageUrls } = data;
    return objectStorageUrls;
  };

  const UploadClickHandler = async (e:React.MouseEvent<HTMLButtonElement>) => {
    const urls = await getMusicUrl();
    const dbContent = docus.map((docu) => {
      if (docu.type === 'musics') {
        const music = docu.content as IMusic;
        const { musicFile, imageFile, ...contentData } = music;
        contentData.musicUrl = urls.shift();
        contentData.imageUrl = urls.shift();

        const body = {
          type: 'musics',
          content: contentData,
        };
        return body;
      } if (docu.type === 'description') {
        const contentData = docu.content as string;
        const body = {
          type: 'description',
          content: contentData,
        };
        return body;
      }
    });
    const data = {
      title,
      content: dbContent,
    };
    const response = await axios.post(`${API_SERVER}/upload/music`, data);
  };

  const makeDescription = (el: IDocu) => (
    <S.ContentWrapper key={el.key}>
      {/* <MyEditor /> */}
      <ReactQuill
        value={el.content as string}
        onChange={(text) => {
          el.content = text;
          setDocus(docus.map((docu) => {
            if (docu.key === el.key) {
              return {
                ...el,
                content: text,
              };
            }
            return docu;
          }));
        }}
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

  const makeContent = (el: IDocu) => {
    if (el.type === 'description') {
      return makeDescription(el);
    }
    if (el.type === 'musics') {
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

      <S.UploadButton onClick={UploadClickHandler}>업로드</S.UploadButton>
    </S.Container>

  );
};

export default UploadMusic;

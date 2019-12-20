import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router';
import { musicUploaderChecker, CheckObjLength } from '../utils/check';
import UploadMusic from '../components/UploadMusic';
import { getShortId, getFileUrl } from '../utils';
import { GET_IMAGE_URL, UPLOAD_MUSIC, Axios } from '../utils/request';

export interface IMusic {
  musicUrl:string;
  imageUrl:string;
  title: string;
  genres: string[];
  moods: string[];
  instruments: string[];
  musicFile: File | null;
  imageFile: File | null;
}

export interface IDocu{
  key: string;
  type: string;
  content: string | IMusic;
}

interface UploadMusicContainerProp{

}

const UploadMusicContainer:React.FC<UploadMusicContainerProp> = () => {
  const [title, setTitle] = useState('');
  const [docus, setDocus] = useState<IDocu[]>([]);
  const objLengthChecker = CheckObjLength(musicUploaderChecker);
  const [canRedirect, setCanRedirect] = useState(false);
  const workId = useRef('');
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
          if (!objLengthChecker(content.genres)) {
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
          if (!objLengthChecker(content.moods)) {
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
          if (!objLengthChecker(content.instruments)) {
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

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
        key: getShortId(),
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
    const reqConfig = GET_IMAGE_URL(formData);
    const { data } = await Axios(reqConfig);
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
    const reqConfig = UPLOAD_MUSIC(data);
    const response = await Axios(reqConfig);
    workId.current = response.data.data._id;
    setCanRedirect(true);
  };

  const quillOnChangeHandler = (curDocu:IDocu) => (text:string) => {
    setDocus(docus.map((docu) => {
      if (docu.key !== curDocu.key) {
        return docu;
      }
      return {
        ...docu,
        content: text,
      };
    }));
  };

  return (
    <>
      {
        canRedirect
          && <Redirect to={`/home/detail-music/${workId.current}`} />
      }
      <UploadMusic
        title={title}
        docus={docus}
        titleChangeHandler={titleChangeHandler}
        genresChangeHandler={genresChangeHandler}
        moodsChangeHandler={moodsChangeHandler}
        instrumentsChangeHandler={instrumentsChangeHandler}
        imageUrlChangeHandler={imageUrlChangeHandler}
        onChangeTitle={onChangeTitle}
        MusicFileChangeHandler={MusicFileChangeHandler}
        TextButtonOnCLickHandler={TextButtonOnCLickHandler}
        UploadClickHandler={UploadClickHandler}
        quillOnChangeHandler={quillOnChangeHandler}
      />
    </>
  );
};

export default UploadMusicContainer;

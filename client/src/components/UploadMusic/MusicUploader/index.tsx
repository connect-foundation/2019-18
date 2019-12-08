import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Modal from '../Modal';
import { UploadSelection } from '../../../utils/constants';
import MusicPlayerMini from '../../MusicPlayerMini';
import { getFileUrl } from '../../../utils';
import { IMusic } from '../types';

const initData2 = [
  '123', '234', '345',
];
interface MusicUploaderProp{
  docuKey: string;
  content: IMusic;
  titleChangeHandler: (key:string)=>(e: React.ChangeEvent<HTMLInputElement>) => void;
  genresChangeHandler: (key:string)=>(e: React.MouseEvent<HTMLLIElement>) => void;
  moodsChangeHandler: (key: string) => (e: React.MouseEvent<HTMLLIElement>) => void;
  instrumentsChangeHandler: (key: string) => (e:React.MouseEvent<HTMLLIElement>) => void;
}

const MusicUploader:React.FC<MusicUploaderProp> = ({
  docuKey,
  content,
  titleChangeHandler,
  genresChangeHandler,
  moodsChangeHandler,
  instrumentsChangeHandler,
}) => {
  const [imageUrl, setImageUrl] = useState();
  const [title, setTitle] = useState<string>();
  const [genres, setGenres] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [instruments, setInstruments] = useState<string[]>([]);

  const [isGenresModalOpen, setIsGenresModalopen] = useState(false);
  const [isMoodsModalOpen, setIsMoodsModalOpen] = useState(false);
  const [isInstrumentsModalOpen, setIsInstrumentsModalOpen] = useState(false);

  console.log(`받은 키 : ${docuKey}`);
  console.log(content);
  const onTitleChangeHandler = titleChangeHandler(docuKey);
  const onGenresChangeHandler = genresChangeHandler(docuKey);
  const onMoodsChangeHandler = moodsChangeHandler(docuKey);
  const onInstrumentsChangeHandler = instrumentsChangeHandler(docuKey);

  const genresModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsGenresModalopen(!isGenresModalOpen);
  };

  const moodsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsMoodsModalOpen(!isMoodsModalOpen);
  };

  const instrumentsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsInstrumentsModalOpen(!isInstrumentsModalOpen);
  };

  const MusicFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target) {
      return;
    }
    const { files } = target!;
    const file = files![0];
    const url = getFileUrl(file);
    setImageUrl(url);
  };

  useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <S.Container>
      <S.AlbumCoverWrapper>
        {
        imageUrl
          ? (
            <S.CoverImageWrapper>
              <S.CoverImage src={imageUrl} />
            </S.CoverImageWrapper>
          )
          : (
            <S.CoverImageSelect htmlFor="image">
              <S.CoverImageLabel htmlFor="image">이미지를 선택해주세요.</S.CoverImageLabel>
              <S.Input type="file" id="image" accept="image/*" onChange={MusicFileChangeHandler} />
            </S.CoverImageSelect>
          )
        }

        <MusicPlayerMini url={content.musicUrl} />

      </S.AlbumCoverWrapper>
      <S.DetailWrapper>
        <S.Detail>
          <S.Span>곡명</S.Span>
          <S.TitleInput type="text" onChange={onTitleChangeHandler} />
        </S.Detail>
        <S.Detail>
          <S.Span>장르</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={genresModalToggle}>
              {
                content.genres.length > 0
                  ? <span>{content.genres.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }
              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isGenresModalOpen && <Modal lists={UploadSelection.genres} datas={content.genres} changeHandler={onGenresChangeHandler} />
            }
          </S.DetailButtonWrapper>

        </S.Detail>
        <S.Detail>
          <S.Span>무드</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={moodsModalToggle}>
              {
                content.moods.length > 0
                  ? <span>{content.moods.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }
              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isMoodsModalOpen && <Modal lists={UploadSelection.moods} datas={content.moods} changeHandler={onMoodsChangeHandler} />
            }
          </S.DetailButtonWrapper>
        </S.Detail>
        <S.Detail>
          <S.Span>악기</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={instrumentsModalToggle}>
              {
                content.instruments.length > 0
                  ? <span>{content.instruments.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }

              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isInstrumentsModalOpen && <Modal lists={UploadSelection.instruments} datas={content.instruments} changeHandler={onInstrumentsChangeHandler} />
            }
          </S.DetailButtonWrapper>
        </S.Detail>
      </S.DetailWrapper>
    </S.Container>
  );
};

export default MusicUploader;

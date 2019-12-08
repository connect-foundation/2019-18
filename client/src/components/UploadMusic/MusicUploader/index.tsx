import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Modal from '../Modal';
import { UploadSelection } from '../../../utils/constants';

const initData2 = [
  '123', '234', '345',
];
interface MusicUploaderProp{
  musicUrl: string;

}

const MusicUploader:React.FC<MusicUploaderProp> = ({
  musicUrl,
}) => {
  const [imageUrl, setImageUrl] = useState();
  const [title, setTitle] = useState<string>();
  const [genres, setGenres] = useState<string[]>([]);
  const [moods, setMoods] = useState<string[]>([]);
  const [instruments, setInstruments] = useState<string[]>([]);

  const [isGenresModalOpen, setIsGenresModalopen] = useState(false);
  const [isMoodsModalOpen, setIsMoodsModalOpen] = useState(false);
  const [isInstrumentsModalOpen, setIsInstrumentsModalOpen] = useState(false);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const genresModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsGenresModalopen(!isGenresModalOpen);
  };

  const moodsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsMoodsModalOpen(!isMoodsModalOpen);
  };

  const instrumentsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsInstrumentsModalOpen(!isInstrumentsModalOpen);
  };

  useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <S.Container>
      <S.AlbumCoverWrapper>
        {
        imageUrl
          ? <S.CoverImage src={imageUrl} />
          : (
            <S.CoverImageSelect>
              <S.CoverImageLabel htmlFor="image">이미지를 선택해주세요.</S.CoverImageLabel>
              <S.Input type="file" id="image" accept="image/*" />
            </S.CoverImageSelect>
          )
      }
      </S.AlbumCoverWrapper>
      <S.DetailWrapper>
        <S.Detail>
          <S.Span>곡명</S.Span>
          <S.TitleInput type="text" onChange={titleChangeHandler} />
        </S.Detail>
        <S.Detail>
          <S.Span>장르</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={genresModalToggle}>
              {
                genres.length > 0
                  ? <span>{genres.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }
              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isGenresModalOpen && <Modal lists={UploadSelection.genres} datas={genres} setter={setGenres} />
            }
          </S.DetailButtonWrapper>

        </S.Detail>
        <S.Detail>
          <S.Span>무드</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={moodsModalToggle}>
              {
                moods.length > 0
                  ? <span>{moods.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }
              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isMoodsModalOpen && <Modal lists={UploadSelection.moods} datas={moods} setter={setMoods} />
            }
          </S.DetailButtonWrapper>
        </S.Detail>
        <S.Detail>
          <S.Span>악기</S.Span>
          <S.DetailButtonWrapper>
            <S.DetailButton onClick={instrumentsModalToggle}>
              {
                instruments.length > 0
                  ? <span>{instruments.join(', ')}</span>
                  : <span>최대 5개 선택 가능합니다.</span>
              }

              <S.ArrowDropDown />
            </S.DetailButton>
            {
              isInstrumentsModalOpen && <Modal lists={UploadSelection.instruments} datas={instruments} setter={setInstruments} />
            }
          </S.DetailButtonWrapper>
        </S.Detail>
      </S.DetailWrapper>
    </S.Container>
  );
};

export default MusicUploader;

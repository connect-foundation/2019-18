import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Modal from '../Modal';
import { UploadSelection } from '../../../utils/constants';
import MusicPlayerMini from '../../MusicPlayerMini';
import { MusicUploaderProp } from './types';

const MusicUploader:React.FC<MusicUploaderProp> = ({
  docuKey,
  content,
  titleChangeHandler,
  genresChangeHandler,
  moodsChangeHandler,
  instrumentsChangeHandler,
  imageUrlChangeHanldler,
}) => {
  const [isGenresModalOpen, setIsGenresModalopen] = useState(false);
  const [isMoodsModalOpen, setIsMoodsModalOpen] = useState(false);
  const [isInstrumentsModalOpen, setIsInstrumentsModalOpen] = useState(false);

  const onTitleChangeHandler = titleChangeHandler(docuKey);
  const onGenresChangeHandler = genresChangeHandler(docuKey);
  const onMoodsChangeHandler = moodsChangeHandler(docuKey);
  const onInstrumentsChangeHandler = instrumentsChangeHandler(docuKey);
  const onImageUrlChangeHandler = imageUrlChangeHanldler(docuKey);

  const genresModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsGenresModalopen(!isGenresModalOpen);
  };

  const moodsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsMoodsModalOpen(!isMoodsModalOpen);
  };

  const instrumentsModalToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsInstrumentsModalOpen(!isInstrumentsModalOpen);
  };

  return (
    <S.Container>
      <S.AlbumCoverWrapper>
        {
        content.imageUrl
          ? (
            <S.CoverImageWrapper>
              <S.CoverImage src={content.imageUrl} />
            </S.CoverImageWrapper>
          )
          : (
            <S.CoverImageSelect htmlFor="image">
              <S.CoverImageLabel htmlFor="image">이미지를 선택해주세요.</S.CoverImageLabel>
              <S.Input type="file" id="image" accept="image/*" onChange={onImageUrlChangeHandler} />
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

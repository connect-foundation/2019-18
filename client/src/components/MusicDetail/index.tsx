import React from 'react';
import Quill from 'react-quill';
import * as S from './styles';
import MusicPlayer from '../MusicPlayer';
import { MusicDetailProp, IData } from './types';
import PlayerFooter from './PlayerFooter';
import { IMusicContent } from '../MusicDetail/types';
import { IMusic } from '../UploadMusic/types';
import { getShortId, getTimeSimple } from '../../utils';
import Comment from '../Comment';
import { CircularProgress } from '@material-ui/core';

const MusicDetail: React.FC<MusicDetailProp> = ({
  data,
  inputComment,
  user,
  isLoading,
  isError,
  commentRef,
  changeInputHandler,
  addNewComment,
}) => {
  const getHeaderMeta = (name: string, createdAt: number, views: string) => (
    <S.HeaderMeta>
      <span>by</span>
      &nbsp;
      <S.Strong>{name}</S.Strong>
      &nbsp;
      <span>{`| ${getTimeSimple(createdAt)}`}</span>
      &nbsp;
      <span>{`| 조회 ${views}`}</span>
    </S.HeaderMeta>
  );

  const getMusicContent = ({
    title, imageUrl, musicUrl, genres, moods, instruments,
  }: IMusic,
  { owner, views }: IData) => (
    <div key={getShortId()}>
      <MusicPlayer
        title={title}
        author={owner.name}
        coverUrl={imageUrl}
        musicUrl={musicUrl}
      />
      <PlayerFooter
        view={views}
        genres={genres}
        moods={moods}
        instruments={instruments}
      />
    </div>
  );

    const getDescriptionContent = (contentValue: string) => (
      <Quill
        key={getShortId()}
        value={contentValue}
        theme="bubble"
        readOnly
      />
    )

  return (
    isLoading || data === null
      ? (<S.Progress>
        <CircularProgress color="inherit" />
      </S.Progress>)
      : (
        <S.Container>
          <S.Header>
            <S.HeaderTitle>{data.title}</S.HeaderTitle>
            {getHeaderMeta(data.owner.name, data.createdAt, data.views)}
          </S.Header>
          {
        (data.content as IMusicContent[]).map((content, index) => {
          if (content.type === 'musics') {
            const music = content.content as IMusic;
            return getMusicContent(music, data);
          }
          return getDescriptionContent(content.content as string);
        })
      }

          <S.CopyRight>{`Copyright © ${data.owner.name} All Rights Reserved`}</S.CopyRight>

          <Comment
            comments={data.comments}
            commentsAllow={data.commentsAllow}
            user={user}
            inputComment={inputComment}
            changeInputHandler={changeInputHandler}
            addNewComment={addNewComment}
          />
        </S.Container>
      )
  );
};

export default MusicDetail;

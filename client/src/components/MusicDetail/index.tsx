import React, { useEffect } from 'react';

import Quill from 'react-quill';
import * as S from './styles';
import MusicPlayer from '../MusicPlayer';
import { MusicDetailProp } from './types';
import PlayerFooter from './PlayerFooter';
import { IMusicContent } from '../MusicDetail/types';
import { IMusic } from '../UploadMusic/types';
import { getShortId, getTimeSimple } from '../../utils';
import Comment from '../Comment';

const MusicDetail: React.FC<MusicDetailProp> = ({
  data,
  inputComment,
  user,
  isLoading,
  isError,
  commentRef,
  changeInputHandler,
  addNewComment,
}) => (isLoading || data === null
  ? (<div>Loading...</div>)
  : (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{data.title}</S.HeaderTitle>
        <S.HeaderMeta>
          <span>by</span>
          &nbsp;
          <S.Strong>{data.owner.name}</S.Strong>
          &nbsp;
          <span>{`| ${getTimeSimple(data.createdAt)}`}</span>
          &nbsp;
          <span>{`| 조회 ${data.views}`}</span>
        </S.HeaderMeta>
      </S.Header>
      {
        (data.content as IMusicContent[]).map((content, index) => {
          if (content.type === 'musics') {
            const music = content.content as IMusic;
            return (
              <div key={getShortId()}>
                <MusicPlayer
                  title={music.title}
                  author={data.owner.name}
                  coverUrl={music.imageUrl}
                  musicUrl={music.musicUrl}
                />
                <PlayerFooter
                  view={data.views}
                  genres={music.genres}
                  moods={music.moods}
                  instruments={music.instruments}
                />
              </div>
            );
          }
          return (
            <Quill
              key={getShortId()}
              value={content.content as string}
              theme="bubble"
              readOnly
            />
          );
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

export default MusicDetail;

import React, { useEffect } from 'react';
import Quill from 'react-quill';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Comment from '../Comment';
import {
  getTimeSimple,
  getShortId,
  BlobContent,
  revokeObjectURL,
} from '../../utils';
import { WorksDetailProp } from './types';
import { UPLOAD } from '../../utils/constants';
import { RootState } from '../../modules';
import { CircularProgress } from '@material-ui/core';

const WorksDetail:React.FC<WorksDetailProp> = ({
  data, inputComment, user, isLoading, isError, changeInputHandler, addNewComment,
}) => {
  const isLogin = useSelector((state:RootState) => state.login.isLogin);

  const getDescriptionContent = (descriptionValue: any) => (
    <Quill
      key={getShortId()}
      value={descriptionValue}
      theme="bubble"
      readOnly
    />
  );

  const getWallpaperContent = (imageSrc: string, fileObj: any, title: string) => (
    <S.Content key={getShortId()}>
      <S.ImageContent src={imageSrc} />
      { isLogin
        && (
          <a
            href={fileObj}
            download={`${title}.jpeg`}
          >
            <GetAppIcon />
          </a>
        )}
    </S.Content>
  );

  const getImageContent = (src: any) => (
    <S.Content key={getShortId()}>
      <S.ImageContent src={src} />
    </S.Content>
  );

  useEffect(() => {
    if (data) {
      data.content.forEach((el) => {
        if (el.fileObj) {
          el.fileObj = BlobContent(el.fileObj);
        }
      });
    }

    return () => (
      data?.content.forEach((el) => {
        if (el.fileObj) {
          revokeObjectURL(el.fileObj);
        }
      })
    );
  }, [data]);

  return (
    isLoading || data === null
      ? (
      <S.Progress>
        <CircularProgress color="inherit" />
      </S.Progress>
      )
      : (
        <S.Container>
          <S.Title>{data.title}</S.Title>
          <S.HeaderMeta>
            <span>by</span>
          &nbsp;
            <S.Strong>{data.owner.name}</S.Strong>
          &nbsp;
            <span>{`| ${getTimeSimple(data.createdAt)}`}</span>
          &nbsp;
            <span>{`| 조회 ${data.views}`}</span>
          </S.HeaderMeta>

          {data.content.map(({ type, content, fileObj }) => {
            if (type === UPLOAD.DESCRIPTION) {
              return getDescriptionContent(content);
            }
            if (type === UPLOAD.WALLPAPER) {
              return getWallpaperContent(content, fileObj, data.title);
            }
            return getImageContent(content);
          })}

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
export default WorksDetail;

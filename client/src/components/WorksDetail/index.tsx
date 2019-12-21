import React, { useEffect } from 'react';
import Quill from 'react-quill';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useSelector } from 'react-redux';
import { encode } from 'punycode';
import * as S from './styles';
import Comment from '../Comment';
import Like from '../../commons/Like';
import { getTimeSimple, getShortId, BlobContent } from '../../utils';
import { CommentProp, WorksDetailProp } from './types';
import { UPLOAD, OBJECT_STORAGE_WALLPAPER } from '../../utils/constants';
import { RootState } from '../../modules';

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
            href={BlobContent(fileObj)}
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

  return (
    isLoading || data === null
      ? (<div>Loading...</div>)
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

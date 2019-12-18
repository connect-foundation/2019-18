import React from 'react';
import Quill from 'react-quill';
import GetAppIcon from '@material-ui/icons/GetApp';
import * as S from './styles';
import Comment from '../Comment';
import Like from '../../commons/Like';
import { getTimeSimple, getShortId } from '../../utils';
import { CommentProp, WorksDetailProp } from './types';
import { UPLOAD, OBJECT_STORAGE_WALLPAPER } from '../../utils/constants';

const WorksDetail:React.FC<WorksDetailProp> = ({
  data, inputComment, user, isLoading, isError, changeInputHandler, addNewComment,
}) => {
  const splitFileName = (url:string) => {
    const [path, _query] = url.split('?');
    const [_path, fileName] = path.split('wallpapers/');
    return fileName;
  };
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

          {data.content.map((content, idx) => {
            if (content.type === UPLOAD.DESCRIPTION) {
              return (
                <Quill
                  key={idx}
                  value={content.content as string}
                  theme="bubble"
                  readOnly
                />
              );
            }
            if (content.type === UPLOAD.WALLPAPER) {
              return (
                <S.Content key={idx}>
                  <img alt="wallpapers" src={content.content} />
                  <a href={`${OBJECT_STORAGE_WALLPAPER}${splitFileName(content.content)}`} download><GetAppIcon /></a>
                </S.Content>
              );
            }
            return (
              <S.Content key={idx}>
                <img alt="images" src={content.content} />
              </S.Content>
            );
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

import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MusicDetail from '../components/MusicDetail';
import useGetFeed from '../hooks/useGetFeed';
import { RootState } from '../modules';
import { API_SERVER } from '../utils/constants';
import { IData } from '../components/MusicDetail/types';
import { CheckStringLength, CommentChecker } from '../utils/check';
import { Alert } from '../utils';
import { FEED_MUSIC_ADD_COMMENT, Axios } from '../utils/request';

const MusicDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [inputComment, setInputComment] = useState('');
  const user = useSelector((state: RootState) => state.login);

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/workmusic/${id}`);
  }, []);

  const changeInputHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };

  const CommentLengthChecker = CheckStringLength(CommentChecker);

  const addNewComment = async () => {
    if (data) {
      if (!user.isLogin) {
        Alert('로그인이 필요한 서비스입니다.');
        return;
      }

      if (!CommentLengthChecker(inputComment)) {
        return;
      }
    }

    try {
      const reqConfig = FEED_MUSIC_ADD_COMMENT(id, inputComment);
      const response = await Axios(reqConfig);
      if (!response.data.success) {
        Alert(response.data.msg);
      } else {
        setData(response.data.data);
        setInputComment('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MusicDetail
      data={data}
      inputComment={inputComment}
      user={user}
      isLoading={isLoading}
      isError={isError}
      commentRef={commentRef}
      changeInputHandler={changeInputHandler}
      addNewComment={addNewComment}
    />
  );
};

export default MusicDetailContainer;

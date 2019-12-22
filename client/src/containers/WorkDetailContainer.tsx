import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetFeed from '../hooks/useGetFeed';
import { ERROR_MSG, API_SERVER } from '../utils/constants';
import { IData } from '../components/WorksDetail/types';
import WorksDetail from '../components/WorksDetail';
import {
  CheckStringLength, CommentChecker, CheckIsLogin, IsLoginChecker,
} from '../utils/check';
import { RootState } from '../modules';
import { Alert } from '../utils';
import { FEED_IMAGE_ADD_COMMENT, Axios } from '../utils/request';

const WorkDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [inputComment, setInputComment] = useState('');
  const user = useSelector((state: RootState) => state.login);
  useEffect(() => {
    setUrl(`${API_SERVER}/feed/workimage/${id}`);
  }, [data]);

  const changeInputHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };

  const CommentLengthCheker = CheckStringLength(CommentChecker);
  const LoginChecker = CheckIsLogin(IsLoginChecker);

  const addNewComment = async () => {
    if (data) {
      if (!LoginChecker(user.isLogin)) {
        return;
      }

      if (!CommentLengthCheker(inputComment)) {
        return;
      }

      const postData = {
        content: inputComment,
      };
      const reqConfig = FEED_IMAGE_ADD_COMMENT(id, postData);
      Axios(reqConfig).then((response) => {
        setData(response.data.data);
        setInputComment('');
      }).catch((e) => {
        Alert(ERROR_MSG.AXIOS);
      });
    }
  };

  return (
    <WorksDetail
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

export default WorkDetailContainer;

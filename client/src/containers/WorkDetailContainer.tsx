import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import useGetFeed from '../hooks/useGetFeed';
import { API_SERVER, API_ADDR } from '../utils/constants';
import { IData } from '../components/WorksDetail/types';
import WorksDetail from '../components/WorksDetail';
import { CheckStringLength, CommentChecker } from '../utils/check';
import { RootState } from '../modules';

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

  const addNewComment = () => {
    if (data) {
      if (!user.isLogin) {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }

      if (!CommentLengthCheker(inputComment)) {
        return;
      }

      const postData = {
        content: inputComment,
      };
      const ADDR = API_ADDR.FEED_IMAGE_ADD_COMMENT(id);

      axios.post(ADDR, postData, { withCredentials: true }).then((response) => {
        if (!response.data.success) {
          alert(response.data.msg);
        } else {
          setData(response.data.data);
          setInputComment('');
        }
      }).catch((e) => {
        console.error(e);
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

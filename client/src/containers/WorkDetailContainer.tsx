import React, { useState, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import useGetFeed from '../hooks/useGetFeed';
import { API_SERVER, FEED_IMAGE_ADD_COMMENT } from '../utils/constants';
import { IData } from '../components/WorksDetail/types';
import WorksDetail from '../components/WorksDetail';
import { Axios } from '../utils';

const WorkDetailContainer = ({ match }: RouteComponentProps<{id:string}>) => {
  const { id } = match.params;
  const [{
    data, setData, isLoading, isError,
  }, setUrl] = useGetFeed<IData | null>(null);

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [inputComment, setInputComment] = useState('');

  useEffect(() => {
    setUrl(`${API_SERVER}/feed/images/${id}`);
  }, [data]);
  const changeInputHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComment(e.target.value);
  };

  const addNewComment = () => {
    if (data) {
      const postData = {
        content: inputComment,
      };

      const { METHOD, ADDR } = FEED_IMAGE_ADD_COMMENT(id);
      //   axios.post(`${API_SERVER}/feed/images/${data._id}/add-comment`, postData)
      Axios({
        METHOD,
        ADDR,
        postData,
      })
        .then((response) => {
          if (!response.data.success) {
            console.error(response.data.msg);
          } else {
            setData(response.data.data);
            if (commentRef.current) {
              commentRef.current.value = '';
            }
          }
        });
    }
  };

  return (
    <WorksDetail
      data={data}
      isLoading={isLoading}
      isError={isError}
      commentRef={commentRef}
      changeInputHandler={changeInputHandler}
      addNewComment={addNewComment}
    />
  );
};


export default WorkDetailContainer;

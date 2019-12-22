import axios, { AxiosRequestConfig } from 'axios';
import { API_SERVER } from './constants';

const instance = axios.create({
  baseURL: API_SERVER,
  timeout: 10000,
  withCredentials: true,
});

export const USE_GET_FEED_LIST = (fixedNum: number, skippedNum: number):AxiosRequestConfig => ({
  method: 'GET',
  url: `/feed/images/more/${fixedNum}/${skippedNum}`,
});

export const UPLOAD_IMAGE_URL = (data: FormData):AxiosRequestConfig => ({
  method: 'POST',
  url: '/upload/getImageUrl',
  data,
});

export const UPLOAD_IMAGE = (data: any):AxiosRequestConfig => ({
  method: 'POST',
  url: '/upload/works-image',
  data,
});

export const LOGOUT = ():AxiosRequestConfig => ({
  method: 'GET',
  url: '/login/out',
});

export const FEED_MUSIC_ADD_COMMENT = (id:string, data: any):AxiosRequestConfig => ({
  method: 'post',
  url: `/feed/musics/${id}/add-comment`,
  data,
});

export const FEED_IMAGE_ADD_COMMENT = (id: string, data: any):AxiosRequestConfig => ({
  method: 'post',
  url: `/feed/images/${id}/add-comment`,
  data,
});

export const NOTIFICATIONS = (id: string):AxiosRequestConfig => ({
  method: 'get',
  url: `/user/notifications/${id}`,
});

export const GET_IMAGE_URL = (data: FormData):AxiosRequestConfig => ({
  method: 'post',
  url: '/upload/getImageUrl',
  data,
});

export const UPLOAD_MUSIC = (data: any):AxiosRequestConfig => ({
  method: 'post',
  url: '/upload/music',
  data,
});

export const UPDATE_PROFILE_IMG = (data: FormData):AxiosRequestConfig => ({
  method: 'post',
  url: '/user/update_profile_img',
  data,
});

export const Axios = async (config:AxiosRequestConfig) => instance.request(config);

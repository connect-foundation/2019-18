import axios from 'axios';
import { API_SERVER } from './constants';

const instance = axios.create({
  baseURL: API_SERVER,
  timeout: 2000,
  withCredentials: true,
});


interface AxiosParam {
    method: 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | undefined,
    url: string,
}

export const USE_GET_FEED_LIST = (fixedNum: number, skippedNum: number):AxiosParam => ({
  method: 'GET',
  url: `/feed/images/more/${fixedNum}/${skippedNum}`,
});

export const Axios = async ({ method, url }:AxiosParam) => instance({
  url,
  method,
});

import { HttpCode } from '../const';
import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const BACKEND_URL = 'https://hacker-news.firebaseio.com/v0';

const REQUEST_TIMEOUT = 10000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response && response.status >= HttpCode.ServerError) {
        console.log(response);
      }

      return Promise.reject(error);
    },
  );

  return api;
};

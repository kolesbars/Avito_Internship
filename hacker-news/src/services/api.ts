import { REQUEST_TIMEOUT, BACKEND_URL } from '../const';
import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export const api = createAPI();

import { NewsData } from './state';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import {ThunkAction} from 'redux-thunk';

export enum ActionType {
  LoadNewsArr = 'news/LoadNewsArr',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, NewsData, AxiosInstance, Action>;
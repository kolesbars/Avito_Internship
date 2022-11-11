import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from '@reduxjs/toolkit';
import { State } from './state';

export enum ActionType {
  UpdateNewsIDArr = 'news/updateNewsIDArr',
  SetLoadedStatus = 'news/setLoadedStatus',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>;

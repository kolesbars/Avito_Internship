import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import {ThunkAction} from '@reduxjs/toolkit';
import { RootState } from './state';

export enum ActionType {
    UpdateNewsIDArr = 'news/updateNewsIDArr',
    SetLoadedStatus = 'news/setLoadedStatus',
    UpdateCurrentNewData = 'news/updateCurrentNewData',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;
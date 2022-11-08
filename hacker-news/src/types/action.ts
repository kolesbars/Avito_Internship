import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import {ThunkAction} from '@reduxjs/toolkit';
import { newsData } from '../store/news-data/news-data';
// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export enum ActionType {
    UpdateNewsIDArr = 'news/updateNewsIDArr',
    SetLoadedStatus = 'news/setLoadedStatus',
    UpdateCurrentNewData = 'news/updateCurrentNewData',
}

export type State = ReturnType<typeof newsData>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
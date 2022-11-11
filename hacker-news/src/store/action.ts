import { ActionType } from '../types/action';
import { createAction } from '@reduxjs/toolkit';

export const updateNewsIDArr = createAction(
  ActionType.UpdateNewsIDArr,
  (idArr: number[]) => ({
    payload: idArr,
  })
);

export const setLoadedStatus = createAction(
  ActionType.SetLoadedStatus,
  (status: boolean) => ({
    payload: status,
  })
);

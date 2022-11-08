import { ActionType } from "../types/action";
import { NewType } from "../types/news";
import { createAction } from "@reduxjs/toolkit";

export const updateNewsIDArr = createAction(
    ActionType.UpdateNewsIDArr,
    (idArr: number[]) => ({
      payload: idArr,
    }),
  );

  export const setLoadedStatus = createAction(
    ActionType.SetLoadedStatus,
    (status: boolean) => ({
      payload: status
    })
    );
   
  export const updateCurrentNewData = createAction(
    ActionType.UpdateCurrentNewData,
    (data: NewType) => ({
       payload: data,
    }),
    );
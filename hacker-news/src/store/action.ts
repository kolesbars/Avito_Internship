import { ActionType } from "../types/action";
import { createAction } from "@reduxjs/toolkit";

export const loadNewsArr = createAction(
    ActionType.LoadNewsArr,
    (idArr: number[]) => ({
      payload: idArr,
    }),
  );
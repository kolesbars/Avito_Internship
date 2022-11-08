import { createReducer } from "@reduxjs/toolkit";
import { updateNewsIDArr, setLoadedStatus, updateCurrentNewData} from "../action";
import { emptyNew } from "../../const";
import { NewsData } from "../../types/state";

const initialState: NewsData = {
    isLoaded: false,
    newsIDArr : [],
    currentNewData: emptyNew,
}

const newsData = createReducer(initialState, (builder) => {
    builder
    .addCase(updateNewsIDArr, (state, action) => {
        state.newsIDArr = action.payload.slice(0, 100).sort((a, b) => a - b)
    })
    .addCase(setLoadedStatus, (state, action) => {
        state.isLoaded = action.payload
    })
    .addCase(updateCurrentNewData, (state, action) => {
        state.currentNewData = action.payload
    })
})

export {newsData};

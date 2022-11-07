import { createReducer } from "@reduxjs/toolkit";
import { loadNewsArr } from "../action";
import { NewsData } from "../../types/state";

const initialState: NewsData = {
    newsIDArr : [],
}

const newsData = createReducer(initialState, (builder) => {
    builder.addCase(loadNewsArr, (state, action) => {
        state.newsIDArr = action.payload
    })
})

export {newsData};

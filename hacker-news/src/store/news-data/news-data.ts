import { createReducer } from '@reduxjs/toolkit';
import { updateNewsIDArr, setLoadedStatus } from '../action';
import { NewsData } from '../../types/state';
import { INITIAL_VALUE_OF_NEWS_ARR, AMOUNT_OF_NEWS } from '../../const';

const initialState: NewsData = {
  isLoaded: false,
  newsIDArr: [],
};

const newsData = createReducer(initialState, (builder) => {
  builder
    .addCase(updateNewsIDArr, (state, action) => {
      state.newsIDArr = action.payload
        .sort((a, b) => a - b)
        .slice(INITIAL_VALUE_OF_NEWS_ARR, AMOUNT_OF_NEWS);
    })
    .addCase(setLoadedStatus, (state, action) => {
      state.isLoaded = action.payload;
    })
});

export { newsData };

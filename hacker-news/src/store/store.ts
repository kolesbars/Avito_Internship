import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { newsData } from './news-data/news-data';

export const store = configureStore({
  reducer: {
    counter: newsData,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

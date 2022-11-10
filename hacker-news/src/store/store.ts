import { configureStore} from '@reduxjs/toolkit';
import { api } from '../services/api';
import { newsData } from './news-data/news-data';

export const store = configureStore({
    reducer: newsData,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }),
  },
  );
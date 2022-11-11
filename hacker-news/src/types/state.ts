import { store } from '../store/store';

export type NewsData = {
  newsIDArr: number[];
  isLoaded: boolean;
};

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

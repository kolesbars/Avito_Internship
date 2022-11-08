import React from 'react';
import { createRoot } from 'react-dom/client';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import { newsData } from './store/news-data/news-data';
import App from './components/app/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
const api = createAPI();

const store = configureStore({
  reducer: newsData,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
},
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App api={api}/>
    </Provider>
  </React.StrictMode>
);

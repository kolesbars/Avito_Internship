import React from 'react';
import { createRoot } from 'react-dom/client';
import { createAPI } from './components/app/services/api';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/App';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
const api = createAPI();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App api={api}/>
    </Provider>
  </React.StrictMode>
);

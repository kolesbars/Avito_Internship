import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { api } from './services/api';
import { Provider } from 'react-redux';
import App from './components/app/App';
import 'semantic-ui-css/semantic.min.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App api={api} />
    </Provider>
  </React.StrictMode>
);

import { AppRoute } from '../../const';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import Main from '../main/main';
import NewsItemPage from '../news-item-page/news-item-page';
import NotFoundPage from '../not-found-page/not-found-page';

type AppProps = {
  api: AxiosInstance;
};

function App({ api }: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main api={api} />
        </Route>
        <Route path={`${AppRoute.News}/:id`} exact>
          <NewsItemPage api={api}/>
        </Route>
        <Route path={AppRoute.NotFoundScreen}>
          <NotFoundPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

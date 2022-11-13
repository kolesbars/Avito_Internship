import { AppRoute } from '../../const';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import NewsItemPage from '../news-item-page/news-item-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main />
        </Route>
        <Route path={`${AppRoute.News}/:id`} exact>
          <NewsItemPage />
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

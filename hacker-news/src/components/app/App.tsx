import { AppRoute } from '../../const';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import NewPage from '../new-page/new-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main/>
        </Route>
        <Route path={`${AppRoute.New}/:id`} exact>
          <NewPage/>
        </Route>
        <Route path='*'>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;

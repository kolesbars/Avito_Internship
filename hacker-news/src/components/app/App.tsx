import { AxiosInstance } from 'axios';
import { AppRoute } from '../../const';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../main/main';
import NewPage from '../new-page/new-page';
import './App.css';

type AppProps = {
  api: AxiosInstance
}

function App({api}: AppProps) {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main api={api}/>
        </Route>
        <Route path={`${AppRoute.New}/:id`}>
          <NewPage api={api}/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;

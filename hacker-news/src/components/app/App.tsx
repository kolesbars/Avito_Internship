import { AxiosInstance } from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../main/main';
import NewPage from '../new-page/new-page';
import './App.css';

type AppProps = {
  api: AxiosInstance
}

function App({api}: AppProps) {
  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(loadNewsID())
  //   }, 100000)
  // }, [arr])

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Main api={api}/>
        </Route>
        <Route path={'/new'}>
          <NewPage api={api}/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;

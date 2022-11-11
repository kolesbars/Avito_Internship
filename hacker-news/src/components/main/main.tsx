import { useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getLoadedStatus} from '../../store/news-data/selectors';
import { loadNewsID } from '../../store/api-action';
import { Button, Icon, Grid, Loader, Dimmer, Segment, Advertisement} from 'semantic-ui-react';
import { INTERVAL_DELAY, DefaultScrollPosition } from '../../const';
import { AxiosInstance } from 'axios';
import NewsList from '../news-list/news-list';
import PageHeader from '../page-header/page-header';

type MainProps = {
  api: AxiosInstance;
};

function Main({ api }: MainProps) {
  const dispatch = useAppDispatch();

  const loadedStatus = useAppSelector(getLoadedStatus)

  const handleClickButton = () => {
    dispatch(loadNewsID());
  };

  const handleToUpClick = () => {
    window.scrollTo({
      top: DefaultScrollPosition.Top,
      left: DefaultScrollPosition.Left,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(loadNewsID());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(loadNewsID());
    }, INTERVAL_DELAY);
    return () => clearInterval(interval);
  }, []);

  return (
    <Segment inverted color='black'>
      <Grid columns={4} inverted>
        <Grid.Row>
          <Grid.Column width={3}/>
          <Grid.Column width={5} textAlign='left'>
            <PageHeader/>
          </Grid.Column>
          <Grid.Column width={5} textAlign='right'>
          <Button onClick={handleClickButton} size="huge" color="orange" inverted floated='right'>
            <Icon name="redo alternate"></Icon>
              Обновить
          </Button>
          </Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row> 
        <Grid.Row>
          <Grid.Column width="3" textAlign="right">
          </Grid.Column>
          <Grid.Column width="10" stretched>
            { loadedStatus ?
            <NewsList api={api} /> :
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>}
          </Grid.Column>
          <Grid.Column width="3" textAlign="left" verticalAlign='bottom'>
            {loadedStatus && <Button size="huge" color="black" onClick={handleToUpClick} inverted>
              <Icon name="arrow alternate circle up"></Icon>
              Наверх
            </Button>}
          </Grid.Column>
        </Grid.Row>
        <Advertisement unit='half page'/>
      </Grid>
    </Segment>
  );
}

export default Main;

import { useEffect} from 'react';
import { loadNewsID } from '../../store/api-action';
import { useAppDispatch} from '../../hooks/hooks';
import { Button, Header, Sticky, Icon, Grid} from 'semantic-ui-react'
import { INTERVAL_DELAY } from '../../const';
import NewsList from '../news-list/news-list';

function Main() {

    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        dispatch(loadNewsID())
    }

    const handleToUpClick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    useEffect(() => {
        dispatch(loadNewsID())
      }, [])


    useEffect(() => {
        const interval = setInterval(() => {
          dispatch(loadNewsID())
        }, INTERVAL_DELAY);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
          <Grid columns={3}>
            <Grid.Row centered>
              <Header as="h1" textContent='center'>Hacker news</Header>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width='3' textAlign='right'>
                <Sticky>
                  <Button onClick={handleClickButton} size='huge' color='black'>Обновить</Button>
                </Sticky>
              </Grid.Column>
              <Grid.Column width='10'>
                <NewsList/>
              </Grid.Column>
              <Grid.Column width='3' textAlign='left'>
                <Sticky>
                  <Button size='huge' color='black' onClick={handleToUpClick}>
                    <Icon name='angle up'></Icon>
                    Наверх
                  </Button>
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>

    )
}

export default Main;

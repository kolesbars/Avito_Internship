import { useEffect} from 'react';
import { loadNewsID } from '../../store/api-action';
import { useAppDispatch} from '../../hooks/hooks';
import { Button, Container, Header } from 'semantic-ui-react'
import { INTERVAL_DELAY } from '../../const';
import NewsList from '../news-list/news-list';

function Main() {

    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        dispatch(loadNewsID())
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
        <Container>
          <Header as="h1">Hacker news</Header>
          <Button onClick={handleClickButton}>Обновить</Button>
          <NewsList/>
        </Container>

    )
}

export default Main;

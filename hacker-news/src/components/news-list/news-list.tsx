import { List, Container, Dimmer, Loader } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/hooks';
import { getNewsIDArr } from '../../store/news-data/selectors';
import { getLoadedStatus } from '../../store/news-data/selectors';
import NewsItem from '../news-item/news-item';

function NewsList() {
  const newsIdArr = useAppSelector(getNewsIDArr);
  const loadedStatus = useAppSelector(getLoadedStatus);

  return (
    <Container>
      <List celled divided selection data-testid="news-list">
        {newsIdArr.map((el) => {
          if (loadedStatus) {
            return <NewsItem newsItemID={el} key={el} />;
          }
          return (
            <Dimmer active inverted key={el}>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          );
        })}
      </List>
    </Container>
  );
}

export default NewsList;

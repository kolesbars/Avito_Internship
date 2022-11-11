import { List, Segment, Container, Dimmer, Loader } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/hooks';
import { getNewsIDArr } from '../../store/news-data/selectors';
import { getLoadedStatus } from '../../store/news-data/selectors';
import { AxiosInstance } from 'axios';
import NewsItem from '../news-item/news-item';

type NewsListProps = {
  api: AxiosInstance;
};

function NewsList({ api }: NewsListProps) {
  const newsIdArr = useAppSelector(getNewsIDArr);
  const loadedStatus = useAppSelector(getLoadedStatus);

  return (
    <Container>
      <Segment inverted color='orange'>
        <List bulleted celled divided selection data-testid='news-list'> 
          {newsIdArr.map((el) => {
            if (loadedStatus) {
              return <NewsItem newsItemID={el} key={el}/>;
            }
            return (
              <Dimmer active inverted key={el}>
                <Loader size="large">Loading</Loader>
              </Dimmer>
            );
          })}
        </List>
      </Segment>
    </Container>
  );
}

export default NewsList;

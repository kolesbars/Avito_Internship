import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsItemType } from '../../types/news';
import { APIRoute, AppRoute, DATE_MULTIPLIER } from '../../const';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import PageHeader from '../page-header/page-header';
import Comments from '../comments/comments';
import {
  Container,
  Header,
  Loader,
  Button,
  Dimmer,
  Segment,
  Advertisement,
} from 'semantic-ui-react';

function NewsItemPage() {
  const [currentData, setCurentData] = useState<NewsItemType>();
  const [date, setDate] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  useEffect(() => {
    setIsLoaded(false);
    api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
      if (resp.data.type === 'story') {
        setCurentData(resp.data);
        setDate(
          new Date(resp.data.time * DATE_MULTIPLIER).toLocaleDateString()
        );
      } else {
        history.push(AppRoute.NotFoundScreen);
      }
      setIsLoaded(true);
    });
  }, [id]);

  return (
    <Container data-testid="news-item-page">
      <PageHeader />
      {isLoaded ? (
        <>
          <Header as="h1" textAlign="center">
            {currentData?.title}
          </Header>
          <Header as="h2" textAlign="center">
            {`author: ${currentData?.by}, date: ${date}`}
          </Header>
          <Container textAlign="center">
            <Button as={Link} to={AppRoute.Main} primary color="blue">
              К списку новстей
            </Button>
            {currentData?.url && (
              <Button
                as="a"
                href={currentData?.url}
                target="_blank"
                secondary
                inverted
              >
                Открыть новость
              </Button>
            )}
          </Container>
          <Container>
            <Advertisement unit="banner" />
            {currentData && (
              <Comments
                kids={currentData.kids}
                count={currentData.descendants}
              ></Comments>
            )}
            <Advertisement unit="half page" />
          </Container>
        </>
      ) : (
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      )}
    </Container>
  );
}

export default NewsItemPage;

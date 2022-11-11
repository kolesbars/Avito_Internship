import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsItemType } from '../../types/news';
import { APIRoute, AppRoute, DATE_MULTIPLIER } from '../../const';
import { Container, Header, Loader, Button, Dimmer, Segment, Advertisement } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import PageHeader from '../page-header/page-header';
import Comments from '../comments/comments';

type newsItemPageProps = {
  api: AxiosInstance
}

function NewsItemPage({api}: newsItemPageProps) {
  const [currentData, setCurentData] = useState<NewsItemType>();
  const [date, setDate] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  useEffect(() => {
    setIsLoaded(false);
    api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
        if(resp.data.type === 'story') {
          setCurentData(resp.data);
          console.log(resp.data.kids)
          setDate(new Date(resp.data.time * DATE_MULTIPLIER).toLocaleDateString());
        } else {
          history.push(AppRoute.NotFoundScreen)
        }
        setIsLoaded(true);
    });
  }, [id]);

  return (
    <Segment color='grey' inverted>
      <PageHeader/>
      {isLoaded ? (
        <Container as='div' height='100vw'>
          <Header as="h1" textAlign="center">
            {currentData?.title}
          </Header>
          <Header as="h2" textAlign="center">
            {`author: ${currentData?.by}, date: ${date}`}
          </Header>
          <Container textAlign="center">
            {currentData?.url && (
              <Button
                as="a"
                href={currentData?.url}
                target="_blank"
                color="brown"
                inverted
              >
                Перейти на страницу новости
              </Button>
            )}
            <Button as={Link} to={AppRoute.Main} color='brown' inverted>
              Вернуться к списку новстей
            </Button>
          </Container>
          <Container>
            {currentData && (
              <Comments
                kids={currentData.kids}
                count={currentData.descendants}
                api={api}
              ></Comments>
            )}
          </Container>
          <Advertisement unit='half page'/>
        </Container>
      ) : (
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      )}
    </Segment>
  );
}

export default NewsItemPage;

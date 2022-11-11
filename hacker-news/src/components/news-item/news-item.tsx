import { List } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { APIRoute, AppRoute, DATE_MULTIPLIER } from '../../const';
import { NewsItemType } from '../../types/news';
import { useHistory } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { api } from '../../services/api';
import NewPlaceholder from '../item-placeholder/item-placeholder';

type NewsItemProps = {
  newsItemID: number;
};

function NewsItem({ newsItemID}: NewsItemProps) {
  const [newsItemData, setNewsItemData] = useState<NewsItemType>();
  const [date, setDate] = useState<string>();

  const history = useHistory();

  const handleNewsItemClick = () => {
    if (newsItemData) {
      history.push(`${AppRoute.News}/${newsItemID}`);
    }
  };

  useEffect(() => {
    api.get(`${APIRoute.Item}/${newsItemID}.json`).then((resp) => {
      setNewsItemData(resp.data);
      if (resp.data.time) {
        setDate(
          new Date(resp.data.time * DATE_MULTIPLIER).toLocaleDateString()
        );
      }
    });
  }, []);

  return (
    <List.Item onClick={handleNewsItemClick} data-testid='news-item'>
      {newsItemData ? (
        <List.Content floated="left">
          <List.Header as="h4" floated="left">
            {newsItemData?.title}
          </List.Header>
          <List.Header
            as="h5"
            floated="left"
          >{`rating: ${newsItemData?.score}`}</List.Header>
          <List.Description floated="left">
            {`by ${newsItemData?.by}, ${date}`}
          </List.Description>
        </List.Content>
      ) : (
        <NewPlaceholder />
      )}
    </List.Item>
  );
}

export default NewsItem;

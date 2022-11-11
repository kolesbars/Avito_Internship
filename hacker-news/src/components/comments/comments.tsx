import { List, Button, Header, Container, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import { AxiosInstance } from 'axios';
import CommentItem from '../comment/comment';

type CommentsProps = {
  kids: number[];
  count: number;
  api: AxiosInstance;
};

function Comments({ kids, count, api }: CommentsProps) {
  const [isUpdateButtonClick, setIsUpdateButtonClick] = useState(false);

  const handleUpdateButtonClick = () => {
    setIsUpdateButtonClick(true);
  };

  return (
    <Container>
      <Header as="h2">{`Comments(${count}):`}</Header>
      <Button onClick={handleUpdateButtonClick} color="brown" inverted>
        Обновить
      </Button>
      <Segment inverted color='brown'>
        <List bulleted>
          {kids
            ? kids.map((id) => {
                return (
                  <CommentItem
                    id={id}
                    key={id}
                    api={api}
                    defaultShowKidsStatus={false}
                    isUpdateButtonClick={isUpdateButtonClick}
                    onSetIsUpdateButtonClick={setIsUpdateButtonClick}
                  />
                );
              })
            : 'Комментариев пока нет'}
        </List>
      </Segment>
    </Container>
  );
}

export default Comments;

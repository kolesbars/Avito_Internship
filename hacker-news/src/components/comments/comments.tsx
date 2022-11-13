import { Button, Header, Container, Comment } from 'semantic-ui-react';
import { useState } from 'react';
import CommentItem from '../comment-item/comment-item';

type CommentsProps = {
  kids: number[];
  count: number;
};

function Comments({ kids, count }: CommentsProps) {
  const [isUpdateButtonClick, setIsUpdateButtonClick] = useState(false);

  const handleUpdateButtonClick = () => {
    setIsUpdateButtonClick(true);
  };

  return (
    <Container data-testid="comments">
      <Header as="h2">{`Comments(${count}):`}</Header>
      <Button onClick={handleUpdateButtonClick} primary>
        Обновить
      </Button>
      <Comment.Group threaded>
        {kids
          ? kids.map((id) => {
              return (
                <CommentItem
                  id={id}
                  key={id}
                  defaultShowKidsStatus={false}
                  isUpdateButtonClick={isUpdateButtonClick}
                  onSetIsUpdateButtonClick={setIsUpdateButtonClick}
                />
              );
            })
          : 'Комментариев пока нет'}
      </Comment.Group>
    </Container>
  );
}

export default Comments;

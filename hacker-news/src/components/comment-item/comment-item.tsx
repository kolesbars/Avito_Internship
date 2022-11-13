import { CommentType } from '../../types/news';
import { APIRoute, DATE_MULTIPLIER } from '../../const';
import { useState, useEffect } from 'react';
import { Container, Comment } from 'semantic-ui-react';
import { api } from '../../services/api';
import DOMPurify from 'dompurify';
import NewPlaceholder from '../item-placeholder/item-placeholder';

type CommentItemProps = {
  id: number;
  defaultShowKidsStatus: boolean;
  isUpdateButtonClick: boolean;
  onSetIsUpdateButtonClick: (value: boolean) => void;
};

function CommentItem({
  id,
  defaultShowKidsStatus,
  isUpdateButtonClick,
  onSetIsUpdateButtonClick,
}: CommentItemProps) {
  const [data, setData] = useState<CommentType>();
  const [date, setDate] = useState<string>();
  const [sanitizedComment, setSanitizedComment] = useState<string>();
  const [isShowKids, setIsShowKids] = useState(defaultShowKidsStatus);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadComment = () => {
    setIsLoaded(false);
    api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
      setData(resp.data);
      //применил данную библиотеку для страховки от вредоносного кода в тексте комментариев
      setSanitizedComment(DOMPurify.sanitize(resp.data?.text));
      setDate(new Date(resp.data.time * DATE_MULTIPLIER).toLocaleTimeString());
      setIsLoaded(true);
    });
  };

  const handleClick = () => {
    setIsShowKids(true);
  };

  useEffect(() => {
    loadComment();
  }, []);

  useEffect(() => {
    if (isUpdateButtonClick) {
      loadComment();
      onSetIsUpdateButtonClick(false);
      setIsShowKids(false);
    }
  }, [isUpdateButtonClick]);

  return (
    <Container data-testid="comment-item">
      {isLoaded ? (
        <Comment onClick={handleClick}>
          <Comment.Content>
            <Comment.Author>{data?.by}</Comment.Author>
            <Comment.Metadata>
              <div>{date}</div>
            </Comment.Metadata>
            <Comment.Text
              dangerouslySetInnerHTML={{ __html: `${sanitizedComment}` }}
            ></Comment.Text>
            {isShowKids && data?.kids && (
              <Comment.Group threaded>
                {data?.kids &&
                  data?.kids.map((id) => {
                    return (
                      <CommentItem
                        id={id}
                        key={id}
                        defaultShowKidsStatus={false}
                        isUpdateButtonClick={isUpdateButtonClick}
                        onSetIsUpdateButtonClick={onSetIsUpdateButtonClick}
                      />
                    );
                  })}
              </Comment.Group>
            )}
          </Comment.Content>
        </Comment>
      ) : (
        <NewPlaceholder />
      )}
    </Container>
  );
}

export default CommentItem;

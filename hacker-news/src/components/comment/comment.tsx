import { CommentType } from '../../types/news';
import { APIRoute } from '../../const';
import { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import DOMPurify from 'dompurify';
import NewPlaceholder from '../item-placeholder/item-placeholder';
import { AxiosInstance } from 'axios';

type CommentProps = {
  id: number;
  api: AxiosInstance;
  defaultShowKidsStatus: boolean;
  isUpdateButtonClick: boolean;
  onSetIsUpdateButtonClick: (value: boolean) => void;
};

function Comment({
  id,
  api,
  defaultShowKidsStatus,
  isUpdateButtonClick,
  onSetIsUpdateButtonClick,
}: CommentProps) {
  const [data, setData] = useState<CommentType>();
  const [sanitizedComment, setSanitizedComment] = useState<string>();
  const [isShowKids, setIsShowKids] = useState(defaultShowKidsStatus);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadComment = () => {
    setIsLoaded(false);
    api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
      setData(resp.data);
      //применил данную библиотеку для страховки от вредоносного кода в тексте комментариев
      setSanitizedComment(DOMPurify.sanitize(resp.data?.text));
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
    <>
      {isLoaded ? (
        <List.Item onClick={handleClick}>
          <List.Header as="h3">{data?.by}</List.Header>
          <List.Description
            as="p"
            dangerouslySetInnerHTML={{ __html: `${sanitizedComment}` }}
          ></List.Description>
          {isShowKids && data?.kids && (
            <List.List>
              {data?.kids &&
                data?.kids.map((id) => {
                  return (
                    <Comment
                      id={id}
                      key={id}
                      api={api}
                      defaultShowKidsStatus={true}
                      isUpdateButtonClick={isUpdateButtonClick}
                      onSetIsUpdateButtonClick={onSetIsUpdateButtonClick}
                    />
                  );
                })}
            </List.List>
          )}
        </List.Item>
      ) : (
        <NewPlaceholder />
      )}
    </>
  );
}

export default Comment;

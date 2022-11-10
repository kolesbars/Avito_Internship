import { CommentType } from '../../types/news'
import { APIRoute} from '../../const';
import { useState, useEffect} from 'react';
import {List} from 'semantic-ui-react'
import { api } from '../../services/api';
import DOMPurify from 'dompurify'
import NewPlaceholder from '../item-placeholder/item-placeholder';

type CommentProps = {
    id: number,
    defaultCommentLoadStatus: boolean,
    isUpdateButtonClick: boolean,
    onSetIsUpdateButtonClick: (value: boolean) => void
}

function Comment({id, defaultCommentLoadStatus, isUpdateButtonClick, onSetIsUpdateButtonClick}: CommentProps) {

    const [data, setData] = useState<CommentType>()
    const [sanitizedComment, setSanitizedComment] = useState<string>()
    const [isCommentClick, setIsCommentClick] = useState(defaultCommentLoadStatus)
    const [isLoaded, setIsLoaded] = useState(false)

    const loadComment = () => {
        setIsLoaded(false)
        api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
            setData(resp.data)
            //применил данную библиотеку для страховки от вредоносного кода в тексте комментариев
            setSanitizedComment(DOMPurify.sanitize(resp.data?.text))
            setIsLoaded(true)

        })
    }

    const handleClick = () => {
        setIsCommentClick(true)
    }

    useEffect(() => {
        loadComment()
    }, [])

    useEffect(() => {
        if (isUpdateButtonClick) {
            loadComment()
            onSetIsUpdateButtonClick(false)
            setIsCommentClick(false)
        }
    }, [isUpdateButtonClick])

    return (
        <>
            {isLoaded ?
            <List.Item onClick={handleClick}>
                <List.Header as='h3'>{data?.by}</List.Header>
                <List.Description as='p' dangerouslySetInnerHTML={{__html: `${sanitizedComment}`}}></List.Description>
                {isCommentClick && data?.kids &&
                <List.List>
                    {data?.kids && data?.kids.map((id) => {
                        return <Comment
                                    id={id}
                                    key={id}
                                    defaultCommentLoadStatus={true}
                                    isUpdateButtonClick={isUpdateButtonClick}
                                    onSetIsUpdateButtonClick={onSetIsUpdateButtonClick}
                                />
                    })}
                </List.List>}
            </List.Item> :
            <NewPlaceholder/>
            }
        </>
        
    )
}

export default Comment;


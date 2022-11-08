import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { useState, useEffect } from 'react';
import { CommentType } from '../../types/news';
import {List} from 'semantic-ui-react'

type CommentsProps = {
    kids: number[],
    api: AxiosInstance
}

function Comments({kids, api}: CommentsProps) {

    const [comments, setComments] = useState<CommentType[]>();

    const loadComments = (id: number) => {
        if(comments) {
            api.get(`/${APIRoute.Item}/${id}.json`).then((resp) => {
                console.log(resp.data)
            setComments([...comments, resp.data])
        })}
}
        
    useEffect(() => {
        kids.forEach((kid) => {
            loadComments(kid)
        })
        console.log(comments)
    }, [kids])

return (
        <List>
            
        </List>
    )
}

export default Comments;

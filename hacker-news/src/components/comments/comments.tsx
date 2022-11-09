import { AxiosInstance } from 'axios';
import {List, Button, Header, Container, Loader} from 'semantic-ui-react'
import { useState } from 'react';
//import { debounce } from 'ts-debounce';
import Comment from '../comment/comment'

type CommentsProps = {
    kids: number[],
    api: AxiosInstance
}

function Comments({kids, api}: CommentsProps) {

    const [isUpdateButtonClick, setIsUpdateButtonClick] = useState(false)

    const handleUpdateButtonClock = () => {
        setIsUpdateButtonClick(true)
    }

return (
    <Container>
        <Header as='h2'>Comments:</Header>
        <Button onClick={handleUpdateButtonClock}>update comments</Button>
        <List bulleted>
            {kids ? kids.map((id) => {
                return <Comment
                            id={id}
                            key={id}
                            api={api}
                            defaultCommentLoadStatus={false}
                            isUpdateButtonClick={isUpdateButtonClick}
                            onSetIsUpdateButtonClick={setIsUpdateButtonClick}
                        />
            }) : 'комментов нет'}
        </List>
    </Container>

    )
}

export default Comments;

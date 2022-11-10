import {List, Button, Header, Container, Segment} from 'semantic-ui-react'
import { useState } from 'react';
import CommentItem from '../comment/comment'

type CommentsProps = {
    kids: number[],
    count: number,
}

function Comments({kids, count}: CommentsProps) {

    const [isUpdateButtonClick, setIsUpdateButtonClick] = useState(false)

    const handleUpdateButtonClock = () => {
        setIsUpdateButtonClick(true)
    }

return (
    <Container>
        <Header as='h2'>{`Comments(${count}):`}</Header>
        <Button onClick={handleUpdateButtonClock} color='black'>Обновить</Button>
        <Segment inverted>
            <List bulleted inverted>
                {kids ? kids.map((id) => {
                    return <CommentItem
                                id={id}
                                key={id}
                                defaultCommentLoadStatus={false}
                                isUpdateButtonClick={isUpdateButtonClick}
                                onSetIsUpdateButtonClick={setIsUpdateButtonClick}
                            />
                }) : 'Комментариев пока нет'}
            </List>
        </Segment>
    </Container>

    )
}

export default Comments;

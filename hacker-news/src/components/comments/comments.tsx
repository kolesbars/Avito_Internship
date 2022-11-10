import {List, Button, Header, Container} from 'semantic-ui-react'
import { useState } from 'react';
import Comment from '../comment/comment'

type CommentsProps = {
    kids: number[],
}

function Comments({kids}: CommentsProps) {

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

import { useAppDispatch } from '../../hooks/hooks'
import { loadNewsID } from '../../store/api-action'
import {Header, Button, Container} from 'semantic-ui-react'


function HeaderContainer () {
    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        dispatch(loadNewsID())
    }

return (
    <Container>
        <Header as="h1">Hacker news</Header>
        <Button onClick={handleClickButton} floated='right'>Обновить</Button>
    </Container>
)
}

export default HeaderContainer;
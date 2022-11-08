import { useAppDispatch } from '../../hooks/hooks'
import { loadNewsID } from '../../store/api-action'
import {Header, Button} from 'semantic-ui-react'


function HeaderContainer () {
    const dispatch = useAppDispatch();

    const handleClickButton = () => {
        dispatch(loadNewsID())
    }

return (
    <>
        <Header as="h1">Hacker news</Header>
        <Button onClick={handleClickButton}>Обновить</Button>
    </>
)
}

export default HeaderContainer;
import { Link } from 'react-router-dom'
import { AppRoute } from '../../const'
import {Container, Header, Button} from 'semantic-ui-react'

function NotFoundPage () {
    return (
        <Container>
            <Header as='h1'>Oops!</Header>
            <Header as='h2'>404 - the page can not be found</Header>
            <Button as={Link} to={AppRoute.Main}>Go home</Button>
        </Container>
    )
}

export default NotFoundPage;

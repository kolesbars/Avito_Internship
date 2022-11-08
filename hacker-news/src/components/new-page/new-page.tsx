import { useAppSelector } from '../../hooks/hooks'
import { getCurrentNewData } from '../../store/news-data/selectors'
import { Link } from 'react-router-dom';
import Comments from '../comments/comments';
import { AxiosInstance } from 'axios';
import {Container, Header, Button} from 'semantic-ui-react'

type NewPageProps = {
    api: AxiosInstance,
}

function NewPage({api}: NewPageProps) {
    const data = useAppSelector(getCurrentNewData);
    const {by, time, title, descendants, kids, url} = data;

    return (
        <Container>
            <Header>{title}</Header>
            <Button as='a' to={url}>{url}</Button>
            <Button as={Link} to='/'>'go back'</Button>
            <Container>{`author: ${by}, date: ${new Date(time).toLocaleDateString()}, comments ${descendants}`}</Container>
            <Container>
                <Comments kids={kids} api={api}></Comments>
            </Container>
        </Container>
    )
}

export default NewPage
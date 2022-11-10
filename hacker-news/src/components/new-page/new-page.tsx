import { useAppSelector } from '../../hooks/hooks'
import { getCurrentNewData } from '../../store/news-data/selectors'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewType } from '../../types/news';
import { APIRoute, AppRoute} from '../../const';
import { api } from '../../services/api';
import {Container, Header, Button} from 'semantic-ui-react'
import Comments from '../comments/comments';


function NewPage() {
    const data = useAppSelector(getCurrentNewData);

    const [currentData, setCurentData] = useState<NewType>(data)

    const {by, time, title, descendants, kids, url} = currentData;

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
            setCurentData(resp.data)
        })
    }, [id])

    return (
        <Container>
            <Header as='h1' target='_blank'>{title}</Header>
            <Button as='a' href={url}>{url}</Button>
            <Button as={Link} to={AppRoute.Main}>go back</Button>
            <Container as='p'>{`author: ${by}, date: ${new Date(time).toLocaleDateString()}, comments ${descendants}`}</Container>
            <Container>
                <Comments kids={kids}></Comments>
            </Container>
        </Container>
    )
}

export default NewPage
import { useAppSelector } from '../../hooks/hooks'
import { getCurrentNewData } from '../../store/news-data/selectors'
import { Link } from 'react-router-dom';
import Comments from '../comments/comments';
import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewType } from '../../types/news';
import { APIRoute} from '../../const';
import {Container, Header, Button} from 'semantic-ui-react'

type NewPageProps = {
    api: AxiosInstance,
}

function NewPage({api}: NewPageProps) {
    const data = useAppSelector(getCurrentNewData);

    const [currentData, setCurentData] = useState<NewType>(data)

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        api.get(`${APIRoute.Item}/${+id}.json`).then((resp) => {
            setCurentData(resp.data)
        })
    }, [id])

        const {by, time, title, descendants, kids, url} = currentData;

    return (
        <Container>
            <Header as='h1' target='_blank'>{title}</Header>
            <Button as='a' href={url}>{url}</Button>
            <Button as={Link} to='/'>go back</Button>
            <Container>{`author: ${by}, date: ${new Date(time).toLocaleDateString()}, comments ${descendants}`}</Container>
            <Container>
                <Comments kids={kids} api={api}></Comments>
            </Container>
        </Container>
    )
}

export default NewPage
import { useAppSelector } from '../../hooks/hooks'
import { getCurrentNewData } from '../../store/news-data/selectors'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewType } from '../../types/news';
import { APIRoute, AppRoute, DATE_MULTIPLIER} from '../../const';
import { api } from '../../services/api';
import {Container, Header, Loader, Button, Dimmer} from 'semantic-ui-react'
import Comments from '../comments/comments';


function NewPage() {
    const data = useAppSelector(getCurrentNewData);

    const [currentData, setCurentData] = useState<NewType>(data)
    const [isLoaded, setIsLoaded] = useState(false)

    const {by, time, title, descendants, kids, url} = currentData;

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        setIsLoaded(false)
        api.get(`${APIRoute.Item}/${id}.json`).then((resp) => {
            setCurentData(resp.data)
            setIsLoaded(true)
        })
    }, [id])

    return (
        <>
            {isLoaded ? 
            <Container>
                <Header as='h1' textAlign='center'>{title}</Header>
                <Container as='h2' textAlign='center'>
                {`author: ${by}, date: ${new Date(time * DATE_MULTIPLIER)
                    .toLocaleDateString()}`}
                </Container>
                <Container textAlign='center'>
                    {url && <Button as='a' href={url} target='_blank' color='black'>Перейти на страницу новости</Button>}
                    <Button as={Link} to={AppRoute.Main} color='black'S>Вернуться к списку новстей</Button>
                </Container>
                <Container>
                    <Comments kids={kids} count={descendants}></Comments>
                </Container>
            </Container> :
            <Dimmer active inverted>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
            }
        </>
    )
}

export default NewPage
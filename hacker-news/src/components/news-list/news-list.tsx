import {List, Segment, Container} from 'semantic-ui-react'
import { AxiosInstance } from 'axios';
import New from '../new/new';
import { useAppSelector } from '../../hooks/hooks';
import { getNewsIDArr } from '../../store/news-data/selectors';
import { getLoadedStatus } from '../../store/news-data/selectors';
import NewPlaceholder from '../new-placeholder/new-placeholder'


type NewsListProps = {
    api: AxiosInstance
}
function NewsList({api}: NewsListProps) {

    const newsIdArr = useAppSelector(getNewsIDArr)
    const loadedStatus = useAppSelector(getLoadedStatus)

    return (
        <Container>
            <Segment inverted>
            <List bulleted celled divided inverted animated>
                {newsIdArr.map((el) => {
                    if (loadedStatus) {
                        return <New newID={el} api={api} key={el}/>
                    }
                    return <NewPlaceholder key={el}/>
                })}
            </List>
        </Segment>
        </Container>
        )
}

export default NewsList;
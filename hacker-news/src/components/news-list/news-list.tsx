import {List, Segment, Container} from 'semantic-ui-react'
import { useAppSelector } from '../../hooks/hooks';
import { getNewsIDArr } from '../../store/news-data/selectors';
import { getLoadedStatus } from '../../store/news-data/selectors';
import NewPlaceholder from '../item-placeholder/item-placeholder'
import New from '../new/new';

function NewsList() {

    const newsIdArr = useAppSelector(getNewsIDArr)
    const loadedStatus = useAppSelector(getLoadedStatus)

    return (
        <Container>
            <Segment inverted>
            <List bulleted celled divided inverted animated>
                {newsIdArr.map((el) => {
                    if (loadedStatus) {
                        return <New newID={el} key={el}/>
                    }
                    return <NewPlaceholder key={el}/>
                })}
            </List>
        </Segment>
        </Container>
        )
}

export default NewsList;
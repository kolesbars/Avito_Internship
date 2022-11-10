import {List, Segment, Container, Dimmer, Loader} from 'semantic-ui-react'
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
            <List bulleted celled divided inverted selection>
                {newsIdArr.map((el) => {
                    if (loadedStatus) {
                        return <New newID={el} key={el}/>
                    }
                    return  <Dimmer active inverted key={el}>
                                <Loader size='large'>Loading</Loader>
                            </Dimmer>
                })}
            </List>
        </Segment>
        </Container>
        )
}

export default NewsList;
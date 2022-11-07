import {List, Segment} from 'semantic-ui-react'
import { AxiosInstance } from 'axios';
import New from '../new/new';
import NewPlaceholder from '../new-placeholder/new-placeholder'


type NewsListProps = {
    arr: number[],
    api: AxiosInstance
}
function NewsList({arr, api}: NewsListProps) {
    return (
        <Segment inverted>
            <List   bulleted celled divided inverted animated>
                {arr.map((el) => {
                    return <New newID={el} api={api} key={el}/>
                })}
            </List>
        </Segment>
        )
}

export default NewsList;
import {List} from 'semantic-ui-react'
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { updateCurrentNewData } from '../../store/action';
import { APIRoute, AppRoute } from '../../const';
import { NewType } from '../../types/news';
import { useHistory } from 'react-router-dom';
import NewPlaceholder from '../item-placeholder/item-placeholder';

type NewProps = {
    newID: number,
}

function New ({newID}: NewProps) {

    const [newData, setNewData] = useState<NewType>()
    const [date, setDate] = useState<string>()
    
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handleNewClick = () => {
        if (newData) {
            dispatch(updateCurrentNewData(newData))
            history.push(`${AppRoute.New}/${newID}`)
        }
    }

    useEffect(() => {
        api.get(`${APIRoute.Item}/${newID}.json`).then((resp) => {
            setNewData(resp.data)
            if (resp.data.time) {
                setDate(new Date(resp.data.time).toLocaleDateString())
            }
        })
    }, [newID])


    return (
        <List.Item onClick={handleNewClick}>
            { newData ? 
            <List.Content floated='left'>
                <List.Content floated='left'>
                    <List.Header floated='left'>{newData?.title}</List.Header>
                    <List.Description floated='left'>
                        {`by ${newData?.by}, rating: ${newData?.score}, ${date}`}
                    </List.Description>
                </List.Content>
            </List.Content> :
            <NewPlaceholder/>
            }
      </List.Item>
    )
}

export default New;
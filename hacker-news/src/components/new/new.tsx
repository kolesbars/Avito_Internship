import {List} from 'semantic-ui-react'
import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { updateCurrentNewData } from '../../store/action';
import { APIRoute } from '../../const';
import { NewType } from '../../types/news';
import { useHistory } from 'react-router-dom';
import NewPlaceholder from '../new-placeholder/new-placeholder';

type NewProps = {
    newID: number,
    api: AxiosInstance,
}

function New ({newID, api}: NewProps) {

    const [newData, setNewData] = useState<NewType>()
    const [date, setDate] = useState<string>()
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handleNewClick = () => {
        if (newData) {
            dispatch(updateCurrentNewData(newData))
            history.push('/new')
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
                    <List.Description floated='left'>{`by ${newData?.by} rating: ${newData?.score}, ${date}`}</List.Description>
                </List.Content>
            </List.Content> :
            <NewPlaceholder/>
            }
      </List.Item>
    )
}

export default New;
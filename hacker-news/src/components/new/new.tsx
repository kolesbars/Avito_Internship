import {List} from 'semantic-ui-react'
import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';
import { APIRoute } from '../../const';
import { NewType } from '../../types/news';

type NewProps = {
    newID: number,
    api: AxiosInstance,
}

function New ({newID, api}: NewProps) {

    const [newData, setNewData] = useState<NewType>()
    const [date, setDate] = useState<string>()

    useEffect(() => {
        api.get(`${APIRoute.Item}/${newID}.json`).then((resp) => {
            setNewData(resp.data)
            if (resp.data.time) {
                setDate(new Date(resp.data.time).toLocaleDateString())
            }
        })
    }, [newID])


    return (
        <List.Item>
        <List.Content floated='left'>
            <List.Content floated='left'>
                <List.Header floated='left'>{newData?.title}</List.Header>
                <List.Description floated='left'>{`by ${newData?.by} rating: ${newData?.score}, ${date}`}</List.Description>
            </List.Content>
        </List.Content>
      </List.Item>
    )
}

export default New;
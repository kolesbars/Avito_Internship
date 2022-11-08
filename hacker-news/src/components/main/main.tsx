import { AxiosInstance } from 'axios';
import { useEffect} from 'react';
import { loadNewsID } from '../../store/api-action';
import { useAppDispatch } from '../../hooks/hooks';
import Header from '../header/header'
import NewsList from '../news-list/news-list';

type MainProps = {
    api: AxiosInstance,
}
function Main({api}: MainProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadNewsID())
      }, [])

    return (
        <>
        <Header/>
        <NewsList api={api}/>
        </>

    )
}

export default Main;

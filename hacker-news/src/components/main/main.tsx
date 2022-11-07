import { AxiosInstance } from 'axios';
import Header from '../header/header'
import NewsList from '../news-list/news-list';

type MainProps = {
    arr: number[],
    api: AxiosInstance,
    func: () => Promise<void>
}
function Main({arr, api, func}: MainProps) {
    return (
        <>
        <Header func={func}/>
        <NewsList arr={arr} api={api}/>
        </>

    )
}

export default Main;

import React from 'react';
import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';
import { APIRoute } from '../../const';
import NewsList from '../news-list/news-list';
import Main from '../main/main';
import './App.css';

type AppProps = {
  api: AxiosInstance
}

function App({api}: AppProps) {

  const [arr, setArr] = useState([]);

  const loadNews = (): Promise<void> => {
    return api.get(APIRoute.News).then((resp) => {
    setArr(resp.data.slice(0, 20))
  })}

  useEffect(() => {
    loadNews()
  }, [])

  useEffect(() => {
    setInterval(() => {
      loadNews()
    }, 100000)
  }, [arr])

  return (
      <Main arr={arr} api={api} func={loadNews}/>
  );
}

export default App;

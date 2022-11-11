export enum APIRoute {
  News = '/newstories.json',
  Item = '/item',
}

export enum AppRoute {
  Main = '/',
  News = '/news',
  NotFoundScreen = '/notfound'
}

export enum DefaultScrollPosition {
  Top = 0,
  Left = 0,
}

export const emptyNew = {
  by: '',
  descendants: 0,
  id: 0,
  kids: [0],
  score: 0,
  time: 0,
  title: '',
  type: '',
  url: '',
};

export const BACKEND_URL = 'https://hacker-news.firebaseio.com/v0';

export const REQUEST_TIMEOUT = 20000;

export const INTERVAL_DELAY = 60000;

export const INITIAL_VALUE_OF_NEWS_ARR = 0;

export const AMOUNT_OF_NEWS = 100;

export const DATE_MULTIPLIER = 1000;

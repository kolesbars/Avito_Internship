export enum HttpCode {
    ServerError = 500,
  }

export enum APIRoute {
  News = '/newstories.json',
  Item = '/item'
}

export const emptyNew = {
  "by" : '',
  "descendants" : 0,
  "id" : 0,
  "kids" : [0],
  "score" : 0,
  "time" : 0,
  "title" : '',
  "type" : '',
  "url" : '',
}
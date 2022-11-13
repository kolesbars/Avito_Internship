import { updateNewsIDArr, setLoadedStatus } from '../action';
import { newsData } from './news-data';

describe('Reducer: NewsData', () => {
  it('without additional parametrs should return initial state', () => {
    expect(newsData(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      isLoaded: false,
      newsIDArr: [],
    });
  });

  it('should update news id array', () => {
    const state = {
      isLoaded: false,
      newsIDArr: [],
    };
    const data = [1, 2, 3, 4, 5];
    expect(newsData(state, updateNewsIDArr(data))).toEqual({
      isLoaded: false,
      newsIDArr: [1, 2, 3, 4, 5],
    });
  });

  it('should set the loaded status true', () => {
    const state = {
      isLoaded: false,
      newsIDArr: [],
    };
    const data = true;
    expect(newsData(state, setLoadedStatus(data))).toEqual({
      isLoaded: true,
      newsIDArr: [],
    });
  });
});

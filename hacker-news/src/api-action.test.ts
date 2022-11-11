import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { createAPI } from './services/api';
import { APIRoute} from './const';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from './types/state';
import { loadNewsID } from './store/api-action';
import { updateNewsIDArr, setLoadedStatus } from './store/action';

describe('Async action', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should load news id arr', async () => {
    const store = mockStore();
    const mockIDArr = [1,2,3,4,5];

    mockAPI
      .onGet(APIRoute.News)
      .reply(200, mockIDArr);

    await store.dispatch(loadNewsID());

    expect(store.getActions()).toEqual([
      setLoadedStatus(true),
      updateNewsIDArr(mockIDArr),
    ]);
  });
});
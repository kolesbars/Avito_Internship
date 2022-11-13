import Comments from './comments';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  isLoaded: false,
  newsIDArr: [1],
});

const mockCount = 1;
const mockKids = [1, 2, 3, 4, 5];

describe('Component: Comments', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Comments count={mockCount} kids={mockKids} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('comments')).toBeInTheDocument();
  });
});

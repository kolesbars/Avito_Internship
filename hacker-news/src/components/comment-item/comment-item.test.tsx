import CommentItem from './comment-item';
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

const mockId = 1;
const cb = jest.fn();

describe('Component: CommentItem', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CommentItem
            id={mockId}
            defaultShowKidsStatus={true}
            isUpdateButtonClick={true}
            onSetIsUpdateButtonClick={cb}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('comment-item')).toBeInTheDocument();
  });
});

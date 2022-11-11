import NewsList from './news-list';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import { createAPI } from '../../services/api';

const api = createAPI();

describe('Component: NewsItem', () => {
  it('should render correctly', () => {

    render(
        <BrowserRouter>
          <NewsList api={api}/>
        </BrowserRouter>
    );

    expect(screen.getByTestId('news-item')).toBeInTheDocument();
    expect(screen.getByTestId('news-list')).toBeInTheDocument();
  });
});
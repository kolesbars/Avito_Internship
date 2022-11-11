import NewsItem from './news-item';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

const mockId = 1;

describe('Component: NewsItem', () => {
  it('should render correctly', () => {

    render(
        <BrowserRouter>
          <NewsItem newsItemID={mockId} />
        </BrowserRouter>
    );

    expect(screen.getByTestId('news-item')).toBeInTheDocument();
  });
});
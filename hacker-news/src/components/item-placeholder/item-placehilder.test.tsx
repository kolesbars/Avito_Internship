import ItemPlaceholder from './item-placeholder';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Component: ItemPlaceholder', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <ItemPlaceholder />
      </BrowserRouter>
    );

    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
  });
});

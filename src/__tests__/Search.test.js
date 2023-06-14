import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from './../components/Search';

test('Search box rendered ', () => {
  render(<Search/>);
  const searchBox = screen.getByTestId('searchBox');
  expect(searchBox).toBeInTheDocument();
});


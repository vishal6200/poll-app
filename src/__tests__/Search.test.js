import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from './../components/Search';
import { MOCK_POLL } from './../constants/mock';

test('Search box rendered ', () => {
  render(<Search/>);
  const searchBox = screen.getByTestId('searchBox');
  expect(searchBox).toBeInTheDocument();
});
test('Search box value changed', () => {
    render(<Search posts={MOCK_POLL}/>);
    let demoText = "demoText"
    const searchField = screen.getByTestId('inputField');
    fireEvent.change(searchField,{target:{value:demoText}});
    expect(searchField.value).toBe(demoText);
  });


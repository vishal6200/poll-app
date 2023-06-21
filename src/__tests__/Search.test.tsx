import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('Search box rendered ', () => {
  render(<App/>);
  const searchBox = screen.getByTestId('searchBox');
  expect(searchBox).toBeInTheDocument();
});
test('Search box value changed', () => {
    render(<App/>);
    let demoText = "jameslk"
    const searchField:HTMLInputElement = screen.getByTestId('inputField');
    fireEvent.change(searchField,{target:{value:demoText}});
    expect(searchField.value).toBe(demoText);
  });


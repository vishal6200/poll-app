import { render, screen, waitFor } from '@testing-library/react';
import { MOCK_POLL, Mock_Data } from './../constants/mock';
import Table from './../components/Table';
 
// global.fetch = () => Promise.resolve({ json: () => Promise.resolve(MOCK_POLL) }) as jest.Mock
// global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(Mock_Data),}),) as jest.Mock;
test('Table Mock Data Title Rendered', () => {
  render(<table><tbody><Table post={MOCK_POLL[0]}/></tbody></table>);
  const tableTitle = screen.getByTestId('data-title');
  expect(tableTitle.innerHTML).toBe("Hot Coffee Case")
});
test('Table Mock Data URL Rendered', () => {
    render(<table><tbody><Table post={MOCK_POLL[0]}/></tbody></table>);
    const tableURL:HTMLAnchorElement = screen.getByTestId('data-url');
    expect(tableURL.href).toBe("https://en.wikipedia.org/wiki/Liebeck_v._McDonald%27s_Restaurants")
  });
 


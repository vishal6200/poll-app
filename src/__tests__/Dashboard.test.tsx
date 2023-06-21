import { render, screen, waitFor} from '@testing-library/react';
import Dashboard from './../components/Dashboard';
import { MOCK_POLL } from './../constants/mock';
 // mock fetch 
 global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_POLL),
  }),
) as jest.Mock;

test('Dashboard table rendered', () => {
  render(<Dashboard/>);
  const table = screen.getByTestId('table');
  expect(table).toBeInTheDocument();
});
test('Dashboard table mock poll data Title rendered', async() => {
    render(<Dashboard/>);
    let tableDataTitle =  await  waitFor(()=>expect(screen.findByText(MOCK_POLL[0].title)));  
     expect(tableDataTitle).toBeInTheDocument
  });

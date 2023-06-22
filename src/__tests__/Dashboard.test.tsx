import { act, render, screen, waitFor} from '@testing-library/react';
import Dashboard from './../components/Dashboard';
import { MOCK_POLL, Mock_Data } from './../constants/mock';


let fetchMock:any;
beforeEach(() => {
  fetchMock= jest.spyOn(global, "fetch").mockImplementation( 
        jest.fn(
          () => Promise.resolve({ json: () => Promise.resolve(Mock_Data), 
        }), 
      ) as jest.Mock ) 
    })

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Dashboard Component',()=>{

test('Fetch has been called', async() => {
  await fetchMock();
  expect(fetchMock).toHaveBeenCalled();
});
  test('Dashboard table rendered', () => {
  render(<Dashboard/>);
  const table = screen.getByTestId('table');
  expect(table).toBeInTheDocument();
});
test('Dashboard table mock poll data Title rendered', async() => {
  await fetchMock();
  render(<Dashboard/>);
    let tableDataTitle =  await  waitFor(()=>expect(screen.findByText(MOCK_POLL[0].title)));  
     expect(tableDataTitle).toBeInTheDocument
  });

})

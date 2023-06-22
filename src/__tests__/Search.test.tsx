import { fireEvent, render, screen, waitFor,act } from '@testing-library/react';
import App from '../App';
import { MOCK_POLL, Mock_Data } from '../constants/mock';
import Dashboard from '../components/Dashboard';


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

test('Search box rendered ', () => {
  render(<App/>);
  const searchBox = screen.getByTestId('searchBox');
  expect(searchBox).toBeInTheDocument();
});
test('Search box value changed', async() => {
    render(<App/>);
  
    let demoText = "jameslk"
    const searchField:HTMLInputElement = screen.getByTestId('inputField');
      fireEvent.change(searchField,{target:{value:demoText}});
    await waitFor(()=>expect(searchField.value).toBe(demoText));
  });
  test('Searched item rendered', async() => {
  render(<Dashboard/>);
    await fetchMock();
    let demoText = "Sohen"
    const searchField:HTMLInputElement = screen.getByTestId('inputField');
    fireEvent.change(searchField,{target:{value:demoText}});
   await waitFor(()=>expect(screen.findByText(demoText)));
   let dataTableTitle = screen.getAllByTestId('data-title');
   expect(dataTableTitle).not.toHaveLength(0);
  
  });  


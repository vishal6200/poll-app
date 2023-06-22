import { act, fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import Pagination from './../components/Pagination';
import App from '../App';
import {Mock_Data } from '../constants/mock';
import Dashboard from '../components/Dashboard';

// // beforeAll(()=>{

// //   global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(Mock_Data)})) as jest.Mock;
// // })
// let fetchMock:any;
// beforeAll(async()=>{
//  fetchMock =  jest.spyOn(global, "fetch").mockImplementation( 
//     jest.fn(
//       () => Promise.resolve({ json: () => Promise.resolve(Mock_Data), 
//     }), 
//   ) as jest.Mock ) 
// })
// test('Fetch has been called', async() => {
//   await fetchMock()
//   expect(fetchMock).toHaveBeenCalled();
// });

test('Pagination rendered ', async() => {
  render(<Dashboard/>);
  const pagination = screen.getByTestId('paginationTest');
  expect(pagination).toBeInTheDocument();
});
test('Pagination label rendered', async() => {
    render(<Dashboard/>);
    const paginationLabel = screen.getByTestId('paginationLabel');
    expect(paginationLabel).toBeInTheDocument();
  });
  test('Pagination initial label value rendered', async() => {
    render(<Dashboard/>);
    const pagination = screen.getByTestId('paginationLabel');
    expect(pagination.innerHTML).toBe("0/50");
  });
  test('Pagination Changed pervious and next  value rendered',async() => {
   const container:any = render(<Dashboard/>);
  //  await waitFor(()=>fetchMock());
   const paginationLabel =screen.getByTestId('paginationLabel');
   const increment =  screen.getByTestId('paginationNext');
   const decrement = screen.getByTestId('paginationPrev');
   expect(paginationLabel.textContent).toBe("0/50");
    fireEvent.click(increment);
  await waitFor(()=>expect(paginationLabel.textContent).toBe("1/50"));
    fireEvent.click(decrement)
 
  await waitFor(()=>expect(paginationLabel.textContent).toBe("0/50"));
  });


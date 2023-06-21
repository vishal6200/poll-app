import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import Pagination from './../components/Pagination';
import React from 'react';
import App from '../App';
import Dashboard from '../components/Dashboard';
import { MOCK_POLL } from '../constants/mock';
import { IPosts } from '../constants/Interface';
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_POLL),
  }),
) as jest.Mock;
test('Pagination rendered ', () => {
  render(<Pagination page={0} setPage={()=>{}} fetchNextData={()=>{}}/>);
  const pagination = screen.getByTestId('paginationTest');
  expect(pagination).toBeInTheDocument();
});
test('Pagination label rendered', () => {
    render(<Pagination page={0} setPage={()=>{}} fetchNextData={()=>{}}/>);
    const paginationLabel = screen.getByTestId('paginationLabel');
    expect(paginationLabel).toBeInTheDocument();
  });
  test('Pagination initial label value rendered', () => {
    render(<Pagination page={0} setPage={()=>{}} fetchNextData={()=>{}}/>);
    const pagination = screen.getByTestId('paginationLabel');
    expect(pagination.innerHTML).toBe("0/50");
  });
  test('Pagination Changed label value rendered', () => {
    let demoPage = 2;
    render(<Pagination page={demoPage} setPage={()=>{}} fetchNextData={()=>{}}/>);
    const pagination = screen.getByTestId('paginationLabel');
    expect(pagination.innerHTML).toBe(demoPage+'/'+'50');
  });
  test('Pagination Changed pervious and next  value rendered',() => {
   const container:any = render(<App/>);
   const paginationLabel =screen.getByTestId('paginationLabel');
   const increment =  screen.getByTestId('paginationNext');
   const decrement = screen.getByTestId('paginationPrev');
   expect(paginationLabel.textContent).toBe("0/50");
  fireEvent.click(increment);
  expect(paginationLabel.textContent).toBe("1/50");
  fireEvent.click(decrement);
  expect(paginationLabel.textContent).toBe("0/50");
  });


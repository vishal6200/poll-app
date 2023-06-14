import { render, screen } from '@testing-library/react';
import Pagination from './../components/Pagination';

test('Pagination rendered ', () => {
  render(<Pagination/>);
  const pagination = screen.getByTestId('paginationTest');
  expect(pagination).toBeInTheDocument();
});
test('Pagination label rendered', () => {
    render(<Pagination/>);
    const paginationLabel = screen.getByTestId('paginationLabel');
    expect(paginationLabel).toBeInTheDocument();
  });
  test('Pagination initial label value rendered', () => {
    render(<Pagination page={0}/>);
    const pagination = screen.getByTestId('paginationLabel');
    expect(pagination.innerHTML).toBe("0/50");
  });
  test('Pagination Changed label value rendered', () => {
    let demoPage = 2;
    render(<Pagination page={demoPage}/>);
    const pagination = screen.getByTestId('paginationLabel');
    expect(pagination.innerHTML).toBe(demoPage+'/'+'50');
  });
